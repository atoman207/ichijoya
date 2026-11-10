/*
 * WordPress's redirect_canonical() for the URL shapes of this site, computed from the URL alone so
 * that proxy.ts can answer with a single 301 (as WordPress does) before anything renders.
 */

const daysInMonth = (year: number, month: number) => new Date(Date.UTC(year, month, 0)).getUTCDate()

/**
 * Canonical form of a /news/… path (percent-encoded, as requested):
 * - adds the trailing slash;
 * - drops ".../page/1/" and zero padding in page numbers (".../page/02/" → ".../page/2/"), while
 *   ".../page/0/" shows the first page without a redirect, as on WordPress;
 * - sends impossible dates to the enclosing archive (/news/2026/13/ → /news/2026/,
 *   /news/2026/02/30/ → /news/2026/02/).
 */
export function canonicalNewsPath(pathname: string): string {
  const segs = pathname.split('/').filter(Boolean)
  let page: string | undefined
  if (segs.length >= 3 && segs[segs.length - 2] === 'page' && /^\d+$/.test(segs[segs.length - 1])) {
    page = segs.pop()
    segs.pop()
  }
  const [, y, m, d] = segs
  if (/^\d{4}$/.test(y ?? '') && segs.length <= 4 && (!m || /^\d{1,2}$/.test(m)) && (!d || /^\d{1,2}$/.test(d))) {
    const month = Number(m ?? 0)
    if (month > 12) return `/news/${y}/`
    if (month && d && Number(d) > daysInMonth(Number(y), month)) return `/news/${y}/${String(month).padStart(2, '0')}/`
  }
  const base = `/${segs.join('/')}/`
  if (page === undefined) return base
  const n = page.replace(/^0+(?=\d)/, '')
  if (n === '1') return base
  return `${base}page/${n === '0' ? page : n}/`
}
