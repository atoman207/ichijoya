'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { markCurrentLinks } from '@/lib/theme/currentLinks'
import { initDrawer } from '@/lib/theme/drawer'
import { scrollToCurrentHash } from '@/lib/theme/smoothScroll'
import { initViewOver } from '@/lib/theme/viewOver'

/**
 * Behaviour bound to the page skeleton: drawer menu, sticky nav / page-top observers, current-page
 * link marking and the initial #hash scroll. Rendered inside <SiteShell/>, so it starts once that
 * markup is in the DOM, including on pages that stream in behind a Suspense boundary (search).
 */
export default function ShellRuntime() {
  const pathname = usePathname()
  useEffect(() => {
    const cleanups = [initDrawer(), initViewOver()]
    markCurrentLinks()
    scrollToCurrentHash()
    return () => cleanups.reverse().forEach((c) => c())
  }, [pathname])
  return null
}
