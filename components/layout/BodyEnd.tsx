// Elements printed after #body: drawer overlay, sticky global nav (≥1024px) and the mobile fixed bar.

export default function BodyEnd() {
  return (
    <>
    <div data-logic="drawer-close" className="l-drawer-overlay"></div>
    <header className="l-header  l-header--sticky  l-header--sticky-v2">
      <div className="l-header__main">
        <div className="l-header__nav l-nav l:u-hidden">
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
            <li className="l-nav__item l-nav__item--btn l-nav__item--btn-line">
              <a className="l-nav__item-link" href="/line/">
                <span className="l-nav__item-label">
                  <img src="/assets/images/svg/240213/gnav-line.svg" alt="LINEで相談" loading="lazy" width="126" height="" className="p-svg-text" />
                </span>
              </a>
            </li>
            <li className="l-nav__item l-nav__item--btn l-nav__item--btn-tel">
              <a className="l-nav__item-link" href="tel:0120158108">
                <span className="l-nav__item-label">
                  <img src="/assets/images/svg/240213/gnav-tel.svg" alt="0120-158-108" loading="lazy" width="150" height="" className="p-svg-text" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div className="p-fixed-bar">
      <ul className="p-fixed-bar__list">
        <li className="p-fixed-bar__list__item">
          <a href="/line/" className="p-fixed-bar__link p-fixed-bar__link--line">
            <span className="p-fixed-bar__link__label">
              <img src="/assets/images/svg/240213/gnav-line.svg" width="160" height="" className="p-svg-text" alt="LINEで相談" loading="lazy" />
            </span>
          </a>
        </li>
        <li className="p-fixed-bar__list__item">
          <a href="tel:0120158108" className="p-fixed-bar__link p-fixed-bar__link--tel">
            <span className="p-fixed-bar__link__label">
              <img src="/assets/images/svg/240213/sp-tel.svg" width="117" height="" className="p-svg-text" alt="電話する" loading="lazy" />
            </span>
          </a>
        </li>
      </ul>
    </div>
    </>
  )
}
