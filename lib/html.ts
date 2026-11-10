import { WP_URL } from './site'

const THEME = '/wp/wp-content/themes/ichijoya_2022/'
const PLUGINS = '/wp/wp-content/plugins/'

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')
}

const origin = escapeRe(WP_URL)
const themeAssets = new RegExp(`${origin}${escapeRe(THEME)}(assets|assets-theme)/`, 'g')
const plugins = new RegExp(`${origin}${escapeRe(PLUGINS)}`, 'g')
// Links to pages of the site (not to /wp/ internals such as uploads) become root-relative.
const siteLinks = new RegExp(`(href|action)=(["'])${origin}(/(?!wp/)[^"']*)?\\2`, 'g')

/**
 * Rewrites HTML that comes from WordPress (post content, editor pages, widgets) so theme and
 * plugin assets load from this app and internal links stay on this site. Media library files
 * (/wp/wp-content/uploads/) keep pointing at WordPress.
 */
export function rewriteWpHtml(html: string): string {
  return html
    .replace(themeAssets, '/$1/')
    .replace(plugins, '/plugins/')
    .replace(siteLinks, (_m, attr: string, q: string, path?: string) => `${attr}=${q}${path || '/'}${q}`)
}

/** Converts an absolute WordPress permalink into a root-relative path for this site. */
export function toPath(link: string): string {
  if (link.startsWith(WP_URL)) return link.slice(WP_URL.length) || '/'
  try {
    const u = new URL(link)
    return u.pathname + u.search
  } catch {
    return link
  }
}
