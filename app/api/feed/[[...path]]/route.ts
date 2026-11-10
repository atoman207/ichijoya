import { notFound } from 'next/navigation'
import { getWpFeed } from '@/lib/feed'

/** RSS feeds at the WordPress URLs (rewritten here in next.config.ts). */
export async function GET(_request: Request, { params }: RouteContext<'/api/feed/[[...path]]'>) {
  const { path = [] } = await params
  const feed = await getWpFeed(path.map((s) => encodeURIComponent(decodeURIComponent(s))).join('/'))
  if (!feed) notFound()
  return new Response(feed, { headers: { 'Content-Type': 'application/rss+xml; charset=UTF-8' } })
}
