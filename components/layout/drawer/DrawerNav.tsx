// Clone of the [data-drawer="2,…"] element, as built at runtime by the theme's drawer script.

export default function DrawerNav() {
  return (
    <div className="l-nav">
      <ul className="l-nav__items">
        <li className="l-nav__item">
          <a className="l-nav__item-link" href="/change/">
            <span className="l-nav__item-label">
              <img src="/assets/images/common/svg/nav-label-tatamikae.svg" alt="畳替え" loading="lazy" width="55" height="" className="p-svg-text" />
            </span>
          </a>
        </li>
        <li className="l-nav__item">
          <a className="l-nav__item-link" href="/door/">
            <span className="l-nav__item-label">
              <img src="/assets/images/common/svg/nav-label-fusuma-syoji-amido.svg" alt="襖・障子・アミ戸" loading="lazy" width="124" height="" className="p-svg-text" />
            </span>
          </a>
        </li>
        <li className="l-nav__item">
          <a className="l-nav__item-link" href="https://www.youtube.com/channel/UCojD3pJtcL5FEa5RRlgppLw/featured" target="_blank">
            <span className="l-nav__item-label">
              <img src="/assets/images/common/svg/nav-label-youtube.svg" alt="Youtube" loading="lazy" width="97" height="" className="p-svg-text" />
            </span>
          </a>
        </li>
        <li className="l-nav__item">
          <a className="l-nav__item-link" href="/news/">
            <span className="l-nav__item-label">
              <img src="/assets/images/common/svg/nav-label-news-column.svg" alt="お知らせ・コラム" loading="lazy" width="135" height="" className="p-svg-text" />
            </span>
          </a>
        </li>
        <li className="l-nav__item">
          <a className="l-nav__item-link" href="/about/">
            <span className="l-nav__item-label">
              <img src="/assets/images/common/svg/nav-label-company-shop.svg" alt="会社・店舗案内" loading="lazy" width="132" height="" className="p-svg-text" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
