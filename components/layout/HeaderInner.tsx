// header.php for every page except the front page.
import DrawerItems from './drawer/DrawerItems'

export default function HeaderInner({ drawerContact = true }: { drawerContact?: boolean }) {
  return (
    <div id="body-header" className="l-body__header" data-component="header">
      <header id="header" data-view-over="header" className="l-header">
        <div className="l-header__main">
          <div className="l-header-base">
            <div className="l-header-base__logo">
              <a className="l-header-base__logo-link" href="/">
                <img src="/assets/images/common/logo-color.svg" alt="一畳屋" loading="lazy" width="205" height="" className="p-svg-text  L:u-w-205  u-w-165" />
                <img src="/assets/images/common/svg/100c.svg" alt="百年企業" loading="lazy" width="69" height="" className="p-svg-text  L:u-w-70  u-w-55" />
              </a>
            </div>
            <div className="l-header-base__info l:u-hidden">
              <div className="c-flex  c-flex--x15_   u-wrap-no">
                <span>
                  <img src="/assets/images/common/svg/fukidashi-free.svg" alt="無料お見積りOK" loading="lazy" width="90" height="" className="p-svg-text" />
                </span>
                <span>
                  <p className="u-size-12  u-lh-10  u-700  u-mb-6">
                    {" 畳・襖は一畳屋にお気軽にご相談ください！ "}
                  </p>
                  <img src="/assets/images/svg/t-red-freedial.svg" alt="0120-158-108" loading="lazy" width="310" height="" className="p-svg-text" />
                </span>
              </div>
              <div className="L:u-mt-0  u-mt-20  L:u-mr-0  u-mr-auto  L:u-ml-0  u-ml-auto  L:u-pl-30">
                <p className="u-size-10  u-lh-10  u-700">
                  <img src="/assets/images/common/svg/uketsuke-number.svg" alt="受付 8:00-18:00" loading="lazy" width="190" height="" className="p-svg-text" />
                  <span className="u-ib  u-mt-10">
                    土・祝日の工事もOK！（ご予約が必要です）
                  </span>
                </p>
              </div>
            </div>
            <div data-drawer="4,l-header-base__btn l-header-base__btn-v2" className="l-header-base__btn l-header-base__btn-v2  l:u-hidden">
              <a href="/line/" className="l-header-base__btn-link">
                <span className="icon">
                  <img src="/assets/images/svg/240213/icon-header-line.svg" alt="" loading="lazy" width="50" height="" className="p-svg-text" />
                </span>
                <span className="label">
                  <img src="/assets/images/svg/240213/header-line.svg" alt="" loading="lazy" width="127" height="" className="p-svg-text" />
                </span>
              </a>
            </div>
          </div>
          <div data-drawer="2,l-nav" className="l-header__nav l-nav l:u-hidden">
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
          <div id="nav" data-component="nav" className="l-header__nav">
            <nav id="drawer" data-logic="drawer" aria-label="グローバルナビゲーション">
              <div data-logic="drawer-scroll">
                <div data-logic="drawer-container">
                  <DrawerItems contact={drawerContact} />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <button data-logic="drawer-trigger" id="trigger" type="button" className="l-trigger L:u-hidden">
        <span className="l-trigger__label">
          <img src="/assets/images/common/svg/trigger-label.svg" alt="もくじ" loading="lazy" width="41" height="" className="p-svg-text" />
        </span>
        <span className="l-trigger__u"></span>
      </button>
    </div>
  )
}
