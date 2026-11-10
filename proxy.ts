import { NextResponse, type NextRequest } from 'next/server'
import { canonicalNewsPath } from '@/lib/canonical'

const WP_API = `${(process.env.WP_URL || 'https://ichijoya.co.jp').replace(/\/+$/, '')}/wp-json/wp/v2`
const PER_PAGE = 15
const HEADERS = { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0 (compatible; ichijoya-next)' }

/** Fixed pages. WordPress matches page paths case-insensitively ("/About/" shows /about/). */
const PAGES = new Set(['/about/', '/change/', '/door/', '/line/', '/privacy/', '/recruit/', '/contact/', '/contact/thanks/', '/news/', '/feed/'])
/** Default WordPress links: ?p=ID, ?page_id=ID, ?cat=ID. */
const SHORTLINKS = [['p', 'posts'], ['page_id', 'pages'], ['cat', 'categories']] as const

/** "/search/foo+bar/" → "foo bar" (urlencode()d by WordPress). */
function decodeSegment(s: string) {
  try {
    return decodeURIComponent(s.replace(/\+/g, '%20'))
  } catch {
    return s
  }
}

/** Renders the 404 page with a 404 status (the path does not exist). */
const notFound = (request: NextRequest) => NextResponse.rewrite(new URL('/_not-found-in-proxy/', request.url))

/*
 * WordPress URL handling in front of the routes (Next's own trailing-slash redirect is off, see
 * next.config.ts):
 * - the 301 redirects of redirect_canonical(): trailing slash, /news/…/page/1/, zero-padded page
 *   numbers, impossible dates, /index.php, and ?p= / ?page_id= / ?cat= shortlinks;
 * - search at "/?s=…", "/page/N/?s=…" and "/search/…" (rewritten to app/search). A search page
 *   past the last one is a 404 on WordPress; that is decided here, before the page starts
 *   streaming;
 * - case-insensitive fixed pages.
 */
export async function proxy(request: NextRequest) {
  const { pathname: requested, searchParams, search } = request.nextUrl
  const indexPhp = /^\/index\.php(?:\/|$)/.test(requested)
  const pathname = indexPhp ? requested.slice('/index.php'.length) || '/' : requested

  // plain URLs: a NextURL would re-apply the request's trailing slash state and re-encode the path
  const redirect = (path: string, keepQuery = true) => {
    const res = NextResponse.redirect(new URL(path + (keepQuery ? search : ''), request.url), 301)
    // the content type WordPress sends with its redirects: the feed's for feed URLs
    res.headers.set('Content-Type', `${path.endsWith('/feed/') ? 'application/rss+xml' : 'text/html'}; charset=UTF-8`)
    return res
  }

  if (pathname === '/') {
    const short = SHORTLINKS.find(([key]) => /^\d+$/.test(searchParams.get(key) ?? ''))
    if (short) {
      const [key, type] = short
      const res = await fetch(`${WP_API}/${type}/${searchParams.get(key)}?_fields=link`, { headers: HEADERS }).catch(() => null)
      const link = res?.ok ? ((await res.json()) as { link?: string }).link : undefined
      if (link) return redirect(new URL(link).pathname, false)
    }
  }

  const searchPermalink = pathname.match(/^\/search\/([^/]+)(?:\/page\/(\d+))?\/?$/)
  const searchPage = searchParams.has('s') ? pathname.match(/^\/(?:page\/(\d+)\/?)?$/) : null
  if (searchPermalink || searchPage) {
    const q = searchPermalink ? decodeSegment(searchPermalink[1]) : (searchParams.get('s') ?? '')
    const page = Number((searchPermalink ? searchPermalink[2] : searchPage![1]) ?? 1)
    if (page > 1) {
      const check = await fetch(`${WP_API}/posts?${q ? `search=${encodeURIComponent(q)}&` : ''}per_page=${PER_PAGE}&page=${page}&_fields=id`, { headers: HEADERS }).catch(() => null)
      if (check?.status === 400) return notFound(request)
    }
    const url = new URL('/search/', request.url)
    url.searchParams.set('s', q)
    if (page > 1) url.searchParams.set('paged', String(page))
    return NextResponse.rewrite(url)
  }
  // app/search is only reachable through the URLs above
  if (/^\/search(?:\/|$)/.test(pathname)) return notFound(request)

  // "/index.php?foo" → "/?foo", "/index.php/about/" → "/about/"
  if (indexPhp) return redirect(pathname)

  // the last segment has a dot: a file, never redirected
  if (/\.[^/]*$/.test(pathname)) return NextResponse.next()

  // the front page with a page number: "/page/N/" shows it again (app/page/[n]); "/page/1/",
  // "/page/0/" and "/0/" go to "/"
  const frontPage = pathname.match(/^\/page\/(\d+)\/?$/)
  if (frontPage) {
    const n = frontPage[1].replace(/^0+(?=\d)/, '')
    if (n === '0' || n === '1') return redirect('/')
    return n === frontPage[1] && pathname.endsWith('/') ? NextResponse.next() : redirect(`/page/${n}/`)
  }
  if (pathname === '/0/' || pathname === '/0') return redirect('/')

  if (pathname === '/news' || pathname.startsWith('/news/')) {
    const canonical = canonicalNewsPath(pathname)
    return canonical === pathname ? NextResponse.next() : redirect(canonical)
  }

  if (!pathname.endsWith('/')) {
    const page = `${pathname}/`.toLowerCase()
    // unknown paths are a 404 straight away, as on WordPress
    return PAGES.has(page) ? redirect(page) : notFound(request)
  }

  if (/[A-Z]/.test(pathname) && PAGES.has(pathname.toLowerCase())) {
    return NextResponse.rewrite(new URL(pathname.toLowerCase() + search, request.url))
  }
  return NextResponse.next()
}

export const config = {
  // everything except build output, static files and API routes
  matcher: ['/((?!_next/|assets/|assets-theme/|plugins/|media/|wp-includes/|api/).*)'],
}
