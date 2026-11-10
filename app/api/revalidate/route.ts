import { revalidateTag } from 'next/cache'

/**
 * On-demand refresh of WordPress content: POST /api/revalidate?secret=… (e.g. from a WordPress
 * "post published" webhook). Without it, content refreshes in the background every hour.
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET
  const given = new URL(request.url).searchParams.get('secret')
  if (!secret || given !== secret) return Response.json({ revalidated: false }, { status: 401 })
  revalidateTag('wp', 'max')
  return Response.json({ revalidated: true, now: Date.now() })
}
