import { cacheLife, cacheTag } from 'next/cache'
import { parseFragment, serializeOuter } from 'parse5'
import { POSTS_PER_PAGE, SITE_URL, WP_API, WP_URL } from './site'

/*
 * WordPress REST API client. Every exported function is cached with `use cache` so pages that use
 * it can be prerendered and revalidated in the background (hourly, or on demand via the `wp` tag).
 */

export type WpCategory = { id: number; name: string; slug: string; parent: number; count: number; link: string }
export type WpPost = {
  id: number
  date: string
  slug: string
  link: string
  title: string
  content: string
  excerpt: string
  categories: number[]
  sticky: boolean
}
export type WpPage = { id: number; slug: string; link: string; title: string; content: string }
export type PostPage = { posts: WpPost[]; total: number; totalPages: number }

type Rendered = { rendered: string }
type RawPost = Omit<WpPost, 'title' | 'content' | 'excerpt'> & { title: Rendered; content: Rendered; excerpt: Rendered }
type RawPage = { id: number; slug: string; link: string; title: Rendered; content: Rendered }

const POST_FIELDS = 'id,date,slug,link,title,content,excerpt,categories,sticky'
/** Page IDs on the WordPress side. */
export const WP_PAGE = { contact: 2176, about: 2196, recruit: 2201, privacy: 2207, thanks: 2224 } as const

type Query = Record<string, string | number | boolean | undefined>

async function wpGet<T>(path: string, query: Query = {}): Promise<{ data: T; total: number; totalPages: number }> {
  const url = new URL(WP_API + path)
  for (const [k, v] of Object.entries(query)) if (v !== undefined && v !== '') url.searchParams.set(k, String(v))
  const res = await fetch(url, { headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0 (compatible; ichijoya-next)' } })
  if (!res.ok) {
    // 400 = page number past the end, 404 = unknown item: both mean "nothing here".
    if (res.status === 400 || res.status === 404) return { data: [] as unknown as T, total: 0, totalPages: 0 }
    throw new Error(`WordPress API responded ${res.status} for ${url.pathname}${url.search}`)
  }
  return {
    data: (await res.json()) as T,
    total: Number(res.headers.get('x-wp-total') || 0),
    totalPages: Number(res.headers.get('x-wp-totalpages') || 0),
  }
}

const mapPost = (p: RawPost): WpPost => ({
  id: p.id,
  date: p.date,
  slug: p.slug,
  link: p.link,
  title: p.title.rendered,
  content: p.content.rendered,
  excerpt: p.excerpt.rendered,
  categories: p.categories,
  sticky: p.sticky,
})

// ---------------------------------------------------------------- categories

/** All categories in the site's custom term order (the order WordPress returns them in). */
export async function getCategories(): Promise<WpCategory[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-categories')
  const all: WpCategory[] = []
  for (let page = 1; ; page++) {
    const { data, totalPages } = await wpGet<WpCategory[]>('/categories', {
      per_page: 100,
      page,
      _fields: 'id,name,slug,parent,count,link',
    })
    all.push(...data)
    if (page >= totalPages) break
  }
  return all
}

export function descendantIds(cats: WpCategory[], id: number): number[] {
  const out: number[] = []
  const walk = (pid: number) => {
    for (const c of cats) if (c.parent === pid) { out.push(c.id); walk(c.id) }
  }
  walk(id)
  return out
}

/**
 * Post counts as wp_list_categories(pad_counts) prints them: the number of distinct published
 * posts in the category or any of its descendants.
 */
export async function getPaddedCounts(): Promise<Record<number, number>> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-categories', 'wp-posts')
  const cats = await getCategories()
  const entries = await Promise.all(
    cats.map(async (c) => {
      const kids = descendantIds(cats, c.id)
      if (!kids.length) return [c.id, c.count] as const
      const { total } = await wpGet<unknown[]>('/posts', { categories: [c.id, ...kids].join(','), per_page: 1, _fields: 'id' })
      return [c.id, total] as const
    }),
  )
  return Object.fromEntries(entries)
}

const safeDecode = (s: string) => {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

/**
 * Resolves /news/category/<parent>/<child>/ path segments to a category like WordPress'
 * get_category_by_path( $path, false ): the full hierarchy match wins, otherwise the first
 * category whose slug equals the last segment.
 */
export async function getCategoryByPath(segments: string[]): Promise<WpCategory | null> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-categories')
  const cats = await getCategories()
  const wanted = segments.map((s) => safeDecode(s).toLowerCase())
  const leaf = wanted[wanted.length - 1]
  const candidates = cats.filter((c) => safeDecode(c.slug).toLowerCase() === leaf)
  for (const c of candidates) {
    const chain: string[] = []
    for (let cur: WpCategory | undefined = c; cur; cur = cats.find((x) => x.id === cur!.parent)) chain.unshift(safeDecode(cur.slug).toLowerCase())
    if (chain.length === wanted.length && chain.every((s, i) => s === wanted[i])) return c
  }
  return candidates[0] ?? null
}

// ---------------------------------------------------------------- posts

type ListOptions = {
  page: number
  categories?: number[]
  search?: string
  perPage?: number
  stickyFirst?: boolean
  /** Exclusive local-time bounds ("YYYY-MM-DDTHH:mm:ss"), as used by date archives. */
  after?: string
  before?: string
}

/**
 * One page of posts, newest first. With `stickyFirst` the first page gets WordPress' sticky-post
 * treatment for blog-home queries: stickies found in the page move to the top, other stickies are
 * fetched and inserted after them.
 */
export async function getPostList(opts: ListOptions): Promise<PostPage> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-posts')
  const { data, total, totalPages } = await wpGet<RawPost[]>('/posts', {
    per_page: opts.perPage ?? POSTS_PER_PAGE,
    page: opts.page,
    categories: opts.categories?.join(','),
    search: opts.search,
    orderby: opts.search ? 'relevance' : undefined,
    after: opts.after,
    before: opts.before,
    _fields: POST_FIELDS,
  })
  let posts = data.map(mapPost)
  if (opts.stickyFirst && opts.page === 1) {
    const sticky = (await wpGet<RawPost[]>('/posts', { sticky: true, per_page: 100, _fields: POST_FIELDS })).data.map(mapPost)
    const stickyIds = new Set(sticky.map((p) => p.id))
    const moved = posts.filter((p) => stickyIds.has(p.id))
    const movedIds = new Set(moved.map((p) => p.id))
    posts = [...moved, ...sticky.filter((p) => !movedIds.has(p.id)), ...posts.filter((p) => !stickyIds.has(p.id))]
  }
  return { posts, total, totalPages }
}

export async function getPostBySlug(slug: string): Promise<WpPost | null> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-posts')
  const { data } = await wpGet<RawPost[]>('/posts', { slug: safeDecode(slug), _fields: POST_FIELDS })
  return data[0] ? mapPost(data[0]) : null
}

/**
 * Where WordPress sends a /news/ URL that resolves to nothing here: an old slug
 * (wp_old_slug_redirect) or a guess from the start of a slug (redirect_guess_404_permalink, e.g. a
 * truncated link). Only asked on the way to a 404.
 */
export async function getWpRedirect(path: string): Promise<string | null> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-posts')
  const res = await fetch(WP_URL + path, {
    method: 'HEAD',
    redirect: 'manual',
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ichijoya-next)' },
  }).catch(() => null)
  const location = res?.status === 301 ? res.headers.get('location') : null
  if (!location) return null
  const url = new URL(location, WP_URL)
  const ours = [new URL(WP_URL).host, new URL(SITE_URL).host].includes(url.host)
  return ours && url.pathname.startsWith('/news/') && url.pathname !== path ? url.pathname + url.search : null
}

/** Yearly post counts, newest year first (wp_get_archives type=yearly show_post_count). */
export async function getYearCounts(): Promise<{ year: number; count: number }[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-posts')
  const [newest, oldest] = await Promise.all([
    wpGet<{ date: string }[]>('/posts', { per_page: 1, _fields: 'date' }),
    wpGet<{ date: string }[]>('/posts', { per_page: 1, order: 'asc', _fields: 'date' }),
  ])
  if (!newest.data[0] || !oldest.data[0]) return []
  const last = Number(newest.data[0].date.slice(0, 4))
  const first = Number(oldest.data[0].date.slice(0, 4))
  const years = Array.from({ length: last - first + 1 }, (_, i) => last - i)
  const counts = await Promise.all(
    years.map(async (year) => {
      const { total } = await wpGet<unknown[]>('/posts', { ...yearRange(year), per_page: 1, _fields: 'id' })
      return { year, count: total }
    }),
  )
  return counts.filter((c) => c.count > 0)
}

const pad = (n: number) => String(n).padStart(2, '0')
/** Exclusive bounds for a year / month / day archive in site-local time. */
export function dateRange(year: number, month?: number, day?: number) {
  const start = new Date(Date.UTC(year, (month ?? 1) - 1, day ?? 1))
  const end = new Date(start)
  if (day) end.setUTCDate(end.getUTCDate() + 1)
  else if (month) end.setUTCMonth(end.getUTCMonth() + 1)
  else end.setUTCFullYear(end.getUTCFullYear() + 1)
  const fmt = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`
  return { after: fmt(new Date(start.getTime() - 1000)), before: fmt(end) }
}
const yearRange = (year: number) => dateRange(year)

/** Slugs of the newest posts (prerendered at build time; older posts are generated on first visit). */
export async function getRecentSlugs(limit = 30): Promise<string[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-posts')
  const { data } = await wpGet<{ slug: string }[]>('/posts', { per_page: limit, _fields: 'slug' })
  return data.map((p) => p.slug)
}

/** Every post permalink with its modification date (sitemap). */
export async function getAllPostLinks(): Promise<{ link: string; modified: string }[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-posts')
  const first = await wpGet<{ link: string; modified: string }[]>('/posts', { per_page: 100, page: 1, _fields: 'link,modified' })
  const rest = await Promise.all(
    Array.from({ length: Math.max(0, first.totalPages - 1) }, (_, i) =>
      wpGet<{ link: string; modified: string }[]>('/posts', { per_page: 100, page: i + 2, _fields: 'link,modified' }),
    ),
  )
  return [first, ...rest].flatMap((r) => r.data)
}

// ---------------------------------------------------------------- pages & widgets

export async function getPage(id: number): Promise<WpPage | null> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-pages')
  const { data } = await wpGet<RawPage | RawPage[]>(`/pages/${id}`, { _fields: 'id,slug,link,title,content' })
  if (!data || Array.isArray(data)) return null
  return { id: data.id, slug: data.slug, link: data.link, title: data.title.rendered, content: data.content.rendered }
}

type P5Node = { nodeName: string; attrs?: { name: string; value: string }[]; childNodes?: P5Node[] }

/**
 * The "Widget for Google Reviews" blocks rendered by WordPress, keyed by widget (feed) id.
 * They are taken from the about page's REST content, which embeds the same shortcodes the
 * page-about.php template prints, so the reviews stay as current as on the WordPress site.
 */
export async function getGoogleReviewWidgets(): Promise<Record<string, string>> {
  'use cache'
  cacheLife('hours')
  cacheTag('wp', 'wp-pages')
  const page = await getPage(WP_PAGE.about)
  if (!page) return {}
  const out: Record<string, string> = {}
  const walk = (n: P5Node) => {
    const cls = n.attrs?.find((a) => a.name === 'class')?.value.split(/\s+/) ?? []
    const id = n.attrs?.find((a) => a.name === 'data-id')?.value
    if (cls.includes('wp-gr') && id) {
      out[id] = serializeOuter(n as never)
      return
    }
    n.childNodes?.forEach(walk)
  }
  walk(parseFragment(page.content) as unknown as P5Node)
  return out
}
