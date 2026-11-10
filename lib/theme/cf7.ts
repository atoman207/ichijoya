import type { Cleanup } from './dom'

/*
 * Contact Form 7 (5.6) front-end behaviour plus the theme's form helpers from main.bundle.js:
 *  - [data-form="cf7"] agree checkbox gates the submit button (is-desabled)
 *  - [data-toHarfNum] converts full-width digits on blur, [data-inputCopyText] mirrors a value
 *  - leaving a modified form asks for confirmation (beforeunload)
 *  - CF7 status classes, spinner, inline validation tips (schema rules, validated on change)
 *  - submission goes to /api/contact; on "mail_sent" the visitor is sent to /contact/thanks/
 */

export type Cf7Response = {
  contact_form_id?: number
  status: string
  message: string
  posted_data_hash?: string
  into?: string
  invalid_fields?: { field?: string; into?: string; message: string; idref?: string | null; error_id?: string }[]
}
type Rule = { rule: string; field: string; error: string; threshold?: number | string }

const STATUS = new Map([
  ['init', 'init'], ['validation_failed', 'invalid'], ['acceptance_missing', 'unaccepted'], ['spam', 'spam'],
  ['aborted', 'aborted'], ['mail_sent', 'sent'], ['mail_failed', 'failed'], ['submitting', 'submitting'],
  ['resetting', 'resetting'], ['validating', 'validating'], ['payment_required', 'payment-required'],
])

function setStatus(form: HTMLFormElement, raw: string) {
  let s = STATUS.get(raw) ?? raw
  if (![...STATUS.values()].includes(s)) s = `custom-${s.replace(/[^0-9a-z]+/i, ' ').trim().replace(/\s+/, '-')}`
  const prev = form.getAttribute('data-status')
  form.setAttribute('data-status', s)
  form.classList.add(s)
  if (prev && prev !== s) form.classList.remove(prev)
  return s
}

// --- SWV validators (same rules as CF7's client-side schema validation)
function isEmail(value: string) {
  const text = value.trim()
  const at = text.lastIndexOf('@')
  if (at < 1) return false
  const local = text.slice(0, at)
  const domain = text.slice(at + 1)
  if (!/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(local)) return false
  if (/\.{2,}/.test(domain)) return false
  if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(domain)) return false
  const subs = domain.split('.')
  if (subs.length < 2) return false
  return subs.every((s) => !/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(s) && /^[a-z0-9-]+$/i.test(s))
}
const isTel = (v: string) => /^[+]?[0-9]+$/.test(v.trim().replaceAll(/[()/.*#\s-]+/g, ''))

export function checkRule(rule: Rule, values: string[]): boolean {
  const filled = values.filter((v) => v !== '')
  switch (rule.rule) {
    case 'required': return filled.length > 0
    case 'email': return filled.every(isEmail)
    case 'tel': return filled.every(isTel)
    case 'maxlength': return filled.reduce((n, v) => n + v.length, 0) <= Number(rule.threshold)
    case 'minlength': return filled.reduce((n, v) => n + v.length, 0) >= Number(rule.threshold) || filled.length === 0
    default: return true
  }
}

export function initContactForms(root: ParentNode, onSent: () => void): Cleanup {
  const cleanups: Cleanup[] = []
  const on = (el: EventTarget, type: string, fn: EventListener, opts?: boolean | AddEventListenerOptions) => {
    el.addEventListener(type, fn, opts)
    cleanups.push(() => el.removeEventListener(type, fn, opts))
  }

  // --- theme: agree checkbox gating
  root.querySelectorAll<HTMLElement>('[data-form="cf7"]').forEach((wrap) => {
    const check = wrap.querySelector<HTMLElement>('[data-cf-agree="check"]')
    const box = check?.querySelector<HTMLInputElement>('input[type="checkbox"]')
    const submitWrap = wrap.querySelector<HTMLElement>('[data-cf-agree="submit"]')
    const submit = submitWrap?.querySelector<HTMLInputElement>('[type="submit"]')
    if (!check || !box || !submitWrap || !submit) return
    const apply = () => {
      const ok = box.checked
      check.classList.toggle('is-desabled', !ok)
      submitWrap.classList.toggle('is-desabled', !ok)
      if (ok) submit.removeAttribute('disabled')
      else submit.setAttribute('disabled', 'disabled')
    }
    on(box, 'change', apply)
    apply()
  })

  // --- theme: full-width digits -> half-width
  root.querySelectorAll<HTMLElement>('[data-toHarfNum],[data-toharfnum]').forEach((el) => {
    const input = document.getElementById(el.dataset.toharfnum ?? '') as HTMLInputElement | null
    if (!input) return
    on(input, 'blur', () => {
      input.value = input.value.replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 65248)).replace(/[^\d]/g, '')
    })
  })

  // --- theme: mirror an input value into another element
  const copy = root.querySelector<HTMLElement>('[data-inputCopyText],[data-inputcopytext]')
  if (copy) {
    const out = document.getElementById(copy.dataset.inputcopytext ?? '')
    const input = copy.tagName === 'INPUT' ? (copy as HTMLInputElement) : copy.querySelector('input')
    if (out && input) {
      on(input, 'input', () => { out.textContent = input.value })
      out.textContent = input.value
    }
  }

  // --- theme: confirm before leaving a modified form
  const guarded = root.querySelector<HTMLFormElement>('[data-form] form')
  let guardOn = false
  const beforeUnload = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = '' }
  if (guarded) {
    guarded.querySelectorAll('input, select, textarea').forEach((el) => on(el, 'change', () => {
      if (!guardOn) { window.addEventListener('beforeunload', beforeUnload); guardOn = true }
    }))
    on(guarded, 'submit', () => window.removeEventListener('beforeunload', beforeUnload))
  }
  cleanups.push(() => window.removeEventListener('beforeunload', beforeUnload))

  // --- Contact Form 7
  root.querySelectorAll<HTMLFormElement>('.wpcf7 > form').forEach((form) => {
    const parent = form.closest('.wpcf7') as HTMLElement
    const fd = new FormData(form)
    const unitTag = String(fd.get('_wpcf7_unit_tag') ?? '')
    let schema: Rule[] = []

    const ak = form.querySelector<HTMLInputElement>('input[name="_wpcf7_ak_js"]')
    if (ak) ak.value = String(Date.now())

    form.querySelectorAll('.has-spinner').forEach((el) => el.insertAdjacentHTML('afterend', '<span class="wpcf7-spinner"></span>'))
    cleanups.push(() => form.querySelectorAll('.wpcf7-spinner').forEach((s) => s.remove()))

    if (form.querySelector('.wpcf7-acceptance') && !form.classList.contains('wpcf7-acceptance-as-validation')) {
      const apply = () => {
        let ok = true
        form.querySelectorAll('.wpcf7-acceptance').forEach((el) => {
          if (!ok || el.classList.contains('optional')) return
          const box = el.querySelector<HTMLInputElement>('input[type="checkbox"]')
          if (!box) return
          if ((el.classList.contains('invert') && box.checked) || (!el.classList.contains('invert') && !box.checked)) ok = false
        })
        form.querySelectorAll<HTMLInputElement>('.wpcf7-submit').forEach((b) => { b.disabled = !ok })
      }
      apply()
      on(form, 'change', apply)
      on(form, 'wpcf7reset', apply)
    }

    const srStatus = () => parent.querySelector<HTMLElement>('.screen-reader-response [role="status"]')
    const srList = () => parent.querySelector<HTMLElement>('.screen-reader-response ul')
    const errorId = (field: string) => `${unitTag}-ve-${field}`

    const clearField = (field: string) => {
      parent.querySelector(`.screen-reader-response ul li#${CSS.escape(errorId(field))}`)?.remove()
      form.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${field}"]`).forEach((wrap) => {
        wrap.querySelector('.wpcf7-not-valid-tip')?.remove()
        wrap.querySelectorAll('[aria-invalid]').forEach((el) => el.setAttribute('aria-invalid', 'false'))
        wrap.querySelectorAll<HTMLInputElement>('.wpcf7-form-control').forEach((el) => {
          el.removeAttribute('aria-describedby')
          el.classList.remove('wpcf7-not-valid')
          el.setCustomValidity?.('')
        })
      })
    }
    const setFieldError = (field: string, message: string) => {
      const id = errorId(field)
      const control = form.querySelector<HTMLElement>(`.wpcf7-form-control-wrap[data-name="${field}"] .wpcf7-form-control`)
      const li = document.createElement('li')
      li.setAttribute('id', id)
      if (control?.id) {
        const a = document.createElement('a')
        a.href = `#${control.id}`
        a.textContent = message
        li.appendChild(a)
      } else li.textContent = message
      srList()?.appendChild(li)
      form.querySelectorAll<HTMLElement>(`.wpcf7-form-control-wrap[data-name="${field}"]`).forEach((wrap) => {
        if (form.getAttribute('data-status') === 'validating' && !wrap.dataset.underValidation) return
        const tip = document.createElement('span')
        tip.classList.add('wpcf7-not-valid-tip')
        tip.setAttribute('aria-hidden', 'true')
        tip.textContent = message
        wrap.appendChild(tip)
        wrap.querySelectorAll('[aria-invalid]').forEach((el) => el.setAttribute('aria-invalid', 'true'))
        wrap.querySelectorAll<HTMLInputElement>('.wpcf7-form-control').forEach((el) => {
          el.classList.add('wpcf7-not-valid')
          el.setAttribute('aria-describedby', id)
          el.setCustomValidity?.(message)
        })
      })
    }
    const clearResponse = () => {
      form.querySelectorAll<HTMLElement>('.wpcf7-form-control-wrap').forEach((w) => { if (w.dataset.name) clearField(w.dataset.name) })
      const st = srStatus()
      if (st) st.innerText = ''
      form.querySelectorAll<HTMLElement>('.wpcf7-response-output').forEach((o) => { o.innerText = '' })
    }
    const fieldValues = (name: string) => {
      const data = new FormData(form)
      return data.getAll(name).map((v) => (typeof v === 'string' ? v : v.name))
    }

    // validation on change (CF7 SWV): validates every field up to the one that changed
    on(form, 'change', (e) => {
      const target = e.target as HTMLInputElement
      if (!target.closest('.wpcf7-form-control') || !schema.length) return
      const names: string[] = []
      for (const wrap of Array.from(form.querySelectorAll<HTMLElement>('.wpcf7-form-control-wrap'))) {
        if (!wrap.dataset.name) continue
        names.push(wrap.dataset.name)
        wrap.setAttribute('data-under-validation', '1')
        if (wrap.dataset.name === target.name.replace(/\[.*\]$/, '')) break
      }
      const rules = schema.filter((r) => names.includes(r.field))
      if (!rules.length) {
        form.querySelectorAll('.wpcf7-form-control-wrap[data-under-validation]').forEach((w) => w.removeAttribute('data-under-validation'))
        return
      }
      const before = form.getAttribute('data-status') || 'init'
      setStatus(form, 'validating')
      const failed: string[] = []
      for (const r of rules) {
        if (failed.includes(r.field)) continue
        clearField(r.field)
        if (!checkRule(r, fieldValues(r.field))) { setFieldError(r.field, r.error); failed.push(r.field) }
      }
      setStatus(form, before)
      form.querySelectorAll('.wpcf7-form-control-wrap[data-under-validation]').forEach((w) => w.removeAttribute('data-under-validation'))
    })

    on(form, 'submit', async (e) => {
      e.preventDefault()
      const submitter = (e as SubmitEvent).submitter as HTMLInputElement | null
      const body = new FormData(form)
      if (submitter?.name) body.append(submitter.name, submitter.value)
      clearResponse()
      setStatus(form, 'submitting')
      let res: Cf7Response
      try {
        const r = await fetch('/api/contact/', { method: 'POST', body, headers: { Accept: 'application/json' } })
        res = (await r.json()) as Cf7Response
      } catch (err) {
        console.error(err)
        return
      }
      const status = setStatus(form, res.status)
      const detail = { contactFormId: res.contact_form_id, unitTag, status: res.status, apiResponse: res }
      if (['invalid', 'unaccepted', 'spam', 'aborted'].includes(status)) form.dispatchEvent(new CustomEvent(`wpcf7${status}`, { bubbles: true, detail }))
      else if (['sent', 'failed'].includes(status)) form.dispatchEvent(new CustomEvent(`wpcf7mail${status}`, { bubbles: true, detail }))
      form.dispatchEvent(new CustomEvent('wpcf7submit', { bubbles: true, detail }))
      if (res.posted_data_hash) {
        const h = form.querySelector<HTMLInputElement>('input[name="_wpcf7_posted_data_hash"]')
        if (h) h.value = res.posted_data_hash
      }
      if (res.status === 'mail_sent') form.reset()
      res.invalid_fields?.forEach((f) => {
        const field = f.field ?? f.into?.match(/data-name\s*=\s*"?([^"\]\s]+)/)?.[1] ?? ''
        if (field) setFieldError(field, f.message)
      })
      srStatus()?.insertAdjacentText('beforeend', res.message)
      form.querySelectorAll<HTMLElement>('.wpcf7-response-output').forEach((o) => { o.innerText = res.message })
      if (res.status === 'mail_sent') {
        window.removeEventListener('beforeunload', beforeUnload)
        const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
        if (gtag) {
          const path = window.location.href.replace(`${window.location.protocol}//${window.location.host}`, '').replace(/\/+/g, '/')
          gtag('event', 'wpcf7mailsent', { event_category: `フォーム送信(${res.contact_form_id})`, event_label: path, value: 10000.0, currency: 'JPY' })
          gtag('event', 'mail', { event_category: 'wpcf7mailsent', event_label: '/contact/' })
        }
        onSent()
      }
    })
    on(form, 'reset', () => {
      // wpcf7.reset(): back to "init" (or "sent" right after a successful submission)
      setTimeout(() => form.dispatchEvent(new CustomEvent('wpcf7reset', { bubbles: true })), 0)
    })

    // validation schema (same source as CF7: the form's SWV schema, served through /api/contact)
    const ac = new AbortController()
    cleanups.push(() => ac.abort())
    fetch('/api/contact/schema/', { signal: ac.signal })
      .then((r) => r.json())
      .then((j: { rules?: Rule[] }) => { schema = j.rules ?? [] })
      .catch(() => {})
  })

  return () => cleanups.splice(0).reverse().forEach((c) => c())
}
