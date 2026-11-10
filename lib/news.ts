import { decodeEntities } from './entities'
import { dateRange, descendantIds, getCategories, getCategoryByPath, getPostList, type PostPage, type WpCategory } from './wp'

/*
 * URL scheme of the WordPress "news" section (permalink base /news/):
 *   /news/                          posts index        /news/page/N/
 *   /news/<slug>/                   single post
 *   /news/category/<a>/<b>/         category archive   …/page/N/
 *   /news/2026/  /news/2026/10/  /news/2026/10/15/   date archives   …/page/N/
 */
export type NewsRoute =
  | { kind: 'index'; page: number }
  | { kind: 'post'; slug: string }
  | { kind: 'category'; cat: WpCategory; page: number }
  | { kind: 'date'; year: number; month?: number; day?: number; page: number }

const safeDecode = (s: string) => {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

/**
 * Splits a trailing "page/N" off the path. `page` is null for "page/1" (redirected to the first
 * page); "page/0" shows the first page without a redirect, as on WordPress.
 */
function splitPage(segs: string[]): { rest: string[]; page: number | null; explicit: boolean } | undefined {
  if (segs.length >= 2 && segs[segs.length - 2] === 'page') {
    const n = segs[segs.length - 1]
    if (!/^\d+$/.test(n)) return undefined
    const num = Number(n)
    return { rest: segs.slice(0, -2), page: num === 1 ? null : Math.max(num, 1), explicit: true }
  }
  return { rest: segs, page: 1, explicit: false }
}

export type Resolved = { route: NewsRoute } | { redirect: string } | null

export async function resolveNews(segments: string[]): Promise<Resolved> {
  const segs = segments.map(safeDecode).filter(Boolean)
  const sp = splitPage(segs)
  if (!sp) return null
  const { rest, page, explicit } = sp
  // WordPress redirects ".../page/1/" to the archive's first page (proxy.ts answers this first)
  if (page === null) return { redirect: `/news/${rest.map(encodeURIComponent).join('/')}${rest.length ? '/' : ''}` }

  if (rest.length === 0) return explicit ? { route: { kind: 'index', page } } : null
  if (rest[0] === 'category') {
    if (rest.length < 2) return null
    const cat = await getCategoryByPath(rest.slice(1))
    return cat ? { route: { kind: 'category', cat, page } } : null
  }
  if (/^\d{4}$/.test(rest[0])) {
    const [y, m, d] = rest
    if (rest.length > 3 || (m && !/^\d{1,2}$/.test(m)) || (d && !/^\d{1,2}$/.test(d))) return null
    const year = Number(y)
    // WordPress ignores a 0 month/day and redirects impossible dates to the enclosing archive
    let month = m ? Number(m) || undefined : undefined
    let day = d && month ? Number(d) || undefined : undefined
    if (month !== undefined && month > 12) return { redirect: `/news/${year}/` }
    if (month !== undefined && day !== undefined && day > new Date(Date.UTC(year, month, 0)).getUTCDate()) {
      return { redirect: `/news/${year}/${String(month).padStart(2, '0')}/` }
    }
    if (!month) day = undefined
    if (!m) month = undefined
    return { route: { kind: 'date', year, month, day, page } }
  }
  if (rest.length === 1 && page === 1) return { route: { kind: 'post', slug: rest[0] } }
  return null
}

export type ArchiveData = PostPage & { cats: WpCategory[]; heading: string | null; title: string; base: string }

/** Posts, heading and pagination base for a list route. */
export async function loadArchive(route: Exclude<NewsRoute, { kind: 'post' }>): Promise<ArchiveData> {
  const cats = await getCategories()
  if (route.kind === 'index') {
    const data = await getPostList({ page: route.page, stickyFirst: true })
    return { ...data, cats, heading: null, title: 'お知らせ', base: '/news/' }
  }
  if (route.kind === 'category') {
    const ids = [route.cat.id, ...descendantIds(cats, route.cat.id)]
    const data = await getPostList({ page: route.page, categories: ids })
    const name = decodeEntities(route.cat.name)
    return { ...data, cats, heading: `${name}の一覧`, title: `${name} | お知らせ`, base: new URL(route.cat.link).pathname }
  }
  const { year, month, day } = route
  const label = `${year}年${month ? `${month}月` : ''}${day ? `${day}日` : ''}`
  const data = await getPostList({ page: route.page, ...dateRange(year, month, day) })
  const base = `/news/${year}/${month ? `${String(month).padStart(2, '0')}/` : ''}${day ? `${String(day).padStart(2, '0')}/` : ''}`
  return { ...data, cats, heading: `${label}の一覧`, title: `${label} | お知らせ`, base }
}

/** "<title> – Nページ目" like WordPress' wp_get_document_title() on paged archives. */
export function pagedTitle(title: string, page: number) {
  if (page <= 1) return title
  const [first, ...rest] = title.split(' | ')
  return [`${first} – ${page}ページ目`, ...rest].join(' | ')
}
