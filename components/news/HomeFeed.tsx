import { decodeEntities } from '@/lib/entities'
import { toPath } from '@/lib/html'
import { getCategories, getPostList } from '@/lib/wp'
import { dotDate, isoDate, postCategoryNames } from './PostArticle'

/** Front page "お知らせ・コラム" feed: sticky posts first, then the five newest posts. */
export default async function HomeFeed() {
  const [{ posts }, cats] = await Promise.all([getPostList({ page: 1, perPage: 5, stickyFirst: true }), getCategories()])
  return posts.map((post) => (
    <article className="p-feed-list" key={post.id}>
      <a href={toPath(post.link)} className="p-feed-link">
        <div className="c-flex u-items-center M:u-wrap-no M:u-flex-00auto">
          <time className="p-feed-time M:u-mr-20 u-mr-10" dateTime={isoDate(post.date)}>
            {dotDate(post.date)}
          </time>
          <ul className="c-list p-feed-tags M:u-mr-20 u-mr-10">
            {postCategoryNames(post, cats).map((name, i) => (
              <li className="p-feed-tag" key={i}>
                <span className="p-feed-tag__link">{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="p-feed-title M:u-mt-0 u-mt-10">{decodeEntities(post.title)}</h3>
      </a>
    </article>
  ))
}
