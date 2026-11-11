/*
 * Marks links to the current page (is-current) and to the current top-level section
 * (is-current-parent), like the "current link" module of main.bundle.js.
 *
 * Self-contained on purpose: <ThemeBoot/> inlines it with toString() so that, as in the theme, it
 * runs while the page is parsed.
 */
export function markCurrentLinks(): void {
  const FLAG = 'js-current'
  const anchorFor = (el: Element): HTMLAnchorElement => {
    if (el instanceof HTMLAnchorElement) return el
    const a = document.createElement('a')
    a.href = (el as HTMLElement).dataset.href ?? ''
    return a
  }
  document.querySelectorAll(`.${FLAG}`).forEach((el) => el.classList.remove(FLAG, 'is-current', 'is-current-parent'))
  const loc = window.location
  const root = new URL(document.documentElement.getAttribute('data-root') || '/', loc.href).href
  const current = `${loc.protocol}//${loc.host}${loc.pathname}`
  const first = ('/' + current.replace(root, '')).split('/').filter(Boolean)[0]
  document.querySelectorAll('a[href]:not(.js-ignore), [data-href]:not([data-href="#body"])').forEach((el) => {
    const a = anchorFor(el)
    if (a.protocol === loc.protocol && a.host === loc.host && a.pathname === loc.pathname && a.search === loc.search) {
      el.classList.add('is-current', FLAG)
    }
    let parent = false
    const href = (el as HTMLElement).dataset.href ? a.href : el instanceof HTMLAnchorElement && el.pathname ? el.href : null
    if (href) parent = first === ('/' + href.replace(root, '')).replace(/\//g, '')
    if (parent) el.classList.add('is-current-parent', FLAG)
  })
}
