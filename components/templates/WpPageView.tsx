import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import SiteShell from '@/components/layout/SiteShell'
import { decodeEntities } from '@/lib/entities'
import { rewriteWpHtml } from '@/lib/html'
import { pageMetadata } from '@/lib/metadata'
import { getPage } from '@/lib/wp'

type Props = {
  id: number
  hero: ReactNode
  /** Extra class on #body ("thanks" on /contact/thanks/, which hides the hero via page-thanks.css). */
  bodyClass?: string
  footerContact?: boolean
  transform?: (html: string) => string
  children?: ReactNode
}

/**
 * page.php: pages whose content is edited in WordPress (privacy, recruit, contact, thanks).
 * The editor content already contains the theme markup, so it is placed into #body-main as is.
 */
export default async function WpPageView({ id, hero, bodyClass, footerContact = true, transform = (h) => h, children }: Props) {
  const page = await getPage(id)
  if (!page) notFound()
  return (
    <SiteShell bodyClass={bodyClass} hero={hero} footerContact={footerContact} mainHtml={transform(rewriteWpHtml(page.content))}>
      {children}
    </SiteShell>
  )
}

export async function wpPageMetadata(id: number, path: string, robots?: string): Promise<Metadata> {
  const page = await getPage(id)
  return pageMetadata({ title: page ? decodeEntities(page.title) : '', path, robots })
}
