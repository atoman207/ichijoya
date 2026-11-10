import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HomeView from '@/components/templates/HomeView'
import { pageMetadata } from '@/lib/metadata'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'

/*
 * "/page/N/" on WordPress (a static front page with a page number) shows the front page again,
 * with "| ページ N" in the title and WordPress's canonical link "/N/". proxy.ts sends "/page/1/",
 * "/page/0/" and zero-padded numbers to their canonical URLs, and "/page/N/?s=…" to the search.
 */
export const ensureStatic = 'navigation'

export function generateStaticParams() {
  return [{ n: '2' }]
}

const valid = (n: string) => /^[1-9]\d*$/.test(n) && n !== '1'

export async function generateMetadata({ params }: PageProps<'/page/[n]'>): Promise<Metadata> {
  const { n } = await params
  if (!valid(n)) return {}
  return pageMetadata({ path: '/', fullTitle: `${SITE_NAME} | ページ ${n}`, description: SITE_DESCRIPTION, type: 'website', canonical: `/${n}/` })
}

export default async function PagedFrontPage({ params }: PageProps<'/page/[n]'>) {
  const { n } = await params
  if (!valid(n)) notFound()
  return <HomeView />
}
