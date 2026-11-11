'use client'

import { useLayoutEffect } from 'react'
import { initContactForms } from '@/lib/theme/cf7'
import type { Cleanup } from '@/lib/theme/dom'
import { initModals } from '@/lib/theme/modal'
import { initReviews } from '@/lib/theme/reviews'
import { initSliders } from '@/lib/theme/slider'

type Props = { modals?: boolean; sliders?: boolean; contact?: boolean; reviews?: boolean }

/**
 * Page-level modules of the theme script. Runs as a layout effect so modules that move DOM nodes
 * (modals, sliders) are torn down before React removes the page. (The key visual fader starts from
 * <ThemeBoot/>, before hydration, as early as with the theme.)
 */
export default function PageRuntime({ modals, sliders, contact, reviews }: Props) {
  useLayoutEffect(() => {
    const cleanups: Cleanup[] = []
    if (sliders) cleanups.push(initSliders(document))
    if (modals) cleanups.push(initModals(document))
    if (reviews) cleanups.push(initReviews(document))
    // the contact page's inline script: location = '…/contact/thanks/' on wpcf7mailsent
    if (contact) cleanups.push(initContactForms(document, () => { window.location.href = '/contact/thanks/' }))
    return () => cleanups.reverse().forEach((c) => c())
  }, [modals, sliders, contact, reviews])
  return null
}
