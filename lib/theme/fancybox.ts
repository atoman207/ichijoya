import type { Cleanup } from './dom'

/*
 * Image lightbox: a port of the Easy FancyBox plugin (FancyBox 1.3.x, jQuery) as configured on the
 * WordPress site — links to .jpg/.jpeg/.png/.webp open in an elastic zoom box (easeOutBack in,
 * easeInBack out, 300ms), grey overlay, close button, keyboard and gallery navigation by rel.
 * Markup ids/classes match the original so jquery.fancybox.min.css styles it unchanged.
 */

type Box = { top: number; left: number; width: number; height: number }
type Opts = {
  padding: number
  margin: number
  overlayOpacity: number
  overlayColor: string
  speedIn: number
  speedOut: number
  changeSpeed: number
  changeFade: number
}
const O: Opts = { padding: 10, margin: 20, overlayOpacity: 0.7, overlayColor: '#777', speedIn: 300, speedOut: 300, changeSpeed: 300, changeFade: 200 }

const IMG_RE = /\.(jpg|gif|png|bmp|jpeg|webp)(.*)?$/i
const LINK_SELECTOR = ['.jpg', '.jpeg', '.png', '.webp'].flatMap((ext) => [`a[href*="${ext}"]`, `area[href*="${ext}"]`]).join(',')
const NO_LIGHTBOX = '.nofancybox,a.wp-block-file__button,a.pin-it-button,a[href*="pinterest.com/pin/create"],a[href*="facebook.com/share"],a[href*="twitter.com/share"],.nolightbox,li.nolightbox>a'

// jQuery / jquery.easing 1.4 curves (percent in, eased progress out)
const c1 = 1.70158
const c3 = c1 + 1
const easeOutBack = (x: number) => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
const easeInBack = (x: number) => c3 * x * x * x - c1 * x * x
const swing = (x: number) => 0.5 - Math.cos(x * Math.PI) / 2

/** jQuery.animate() timing: the first tick runs synchronously, then one tick per animation frame. */
function animate(duration: number, easing: (x: number) => number, from: number, to: number, step: (v: number) => void, done: () => void) {
  const start = performance.now()
  let id = 0
  let stopped = false
  const tick = (now: number) => {
    if (stopped) return
    const p = duration ? Math.min(1, Math.max(0, (now - start) / duration)) : 1
    step(from + (to - from) * easing(p))
    if (p < 1) id = requestAnimationFrame(tick)
    else done()
  }
  tick(performance.now())
  return () => { stopped = true; cancelAnimationFrame(id) }
}

const px = (n: number) => `${n}px`
const setPos = (el: HTMLElement, b: Partial<Box>) => {
  if (b.top !== undefined) el.style.top = px(b.top)
  if (b.left !== undefined) el.style.left = px(b.left)
  if (b.width !== undefined) el.style.width = px(Math.max(0, b.width))
  if (b.height !== undefined) el.style.height = px(Math.max(0, b.height))
}
/** jQuery .width()/.height(): content box size. */
function contentSize(el: HTMLElement) {
  const cs = getComputedStyle(el)
  const r = el.getBoundingClientRect()
  return {
    width: r.width - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - parseFloat(cs.borderLeftWidth) - parseFloat(cs.borderRightWidth),
    height: r.height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - parseFloat(cs.borderTopWidth) - parseFloat(cs.borderBottomWidth),
  }
}
/** jQuery .position() of an absolutely positioned child of <body>. */
const positionOf = (el: HTMLElement) => ({ top: parseFloat(el.style.top) || 0, left: parseFloat(el.style.left) || 0 })
const docHeight = () => {
  const b = document.body, h = document.documentElement
  return Math.max(b.scrollHeight, h.scrollHeight, b.offsetHeight, h.offsetHeight, h.clientHeight)
}
function viewport(noMargin = false) {
  const w = Math.min(window.innerWidth, document.documentElement.clientWidth)
  const h = Math.min(window.innerHeight, document.documentElement.clientHeight)
  const m = noMargin ? 0 : O.margin
  return [w - m * 2, h - m * 2, window.scrollX + m, window.scrollY + m]
}

let dom: Record<'tmp' | 'loading' | 'overlay' | 'wrap' | 'outer' | 'content' | 'close' | 'title' | 'left' | 'right', HTMLElement> | null = null

function ensureDom() {
  if (dom && document.body.contains(dom.wrap)) return dom
  const make = (html: string) => { const t = document.createElement('template'); t.innerHTML = html; return t.content.firstElementChild as HTMLElement }
  const tmp = make('<div id="fancybox-tmp"></div>')
  const loading = make('<div id="fancybox-loading"><div></div></div>')
  const overlay = make('<div id="fancybox-overlay"></div>')
  const wrap = make('<div id="fancybox-wrap"></div>')
  const outer = make('<div id="fancybox-outer"><div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div></div>')
  const content = make('<div id="fancybox-content"></div>')
  const close = make('<a id="fancybox-close"></a>')
  const title = make('<div id="fancybox-title"></div>')
  const left = make('<a id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>')
  const right = make('<a id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
  outer.append(content, close, title, left, right)
  wrap.appendChild(outer)
  document.body.append(tmp, loading, overlay, wrap)
  dom = { tmp, loading, overlay, wrap, outer, content, close, title, left, right }
  close.addEventListener('click', () => closeBox())
  loading.addEventListener('click', () => cancel())
  left.addEventListener('click', (e) => { e.preventDefault(); prev() })
  right.addEventListener('click', (e) => { e.preventDefault(); next() })
  return dom
}

const show = (el: HTMLElement) => { el.style.display = 'block' }
const hide = (el: HTMLElement) => { el.style.display = 'none' }
const visible = (el: HTMLElement) => el.style.display !== 'none' && getComputedStyle(el).display !== 'none'

// --- state (mirrors the plugin's closure variables)
let group: HTMLAnchorElement[] = []
let index = 0
let busy = false
let current: { href: string; orig: HTMLElement | null; width: number; height: number } | null = null
let from: Box = { top: 0, left: 0, width: 0, height: 0 }
let to: Box = { top: 0, left: 0, width: 0, height: 0 }
let loadingTimer: ReturnType<typeof setInterval> | undefined
let loadingFrame = 1
let stopAnim: (() => void) | null = null
let pendingImage: HTMLImageElement | null = null
let resizeTimer: ReturnType<typeof setTimeout> | undefined

function showActivity() {
  const d = ensureDom()
  clearInterval(loadingTimer)
  show(d.loading)
  loadingTimer = setInterval(() => {
    if (!visible(d.loading)) { clearInterval(loadingTimer); return }
    ;(d.loading.firstElementChild as HTMLElement).style.top = `${loadingFrame * -40}px`
    loadingFrame = (loadingFrame + 1) % 12
  }, 66)
}
const hideActivity = () => { if (dom) hide(dom.loading) }

function zoomTo(img: { width: number; height: number }): Box {
  const v = viewport()
  const pad = O.padding * 2
  const box = { width: img.width + pad, height: img.height + pad, top: 0, left: 0 }
  if (box.width > v[0] || box.height > v[1]) {
    const ratio = img.width / img.height
    if (box.width > v[0]) { box.width = v[0]; box.height = parseInt(String((box.width - pad) / ratio + pad), 10) }
    if (box.height > v[1]) { box.height = v[1]; box.width = parseInt(String((box.height - pad) * ratio + pad), 10) }
  }
  box.top = parseInt(String(Math.max(v[3] - 20, v[3] + (v[1] - box.height - 40) * 0.5)), 10)
  box.left = parseInt(String(Math.max(v[2] - 20, v[2] + (v[0] - box.width - 40) * 0.5)), 10)
  return box
}

function zoomFrom(): Box {
  const orig = current?.orig
  if (orig && orig.isConnected) {
    const r = orig.getBoundingClientRect()
    const cs = getComputedStyle(orig)
    const top = r.top + window.scrollY + (parseInt(cs.paddingTop, 10) || 0) + (parseInt(cs.borderTopWidth, 10) || 0)
    const left = r.left + window.scrollX + (parseInt(cs.paddingLeft, 10) || 0) + (parseInt(cs.borderLeftWidth, 10) || 0)
    const size = contentSize(orig)
    return { width: size.width + O.padding * 2, height: size.height + O.padding * 2, top: top - O.padding - 20, left: left - O.padding - 20 }
  }
  const v = viewport()
  return { width: O.padding * 2, height: O.padding * 2, top: parseInt(String((v[3] + v[1]) * 0.5), 10), left: parseInt(String((v[2] + v[0]) * 0.5), 10) }
}

function draw(p: number) {
  const d = dom!
  const b = {
    width: parseInt(String(from.width + (to.width - from.width) * p), 10),
    height: parseInt(String(from.height + (to.height - from.height) * p), 10),
    top: parseInt(String(from.top + (to.top - from.top) * p), 10),
    left: parseInt(String(from.left + (to.left - from.left) * p), 10),
  }
  setPos(d.wrap, b)
  setPos(d.content, { width: b.width - O.padding * 2, height: b.height - O.padding * 2 })
}

const onKeydown = (e: KeyboardEvent) => {
  const tag = (e.target as HTMLElement).tagName
  if (e.keyCode === 27) { e.preventDefault(); closeBox() }
  else if ((e.keyCode === 37 || e.keyCode === 39) && tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') { e.preventDefault(); if (e.keyCode === 37) prev(); else next() }
  else if (e.keyCode === 9 && tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') { e.preventDefault(); if (e.shiftKey) prev(); else next() }
}
const onOverlayClick = () => closeBox()
const onResize = () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    if (!current || !dom) return
    const d = dom
    if (visible(d.overlay)) d.overlay.style.height = px(docHeight())
    const pos = positionOf(d.wrap)
    const size = contentSize(d.wrap)
    from = { ...pos, width: size.width, height: size.height }
    to = zoomTo(current)
    busy = true
    stopAnim = animate(O.changeSpeed, swing, 0, 1, draw, () => {
      d.content.style.height = 'auto'
      d.wrap.style.height = 'auto'
      busy = false
      center(true)
    })
  }, 500)
}

function center(force = false) {
  if (busy || !dom) return
  const d = dom
  const v = viewport(true)
  const size = contentSize(d.wrap)
  if (!force && (size.width + 40 > v[0] || size.height + 40 > v[1])) return
  const content = contentSize(d.content)
  const start = positionOf(d.wrap)
  const top = parseInt(String(Math.max(v[3] - 20, v[3] + (v[1] - content.height - 40) * 0.5 - O.padding)), 10)
  const left = parseInt(String(Math.max(v[2] - 20, v[2] + (v[0] - content.width - 40) * 0.5 - O.padding)), 10)
  stopAnim?.()
  stopAnim = animate(300, swing, 0, 1, (p) => setPos(d.wrap, { top: start.top + (top - start.top) * p, left: start.left + (left - start.left) * p }), () => {})
}

function finish() {
  const d = dom!
  d.content.style.height = 'auto'
  d.wrap.style.height = 'auto'
  show(d.close)
  document.addEventListener('keydown', onKeydown)
  hide(d.left)
  hide(d.right)
  if (index !== 0) show(d.left)
  if (index !== group.length - 1) show(d.right)
  d.overlay.addEventListener('click', onOverlayClick)
  window.addEventListener('resize', onResize)
  show(d.wrap)
  busy = false
  center()
  // preload neighbours
  for (const i of [index + 1, index - 1]) {
    const a = group[i]
    if (a && a.href !== current?.href && IMG_RE.test(a.getAttribute('href') || '')) new Image().src = a.href
  }
}

function showBox(img: HTMLImageElement) {
  const d = ensureDom()
  hideActivity()
  busy = true
  document.removeEventListener('keydown', onKeydown)
  d.overlay.removeEventListener('click', onOverlayClick)
  window.removeEventListener('resize', onResize)
  if (visible(d.wrap)) d.wrap.style.height = px(contentSize(d.wrap).height)
  document.documentElement.classList.add('fancybox-active')
  Object.assign(d.overlay.style, { backgroundColor: O.overlayColor, opacity: String(O.overlayOpacity), cursor: 'pointer', height: px(docHeight()) })
  if (!visible(d.overlay)) show(d.overlay)
  to = zoomTo(current!)
  d.title.innerHTML = ''
  d.title.removeAttribute('style')
  d.title.className = ''
  hide(d.title)

  if (visible(d.wrap)) {
    // gallery change: fade content, resize box, swap image
    ;[d.close, d.left, d.right].forEach(hide)
    const pos = positionOf(d.wrap)
    const size = contentSize(d.wrap)
    from = { ...pos, width: size.width, height: size.height }
    const same = from.width === to.width && from.height === to.height
    fade(d.content, 0.3, () => {
      const swap = () => { d.content.innerHTML = ''; d.content.appendChild(img); fade(d.content, 1, finish) }
      d.content.innerHTML = ''
      d.content.style.removeProperty('filter')
      d.content.style.borderWidth = px(O.padding)
      setPos(d.content, { width: to.width - O.padding * 2, height: to.height - O.padding * 2 })
      if (same) swap()
      else stopAnim = animate(O.changeSpeed, swing, 0, 1, draw, swap)
    })
    return
  }
  d.wrap.removeAttribute('style')
  d.content.style.borderWidth = px(O.padding)
  from = zoomFrom()
  d.content.innerHTML = ''
  d.content.appendChild(img)
  show(d.wrap)
  stopAnim = animate(O.speedIn, easeOutBack, 0, 1, draw, finish)
}

function fade(el: HTMLElement, opacity: number, done: () => void) {
  const start = parseFloat(getComputedStyle(el).opacity) || 1
  stopAnim = animate(O.changeFade, swing, start, opacity, (v) => { el.style.opacity = String(v) }, done)
}

function start(i: number) {
  const a = group[i]
  if (!a) return
  index = i
  cancelPending()
  const d = ensureDom()
  d.tmp.style.padding = px(O.padding + O.margin)
  const href = a.getAttribute('href') || ''
  current = { href: a.href, orig: (a.querySelector('img') as HTMLElement | null) ?? a, width: 0, height: 0 }
  busy = false
  showActivity()
  const img = new Image()
  pendingImage = img
  img.onerror = () => {
    hideActivity()
    busy = false
  }
  img.onload = () => {
    busy = true
    img.onerror = img.onload = null
    pendingImage = null
    current!.width = img.width
    current!.height = img.height
    const el = document.createElement('img')
    el.id = 'fancybox-img'
    el.src = img.src
    el.alt = ''
    showBox(el)
  }
  img.src = href
}

function cancelPending() {
  hideActivity()
  if (pendingImage) { pendingImage.onerror = pendingImage.onload = null; pendingImage = null }
}
function cancel() {
  if (busy) return
  cancelPending()
}
function next() { if (index + 1 < group.length) start(index + 1) }
function prev() { if (index - 1 >= 0) start(index - 1) }

export function closeBox() {
  const d = dom
  if (busy || !d || !visible(d.wrap)) return
  busy = true
  cancelPending()
  ;[d.close, d.left, d.right].forEach(hide)
  d.content.onclick = null
  d.overlay.removeEventListener('click', onOverlayClick)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('keydown', onKeydown)
  d.title.innerHTML = ''
  stopAnim?.()
  const pos = positionOf(d.wrap)
  const size = contentSize(d.wrap)
  from = zoomFrom()
  to = { ...pos, width: size.width, height: size.height }
  d.title.innerHTML = ''
  hide(d.title)
  stopAnim = animate(O.speedOut, easeInBack, 1, 0, draw, () => {
    // overlay.fadeOut('fast')
    const startOpacity = parseFloat(d.overlay.style.opacity) || O.overlayOpacity
    stopAnim = animate(200, swing, startOpacity, 0, (v) => { d.overlay.style.opacity = String(v) }, () => {
      hide(d.overlay)
      d.overlay.style.opacity = String(O.overlayOpacity)
    })
    hide(d.title)
    hide(d.wrap)
    d.content.innerHTML = ''
    group = []
    index = 0
    current = null
    busy = false
  })
  document.documentElement.classList.remove('fancybox-active')
}

function isLightboxLink(a: Element): a is HTMLAnchorElement {
  return a.matches(LINK_SELECTOR) && !a.matches(NO_LIGHTBOX)
}

export function initFancybox(): Cleanup {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const a = (e.target as Element | null)?.closest?.('a[href],area[href]')
    if (!a || !isLightboxLink(a)) return
    e.preventDefault()
    if (busy) return
    busy = true
    ;(a as HTMLElement).blur()
    // Easy FancyBox groups links inside galleries by rel="gallery-N"; otherwise rel decides.
    let rel = a.getAttribute('rel') || ''
    const gallery = a.closest('.gallery,.wp-block-gallery,.tiled-gallery')
    if (gallery) {
      const all = Array.from(document.querySelectorAll('.gallery,.wp-block-gallery,.tiled-gallery'))
      rel = `gallery-${all.indexOf(gallery)}`
    }
    if (!rel || rel.replace(/alternate|external|help|license|nofollow|noreferrer|noopener|\s+/gi, '') === '') {
      group = [a]
      index = 0
    } else if (gallery) {
      group = Array.from(gallery.querySelectorAll('a[href],area[href]')).filter(isLightboxLink)
      index = group.indexOf(a)
    } else {
      group = Array.from(document.querySelectorAll<HTMLAnchorElement>(`a[rel="${CSS.escape(rel)}"],area[rel="${CSS.escape(rel)}"]`)).filter(isLightboxLink)
      index = group.indexOf(a)
    }
    start(Math.max(0, index))
  }
  document.addEventListener('click', onClick)
  return () => {
    document.removeEventListener('click', onClick)
    if (dom && visible(dom.wrap)) {
      stopAnim?.()
      ;[dom.wrap, dom.overlay, dom.loading].forEach(hide)
      dom.content.innerHTML = ''
      document.documentElement.classList.remove('fancybox-active')
      busy = false
    }
  }
}
