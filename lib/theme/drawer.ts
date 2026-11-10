import { htmlEl, MQ, noop, scrollingEl, withoutTransitions, type Cleanup } from './dom'

/*
 * Global navigation drawer (LogicDrawer in main.bundle.js).
 * The drawer contents are rendered statically by <DrawerItems/> (the theme clones [data-drawer]
 * elements into [data-logic="drawer-container"] at runtime; the clones are pre-built here).
 */

type Controller = { readonly isOpen: boolean; setChecked: (open: boolean) => void }
let controller: Controller | null = null
export const getDrawer = () => controller

export function initDrawer(): Cleanup {
  const trigger = document.querySelector<HTMLElement>('[data-logic="drawer-trigger"]')
  const drawer = document.querySelector<HTMLElement>('[data-logic="drawer"]')
  if (!trigger || !drawer) return noop

  let isOpen = false
  const calcEls = () => document.querySelectorAll<HTMLElement>('.js-calc-scrollbar')
  trigger.setAttribute('aria-controls', drawer.getAttribute('id') ?? '')

  const tabbables = drawer.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)')
  const first = tabbables[0]
  const last = tabbables[tabbables.length - 1]
  const onFirstKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && e.shiftKey) { e.preventDefault(); last.focus() }
  }
  const onLastKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && !e.shiftKey) { e.preventDefault(); first.focus() }
  }

  const setAria = (open: boolean) => {
    const v = open ? 'true' : 'false'
    drawer.setAttribute('aria-expanded', v)
    trigger.setAttribute('aria-expanded', v)
  }
  const lock = () => {
    const se = scrollingEl()
    const before = se.clientWidth
    htmlEl().style.overflow = 'hidden'
    const diff = se.clientWidth - before
    htmlEl().classList.add('is-open-drawer')
    if (diff) {
      se.style.paddingRight = `${diff}px`
      calcEls().forEach((el) => { el.style.paddingRight = `${diff}px` })
    }
  }
  const unlock = () => {
    htmlEl().style.removeProperty('overflow')
    htmlEl().classList.remove('is-open-drawer')
    scrollingEl().style.removeProperty('padding-right')
    calcEls().forEach((el) => el.style.removeProperty('padding-right'))
  }
  const change = () => {
    if (isOpen) {
      lock()
      setAria(true)
      if (first) { first.addEventListener('keydown', onFirstKey); last.addEventListener('keydown', onLastKey) }
    } else {
      setAria(false)
      if (first) { first.removeEventListener('keydown', onFirstKey); last.removeEventListener('keydown', onLastKey) }
    }
  }
  const setChecked = (open: boolean) => { isOpen = open; change() }

  const onTrigger = (e: Event) => { e.preventDefault(); setChecked(!isOpen) }
  const onClose = () => { if (isOpen) setChecked(false) }
  const onTransitionEnd = (e: TransitionEvent) => {
    if (e.target !== drawer || e.propertyName !== 'visibility') return
    if (isOpen) first?.focus()
    else { unlock(); trigger.focus() }
  }
  const onKeydown = (e: KeyboardEvent) => {
    if (isOpen && e.key === 'Escape') { e.preventDefault(); setChecked(false) }
  }
  const mq = window.matchMedia(MQ.overLg)
  const onMq = () => {
    if (mq.matches && isOpen) { setChecked(false); unlock() }
  }

  trigger.addEventListener('click', onTrigger)
  const closers = document.querySelectorAll('[data-logic="drawer-close"]')
  closers.forEach((el) => el.addEventListener('click', onClose))
  setChecked(false)
  drawer.addEventListener('transitionend', onTransitionEnd)
  window.addEventListener('keydown', onKeydown)
  mq.addEventListener('change', onMq)
  onMq()

  controller = { get isOpen() { return isOpen }, setChecked }

  return () => {
    trigger.removeEventListener('click', onTrigger)
    closers.forEach((el) => el.removeEventListener('click', onClose))
    drawer.removeEventListener('transitionend', onTransitionEnd)
    window.removeEventListener('keydown', onKeydown)
    mq.removeEventListener('change', onMq)
    if (isOpen) {
      // A full page load would show the next page with the drawer closed; do the same instantly.
      withoutTransitions(() => { isOpen = false; change(); unlock() })
    }
    if (first) { first.removeEventListener('keydown', onFirstKey); last.removeEventListener('keydown', onLastKey) }
    controller = null
  }
}
