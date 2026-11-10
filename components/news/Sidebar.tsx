import { decodeEntities } from '@/lib/entities'
import { toPath } from '@/lib/html'
import { getCategories, getPaddedCounts, getYearCounts, type WpCategory } from '@/lib/wp'
import { NavSelect } from './Selects'

/** Order of the mobile category <select> on the WordPress site (unknown categories go last). */
const SELECT_ORDER = [214, 213, 215, 216, 205, 217, 212, 158, 206, 211, 207, 208, 210, 209, 159, 182, 188, 163, 173, 177, 165, 167, 190, 178, 196, 202, 197, 198, 199, 200, 201, 195, 189, 204, 203, 194, 193, 192]

/** searchform.php: the field shows the current query (get_search_query()) on the search results page. */
export function SearchForm({ query = '' }: { query?: string }) {
  return (
    <form role="search" method="get" action="/">
      <fieldset className="">
        <div className="p-search">
          <input type="text" name="s" className="p-search-txt" defaultValue={query} placeholder="検索したいキーワードを入力" />
          <button type="submit" className="p-search-btn">
            <svg width="20" height="20" className="c-icon  u-mr-10" aria-hidden="true">
              <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
            </svg>
            {" 検索する "}
          </button>
        </div>
      </fieldset>
    </form>
  )
}

const SideHeading = ({ src, alt }: { src: string; alt: string }) => (
  <header className="l-sidebar__header">
    <h3 className="l-sidebar__header-heading">
      <img src={src} alt={alt} loading="lazy" width={alt === '記事検索' ? 79 : 91} height={alt === 'カテゴリー' || alt === 'アーカイブ' ? 19 : 20} className="p-svg-text u-ml-auto u-mr-auto" />
    </h3>
  </header>
)

/** wp_list_categories(hierarchical, show_count, pad_counts) with the theme's full-width brackets. */
function CategoryTree({ cats, counts, parent, current }: { cats: WpCategory[]; counts: Record<number, number>; parent: number; current?: number }) {
  const ancestors = new Set<number>()
  for (let c = cats.find((x) => x.id === current); c?.parent; c = cats.find((x) => x.id === c!.parent)) ancestors.add(c.parent)
  const directParent = cats.find((x) => x.id === current)?.parent
  const render = (pid: number) =>
    cats
      .filter((c) => c.parent === pid && (counts[c.id] ?? c.count) > 0)
      .map((c) => {
        const kids = cats.filter((x) => x.parent === c.id && (counts[x.id] ?? x.count) > 0)
        const cls = ['cat-item', `cat-item-${c.id}`]
        if (c.id === current) cls.push('current-cat')
        if (c.id === directParent) cls.push('current-cat-parent')
        if (ancestors.has(c.id)) cls.push('current-cat-ancestor')
        return (
          <li className={cls.join(' ')} key={c.id}>
            <a href={toPath(c.link)} aria-current={c.id === current ? 'page' : undefined}>
              {`${decodeEntities(c.name)}（${counts[c.id] ?? c.count}）`}
            </a>
            {kids.length > 0 && <ul className="children">{render(c.id)}</ul>}
          </li>
        )
      })
  return <>{render(parent)}</>
}

/**
 * sidebar.php: search, categories and yearly archive (desktop column). On date archives
 * wp_get_archives() marks the archive's year as selected.
 */
export default async function Sidebar({ currentCategory, currentYear, query }: { currentCategory?: number; currentYear?: number; query?: string }) {
  const [cats, counts, years] = await Promise.all([getCategories(), getPaddedCounts(), getYearCounts()])
  return (
    <div className="l-sidebar-wrapper">
      <aside className="l-sidebar  l:u-hidden">
        <SideHeading src="/assets/images/svg/side-h-search.svg" alt="記事検索" />
        <div className="u-gutter-all">
          <SearchForm query={query} />
        </div>
      </aside>
      <aside className="l-sidebar  l:u-hidden">
        <SideHeading src="/assets/images/svg/side-h-category.svg" alt="カテゴリー" />
        <ul className="l-sidebar-nav">
          <CategoryTree cats={cats} counts={counts} parent={0} current={currentCategory} />
        </ul>
      </aside>
      <aside className="l-sidebar">
        <SideHeading src="/assets/images/svg/side-h-archive.svg" alt="アーカイブ" />
        <div className="u-gutter-all">
          <span className="c-select">
            <NavSelect
              name="archive"
              id="pulldown-archive"
              selected={currentYear ? `/news/${currentYear}/` : undefined}
              options={[{ value: '/news/', label: ' 期間を選択' }, ...years.map((y) => ({ value: `/news/${y.year}/`, label: ` ${y.year}  (${y.count})` }))]}
            />
          </span>
        </div>
      </aside>
    </div>
  )
}

/** Mobile-only search and category picker printed at the top of the news archives. */
export async function MobileSidebar() {
  const cats = await getCategories()
  const ordered = [...SELECT_ORDER.map((id) => cats.find((c) => c.id === id)).filter((c): c is WpCategory => !!c), ...cats.filter((c) => !SELECT_ORDER.includes(c.id))]
  return (
    <div className="L:u-hidden">
      <aside className="l-sidebar">
        <SideHeading src="/assets/images/svg/side-h-search.svg" alt="記事検索" />
        <div className="u-gutter-all">
          <SearchForm />
        </div>
      </aside>
      <aside className="l-sidebar">
        <SideHeading src="/assets/images/svg/side-h-category.svg" alt="カテゴリー" />
        <div className="u-gutter-all">
          <span className="c-select">
            <NavSelect name="select" options={[{ value: '/news/', label: ' カテゴリーを選択' }, ...ordered.map((c) => ({ value: toPath(c.link), label: decodeEntities(c.name) }))]} />
          </span>
        </div>
      </aside>
    </div>
  )
}
