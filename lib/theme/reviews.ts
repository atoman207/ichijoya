import type { Cleanup } from './dom'

/*
 * Behaviour of the "Widget for Google Reviews" blocks (plugin public-main.js):
 * relative review dates, "read more" toggles, "next reviews" paging and the review popup.
 * Avatars carry data-src; the theme's lazy loader swaps them in immediately on load.
 */

// WPacTime "ago" format. The plugin has no Japanese strings, so a Japanese browser falls back to
// English exactly like on the WordPress site.
const EN = {
  second: 'just now',
  minute: '1m ago',
  minutes: (n: number) => `${Math.round(n)}m ago`,
  hour: '1h ago',
  hours: (n: number) => `${Math.round(n)}h ago`,
  day: 'a day ago',
  days: (n: number) => `${Math.round(n)} days ago`,
  month: 'a month ago',
  months: (n: number) => `${Math.round(n / 30)} months ago`,
  year: 'a year ago',
  years: (n: number) => `${Math.round(n)} years ago`,
}

export function timeAgo(ms: number, now = Date.now()) {
  const s = (now - ms) / 1000
  const m = s / 60, h = m / 60, d = h / 24, y = d / 365
  if (s < 45) return EN.second
  if (s < 90) return EN.minute
  if (m < 45) return EN.minutes(m)
  if (m < 90) return EN.hour
  if (h < 24) return EN.hours(h)
  if (h < 48) return EN.day
  if (d < 30) return EN.days(d)
  if (d < 60) return EN.month
  if (d < 365) return EN.months(d)
  if (y < 2) return EN.year
  return EN.years(y)
}

function loadImages(root: ParentNode) {
  root.querySelectorAll<HTMLImageElement>('img[data-src]').forEach((img) => {
    img.src = img.dataset.src ?? img.src
    img.removeAttribute('data-src')
    img.classList.add('js-lazyloaded')
  })
}

type Win = Window & {
  rplg_next_reviews?: (this: HTMLElement, name: string, count: number) => boolean
  rplg_leave_review_window?: (this: HTMLElement) => boolean
  rplg_load_imgs?: (el: ParentNode) => void
}

export function initReviews(root: ParentNode): Cleanup {
  const w = window as Win
  w.rplg_load_imgs = loadImages
  w.rplg_next_reviews = function (name, count) {
    const box = this.parentNode as HTMLElement
    const sel = `.wp-${name}-review.wp-${name}-hide`
    const hidden = box.querySelectorAll<HTMLElement>(sel)
    for (let i = 0; i < count && i < hidden.length; i++) {
      hidden[i].className = hidden[i].className.replace(`wp-${name}-hide`, ' ')
      loadImages(hidden[i])
    }
    if (box.querySelectorAll(sel).length < 1) box.removeChild(this)
    return false
  }
  w.rplg_leave_review_window = function () {
    const width = 620, height = 500
    const top = screen.height / 2 - height / 2
    const left = screen.width / 2 - width / 2
    window.open(this.getAttribute('href') ?? '', '', `location=1,status=1,resizable=yes,width=${width},height=${height},top=${top},left=${left}`)
    return false
  }

  loadImages(root)

  root.querySelectorAll<HTMLElement>('.wpac [data-time]').forEach((el) => {
    const cls = el.className
    let ms: number
    if (cls.includes('google')) ms = parseInt(el.getAttribute('data-time') ?? '0', 10) * 1000
    else if (cls.includes('facebook')) ms = new Date((el.getAttribute('data-time') ?? '').replace(/\+\d+$/, '')).getTime()
    else ms = new Date((el.getAttribute('data-time') ?? '').replace(/ /, 'T')).getTime()
    el.innerHTML = timeAgo(ms)
  })

  const toggles = Array.from(root.querySelectorAll<HTMLElement>('.wp-more-toggle'))
  toggles.forEach((t) => {
    t.onclick = () => {
      const prev = t.previousSibling
      if (prev?.previousSibling) t.parentNode?.removeChild(prev.previousSibling)
      if (prev instanceof HTMLElement) prev.className = ''
      t.textContent = ''
    }
  })
  return () => toggles.forEach((t) => { t.onclick = null })
}
