import { getDrawer } from './drawer'
import type { Cleanup } from './dom'

/*
 * In-page anchor scrolling (class "i" in main.bundle.js): 900ms easeOutQuart towards the target's
 * offsetTop, clamped to the bottom of the page. Implemented with a capturing listener so it runs
 * before next/link and keeps working for links that are added later.
 */
const DURATION = 900
const OFFSET = 0
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
let rafIds = new Set<number>()

function calcTargetY(el: HTMLElement) {
  const bodyHeight = document.body.clientHeight
  return el.offsetTop + window.innerHeight > bodyHeight ? bodyHeight - window.innerHeight - OFFSET : el.offsetTop - OFFSET
}

export function scrollToElement(el: HTMLElement) {
  const startX = window.scrollX
  const startY = window.scrollY
  const endX = window.scrollX
  const endY = calcTargetY(el)
  const start = Date.now()
  const step = () => {
    const t = Math.min(1, (Date.now() - start) / DURATION)
    window.scrollTo(startX + (endX - startX) * easeOutQuart(t), startY + (endY - startY) * easeOutQuart(t))
    if (t < 1) {
      const id = requestAnimationFrame(() => { rafIds.delete(id); step() })
      rafIds.add(id)
    }
  }
  step()
}

function samePageHash(el: Element): string | false {
  let a: HTMLAnchorElement
  const dataHref = (el as HTMLElement).dataset?.href
  if (dataHref) {
    a = document.createElement('a')
    a.href = dataHref
  } else if (el instanceof HTMLAnchorElement) a = el
  else return false
  const loc = window.location
  return a.protocol === loc.protocol && a.host === loc.host && a.pathname === loc.pathname && a.search === loc.search && a.hash
}

function findTarget(hash: string): HTMLElement | null {
  try {
    return document.querySelector<HTMLElement>(hash)
  } catch {
    return null
  }
}

/** Scroll to location.hash after a page load / client navigation (the theme does this on init). */
export function scrollToCurrentHash() {
  if (!window.location.hash) return
  const target = findTarget(window.location.hash)
  if (!target) return
  const drawer = getDrawer()
  if (drawer?.isOpen) drawer.setChecked(false)
  scrollToElement(target)
}

export function initSmoothScroll(): Cleanup {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0) return
    const el = (e.target as Element | null)?.closest?.('a[href],[data-href]')
    if (!el) return
    document.querySelectorAll('.is-current-href').forEach((n) => n.classList.remove('is-current-href'))
    const hash = samePageHash(el)
    const target = hash ? findTarget(hash) : null
    if (!target) return
    e.preventDefault()
    el.classList.add('is-current-href')
    const drawer = getDrawer()
    if (drawer?.isOpen) drawer.setChecked(false)
    scrollToElement(target)
  }
  document.addEventListener('click', onClick, true)
  return () => {
    document.removeEventListener('click', onClick, true)
    rafIds.forEach((id) => cancelAnimationFrame(id))
    rafIds = new Set()
  }
}
