import { Fragment, type ReactNode } from 'react'

type Props = {
  current: number
  total: number
  /** URL of page `n` (page 1 is the archive base URL). */
  url: (n: number) => string
}

const Arrow = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="16" height="16" className="c-icon" aria-hidden="true">
    <use xlinkHref={`/assets/svg/sprite.svg#i-arrow-${dir}-circle`}></use>
  </svg>
)

/** The theme's pagination: prev/next labels around paginate_links() (end_size 1, mid_size 2). */
export default function Pagination({ current, total, url }: Props) {
  if (total <= 1) return null
  const items: ReactNode[] = []
  let dots = false
  for (let n = 1; n <= total; n++) {
    if (n === current) {
      items.push(
        <li key={n}>
          <span aria-current="page" className="page-numbers current">
            {n}
          </span>
        </li>,
      )
      dots = true
    } else if (n <= 1 || (n >= current - 2 && n <= current + 2) || n > total - 1) {
      items.push(
        <li key={n}>
          <a href={url(n)} className="page-numbers">
            {n}
          </a>
        </li>,
      )
      dots = true
    } else if (dots) {
      items.push(
        <li key={n}>
          <span className="page-numbers dots">…</span>
        </li>,
      )
      dots = false
    }
  }
  return (
    <nav className="navigation pagination" role="navigation" aria-label="投稿">
      <div className="nav-links">
        <ul className="page-numbers">
          <li>
            {current > 1 ? (
              <a className="prev page-numbers" href={url(current - 1)}>
                <Arrow dir="left" />
                {" 前の15件 "}
              </a>
            ) : (
              <span className="prev page-numbers  is-desabled">
                <Arrow dir="left" />
                {" 前の15件 "}
              </span>
            )}
          </li>
          {items.map((item, i) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
          <li>
            {current < total ? (
              <a className="next page-numbers" href={url(current + 1)}>
                {" 次の15件 "}
                <Arrow dir="right" />
              </a>
            ) : (
              <span className="next page-numbers  is-desabled">
                {" 次の15件 "}
                <Arrow dir="right" />
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
