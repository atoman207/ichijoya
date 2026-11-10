// header.php on the front page (includes the key visual fader).
import DrawerItems from './drawer/DrawerItems'

export default function HeaderHome() {
  return (
    <div id="body-header" className="l-body__header" data-component="header">
      <header id="header" data-view-over="header" className="l-header">
        <div className="l-header__main">
          <div className="l-header-base">
            <h1 className="l-header-base__logo">
              <a className="l-header-base__logo-link" href="/">
                <img src="/assets/images/common/logo-color.svg" alt="一畳屋" loading="lazy" width="205" height="" className="p-svg-text  L:u-w-205  u-w-165" />
                <img src="/assets/images/common/svg/100c.svg" alt="百年企業" loading="lazy" width="69" height="" className="p-svg-text  L:u-w-70  u-w-55" />
              </a>
            </h1>
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
          <div className="p-kv u-relative">
            <div className="p-kv__bnr">
              <a id="ebentBanner" href="/news/category/event/" className="p-kv__bnr__link">
                <picture style={{ pointerEvents: "none" }}>
                  <source media="(min-width: 768px)" srcSet="/assets/images/top/2024/banner-event_pc.png 1x, /assets/images/top/2024/banner-event_pc@2x.png 2x" width="259" height="84" />
                  <source srcSet="/assets/images/top/2024/banner-event_sp.png 1x, /assets/images/top/2024/banner-event_sp@2x.png 2x" width="120" height="55" />
                  <img src="/assets/images/top/2024/banner-event_pc.png" srcSet="/assets/images/top/2024/banner-event_pc@2x.png 2x" alt="" width="259" height="84" className="" style={{ pointerEvents: "none" }} />
                </picture>
              </a>
            </div>
            <div className="p-kv__inner">
              <div id="kv-fader" data-config="duration=3000&interval=6500&delay=0&easing=ease" className="p-kv-fader">
                <div className="p-kv-fader__item">
                  <a href="/change/" className="p-kv__link"></a>
                  <div className="p-kv__content  p-kv__content--01">
                    <a href="/change/" className="p-kv__link">
                      <div className="p-kv-center  p-kv-center--01">
                        <img src="/assets/images/top/kv-tatami-main.svg" width="325" height="" alt="" className="u-b  p-kv-center__main  p-kv-center__main--tatami" />
                        <div className="p-kv-center__sub">
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-shinichiro.webp 1x, /assets/images/top/staff-shinichiro@2x.webp 2x" />
                            <img src="/assets/images/top/staff-shinichiro.png" srcSet="/assets/images/top/staff-shinichiro@2x.png 2x" alt="" width="167" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--1" />
                          </picture>
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-mitsuko.webp 1x, /assets/images/top/staff-mitsuko@2x.webp 2x" />
                            <img src="/assets/images/top/staff-mitsuko.png" srcSet="/assets/images/top/staff-mitsuko@2x.png 2x" alt="" width="147" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--2" />
                          </picture>
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-shinjiro.webp 1x, /assets/images/top/staff-shinjiro@2x.webp 2x" />
                            <img src="/assets/images/top/staff-shinjiro.png" srcSet="/assets/images/top/staff-shinjiro@2x.png 2x" alt="" width="150" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--3" />
                          </picture>
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-kisaburo.webp 1x, /assets/images/top/staff-kisaburo@2x.webp 2x" />
                            <img src="/assets/images/top/staff-kisaburo.png" srcSet="/assets/images/top/staff-kisaburo@2x.png 2x" alt="" width="150" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--4" />
                          </picture>
                        </div>
                      </div>
                      <div className="p-kv-copy">
                        <img src="/assets/images/top/kv-tatami-copy.svg" alt="" width="94" height="" className="p-svg-text  p-kv-copy__label  p-kv-copy__label--tatami" />
                      </div>
                      <div className="p-kv-deco  p-kv-deco--01">
                        <img src="/assets/images/top/kv-i-a.svg" alt="" width="53" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--1" />
                        <img src="/assets/images/top/kv-i-b.svg" alt="" width="52" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--2" />
                        <img src="/assets/images/top/kv-i-c.svg" alt="" width="29" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--3" />
                        <img src="/assets/images/top/kv-tatami-yey.svg" alt="" width="196" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--4" />
                        <img src="/assets/images/top/kv-yonin.svg" alt="" width="125" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--5" />
                      </div>
                      <div className="p-kv-leftbottom  p-kv-leftbottom--tatami">
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-pic_tatami.webp 1x, /assets/images/top/kv-pic_tatami@2x.webp 2x" />
                          <img src="/assets/images/top/kv-pic_tatami.png" srcSet="/assets/images/top/kv-pic_tatami@2x.png 2x" width="325" height="253" alt="" className="u-b" />
                        </picture>
                      </div>
                    </a>
                    <div className="p-kv-follow">
                      <a href="/change/" className="p-kv__link">
                        <span className="p-kv-follow__label">
                          {" FOLLOW US "}
                        </span>
                      </a>
                      <ul className="c-list  c-flex  L:u-column  u-row  c-flex--x15_  c-flex--y15_">
                        <a href="/change/" className="p-kv__link"></a>
                        <li className="u-w-auto">
                          <a href="/change/" className="p-kv__link"></a>
                          <a href="https://page.line.me/?accountId=oxo7080i" target="_blank" className="p-kv-follow__link">
                            <svg width="24" height="24" className="c-icon  u-b  p-kv-follow__link-icon  p-kv-follow__link-icon--green" aria-hidden="true">
                              <use xlinkHref="/assets/svg/sprite.svg#i-line-square"></use>
                            </svg>
                          </a>
                        </li>
                        <li className="u-w-auto">
                          <a href="https://www.facebook.com/higoichijoya/" target="_blank" className="p-kv-follow__link">
                            <svg width="24" height="24" className="c-icon  u-b  p-kv-follow__link-icon  p-kv-follow__link-icon--green" aria-hidden="true">
                              <use xlinkHref="/assets/svg/sprite.svg#i-facebook-square"></use>
                            </svg>
                          </a>
                        </li>
                        <li className="u-w-auto">
                          <a href="https://www.instagram.com/Ichijoya158/" target="_blank" className="p-kv-follow__link">
                            <svg width="24" height="24" className="c-icon  u-b  p-kv-follow__link-icon  p-kv-follow__link-icon--green" aria-hidden="true">
                              <use xlinkHref="/assets/svg/sprite.svg#i-instagram-square"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-kv-fader__item">
                  <a href="/door/" className="p-kv__link"></a>
                  <div className="p-kv__content  p-kv__content--02">
                    <a href="/door/" className="p-kv__link">
                      <div className="p-kv-center  p-kv-center--02">
                        <img src="/assets/images/top/kv-fusuma-main.svg" width="362" height="" alt="" className="u-b  p-kv-center__main  p-kv-center__main--fusuma" />
                        <div className="p-kv-center__sub">
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-shinichiro.webp 1x, /assets/images/top/staff-shinichiro@2x.webp 2x" />
                            <img src="/assets/images/top/staff-shinichiro.png" srcSet="/assets/images/top/staff-shinichiro@2x.png 2x" alt="" width="167" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--1" />
                          </picture>
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-mitsuko.webp 1x, /assets/images/top/staff-mitsuko@2x.webp 2x" />
                            <img src="/assets/images/top/staff-mitsuko.png" srcSet="/assets/images/top/staff-mitsuko@2x.png 2x" alt="" width="147" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--2" />
                          </picture>
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-shinjiro.webp 1x, /assets/images/top/staff-shinjiro@2x.webp 2x" />
                            <img src="/assets/images/top/staff-shinjiro.png" srcSet="/assets/images/top/staff-shinjiro@2x.png 2x" alt="" width="150" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--3" />
                          </picture>
                          <picture>
                            <source type="image/webp" srcSet="/assets/images/top/staff-kisaburo.webp 1x, /assets/images/top/staff-kisaburo@2x.webp 2x" />
                            <img src="/assets/images/top/staff-kisaburo.png" srcSet="/assets/images/top/staff-kisaburo@2x.png 2x" alt="" width="150" height="" className="p-kv-center__sub-staff  p-kv-center__sub-staff--4" />
                          </picture>
                        </div>
                      </div>
                      <div className="p-kv-copy">
                        <img src="/assets/images/top/kv-fusuma-copy.svg" alt="" width="98" height="" className="p-svg-text  p-kv-copy__label  p-kv-copy__label--fusuma" />
                      </div>
                      <div className="p-kv-deco  p-kv-deco--02">
                        <img src="/assets/images/top/kv-i-a.svg" alt="" width="53" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--1" />
                        <img src="/assets/images/top/kv-i-b.svg" alt="" width="52" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--2" />
                        <img src="/assets/images/top/kv-i-c.svg" alt="" width="29" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--3" />
                        <img src="/assets/images/top/kv-fusuma-yey.svg" alt="" width="196" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--4" />
                        <img src="/assets/images/top/kv-yonin.svg" alt="" width="125" height="" className="p-svg-text  p-kv-deco__item  p-kv-deco__item--5" />
                      </div>
                      <div className="p-kv-leftbottom  p-kv-leftbottom--fusuma">
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-pic_fusuma.webp 1x, /assets/images/top/kv-pic_fusuma@2x.webp 2x" />
                          <img src="/assets/images/top/kv-pic_fusuma.png" srcSet="/assets/images/top/kv-pic_fusuma@2x.png 2x" width="329" height="245" alt="" className="u-b" />
                        </picture>
                      </div>
                    </a>
                    <div className="p-kv-follow">
                      <a href="/door/" className="p-kv__link">
                        <span className="p-kv-follow__label">
                          {" FOLLOW US "}
                        </span>
                      </a>
                      <ul className="c-list  c-flex  L:u-column  u-row  c-flex--x15_  c-flex--y15_">
                        <a href="/door/" className="p-kv__link"></a>
                        <li className="u-w-auto">
                          <a href="/door/" className="p-kv__link"></a>
                          <a href="https://page.line.me/?accountId=oxo7080i" target="_blank" className="p-kv-follow__link">
                            <svg width="24" height="24" className="c-icon  u-b  p-kv-follow__link-icon  p-kv-follow__link-icon--blue" aria-hidden="true">
                              <use xlinkHref="/assets/svg/sprite.svg#i-line-square"></use>
                            </svg>
                          </a>
                        </li>
                        <li className="u-w-auto">
                          <a href="https://www.facebook.com/higoichijoya/" target="_blank" className="p-kv-follow__link">
                            <svg width="24" height="24" className="c-icon  u-b  p-kv-follow__link-icon  p-kv-follow__link-icon--blue" aria-hidden="true">
                              <use xlinkHref="/assets/svg/sprite.svg#i-facebook-square"></use>
                            </svg>
                          </a>
                        </li>
                        <li className="u-w-auto">
                          <a href="https://www.instagram.com/Ichijoya158/" target="_blank" className="p-kv-follow__link">
                            <svg width="24" height="24" className="c-icon  u-b  p-kv-follow__link-icon  p-kv-follow__link-icon--blue" aria-hidden="true">
                              <use xlinkHref="/assets/svg/sprite.svg#i-instagram-square"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-kv-fader__item">
                  <a href="/about/" className="p-kv__link">
                    <div className="p-kv__content  p-kv__content--03">
                      <div className="p-kv-center">
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-omakase-main.webp 1x, /assets/images/top/kv-omakase-main@2x.webp 2x" />
                          <img src="/assets/images/top/kv-omakase-main.png" srcSet="/assets/images/top/kv-omakase-main@2x.png 2x" alt="" width="1540" height="1160" className="p-kv-center__main  p-kv-center__main--omakase" />
                        </picture>
                      </div>
                      <div className="p-kv-copy  p-kv-copy--omakase">
                        <img src="/assets/images/top/kv-3-copy.svg" alt="" width="179" height="" className="p-svg-text  p-kv-copy__label  p-kv-copy__label--omakase" />
                      </div>
                      <div className="p-kv-store  p-kv-store--tamana">
                        <img src="/assets/images/top/kv-yey-tamana.svg" alt="" width="179" height="" className="p-svg-text  text" />
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-store-tamana.webp 1x, /assets/images/top/kv-store-tamana@2x.webp 2x" />
                          <img src="/assets/images/top/kv-store-tamana.png" srcSet="/assets/images/top/kv-store-tamana@2x.png 2x" alt="" width="862" height="476" className="pic" />
                        </picture>
                      </div>
                      <div className="p-kv-store  p-kv-store--showroom">
                        <img src="/assets/images/top/kv-yey-showroom.svg" alt="" width="179" height="" className="p-svg-text  text" />
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-store-showroom.webp 1x, /assets/images/top/kv-store-showroom@2x.webp 2x" />
                          <img src="/assets/images/top/kv-store-showroom.png" srcSet="/assets/images/top/kv-store-showroom@2x.png 2x" alt="" width="740" height="531" className="pic" />
                        </picture>
                      </div>
                      <div className="p-kv-store  p-kv-store--nishi">
                        <img src="/assets/images/top/kv-yey-nishi.svg" alt="" width="179" height="" className="p-svg-text  text" />
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-store-nishi.webp 1x, /assets/images/top/kv-store-nishi@2x.webp 2x" />
                          <img src="/assets/images/top/kv-store-nishi.png" srcSet="/assets/images/top/kv-store-nishi@2x.png 2x" alt="" width="800" height="474" className="pic" />
                        </picture>
                      </div>
                      <div className="p-kv-store  p-kv-store--koushi">
                        <img src="/assets/images/top/kv-yey-goshi.svg" alt="" width="179" height="" className="p-svg-text  text" />
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-store-koushi.webp?v2 1x, /assets/images/top/kv-store-koushi@2x.webp?v2 2x" />
                          <img src="/assets/images/top/kv-store-koushi.png?v2" srcSet="/assets/images/top/kv-store-koushi@2x.png?v2 2x" alt="" width="800" height="474" className="pic" />
                        </picture>
                      </div>
                      <div className="p-kv-store  p-kv-store--tyuou">
                        <img src="/assets/images/top/kv-yey-tyuou.svg" alt="" width="179" height="" className="p-svg-text  text" />
                        <picture>
                          <source type="image/webp" srcSet="/assets/images/top/kv-store-tyuou.webp?v2 1x, /assets/images/top/kv-store-tyuou@2x.webp?v2 2x" />
                          <img src="/assets/images/top/kv-store-tyuou.png?v2" srcSet="/assets/images/top/kv-store-tyuou@2x.png?v2 2x" alt="" width="800" height="474" className="pic" />
                        </picture>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
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
                  <DrawerItems contact={true} />
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
