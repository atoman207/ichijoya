import type { MetadataRoute } from 'next'
import { toPath } from '@/lib/html'
import { SITE_URL } from '@/lib/site'
import { getAllPostLinks, getCategories } from '@/lib/wp'

const PAGES = ['/', '/about/', '/change/', '/door/', '/line/', '/news/', '/recruit/', '/privacy/', '/contact/']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, cats] = await Promise.all([getAllPostLinks(), getCategories()])
  return [
    ...PAGES.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...cats.map((c) => ({ url: `${SITE_URL}${toPath(c.link)}` })),
    ...posts.map((p) => ({ url: `${SITE_URL}${toPath(p.link)}`, lastModified: p.modified })),
  ]
}
