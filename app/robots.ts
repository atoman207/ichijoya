import type { MetadataRoute } from 'next'
import { ALLOW_INDEXING, SITE_URL } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  if (!ALLOW_INDEXING) return { rules: { userAgent: '*', disallow: '/' } }
  // the rules WordPress prints
  return {
    rules: { userAgent: '*', disallow: '/wp/wp-admin/', allow: '/wp/wp-admin/admin-ajax.php' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
