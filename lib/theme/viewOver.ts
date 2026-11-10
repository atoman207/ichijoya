import { htmlEl, type Cleanup } from './dom'

/*
 * [data-view-over] observers (class "l" in main.bundle.js). Toggles state classes on <html>:
 *   header      -> js-over-header (shows the sticky nav and the page-top button)
 *   once-scroll -> js-over-once-scroll
 *   content / headerInfo / footer -> js-view-*
 */
const CLASSES = ['js-over-header', 'js-over-once-scroll', 'js-view-content', 'js-view-headerInfo', 'js-view-footer']

export function initViewOver(): Cleanup {
  const targets = document.querySelectorAll('[data-view-over]')
  if (!targets.length) return () => {}
  const html = htmlEl()
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const type = e.target.getAttribute('data-view-over')
        if (type === 'header') html.classList.toggle('js-over-header', !e.isIntersecting)
        else if (type === 'once-scroll') html.classList.toggle('js-over-once-scroll', !e.isIntersecting)
        else if (type === 'content') html.classList.toggle('js-view-content', e.isIntersecting)
        else if (type === 'headerInfo') html.classList.toggle('js-view-headerInfo', e.isIntersecting)
        else if (type === 'footer') html.classList.toggle('js-view-footer', e.isIntersecting)
      }
    },
    { root: null, rootMargin: '0px 0px', threshold: [0] },
  )
  targets.forEach((t) => io.observe(t))
  return () => {
    io.disconnect()
    CLASSES.forEach((c) => html.classList.remove(c))
  }
}
