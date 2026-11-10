// footer.php (#body-footer). The contact block is omitted on /contact/, the page-top button only exists on news templates.
import FooterContact from './FooterContact'

export default function Footer({ contact = true, pageTop = false }: { contact?: boolean; pageTop?: boolean }) {
  return (
    <div id="body-footer" className="l-body__footer" data-component="footer">
      <div id="footer" data-view-over="footer" className="l-footer">
        {pageTop && (
          <button className="p-pagetop" data-href="#body" aria-label="ページの先頭へ戻る">
            <span className="p-pagetop__inner">
              <img src="/assets/images/svg/page-top.svg" width="80" height="80" alt="" loading="lazy" className="p-svg-text" />
            </span>
          </button>
        )}
        {contact && <FooterContact />}
        <div className="l-footer-main">
          <div className="c-container">
            <div className="l-footer-main__inner">
              <a href="/" className="l-footer-main__logo">
                <img src="/assets/images/common/logo-w.svg" alt="一畳屋" loading="lazy" width="205" height="" className="p-svg-text  L:u-w-205  u-w-165" />
              </a>
              <div className="l-footer-main__info">
                <p className="u-size-16  u-lh-16  u-gray-0">
                  <span className="u-b  u-size-18  u-lh-10  u-700  u-mb-6  M:u-textleft  u-textcenter">
                    株式会社一畳屋
                  </span>
                  {" 〒861-1113　熊本県合志市栄3415-11　　"}
                  <span className="u-ib">
                    TEL.096-348-3176
                  </span>
                </p>
              </div>
              <div className="l-footer-main__share">
                <ul className="c-list  c-flex  c-flex--x25_  u-wrap-no  u-gray-0">
                  <li>
                    <a href="https://page.line.me/?accountId=oxo7080i" target="_blank" className="u-b">
                      <svg width="30" height="30" className="c-icon  u-b" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-line-square"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/higoichijoya/" target="_blank" className="u-b">
                      <svg width="30" height="30" className="c-icon  u-b" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-facebook-square"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/Ichijoya158/" target="_blank" className="u-b">
                      <svg width="30" height="30" className="c-icon  u-b" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-instagram-square"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-footer-copyright">
          <small>
            {" © ICHIJOYA.All Rights Reserved. "}
          </small>
        </div>
      </div>
    </div>
  )
}
