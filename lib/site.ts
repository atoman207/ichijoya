import { SITE_DESCRIPTION, SITE_NAME } from './site-meta'

export { SITE_DESCRIPTION, SITE_NAME }

/** WordPress install that keeps serving posts, editable pages and media (headless CMS). */
export const WP_URL = (process.env.WP_URL || 'https://ichijoya.co.jp').replace(/\/+$/, '')
export const WP_API = `${WP_URL}/wp-json/wp/v2`

/** Public origin of this site, used for canonical URLs, og:url and the sitemap. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ichijoya.co.jp').replace(/\/+$/, '')

/** WordPress "timezone_string" is Asia/Tokyo (no DST), so post dates carry +09:00. */
export const WP_TZ_OFFSET = '+09:00'

export const OG_IMAGE = '/media/og-img.png'

/** Posts per page on /news/, category archives and search (WordPress "posts_per_page"). */
export const POSTS_PER_PAGE = 15

export const ALLOW_INDEXING = process.env.ALLOW_INDEXING === 'true'
