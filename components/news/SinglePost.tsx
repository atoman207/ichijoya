import { notFound } from 'next/navigation'
import Hero, { HERO } from '@/components/layout/Hero'
import SiteShell from '@/components/layout/SiteShell'
import { getCategories, getPostBySlug } from '@/lib/wp'
import PostArticle from './PostArticle'
import ShareWidgets from './ShareWidgets'
import Sidebar from './Sidebar'

/**
 * single.php. The share buttons keep the theme's markup as published on the WordPress site
 * (including the sample data-href / tweet text the theme ships with).
 */
export default async function SinglePost({ slug }: { slug: string }) {
  const [post, cats] = await Promise.all([getPostBySlug(slug), getCategories()])
  if (!post) notFound()
  return (
    <SiteShell bodyClass="l-body--2col" hero={<Hero label={HERO.news} as="div" />} side={<Sidebar />} pageTop wpBlockLibrary>
      <main className="">
        <PostArticle post={post} cats={cats} single>
          <div className="u-pt-30 u-pb-20">
            <div className="c-share">
              <p className="c-share__label">
                <svg width="16" height="16" className="c-icon c-share__label-i" aria-hidden="true">
                  <use xlinkHref="/assets/svg/sprite.svg#i-share"></use>
                </svg>
                {" この記事をシェアする "}
              </p>
              <div className="c-share__list">
                <div className="c-share__list-item">
                  <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&src=sdkpreparse" className="fb-xfbml-parse-ignore">
                      シェア
                    </a>
                  </div>
                  <div id="fb-root"></div>
                </div>
                <div className="c-share__list-item">
                  <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world">
                    Tweet
                  </a>
                </div>
                <div className="c-share__list-item">
                  <div className="line-it-button" data-lang="ja" data-type="share-a" data-ver="3" data-url="https://social-plugins.line.me/ja/how_to_install#lineitbutton" data-color="default" data-size="small" data-count="false" style={{ display: 'none' }}></div>
                </div>
              </div>
            </div>
          </div>
        </PostArticle>
        <div className="p-pager">
          <div className="p-pager__home">
            <a href="../" className="p-pager-btn">
              <span className="p-pager-btn__label">お知らせ・コラム一覧</span>
              <svg width="16" height="16" className="c-icon p-pager-btn__i" aria-hidden="true">
                <use xlinkHref="/assets/svg/sprite.svg#i-arrow-right-circle"></use>
              </svg>
            </a>
          </div>
        </div>
      </main>
      <ShareWidgets />
    </SiteShell>
  )
}
