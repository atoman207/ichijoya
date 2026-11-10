/* Shared helpers ported from the theme bundle (module 659 of main.bundle.js). */

export const htmlEl = () => document.documentElement

export const scrollingEl = () => (document.scrollingElement ?? document.documentElement) as HTMLElement

/** "orientationchange" on touch devices, "resize" elsewhere — same switch as the theme. */
export const resizeEventName = () => ('onorientationchange' in window && window.onorientationchange !== undefined ? 'orientationchange' : 'resize')

export const MQ = {
  breakLg: '(max-width: 1023px)',
  breakMd: '(max-width: 767px)',
  breakSm: '(max-width: 639px)',
  overSm: '(min-width: 640px)',
  overMd: '(min-width: 768px)',
  overLg: '(min-width: 1024px)',
  landscape: '(orientation: landscape)',
  portrait: '(orientation: portrait)',
} as const

export const matches = (name: keyof typeof MQ) => window.matchMedia(MQ[name]).matches

/**
 * Applies a DOM change without running CSS transitions — used when a client-side navigation has to
 * reset UI state that a full page load would have reset instantly.
 */
export function withoutTransitions(fn: () => void) {
  const style = document.createElement('style')
  style.textContent = '*,*:before,*:after{transition:none!important}'
  document.head.appendChild(style)
  fn()
  void document.body.offsetHeight
  requestAnimationFrame(() => requestAnimationFrame(() => style.remove()))
}

export type Cleanup = () => void
export const noop: Cleanup = () => {}
