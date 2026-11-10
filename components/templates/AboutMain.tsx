// page-about.php main content.
import GoogleReviews from '@/components/runtime/GoogleReviews'

export default function AboutMain() {
  return (
    <main className="u-pt-30 M:u-pt-40  u-pb-20 M:u-pb-100 M:u-mb-50">
      <section className="c-container u-pb-20 M:u-pb-60">
        <div className="c-flex c-flex--x15 c-flex--y15">
          <div className="u-w-full M:u-w-6/12">
            <div className="L:u-pl-15 L:u-pr-25">
              <p className="u-mb-20 M:u-mb-30">
                <img src="/assets/images/svg/t-tatamiwotooshite.svg" alt="畳をとおして「心」と「暮らし」を豊かに" loading="lazy" width="452" height="109" className="p-svg-text u-mr-auto" />
              </p>
              <p className="u-mb-15 M:u-mb-30">
                畳屋の長男として生まれ、わたしが四代目代表に就いたのは2019年7月のことです。
                <br />
                その時「何の為に一畳屋はあるのか」ということを改めて考え直しました。考え抜いてたどり着いたのが「畳をとおして『心』と『暮らし』を豊かに」ということでした。
                <br />
                畳作りという仕事をとおして、お客様はじめ、社員、取引先等関係する人の「心」と「暮らし」を豊かにしていく。それが一畳屋の約束であり、誓いでもあります。
                <br />
                畳という素晴らしい日本文化を仕事にさせてもらっていること。四代、120年にもわたり畳のバトンが繋がれてきたこと。今という時代を生きていること。そういった奇跡に感謝しながら、この先も皆で力を合わせ頑張ってまいります！
              </p>
              <p className="u-size-16 u-700 u-textright">
                <span className="u-size-12">
                  代表取締役　
                </span>
                亀井 慎一郎
              </p>
            </div>
          </div>
          <div className="u-w-full M:u-w-6/12 u-order-_1 M:u-order-1">
            <div className="p-mr-_115">
              <img src="/assets/images/about/img-greeting.jpg?v2" srcSet="/assets/images/about/img-greeting.jpg?v2 685w, /assets/images/about/img-greeting@2x.jpg?v2 1370w" sizes="(min-width: 343px) 685px, 100vw" decoding="async" loading="lazy" width="685" height="500" alt="" className="u-radius-12" />
            </div>
          </div>
        </div>
      </section>
      <section className="c-container u-pt-30 M:u-pt-60 u-pb-20 M:u-pb-60">
        <h2 className="p-heading-main u-mb-40">
          <img src="/assets/images/svg/h-tenpoannai.svg" alt="店舗案内" loading="lazy" width="129" height="33" className="p-heading-main__label" />
        </h2>
        <nav className="p-nav-thumb L:u-pl-25 L:u-pr-25 u-mb-30 M:u-mb-60">
          <ul className="c-list c-flex u-justify-center c-flex--x15 c-flex--y10">
            <li className="u-w-6/12 M:u-w-2/12">
              <a href="#about-shop-a" className="p-nav-thumb__anc">
                <div className="p-nav-thumb__box u-ml-auto u-mr-auto M:u-mb-10">
                  <img src="/assets/images/about/202608/thumb-shop-koshi.jpg" srcSet="/assets/images/about/202608/thumb-shop-koshi.jpg 200w, /assets/images/about/202608/thumb-shop-koshi@2x.jpg 400w" sizes="(min-width: 101px) 200px, 100vw" decoding="async" loading="lazy" width="200" height="120" alt="" className="p-nav-thumb__img" />
                </div>
                <div className="u-flex u-items-center u-justify-center u-lh-16">
                  <svg width="16" height="16" className="p-nav-thumb__icon c-icon u-sub u-mr-10" aria-hidden="true">
                    <use xlinkHref="/assets/svg/sprite.svg#i-arrow-down-circle"></use>
                  </svg>
                  <p className="u-700">
                    合志店
                  </p>
                </div>
              </a>
            </li>
            <li className="u-w-6/12 M:u-w-2/12">
              <a href="#about-shop-b" className="p-nav-thumb__anc">
                <div className="p-nav-thumb__box u-ml-auto u-mr-auto M:u-mb-10">
                  <img src="/assets/images/about/thumb-shop-b.jpg?v3" srcSet="/assets/images/about/thumb-shop-b.jpg?v3 200w, /assets/images/about/thumb-shop-b@2x.jpg?v3 400w" sizes="(min-width: 101px) 200px, 100vw" decoding="async" loading="lazy" width="200" height="120" alt="" className="p-nav-thumb__img" />
                </div>
                <div className="u-flex u-items-center u-justify-center u-lh-16">
                  <svg width="16" height="16" className="p-nav-thumb__icon c-icon u-sub u-mr-10" aria-hidden="true">
                    <use xlinkHref="/assets/svg/sprite.svg#i-arrow-down-circle"></use>
                  </svg>
                  <p className="u-700">
                    中央店
                  </p>
                </div>
              </a>
            </li>
            <li className="u-w-6/12 M:u-w-2/12">
              <a href="#about-shop-c" className="p-nav-thumb__anc">
                <div className="p-nav-thumb__box u-ml-auto u-mr-auto M:u-mb-10">
                  <img src="/assets/images/about/thumb-shop-c.jpg?v3" srcSet="/assets/images/about/thumb-shop-c.jpg?v3 200w, /assets/images/about/thumb-shop-c@2x.jpg?v3 400w" sizes="(min-width: 101px) 200px, 100vw" decoding="async" loading="lazy" width="200" height="120" alt="" className="p-nav-thumb__img" />
                </div>
                <div className="u-flex u-items-center u-justify-center u-lh-16">
                  <svg width="16" height="16" className="p-nav-thumb__icon c-icon u-sub u-mr-10" aria-hidden="true">
                    <use xlinkHref="/assets/svg/sprite.svg#i-arrow-down-circle"></use>
                  </svg>
                  <p className="u-700">
                    西店
                  </p>
                </div>
              </a>
            </li>
            <li className="u-w-6/12 M:u-w-2/12">
              <a href="#about-shop-d" className="p-nav-thumb__anc">
                <div className="p-nav-thumb__box u-ml-auto u-mr-auto M:u-mb-10">
                  <img src="/assets/images/about/thumb-shop-d.jpg?v2" srcSet="/assets/images/about/thumb-shop-d.jpg?v2 200w, /assets/images/about/thumb-shop-d@2x.jpg?v2 400w" sizes="(min-width: 101px) 200px, 100vw" decoding="async" loading="lazy" width="200" height="120" alt="" className="p-nav-thumb__img" />
                </div>
                <div className="u-flex u-items-center u-justify-center u-lh-16">
                  <svg width="16" height="16" className="p-nav-thumb__icon c-icon u-sub u-mr-10" aria-hidden="true">
                    <use xlinkHref="/assets/svg/sprite.svg#i-arrow-down-circle"></use>
                  </svg>
                  <p className="u-700">
                    玉名店
                  </p>
                </div>
              </a>
            </li>
            <li className="u-w-6/12 M:u-w-2/12">
              <a href="#about-shop-e" className="p-nav-thumb__anc">
                <div className="p-nav-thumb__box u-ml-auto u-mr-auto M:u-mb-10">
                  <img src="/assets/images/about/thumb-shop-e.jpg?v2" srcSet="/assets/images/about/thumb-shop-e.jpg?v2 200w, /assets/images/about/thumb-shop-e@2x.jpg?v2 400w" sizes="(min-width: 101px) 200px, 100vw" decoding="async" loading="lazy" width="200" height="120" alt="" className="p-nav-thumb__img" />
                </div>
                <div className="u-flex u-items-center u-justify-center u-lh-16">
                  <svg width="16" height="16" className="p-nav-thumb__icon c-icon u-sub u-mr-10" aria-hidden="true">
                    <use xlinkHref="/assets/svg/sprite.svg#i-arrow-down-circle"></use>
                  </svg>
                  <p className="u-700">
                    坪井ショールーム
                  </p>
                </div>
              </a>
            </li>
            <li className="u-w-6/12 M:u-w-2/12">
              <a href="#about-shop-nagoya" className="p-nav-thumb__anc">
                <div className="p-nav-thumb__box u-ml-auto u-mr-auto M:u-mb-10">
                  <img src="/assets/images/about/thumb-shop-nagoya.jpg?v2" srcSet="/assets/images/about/thumb-shop-nagoya.jpg?v2 200w, /assets/images/about/thumb-shop-nagoya@2x.jpg?v2 400w" sizes="(min-width: 101px) 200px, 100vw" decoding="async" loading="lazy" width="200" height="120" alt="" className="p-nav-thumb__img" />
                </div>
                <div className="u-flex u-items-center u-justify-center u-lh-16">
                  <svg width="16" height="16" className="p-nav-thumb__icon c-icon u-sub u-mr-10" aria-hidden="true">
                    <use xlinkHref="/assets/svg/sprite.svg#i-arrow-down-circle"></use>
                  </svg>
                  <p className="u-700">
                    名古屋店
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <section id="about-shop-a" className="u-pt-30 M:u-pt-55 u-pb-30 M:u-pb-55">
          <h3 className="u-mb-30">
            <img src="/assets/images/svg/hy-koshi.svg" alt="合志店" loading="lazy" width="178" height="39" className="p-svg-text u-ml-auto u-mr-auto" />
          </h3>
          <div className="p-block-shop">
            <div className="">
              <img src="/assets/images/about/202608/shop-koshi.jpg" srcSet="/assets/images/about/202608/shop-koshi.jpg 1170w, /assets/images/about/202608/shop-koshi@2x.jpg 2340w" sizes="(min-width: 586px) 1170px, 100vw" decoding="async" loading="lazy" width="1170" height="480" alt="" className="u-b u-radius-12" />
            </div>
            <ul className="p-block-shop__list c-list u-mb-20 M:u-mb-40">
              <li className="p-block-shop__item">
                <div>
                  <div {...({ href: "#modal-a-01" } as Record<string, string>)} data-modal="modal-a-01" data-modal-link="modal-a-01" className="p-block-shop__anc u-b" style={{ pointerEvents: "none" }}>
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/202608/kamei-shinichiro.jpg" srcSet="/assets/images/about/202608/kamei-shinichiro.jpg 80w, /assets/images/about/202608/kamei-shinichiro@2x.jpg 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </div>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      社長
                    </span>
                    <br />
                    亀井 慎一郎
                  </p>
                </div>
              </li>
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-a-03" data-modal="modal-a-03" data-modal-link="modal-a-03" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-a-03.jpg?v2" srcSet="/assets/images/about/person-a-03.jpg?v2 80w, /assets/images/about/person-a-03@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      襖主任
                    </span>
                    <br />
                    松澤 孝俊
                  </p>
                </div>
                <div data-modal-target="modal-a-03">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-matsuzawa.jpg?v2" srcSet="/assets/images/about/person-matsuzawa.jpg?v2 470w, /assets/images/about/person-matsuzawa@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/name-TakatoshiMatsuzawa.svg" alt="松澤 孝俊" loading="lazy" width="431" height="50" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          襖は紙を相手にする仕事。
                          <br />
                          繊細さが求められます。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          お世話になっております。一畳屋の松澤孝俊と申します。
                          <br />
                          作業は主に襖、障子、網戸の張替えをやっています。
                          <br />
                          勤務年数はやがて30年になります。
                          <br />
                          作業は、一軒一軒状態が違う襖が入って難しい時もありますが、満足してもらえるように心掛けています。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              襖、障子、網戸
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              なるようになる
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              読書
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-uehara" data-modal="modal-uehara" data-modal-link="modal-uehara" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-a-uehara.jpg?v2" srcSet="/assets/images/about/person-a-uehara.jpg?v2 80w, /assets/images/about/person-a-uehara@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      配送
                    </span>
                    <br />
                    上原 真人
                  </p>
                </div>
                <div data-modal-target="modal-uehara">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-uehara-masato.jpg?v2" srcSet="/assets/images/about/person-uehara-masato.jpg?v2 470w, /assets/images/about/person-uehara-masato@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/0330/uehara.svg" alt="上原 真人" loading="lazy" width="380" height="47" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          お客様に喜んでいただける仕事ができるよう、頑張ってまいります。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          {" お客様のご要望にお応えできるよう勉強させて頂いています。一日でも早く、お客様に笑顔になっていただけるような仕事ができるよう、頑張ってまいります。"}
                          <br />
                          {" まだまだ至らない点が多く御座いますが宜しくお願い致します。 "}
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              運転
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              前向きに
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              ドライブ／温泉
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="c-flex c-flex--x15 c-flex--y10">
            <div className="u-w-full M:u-w-6/12">
              <div className="c-frame M:u-h-350">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0796015013652!2d130.7684084157346!3d32.896063585212005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540faef239b8223%3A0xd25e9cf1a722d421!2z5LiA55Wz5bGLIOWQiOW_l-W3peWgtCDvvIjmoITlt6Xmpa3lm6PlnLDlhoXvvIk!5e0!3m2!1sja!2sjp!4v1648096716376!5m2!1sja!2sjp" width="570" height="350" style={{ border: "0" }} allowFullScreen loading="lazy" className="u-radius-12"></iframe>
              </div>
            </div>
            <div className="u-w-full M:u-w-6/12">
              <div className="p-block-scroll">
                <div className="p-block-scroll__inner">
                  <GoogleReviews id="2212" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-shop-b" className="u-pt-30 M:u-pt-55 u-pb-30 M:u-pb-55">
          <h3 className="u-mb-30">
            <img src="/assets/images/svg/hy-tyuo.svg" alt="中央店" loading="lazy" width="176" height="39" className="p-svg-text u-ml-auto u-mr-auto" />
          </h3>
          <div className="p-block-shop">
            <div className="">
              <img src="/assets/images/about/img-shop-b.jpg?v3" srcSet="/assets/images/about/img-shop-b.jpg?v3 1170w, /assets/images/about/img-shop-b@2x.jpg?v3 2340w" sizes="(min-width: 586px) 1170px, 100vw" decoding="async" loading="lazy" width="1170" height="480" alt="" className="u-b u-radius-12" />
            </div>
            <ul className="p-block-shop__list c-list u-mb-20 M:u-mb-40">
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-a-02" data-modal="modal-a-02" data-modal-link="modal-a-02" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-a-02.jpg?v2" srcSet="/assets/images/about/person-a-02.jpg?v2 80w, /assets/images/about/person-a-02@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      店長
                    </span>
                    <br />
                    橋本 昌大
                  </p>
                </div>
                <div data-modal-target="modal-a-02">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-hashimoto.jpg?v3" srcSet="/assets/images/about/person-hashimoto.jpg?v3 470w, /assets/images/about/person-hashimoto@2x.jpg?v3 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <p className="u-mb-15">
                          畳主任／畳制作1級技能士
                        </p>
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/name-MasahiroHashimoto.svg" alt="橋本 昌大" loading="lazy" width="431" height="50" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          見えない所に手間を掛ける。
                          <br />
                          畳を敷いたときその違いは表れます。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          畳の仕事に携わって30年近くなりますが、未だに考えさせられる事が多く奥の深い仕事だと日々実感しています。
                          <br />
                          これからも一生懸命に努力勉強して、たくさんのお客様に喜んで頂けるような仕事をしていきたいと思います。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              畳製造
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              一生懸命
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              運動
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-otani" data-modal="modal-otani" data-modal-link="modal-otani" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-a-otani.jpg?v2" srcSet="/assets/images/about/person-a-otani.jpg?v2 80w, /assets/images/about/person-a-otani@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      配送
                    </span>
                    <br />
                    大谷 翼
                  </p>
                </div>
                <div data-modal-target="modal-otani">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-otani-tsubasa.jpg?v2" srcSet="/assets/images/about/person-otani-tsubasa.jpg?v2 470w, /assets/images/about/person-otani-tsubasa@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/0330/otani.svg" alt="大谷 翼" loading="lazy" width="320" height="47" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          畳作りもお客様との会話も大事にし、色々なお話しができるのが楽しみです！
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          {" 毎日色々な事を勉強し成長を感じています。"}
                          <br />
                          {" 1日でも早く一人前になれるよう先輩方の仕事を吸収し、精進していきます。 "}
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              畳表の裁断
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              笑顔
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              料理／晩酌
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="c-flex c-flex--x15 c-flex--y10">
            <div className="u-w-full M:u-w-6/12">
              <div className="c-frame M:u-h-350">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7040.327053451613!2d130.74500690539398!3d32.80708021056056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f3957e04624f%3A0x4a5f96727776e094!2z5LiA55Wz5bGLIOeGiuacrOS4reWkruW6lw!5e0!3m2!1sja!2sjp!4v1647518928212!5m2!1sja!2sjp" width="570" height="350" style={{ border: "0" }} allowFullScreen loading="lazy" className="u-radius-12"></iframe>
              </div>
            </div>
            <div className="u-w-full M:u-w-6/12">
              <div className="p-block-scroll">
                <div className="p-block-scroll__inner">
                  <GoogleReviews id="2214" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-shop-c" className="u-pt-30 M:u-pt-55 u-pb-30 M:u-pb-55">
          <h3 className="u-mb-30">
            <img src="/assets/images/svg/hy-nishi.svg" alt="西店" loading="lazy" width="138" height="39" className="p-svg-text u-ml-auto u-mr-auto" />
          </h3>
          <div className="p-block-shop">
            <div className="">
              <img src="/assets/images/about/img-shop-c.jpg?v3" srcSet="/assets/images/about/img-shop-c.jpg?v3 1170w, /assets/images/about/img-shop-c@2x.jpg?v3 2340w" sizes="(min-width: 586px) 1170px, 100vw" decoding="async" loading="lazy" width="1170" height="480" alt="" className="u-b u-radius-12" />
            </div>
            <ul className="p-block-shop__list c-list u-mb-20 M:u-mb-40">
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-c-01" data-modal="modal-c-01" data-modal-link="modal-c-01" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-c-01.jpg?v2" srcSet="/assets/images/about/person-c-01.jpg?v2 80w, /assets/images/about/person-c-01@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      店長
                    </span>
                    <br />
                    緒方 和生
                  </p>
                </div>
                <div data-modal-target="modal-c-01">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-ogata.jpg?v2" srcSet="/assets/images/about/person-ogata.jpg?v2 470w, /assets/images/about/person-ogata@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <p className="u-mb-15">
                          西店店長／畳製作1級技能士
                        </p>
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/name-KazuoOgata.svg" alt="緒方 和生" loading="lazy" width="431" height="50" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          力強さと丁寧さで仕事に向き合っています。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          いつもお世話になっております。一畳屋・西店店長の緒方と申します。勤続年数は今年で22年目に突入しました。主な業務としては「お客様対応から始まり、畳・襖・障子・網戸のお見積もり～引取、製造、納品」までになります。実務年数からすればベテランの域に達しつつありますが、初心を忘れることなく、常にお客様に喜んでいただける仕事を心がけながら、日々の業務に取組んでいきます。お客様からの叱咤激励を己の糧とし、「ありがとう」の一言をいただけるよう、努力と研鑽を続けていきます。まだまだ至らないところだらけですが、よろしくお願いいたします。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              配送／素早い作業／お客様対応（本人には自覚なし）
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              不言実行／有言実行／お客様のため、自分自身のために、必要なことはなにがなんでも実行できるような人物になるための指針として。
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              ドライブ／音楽／読書（主に漫画）
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-sugao" data-modal="modal-sugao" data-modal-link="modal-sugao" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-b-sugao.jpg?v2" srcSet="/assets/images/about/person-b-sugao.jpg?v2 80w, /assets/images/about/person-b-sugao@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      配送
                    </span>
                    <br />
                    菅尾 和史
                  </p>
                </div>
                <div data-modal-target="modal-sugao">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-sugao-kazufumi.jpg?v2" srcSet="/assets/images/about/person-sugao-kazufumi.jpg?v2 470w, /assets/images/about/person-sugao-kazufumi@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/0330/sugao.svg" alt="橋本 昌大" loading="lazy" width="385" height="48" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          お客様が笑顔になる仕事ができるよう頑張ります。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          様々な事を日々学んでいる最中ですが、少しでも早く先輩方の技術を自分のものにし、お客様に喜んでいただけるよう努力していこうと思います。まだまだ至らないところもありますが是非よろしくお願いいたします。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              障子
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              一期一会
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="c-flex c-flex--x15 c-flex--y10">
            <div className="u-w-full M:u-w-6/12">
              <div className="c-frame M:u-h-350">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8434.196385539728!2d130.6922534286994!3d32.769568353274025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f579828c0ca1%3A0x5b109038efdb277e!2z5LiA55Wz5bGLIOeGiuacrOilv-W6lw!5e0!3m2!1sja!2sjp!4v1647519028546!5m2!1sja!2sjp" width="570" height="350" style={{ border: "0" }} allowFullScreen loading="lazy" className="u-radius-12"></iframe>
              </div>
            </div>
            <div className="u-w-full M:u-w-6/12">
              <div className="p-block-scroll">
                <div className="p-block-scroll__inner">
                  <GoogleReviews id="2215" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-shop-d" className="u-pt-30 M:u-pt-55 u-pb-30 M:u-pb-55">
          <h3 className="u-mb-30">
            <img src="/assets/images/svg/hy-tamana.svg" alt="玉名店" loading="lazy" width="174" height="39" className="p-svg-text u-ml-auto u-mr-auto" />
          </h3>
          <div className="p-block-shop">
            <div className="">
              <img src="/assets/images/about/img-shop-d.jpg?v2" srcSet="/assets/images/about/img-shop-d.jpg?v2 1170w, /assets/images/about/img-shop-d@2x.jpg?v2 2340w" sizes="(min-width: 586px) 1170px, 100vw" decoding="async" loading="lazy" width="1170" height="480" alt="" className="u-b u-radius-12" />
            </div>
            <ul className="p-block-shop__list c-list u-mb-20 M:u-mb-40">
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-d-01" data-modal="modal-d-01" data-modal-link="modal-d-01" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-d-01.jpg?v2" srcSet="/assets/images/about/person-d-01.jpg?v2 80w, /assets/images/about/person-d-01@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      店長
                    </span>
                    <br />
                    高見 慎吾
                  </p>
                </div>
                <div data-modal-target="modal-d-01">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-takami.jpg?v2" srcSet="/assets/images/about/person-takami.jpg?v2 470w, /assets/images/about/person-takami@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <p className="u-mb-15">
                          玉名店店長
                        </p>
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/name-ShingoTakami.svg" alt="高見 慎吾" loading="lazy" width="431" height="50" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          一生懸命がんばります。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          一畳屋玉名店で店長をしております。高見です。
                          <br />
                          襖の仕事は玉名店ができてから多くかかわるようになりました。なかなか思い描いた通りに行かず、毎回勉強させてもらっています。
                          <br />
                          少しでもいい仕事ができるように、お客様に喜んで頂けるように、これからも精進して励みたいと思います。
                          <br />
                          どうぞ一畳屋玉名店を宜しくお願い致します。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              道具手入れ
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              小さなことからコツコツと
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              日向ぼっこ／読書
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-d-02" data-modal="modal-d-02" data-modal-link="modal-d-02" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-d-02.jpg?v2" srcSet="/assets/images/about/person-d-02.jpg?v2 80w, /assets/images/about/person-d-02@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      配送
                    </span>
                    <br />
                    立山 賢志
                  </p>
                </div>
                <div data-modal-target="modal-d-02">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-tateyama.jpg?v2" srcSet="/assets/images/about/person-tateyama.jpg?v2 470w, /assets/images/about/person-tateyama@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <p className="u-mb-15">
                          配送
                        </p>
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/name-KenshiTateyama.svg" alt="立山 賢志" loading="lazy" width="431" height="50" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          お客様に満足していただけるような接客と仕事ができるよう頑張ります。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          荒尾市・玉名市・玉名郡・大牟田市・地域を担当しています、立山です。
                          <br />
                          見積・配送・製造と少しでも良い仕事ができるよう努力して参りますので宜しくお願いします。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              お客様対応
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              日進月歩
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              漫画収集／ゲーム
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-takamori" data-modal="modal-takamori" data-modal-link="modal-takamori" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/202608/takamori.jpg" srcSet="/assets/images/about/202608/takamori.jpg 80w, /assets/images/about/202608/takamori@2x.jpg 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      配送
                    </span>
                    <br />
                    髙森 雅人
                  </p>
                </div>
                <div data-modal-target="modal-takamori">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/202608/modal-takamori.jpg" srcSet="/assets/images/about/202608/modal-takamori.jpg 470w, /assets/images/about/202608/modal-takamori@2x.jpg 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <p className="u-mb-15">
                          配送
                        </p>
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/about/202608/name-takamori.svg" alt="髙森 雅人" loading="lazy" width="367" height="49" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          「またアナタに頼みたい」を目標に！！
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          {" お客様の立場でどんな小さなご相談にも対応出来るような丁寧な仕事を心がけます。"}
                          <br />
                          {" お客様からもスタッフからも安心して仕事を任せてもらえる様に日々努力致します。 "}
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              笑顔で挨拶
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              継続は力なり
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              スイーツ食べ歩き
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="c-flex c-flex--x15 c-flex--y10">
            <div className="u-w-full M:u-w-6/12">
              <div className="c-frame M:u-h-350">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10731.484749381669!2d130.5762327564324!3d32.92168701161459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354059ff6f929679%3A0x81ce2eb1b46c2bb9!2z5LiA55Wz5bGLIOeOieWQjeW6lw!5e0!3m2!1sja!2sjp!4v1647519077145!5m2!1sja!2sjp" width="570" height="350" style={{ border: "0" }} allowFullScreen loading="lazy" className="u-radius-12"></iframe>
              </div>
            </div>
            <div className="u-w-full M:u-w-6/12">
              <div className="p-block-scroll">
                <div className="p-block-scroll__inner">
                  <GoogleReviews id="2216" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-shop-e" className="u-pt-30 M:u-pt-55 u-pb-30 M:u-pb-55">
          <h3 className="u-mb-30">
            <img src="/assets/images/svg/hy-tsuboi.svg" alt="坪井ショールーム" loading="lazy" width="362" height="36" className="p-svg-text u-ml-auto u-mr-auto" />
          </h3>
          <div className="p-block-shop">
            <div className="">
              <img src="/assets/images/about/img-shop-e.jpg?v2" srcSet="/assets/images/about/img-shop-e.jpg?v2 1170w, /assets/images/about/img-shop-e@2x.jpg?v2 2340w" sizes="(min-width: 586px) 1170px, 100vw" decoding="async" loading="lazy" width="1170" height="480" alt="" className="u-b u-radius-12" />
            </div>
            <ul className="p-block-shop__list c-list u-mb-20 M:u-mb-40">
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-e-01" data-modal="modal-e-01" data-modal-link="modal-e-01" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic">
                      <img src="/assets/images/about/person-e-01.jpg?v2" srcSet="/assets/images/about/person-e-01.jpg?v2 80w, /assets/images/about/person-e-01@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      営業
                    </span>
                    <br />
                    平島 光子
                  </p>
                </div>
                <div data-modal-target="modal-e-01">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-hirashima.jpg?v2" srcSet="/assets/images/about/person-hirashima.jpg?v2 470w, /assets/images/about/person-hirashima@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <p className="u-mb-15">
                          営業
                        </p>
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/name-MitsukoHirashima.svg" alt="平島 光子" loading="lazy" width="431" height="50" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          伺ったその場でお見積もりを提出いたします。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          一畳屋、畳四兄弟の長女平島光子です。一畳屋のホームページをご覧いただきありがとうございます。
                          <br />
                          主にお見積りを担当しています。今まで拝見した和室は1万室を超えました。
                          <br />
                          私はお客様のご要望や和室の使い方、家族構成などを伺い最適な商品提案を心掛けています。
                          <br />
                          畳・ふすまの事からオーダーカーテンや窓回り製品クロスまで、お気軽にお尋ねください。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              見積り／提案／世間話
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              感謝・ありがとう／人間万事塞翁が馬
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              散歩／読書
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="c-flex c-flex--x15 c-flex--y10">
            <div className="u-w-full M:u-w-6/12">
              <div className="c-frame M:u-h-350">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4486.338413311305!2d130.71171442729474!3d32.813464256630795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540faef23820f15%3A0xcab579d8df1bf8f0!2z5LiA55Wz5bGLIOOCt-ODp-ODvOODq-ODvOODoA!5e0!3m2!1sja!2sjp!4v1647519223278!5m2!1sja!2sjp" width="570" height="350" style={{ border: "0" }} allowFullScreen loading="lazy" className="u-radius-12"></iframe>
              </div>
            </div>
            <div className="u-w-full M:u-w-6/12">
              <div className="p-block-scroll">
                <div className="p-block-scroll__inner">
                  <GoogleReviews id="2217" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-shop-nagoya" className="u-pt-30 M:u-pt-55">
          <h3 className="u-mb-30">
            <img src="/assets/images/svg/0330/nagoya-ichijoya.svg" alt="肥後一畳屋（一畳屋名古屋店）" loading="lazy" width="271" height="63" className="p-svg-text u-ml-auto u-mr-auto" />
          </h3>
          <div className="p-block-shop">
            <div className="">
              <img src="/assets/images/about/img-shop-nagoya.jpg?v2" srcSet="/assets/images/about/img-shop-nagoya.jpg?v2 1170w, /assets/images/about/img-shop-nagoya@2x.jpg?v2 2340w" sizes="(min-width: 586px) 1170px, 100vw" decoding="async" loading="lazy" width="1170" height="480" alt="" className="u-b u-radius-12" />
            </div>
            <ul className="p-block-shop__list c-list u-mb-20 M:u-mb-40">
              <li className="p-block-shop__item">
                <div>
                  <a href="#modal-b-01" data-modal="modal-b-01" data-modal-link="modal-b-01" className="p-block-shop__anc js-modal u-b">
                    <div className="p-block-shop__pic  u-mr-auto  u-ml-auto">
                      <img src="/assets/images/about/person-b-01.jpg?v2" srcSet="/assets/images/about/person-b-01.jpg?v2 80w, /assets/images/about/person-b-01@2x.jpg?v2 160w" sizes="(min-width: 41px) 80px, 100vw" decoding="async" loading="lazy" width="80" height="80" alt="" className="u-radius" />
                    </div>
                    <div className="p-block-shop__icon">
                      <svg width="19" height="20" className="c-icon u-gray-0" aria-hidden="true">
                        <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                      </svg>
                    </div>
                  </a>
                  <p className="u-size-16 u-700 u-textcenter u-lh-14">
                    <span className="u-size-14 u-400">
                      店長
                    </span>
                    <br />
                    亀井 健二郎
                  </p>
                </div>
                <div data-modal-target="modal-b-01">
                  {" "}
                  <div className="p-block-modal u-flex u-column M:u-row">
                    {" "}
                    <div className="p-block-modal__pic c-object-fit-block u-w-full M:u-w-5/12 L:u-w-470">
                      {" "}
                      <img src="/assets/images/about/person-kamei-ken.jpg?v2" srcSet="/assets/images/about/person-kamei-ken.jpg?v2 470w, /assets/images/about/person-kamei-ken@2x.jpg?v2 940w" sizes="(min-width: 236px) 470px, 100vw" decoding="async" loading="lazy" width="470" height="600" alt="" className="c-object-fit-cover" />
                      {" "}
                    </div>
                    {" "}
                    <div className="p-block-modal__content u-flex-11auto u-w-full M:u-w-7/12">
                      {" "}
                      <div className="L:u-pr-70">
                        {" "}
                        <p className="u-mb-15">
                          専務取締役／畳製作1級技能士
                        </p>
                        {" "}
                        <h3 className="u-mb-30">
                          {" "}
                          <img src="/assets/images/svg/name-KenjiroKamei.svg" alt="亀井 健二郎" loading="lazy" width="431" height="50" className="p-svg-text" />
                          {" "}
                        </h3>
                        {" "}
                        <p className="u-size-20 M:u-size-24 u-700 u-lh-14 u-mb-15">
                          見積りに伺った時のお客様との楽しい人生話。
                          <br />
                          営業としてのやり甲斐をそこに感じる僕です。
                        </p>
                        {" "}
                        <p className="u-mb-30">
                          お世話になっております、一畳屋、次男の健二郎です。
                          <br />
                          「伝統建築工匠の技」の一つである畳製作がユネスコ無形文化遺産に登録されました。100年以上四代に渡って畳づくりに携わっている一畳屋の一員として、大変誇らしく思うと同時に次世代に畳を残さなければと日々実感しております。
                          <br />
                          伝統的な畳から現代のライフスタイルに合わせた畳まで、畳のことならすべて一畳屋にお任せください。
                        </p>
                        {" "}
                        <div>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              得意分野
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              畳、襖、ミニ畳づくり体験
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              好きな言葉
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              気づく　実行する　よくなる（壺川小学校校長先生の言葉）
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                          <dl className="u-flex u-mb-20">
                            {" "}
                            <dt className="p-label u-flex-00auto">
                              趣味
                            </dt>
                            {" "}
                            <dd className="u-size-14 u-pl-10">
                              ドライブ／音楽／YouTube
                            </dd>
                            {" "}
                          </dl>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="c-flex c-flex--x15 c-flex--y10 u-justify-center">
            <div className="u-w-full M:u-w-6/12">
              <div className="c-frame M:u-h-350">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3263.988341597794!2d136.9586127!3d35.107002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037bda5c77b3e7%3A0x9f1a0c81f4d7b8fd!2z6IKl5b6M5LiA55Wz5bGL!5e0!3m2!1sja!2sjp!4v1680138610141!5m2!1sja!2sjp" width="570" height="350" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="u-radius-12"></iframe>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="c-container c-container--large u-pt-30 M:u-pt-60 u-pb-20 M:u-pb-60">
        <h2 className="p-heading-main u-mb-40">
          <img src="/assets/images/svg/h-kaisyagaiyou.svg" alt="会社概要" loading="lazy" width="130" height="33" className="p-heading-main__label" />
        </h2>
        <table className="p-table-simple">
          <tbody>
            <tr>
              <th>
                会社名
              </th>
              <td>
                株式会社一畳屋
              </td>
            </tr>
            <tr>
              <th>
                所在地
              </th>
              <td>
                <dl className="u-mb-20">
                  <dt className="u-700">
                    本社＆ショールーム
                  </dt>
                  <dd>
                    <span className="u-pr-6">
                      〒860-0863　熊本県熊本市中央区坪井5丁目2-27
                    </span>
                    {" "}
                    <span>
                      <a href="https://goo.gl/maps/pQUneD5VaYstjHpz9" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/svg/pin-map.svg" alt="MAP" loading="lazy" width="50" height="16" className="" />
                      </a>
                    </span>
                  </dd>
                </dl>
                <dl className="u-mb-20">
                  <dt className="u-700">
                    合志店
                  </dt>
                  <dd>
                    <span className="u-pr-6">
                      〒861-1113　熊本県合志市栄3415-11　栄工業団地内
                    </span>
                    {" "}
                    <span>
                      <a href="https://goo.gl/maps/Ni2BEY7YnZMjoCTt5" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/svg/pin-map.svg" alt="MAP" loading="lazy" width="50" height="16" className="" />
                      </a>
                    </span>
                  </dd>
                </dl>
                <dl className="u-mb-20">
                  <dt className="u-700">
                    玉名店
                  </dt>
                  <dd>
                    <span className="u-pr-6">
                      〒865-0023　熊本県玉名市大倉750-8
                    </span>
                    {" "}
                    <span>
                      <a href="https://goo.gl/maps/QS3hQYhUGimnkww66" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/svg/pin-map.svg" alt="MAP" loading="lazy" width="50" height="16" className="" />
                      </a>
                    </span>
                  </dd>
                </dl>
                <dl className="u-mb-20">
                  <dt className="u-700">
                    中央店
                  </dt>
                  <dd>
                    <span className="u-pr-6">
                      〒862-0926　熊本県熊本市東区保田窪2-1-21
                    </span>
                    {" "}
                    <span>
                      <a href="https://goo.gl/maps/yJUw3MEjgBkxrL3F8" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/svg/pin-map.svg" alt="MAP" loading="lazy" width="50" height="16" className="" />
                      </a>
                    </span>
                  </dd>
                </dl>
                <dl className="u-mb-15">
                  <dt className="u-700">
                    西店
                  </dt>
                  <dd>
                    <span className="u-pr-6">
                      〒861-4101　熊本県熊本市南区近見1-1-5
                    </span>
                    {" "}
                    <span>
                      <a href="https://goo.gl/maps/ZQtUuAnbCB3fwsMJA" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/svg/pin-map.svg" alt="MAP" loading="lazy" width="50" height="16" className="" />
                      </a>
                    </span>
                  </dd>
                </dl>
                <dl className="u-mb-15">
                  <dt className="u-700">
                    肥後一畳屋（一畳屋名古屋店）
                  </dt>
                  <dd>
                    <span className="u-pr-6">
                      〒468-愛知県名古屋市天白区野並1丁目273
                    </span>
                    {" "}
                    <span>
                      <a href="https://goo.gl/maps/o3EVG84HRvRJgzaXA" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/svg/pin-map.svg" alt="MAP" loading="lazy" width="50" height="16" className="" />
                      </a>
                    </span>
                  </dd>
                </dl>
              </td>
            </tr>
            <tr>
              <th>
                連絡先
              </th>
              <td>
                電話／096-348-3176（代）　
              </td>
            </tr>
            <tr>
              <th>
                役員
              </th>
              <td>
                代表取締役／亀井慎一郎
                <br />
                専務取締役／亀井健二郎
              </td>
            </tr>
            <tr>
              <th>
                創業
              </th>
              <td>
                明治35年11月
              </td>
            </tr>
            <tr>
              <th>
                資本金
              </th>
              <td>
                2,000万円
              </td>
            </tr>
            <tr>
              <th>
                設立
              </th>
              <td>
                昭和63年7月　有限会社亀井たたみ店として設立
                <br />
                平成9年10月　株式会社へ組織変更し、併せて社名を株式会社一畳屋とする
              </td>
            </tr>
            <tr>
              <th>
                事業内容
              </th>
              <td>
                畳製造・販売、襖・障子貼替、オーダーカーテン、ブラインド等窓周り製品、クロス張替え
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
