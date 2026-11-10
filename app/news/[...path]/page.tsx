import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import ArchiveView from '@/components/news/ArchiveView'
import SinglePost from '@/components/news/SinglePost'
import { decodeEntities, stripTags } from '@/lib/entities'
import { pageMetadata } from '@/lib/metadata'
import { loadArchive, pagedTitle, resolveNews } from '@/lib/news'
import { getCategories, getPostBySlug, getRecentSlugs, getWpRedirect, type WpCategory } from '@/lib/wp'

// Every page under /news/ is served from the static cache: listed params are built ahead of time,
// any other post/archive is generated on its first visit and then cached like the rest.
export const ensureStatic = 'navigation'

const decode = (s: string) => {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

// Next.js looks prebuilt pages up by the percent-encoded path (encodeURIComponent form), so
// non-ASCII slugs are passed in that form to be found on the first request.
const enc = (s: string) => encodeURIComponent(decode(s))

function categorySegments(cats: WpCategory[], cat: WpCategory): string[] {
  const out: string[] = []
  for (let c: WpCategory | undefined = cat; c; c = cats.find((x) => x.id === c!.parent)) out.unshift(enc(c.slug))
  return out
}

export async function generateStaticParams() {
  const [slugs, cats] = await Promise.all([getRecentSlugs(30), getCategories()])
  return [
    ...slugs.map((s) => ({ path: [enc(s)] })),
    ...cats.map((c) => ({ path: ['category', ...categorySegments(cats, c)] })),
    ...[2, 3].map((n) => ({ path: ['page', String(n)] })),
  ]
}

export async function generateMetadata({ params }: PageProps<'/news/[...path]'>): Promise<Metadata> {
  const { path } = await params
  const resolved = await resolveNews(path)
  if (!resolved || 'redirect' in resolved) return {}
  const { route } = resolved
  if (route.kind === 'post') {
    const post = await getPostBySlug(route.slug)
    if (!post) return {}
    const pathname = new URL(post.link).pathname
    // the theme uses the excerpt without whitespace as description
    const description = decodeEntities(stripTags(post.excerpt)).replace(/[ \t\n\r\f\v]+/g, '')
    return pageMetadata({ title: decodeEntities(post.title), path: pathname, description })
  }
  const data = await loadArchive(route)
  const base = route.page > 1 ? `${data.base}page/${route.page}/` : data.base
  return pageMetadata({
    title: pagedTitle(data.title, route.page),
    path: base,
    canonical: route.kind === 'index' ? '/news/' : null,
  })
}

export default async function NewsPathPage({ params }: PageProps<'/news/[...path]'>) {
  const { path } = await params
  const resolved = await resolveNews(path)
  if (resolved && 'redirect' in resolved) permanentRedirect(resolved.redirect)
  if (!resolved || (resolved.route.kind === 'post' && !(await getPostBySlug(resolved.route.slug)))) {
    // nothing here: follow WordPress if it redirects the URL (old or truncated slug)
    const to = await getWpRedirect(`/news/${path.map(enc).join('/')}/`)
    if (to) permanentRedirect(to)
    notFound()
  }
  const { route } = resolved
  if (route.kind === 'post') return <SinglePost slug={route.slug} />
  return <ArchiveView route={route} />
}
