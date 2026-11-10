import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Hero, { HERO } from '@/components/layout/Hero'
import SiteShell from '@/components/layout/SiteShell'
import Pagination from '@/components/news/Pagination'
import PostArticle from '@/components/news/PostArticle'
import Sidebar from '@/components/news/Sidebar'
import { pageMetadata } from '@/lib/metadata'
import { pagedTitle } from '@/lib/news'
import { getCategories, getPostList } from '@/lib/wp'

/*
 * search.php. WordPress serves search at "/?s=…" and "/page/N/?s=…"; proxy.ts rewrites those
 * URLs to this route (with "paged" for N), so the public URLs stay identical.
 */
type SP = Record<string, string | string[] | undefined>
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)

function readParams(sp: SP) {
  const q = first(sp.s) ?? ''
  const page = Math.max(1, parseInt(first(sp.paged) ?? '1', 10) || 1)
  return { q, page }
}

export async function generateMetadata({ searchParams }: PageProps<'/search'>): Promise<Metadata> {
  const { q, page } = readParams(await searchParams)
  return pageMetadata({
    title: pagedTitle(`“${q}” の検索結果`, page),
    path: `/${page > 1 ? `page/${page}/` : ''}?s=${encodeURIComponent(q)}`,
    canonical: null,
    robots: 'noindex, follow, max-image-preview:large',
  })
}

async function SearchResults({ searchParams }: { searchParams: Promise<SP> }) {
  const { q, page } = readParams(await searchParams)
  const [data, cats] = await Promise.all([getPostList({ page, search: q || undefined }), getCategories()])
  if (page > 1 && !data.posts.length) notFound()
  const url = (n: number) => `/${n > 1 ? `page/${n}/` : ''}?s=${encodeURIComponent(q)}`
  return (
    <SiteShell bodyClass="l-body--2col" hero={<Hero label={HERO.news} />} side={<Sidebar query={q} />} pageTop>
      <main>
        <div className="c-container c-container--just">
          <header className="">
            <h2>{`“${q}”の検索結果（${data.total}件）`}</h2>
          </header>
          <div className="u-mt-20">
            {data.posts.length ? data.posts.map((post) => <PostArticle key={post.id} post={post} cats={cats} />) : <p>関連する記事が見つかりませんでした</p>}
          </div>
        </div>
        <Pagination current={page} total={data.totalPages} url={url} />
      </main>
    </SiteShell>
  )
}

export default function SearchPage({ searchParams }: PageProps<'/search'>) {
  return (
    <Suspense fallback={null}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  )
}
