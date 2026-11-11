'use client'

import { useEffect } from 'react'
import { themeBoot } from '@/lib/theme/boot'
import type { Cleanup } from '@/lib/theme/dom'
import { initFancybox } from '@/lib/theme/fancybox'
import { initSmoothScroll } from '@/lib/theme/smoothScroll'

type Gtag = (...args: unknown[]) => void

/** Phone-call tracking the theme attaches to every tel: link (only when gtag is loaded). */
function initTelTracking(): Cleanup {
  const onClick = (e: MouseEvent) => {
    const a = (e.target as Element | null)?.closest?.('a[href^="tel:"]')
    const gtag = (window as unknown as { gtag?: Gtag }).gtag
    if (!a || !gtag) return
    const href = a.getAttribute('href')
    const path = window.location.href.replace(`${window.location.protocol}//${window.location.host}`, '').replace(/\/+/g, '/')
    gtag('event', `電話番号（${href}）`, { event_category: '電話番号', event_label: `${href}（${path})` })
  }
  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}

/**
 * Document-level behaviour from the theme's main.bundle.js. What the theme does while the page is
 * parsed (current links, agree state, key visual fader) already ran from <ThemeBoot/> in
 * production; themeBoot() covers development builds. The modules bound to the page skeleton run in
 * <ShellRuntime/>, the page-specific ones (modals, sliders, contact form, review widgets) in
 * <PageRuntime/>.
 *
 * Links are plain <a> elements: like on WordPress every page is a full document load. (With Cache
 * Components the App Router keeps up to three visited routes in the DOM, hidden, which the theme's
 * document-wide scripts and duplicate ids are not built for.)
 */
export default function ThemeRuntime() {
  useEffect(() => {
    themeBoot()
    const cleanups = [initSmoothScroll(), initFancybox(), initTelTracking()]
    return () => cleanups.reverse().forEach((c) => c())
  }, [])

  return null
}
