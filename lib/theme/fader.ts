import type { Cleanup } from './dom'

/*
 * Cross-fade slideshow (LogicFader chunk). Configured through data-config, e.g.
 * "duration=3000&interval=6500&delay=0&easing=ease": every (delay + interval) ms the next slide
 * fades in over `duration` ms; hovering a slide pauses the rotation.
 *
 * initFader() is self-contained on purpose: <ThemeBoot/> inlines it with toString() so the key
 * visual starts as early as with the theme, without waiting for React.
 */
type Data = {
  duration: number
  interval: number
  delay: number
  timeout: number
  easing: string
  stop: boolean
  autoHeight?: string
  children: HTMLCollectionOf<HTMLElement>
  firstIndex: number
  currentIndex: number
  lastIndex: number
  prevIndex: number
  nextIndex: number
  pastCurrentIndex: number
  pastCurrentItem: HTMLElement
  currentItem?: HTMLElement
  nextItem?: HTMLElement
  navItems?: HTMLCollection
}

export function initFader(target: HTMLElement): Cleanup {
  const htmlEl = () => document.documentElement
  const MQ: Record<string, string> = {
    breakLg: '(max-width: 1023px)',
    breakMd: '(max-width: 767px)',
    breakSm: '(max-width: 639px)',
    overSm: '(min-width: 640px)',
    overMd: '(min-width: 768px)',
    overLg: '(min-width: 1024px)',
    landscape: '(orientation: landscape)',
    portrait: '(orientation: portrait)',
  }
  const matches = (name: string) => !!MQ[name] && window.matchMedia(MQ[name]).matches
  const parseConfig = (s: string) => {
    const out: Record<string, string> = {}
    s.split('&').forEach((pair) => {
      const [k, v] = pair.split('=')
      out[decodeURIComponent(k)] = decodeURIComponent(v)
    })
    return out
  }
  const raw: Record<string, string> = { delay: '3500', duration: '1500', easing: 'ease', timeout: '0', stop: 'true' }
  const cfg = target.getAttribute('data-config')
  Object.assign(raw, cfg ? parseConfig(cfg) : {})
  if (!raw.interval) raw.interval = raw.duration
  const interval = parseInt(raw.interval, 10)
  const children = target.children as HTMLCollectionOf<HTMLElement>
  const d: Data = {
    duration: parseInt(raw.duration, 10),
    timeout: parseInt(raw.timeout, 10),
    interval,
    delay: parseInt(raw.delay, 10) + interval,
    easing: raw.easing,
    stop: raw.stop === 'true',
    autoHeight: raw.autoHeight,
    children,
    firstIndex: 0,
    currentIndex: 0,
    lastIndex: children.length - 1,
    prevIndex: 0,
    nextIndex: 0,
    pastCurrentIndex: children.length - 1,
    pastCurrentItem: children[children.length - 1],
  }
  const id = target.getAttribute('id')
  const prefix = id ? `-${id}` : ''
  const parent = target.parentNode as HTMLElement
  const timeouts = new Set<ReturnType<typeof setTimeout>>()
  const later = (fn: () => void, ms: number) => {
    const t = setTimeout(() => { timeouts.delete(t); fn() }, ms)
    timeouts.add(t)
  }
  let timer: ReturnType<typeof setInterval> | undefined
  const listeners: [Element, string, EventListener][] = []
  const on = (el: Element, type: string, fn: EventListener) => { el.addEventListener(type, fn, false); listeners.push([el, type, fn]) }

  // firstTime()
  children[d.firstIndex].style.transitionDuration = `${d.duration}ms`
  for (const child of Array.from(children)) {
    child.style.transitionTimingFunction = d.easing
    child.style.transitionProperty = 'opacity'
    child.style.opacity = '0'
  }

  const autoHeight = (item: HTMLElement, mq: string) => {
    item.style.height = 'auto'
    const h = item.offsetHeight
    if (h <= 0) return
    target.style.transitionTimingFunction = 'ease-in-out'
    target.style.transitionProperty = 'height'
    target.style.transitionDuration = '.3s'
    if (mq !== 'undefined') target.style.height = matches(mq) ? `${h}px` : 'auto'
    else target.style.height = `${h}px`
  }

  const update = () => {
    d.prevIndex = d.currentIndex === d.firstIndex ? d.lastIndex : d.currentIndex - 1
    d.nextIndex = d.currentIndex === d.lastIndex ? d.firstIndex : d.currentIndex + 1
    d.currentItem = children[d.currentIndex]
    d.nextItem = children[d.nextIndex]
    const lazy = d.nextItem.querySelector<HTMLImageElement>('img[data-lazy-src]')
    d.currentItem.classList.remove('is-active-next')
    d.pastCurrentItem.classList.remove('is-active')
    d.pastCurrentItem.style.zIndex = 'auto'
    d.pastCurrentItem.style.opacity = '0'
    d.pastCurrentItem.style.transitionDuration = `${d.duration / 2}ms`
    later(() => {
      d.pastCurrentItem.style.transitionDuration = ''
      d.pastCurrentItem.classList.remove('is-active--delay')
      if (lazy?.dataset.lazySrc) {
        const pic = lazy.parentNode
        if (pic?.nodeName === 'PICTURE') {
          Array.from((pic as Element).getElementsByTagName('source')).forEach((s) => {
            const set = s.dataset.lazySrcset
            if (!lazy.hasAttribute('srcset') && set) { s.srcset = set; s.removeAttribute('data-lazy-srcset') }
          })
        }
        lazy.src = lazy.dataset.lazySrc
        lazy.removeAttribute('data-lazy-src')
        if (!lazy.hasAttribute('srcset') && lazy.dataset.lazySrcset) { lazy.srcset = lazy.dataset.lazySrcset; lazy.removeAttribute('data-lazy-srcset') }
      }
    }, Number((d.interval / 2).toFixed(1)))
    d.currentItem.classList.add('is-active', 'is-active--delay')
    d.nextItem.classList.add('is-active-next')
    d.currentItem.style.zIndex = '1'
    d.currentItem.style.opacity = '1'
    d.currentItem.style.transitionDuration = `${d.duration}ms`
    if (d.autoHeight) autoHeight(d.currentItem, d.autoHeight)
    if (d.navItems) {
      d.navItems[d.pastCurrentIndex]?.classList.remove('is-active')
      d.navItems[d.currentIndex]?.classList.add('is-active')
    }
  }
  const goTo = (i: number) => {
    d.pastCurrentIndex = d.currentIndex
    d.pastCurrentItem = children[d.pastCurrentIndex]
    d.currentIndex = i > d.lastIndex ? d.firstIndex : i < d.firstIndex ? d.lastIndex : i
    update()
  }
  const play = () => { timer = setInterval(() => goTo(d.currentIndex + 1), d.delay) }
  const stopTimer = () => clearInterval(timer)

  later(() => htmlEl().classList.add(`js-fader-inited${prefix}`), 50)
  later(() => { htmlEl().classList.add(`js-fader-play${prefix}`); update(); play() }, d.timeout)

  if (d.stop) {
    for (const child of Array.from(children)) {
      on(child, 'mouseenter', () => stopTimer())
      on(child, 'mouseleave', () => play())
    }
  }
  const nav = parent.querySelector<HTMLElement>('.js-navigation')
  if (nav && d.lastIndex >= 1) {
    for (let t = 0; t <= d.lastIndex; t++) {
      const li = document.createElement('li')
      if (t === 0) li.classList.add('is-active')
      const btn = document.createElement('button')
      btn.setAttribute('aria-label', `${t + 1}つ目に移動`)
      on(btn, 'click', () => { goTo(t); stopTimer(); play() })
      li.appendChild(btn)
      nav.appendChild(li)
    }
    d.navItems = nav.children
  }
  const navOriginal = parent.querySelector<HTMLElement>('.js-navigation-original')
  if (navOriginal && d.lastIndex >= 1) {
    navOriginal.querySelectorAll('[data-list]').forEach((el, t) => {
      if (t === 0) el.classList.add('is-active')
      el.setAttribute('aria-label', `${t + 1}つ目に移動`)
      on(el, 'click', () => { goTo(t); stopTimer(); play() })
      on(el, 'mouseenter', () => { goTo(t); stopTimer(); play() })
    })
    d.navItems = navOriginal.children
  }

  return () => {
    timeouts.forEach(clearTimeout)
    stopTimer()
    listeners.forEach(([el, type, fn]) => el.removeEventListener(type, fn))
    htmlEl().classList.remove(`js-fader-inited${prefix}`, `js-fader-play${prefix}`)
  }
}
