import { notFound } from 'next/navigation'
import Hero, { HERO } from '@/components/layout/Hero'
import SiteShell from '@/components/layout/SiteShell'
import { loadArchive, type NewsRoute } from '@/lib/news'
import Pagination from './Pagination'
import PostArticle from './PostArticle'
import Sidebar, { MobileSidebar } from './Sidebar'

/** index.php / archive templates of the news section: 15 full posts per page. */
export default async function ArchiveView({ route }: { route: Exclude<NewsRoute, { kind: 'post' }> }) {
  const data = await loadArchive(route)
  if (!data.posts.length && (route.page > 1 || route.kind === 'date')) notFound()
  return (
    <SiteShell
      bodyClass="l-body--2col"
      hero={<Hero label={HERO.news} />}
      side={<Sidebar currentCategory={route.kind === 'category' ? route.cat.id : undefined} currentYear={route.kind === 'date' ? route.year : undefined} />}
      pageTop
      wpBlockLibrary={route.kind !== 'index'}
    >
      <main>
        <MobileSidebar />
        <div className="c-container c-container--just">
          {data.heading && (
            <header className="u-mb-20">
              <h2>{data.heading}</h2>
            </header>
          )}
          {data.posts.map((post) => (
            <PostArticle key={post.id} post={post} cats={data.cats} />
          ))}
        </div>
        <Pagination current={route.page} total={data.totalPages} url={(n) => (n === 1 ? data.base : `${data.base}page/${n}/`)} />
      </main>
    </SiteShell>
  )
}
