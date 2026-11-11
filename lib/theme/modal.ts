import { htmlEl, resizeEventName, scrollingEl, type Cleanup } from './dom'

/*
 * Modal dialogs (LogicModal chunk). Every [data-modal] trigger gets its own .p-modal container
 * appended to <body> (after #body, which the ".p-door ~ .p-modal" rules rely on). Opening moves the
 * [data-modal-target] block into the dialog; closing waits for the 550ms CSS transition.
 */
const FOCUSABLE =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])'

function setupModal(trigger: HTMLElement): Cleanup {
  const link = trigger.getAttribute('data-modal-link')
  const modal = document.createElement('div')
  const frame = document.createElement('div')
  const close = document.createElement('button')
  const content = document.createElement('div')
  const filter = document.createElement('div')
  modal.setAttribute('aria-hidden', 'true')
  modal.setAttribute('id', 'modal')
  modal.classList.add('p-modal', 'js-modal')
  frame.classList.add('p-modal__frame', 'js-moda-frame')
  close.setAttribute('aria-label', 'ポップアップを閉じる')
  close.setAttribute('type', 'button')
  close.classList.add('p-modal__close', 'js-modal-close')
  close.insertAdjacentHTML('beforeend', '<div class="p-modal__close-label"></div>')
  content.setAttribute('role', 'dialog')
  content.setAttribute('aria-modal', 'true')
  content.classList.add('p-modal__content', 'js-modal-content')
  filter.classList.add('js-modal-filter')
  frame.append(close, content)
  modal.append(frame, filter)
  document.body.appendChild(modal)

  // preparation()
  const initial = document.querySelector<HTMLElement>(`[data-modal-target="${link}"]`)
  const home = initial ? { el: initial, parent: initial.parentNode as Node, next: initial.nextSibling } : null
  if (initial) initial.style.display = 'none'

  // like the theme: the block is looked up again on every open and stays set after closing, and
  // `status` never goes back to false, so closing keeps the frame height during the fade-out
  let target: HTMLElement | null = null
  let status = false
  let isOpen = false
  let scrollPos = 0
  let touchY: number | null = null
  const closeTimers = new Set<ReturnType<typeof setTimeout>>()

  const calcHeight = () => {
    frame.style.height = content.scrollHeight >= window.innerHeight ? '100%' : ''
    if (!status) frame.style.height = ''
  }
  const onResize = () => {
    frame.style.height = content.scrollHeight >= window.innerHeight ? '100%' : ''
  }
  const onTouchStart = (e: TouchEvent) => { if (e.targetTouches.length <= 1) touchY = e.targetTouches[0].clientY }
  const onTouchMove = (e: TouchEvent) => {
    if (e.targetTouches.length > 1 || touchY === null) return
    const dy = e.targetTouches[0].clientY - touchY
    const atBottom = content.scrollHeight - content.scrollTop <= content.clientHeight
    if ((content.scrollTop === 0 && dy > 0) || (atBottom && dy < 0)) e.preventDefault()
  }
  const onTouchMoveBackdrop = (e: TouchEvent) => { if (e.targetTouches.length <= 1) e.preventDefault() }
  let firstF: HTMLElement | undefined
  let lastF: HTMLElement | undefined
  const onFirstKey = (e: KeyboardEvent) => { if (e.key === 'Tab' && e.shiftKey) { e.preventDefault(); lastF?.focus() } }
  const onLastKey = (e: KeyboardEvent) => { if (e.key === 'Tab' && !e.shiftKey) { e.preventDefault(); firstF?.focus() } }
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && document.querySelector('.js-modal:not([aria-hidden="true"])')) doClose()
  }

  const doClose = () => {
    const block = target
    if (!block) return
    isOpen = false
    // the theme puts the block back into the first trigger that links to it, not where it came from
    const link = block.getAttribute('data-modal-target')
    const holder = document.querySelector(`[data-modal][data-modal-link="${link}"]`)
    modal.setAttribute('aria-hidden', 'true')
    calcHeight()
    trigger.focus()
    const t = setTimeout(() => {
      closeTimers.delete(t)
      block.style.display = 'none'
      scrollingEl().scrollTop = scrollPos
      htmlEl().style.overflow = ''
      htmlEl().classList.remove('js-modal-opened')
      holder?.insertAdjacentElement('beforeend', block)
      content.removeEventListener('touchstart', onTouchStart)
      content.removeEventListener('touchmove', onTouchMove)
      filter.removeEventListener('touchmove', onTouchMoveBackdrop)
      window.removeEventListener(resizeEventName(), onResize)
    }, 550)
    closeTimers.add(t)
  }

  const open = (e: Event) => {
    e.preventDefault()
    target = document.querySelector<HTMLElement>(`[data-modal-target="${trigger.getAttribute('data-modal-link')}"]`)
    // fixedBodyPosition() runs before the block is checked
    scrollPos = scrollingEl().scrollTop
    htmlEl().classList.add('js-modal-opened')
    htmlEl().style.overflow = 'hidden'
    if (!target) return
    status = true
    isOpen = true
    target.style.display = ''
    modal.removeAttribute('aria-hidden')
    content.appendChild(target)
    calcHeight()
    const focusables = modal.querySelectorAll<HTMLElement>(FOCUSABLE)
    firstF?.removeEventListener('keydown', onFirstKey)
    lastF?.removeEventListener('keydown', onLastKey)
    firstF = focusables[0]
    lastF = focusables[focusables.length - 1]
    firstF?.focus()
    firstF?.addEventListener('keydown', onFirstKey)
    lastF?.addEventListener('keydown', onLastKey)
    htmlEl().classList.add('js-modal-open')
    content.addEventListener('touchstart', onTouchStart)
    content.addEventListener('touchmove', onTouchMove)
    filter.addEventListener('touchmove', onTouchMoveBackdrop)
    window.addEventListener(resizeEventName(), onResize)
  }

  trigger.addEventListener('click', open)
  modal.addEventListener('keydown', onKeydown)
  close.addEventListener('click', doClose)
  close.setAttribute('aria-controls', 'modal')
  filter.addEventListener('click', doClose)
  filter.setAttribute('tabindex', '-1')

  return () => {
    closeTimers.forEach(clearTimeout)
    trigger.removeEventListener('click', open)
    window.removeEventListener(resizeEventName(), onResize)
    if (isOpen) {
      htmlEl().style.overflow = ''
      htmlEl().classList.remove('js-modal-opened')
    }
    // back to the server-rendered position and style
    if (home) {
      home.parent.insertBefore(home.el, home.next && home.next.parentNode === home.parent ? home.next : null)
      home.el.style.display = ''
    }
    modal.remove()
  }
}

export function initModals(root: ParentNode = document): Cleanup {
  const cleanups = Array.from(root.querySelectorAll<HTMLElement>('[data-modal]')).map(setupModal)
  return () => {
    cleanups.forEach((c) => c())
    htmlEl().classList.remove('js-modal-open')
  }
}
