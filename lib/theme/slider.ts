import Splide, { type Options } from '@splidejs/splide'
import { Intersection } from '@splidejs/splide-extension-intersection'
import type { Cleanup } from './dom'

/*
 * Splide sliders (SplideWrapper in the Slider chunk). Options come from data attributes:
 * data-type, data-autoplay, data-interval, data-pagination, data-arrows, data-trim-space,
 * data-is-navigation, data-sync (selector of a thumbnail slider) and data-config / -md / -lg
 * ("key:value,key:value" option sets for the 0 / 768 / 1024px breakpoints).
 */
type Dict = Record<string, unknown>

function toObject(s: string): Dict {
  const json = s.split(',').map((p) => p.replace(/(\S+):(\S+)/, '"$1":"$2"')).join(',')
  const o: Dict = JSON.parse(`{${json}}`)
  for (const k of ['perPage', 'perMove', 'interval', 'gap', 'speed', 'easing', 'start', 'fixedWidth', 'fixedHeight']) if (k in o) o[k] = Number(o[k])
  for (const k of ['loop', 'rewind', 'destroy', 'autoWidth', 'autoplay', 'isNavigation', 'trimSpace']) if (k in o) o[k] = o[k] === 'true'
  return o
}

function mountSlider(target: HTMLElement, instances: Splide[]): Splide {
  const ui = target.querySelector('.v-splide-ui')
  const base = { speed: 2000 }
  const breakpoints: Record<number, Dict> = {
    0: target.dataset.config ? toObject(target.dataset.config) : base,
    768: target.dataset.configMd ? toObject(target.dataset.configMd) : base,
    1024: target.dataset.configLg ? toObject(target.dataset.configLg) : base,
  }
  const pg = target.dataset.pagination
  const options: Options & Dict = {
    type: target.dataset.type || 'slide',
    rewind: true,
    rewindSpeed: 500,
    gap: 30,
    pagination: pg === 'true' ? true : pg === 'false' ? false : (pg as unknown as boolean),
    arrows: !!target.dataset.arrows && target.dataset.arrows === 'true',
    waitForTransition: false,
    noDrag: 'button, span, svg',
    updateOnMove: true,
    mediaQuery: 'min',
    trimSpace: target.dataset.trimSpace ? (target.dataset.trimSpace === 'move' ? 'move' : false) : true,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    interval: 5000,
    classes: {
      arrows: 'splide__arrows v-splide-arrows',
      arrow: 'splide__arrow v-splide-arrow',
      prev: 'splide__arrow--prev v-splide-arrows--prev',
      next: 'splide__arrow--next v-splide-arrows--next',
      pagination: 'splide__pagination v-splide-pagination',
      page: 'splide__pagination__page v-splide-pagination-page',
    },
    breakpoints,
  }
  if (target.dataset.autoplay === 'true') {
    options.autoplay = 'pause'
    options.intersection = { rootMargin: '5% 0px', inView: { autoplay: true }, outView: { autoplay: false } }
  }
  if (target.dataset.isNavigation) options.isNavigation = target.dataset.isNavigation === 'true'

  const root = target.querySelector<HTMLElement>('.splide')!
  const splide = new Splide(root, options)
  if (ui) splide.on('pagination:mounted', (data: { list: HTMLElement }) => { ui.insertAdjacentElement('beforeend', data.list) })
  const syncSel = target.dataset.sync
  if (syncSel) {
    const syncTarget = document.querySelector<HTMLElement>(syncSel)
    if (syncTarget) splide.sync(mountSlider(syncTarget, instances))
  }
  splide.mount({ Intersection })
  instances.push(splide)
  return splide
}

export function initSliders(root: ParentNode = document): Cleanup {
  const instances: Splide[] = []
  root.querySelectorAll<HTMLElement>('.js-splide').forEach((t) => mountSlider(t, instances))
  return () => instances.reverse().forEach((s) => s.destroy(true))
}
