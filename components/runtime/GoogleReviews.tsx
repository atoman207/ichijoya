import { rewriteWpHtml } from '@/lib/html'
import { getGoogleReviewWidgets } from '@/lib/wp'

/**
 * A "Widget for Google Reviews" block as rendered by WordPress (refreshed hourly).
 * The wrapper uses display:contents so the widget keeps its original place in the layout.
 */
export default async function GoogleReviews({ id }: { id: string }) {
  const widgets = await getGoogleReviewWidgets()
  const html = widgets[id]
  if (!html) return null
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: rewriteWpHtml(html) }} />
}
