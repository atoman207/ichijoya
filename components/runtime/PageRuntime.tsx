'use client'

import { useLayoutEffect } from 'react'
import { initContactForms } from '@/lib/theme/cf7'
import type { Cleanup } from '@/lib/theme/dom'
import { initFader } from '@/lib/theme/fader'
import { initModals } from '@/lib/theme/modal'
import { initReviews } from '@/lib/theme/reviews'
import { initSliders } from '@/lib/theme/slider'

type Props = { fader?: boolean; modals?: boolean; sliders?: boolean; contact?: boolean; reviews?: boolean }

/**
 * Page-level modules of the theme script. Runs as a layout effect so modules that move DOM nodes
 * (modals, sliders) are torn down before React removes the page on navigation.
 */
export default function PageRuntime({ fader, modals, sliders, contact, reviews }: Props) {
  useLayoutEffect(() => {
    const cleanups: Cleanup[] = []
    if (sliders) cleanups.push(initSliders(document))
    if (modals) cleanups.push(initModals(document))
    if (fader) {
      const el = document.getElementById('kv-fader')
      if (el) cleanups.push(initFader(el))
    }
    if (reviews) cleanups.push(initReviews(document))
    // the contact page's inline script: location = '…/contact/thanks/' on wpcf7mailsent
    if (contact) cleanups.push(initContactForms(document, () => { window.location.href = '/contact/thanks/' }))
    return () => cleanups.reverse().forEach((c) => c())
  }, [fader, modals, sliders, contact, reviews])
  return null
}
