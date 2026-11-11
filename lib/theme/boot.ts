import { markCurrentLinks } from './currentLinks'
import { initFader } from './fader'

/*
 * The part of the theme script that WordPress runs while the page is parsed: main.bundle.js is a
 * plain <script> at the end of <body>, so the current-link classes, the contact form's agree state
 * and the `complete` class are in place right after the first paint, and the key visual fader
 * (a lazily loaded chunk) starts around DOMContentLoaded.
 *
 * These steps only change attributes, never the element structure, so they can run before React
 * hydrates the page (production React does not touch attributes while hydrating). <ThemeBoot/>
 * prints them as an inline script at the same place as the theme; development builds run them
 * from <ThemeRuntime/> after hydration instead, because React's development checks would report
 * the changed attributes.
 */

const FLAG = '__ichijoyaBoot'

/**
 * The agree-to-submit state the theme gives the contact form on load ("is-desabled" until the box
 * is checked). The theme also disables the submit button, but Contact Form 7 enables it again a
 * moment later, so only the classes stay. Self-contained: inlined with toString().
 */
export function markAgreeState(): void {
  document.querySelectorAll('[data-form="cf7"]').forEach((wrap) => {
    const check = wrap.querySelector('[data-cf-agree="check"]')
    const box = check?.querySelector<HTMLInputElement>('input[type="checkbox"]')
    const submit = wrap.querySelector('[data-cf-agree="submit"]')
    if (!check || !box || !submit) return
    check.classList.toggle('is-desabled', !box.checked)
    submit.classList.toggle('is-desabled', !box.checked)
  })
}

/** Source of the inline script <ThemeBoot/> prints at the end of <body>. */
export function bootScript(): string {
  return [
    `(function(){if(window.${FLAG})return;window.${FLAG}=1;`,
    `(${markCurrentLinks.toString()})();`,
    `(${markAgreeState.toString()})();`,
    `document.documentElement.classList.add('complete');`,
    `var f=document.getElementById('kv-fader');`,
    `if(f){var s=function(){(${initFader.toString()})(f)};`,
    `if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',s);else s()}`,
    `})();`,
  ].join('')
}

/** The same steps after hydration; a no-op when <ThemeBoot/> already ran them. */
export function themeBoot(): void {
  const w = window as unknown as Record<string, unknown>
  if (w[FLAG]) return
  w[FLAG] = 1
  markCurrentLinks()
  markAgreeState()
  document.documentElement.classList.add('complete')
  const fader = document.getElementById('kv-fader')
  if (!fader) return
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initFader(fader))
  else initFader(fader)
}
