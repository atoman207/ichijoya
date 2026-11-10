import type { Metadata } from 'next'
import { ALLOW_INDEXING, OG_IMAGE, SITE_NAME, SITE_URL } from './site'

type Options = {
  /** Page title without the site name ("" for the front page). */
  title?: string
  /** The whole <title>, when it is not "title | site name" (paged front page). */
  fullTitle?: string
  /** Root-relative path of the page, used for og:url and the canonical link. */
  path: string
  description?: string
  type?: 'website' | 'article'
  /** WordPress omits the canonical link on archives, search and 404 pages. */
  canonical?: string | null
  robots?: string
}

/** Builds the same <head> metadata the WordPress theme prints for a page. */
export function pageMetadata({ title, fullTitle, path, description, type = 'article', canonical, robots = 'max-image-preview:large' }: Options): Metadata {
  const full = fullTitle ?? (title ? `${title} | ${SITE_NAME}` : SITE_NAME)
  const robotsMeta = ALLOW_INDEXING ? robots : 'noindex, nofollow'
  return {
    title: { absolute: full },
    description,
    alternates: canonical === null ? undefined : { canonical: canonical ?? path },
    openGraph: {
      locale: 'ja_JP',
      title: full,
      description,
      type,
      images: [OG_IMAGE],
      siteName: SITE_NAME,
      url: `${SITE_URL}${path}`,
    },
    twitter: { card: 'summary' },
    robots: robotsMeta,
  }
}
