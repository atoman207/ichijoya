import type { ReactNode } from 'react'
import { decodeEntities } from '@/lib/entities'
import { rewriteWpHtml, toPath } from '@/lib/html'
import { WP_TZ_OFFSET } from '@/lib/site'
import type { WpCategory, WpPost } from '@/lib/wp'

export const dotDate = (date: string) => date.slice(0, 10).replaceAll('-', '.')
export const isoDate = (date: string) => `${date}${WP_TZ_OFFSET}`

export function postCategoryNames(post: WpPost, cats: WpCategory[]) {
  return post.categories.map((id) => cats.find((c) => c.id === id)).filter((c): c is WpCategory => !!c).map((c) => decodeEntities(c.name))
}

/** One post as printed by the news templates (index, archives, search and single). */
export default function PostArticle({ post, cats, single = false, children }: { post: WpPost; cats: WpCategory[]; single?: boolean; children?: ReactNode }) {
  const title = decodeEntities(post.title)
  return (
    <article>
      <div className="u-b u-border-theme u-border-solid u-border-2 u-pl-20 u-pr-20 M:u-pl-60 M:u-pr-60 u-pt-35 u-pb-20 u-radius-16 u-mb-30">
        <div className="c-flex u-items-center M:u-wrap-no M:u-flex-00auto u-mb-10">
          <time className="p-feed-time M:u-mr-20 u-mr-10" dateTime={isoDate(post.date)}>
            {dotDate(post.date)}
          </time>
          <ul className="c-list p-feed-tags M:u-mr-20 u-mr-10  u-row  u-wrap">
            {postCategoryNames(post, cats).map((name, i) => (
              <li className="p-feed-tag" key={i}>
                <span className="p-feed-tag__link">{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="p-heading-bicolor-underline u-lh-14 u-size-30 u-pl-0 u-pb-25 u-mb-30">
          {single ? (
            title
          ) : (
            <a className="" href={toPath(post.link)}>
              {title}
            </a>
          )}
        </h2>
        <div className="c-editor" dangerouslySetInnerHTML={{ __html: rewriteWpHtml(post.content) }} />
        {children}
      </div>
    </article>
  )
}
