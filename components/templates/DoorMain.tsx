// page-door.php main content.

export default function DoorMain() {
  return (
    <>
    <style>{`
  .p-text-price.p-text-price--tilde:after{
    content: "円/枚";
  }
`}</style>
    <main className="L:u-mt-0  u-mt-80  M:u-pb-100  u-pb-80">
      <section className="p-change-price  u-pt-50  u-pb-60  u-bg-gray-fffdea">
        <div className="c-object-fit-block  u-z-1">
          <img src="/assets/images/door/bg-fusuma.jpg?v2" srcSet="/assets/images/door/bg-fusuma@2x.jpg?v2" width="1400" height="480" alt="" loading="lazy" className="u-b  c-object-fit-cover  c-object-fit-cover--absolute  u-top-50  M:u-mt-90  u-mt-70  M:u-h-480  u-h-380  u-z-_1" />
          <div className="c-container  c-container--medium">
            <h2 className="u-w-full  u-flex  u-justify-center  u-relative">
              <img src="/assets/images/svg/hl-fusuma.svg" alt="2日仕上げ襖張替え価格" loading="lazy" width="265" height="180" className="p-svg-text  M:u-w-265  u-w-210  M:u-ml-35  u-ml-25" />
              <p className="u-absolute  u-top-0  M:u-mt-0  u-mt-50  M:u-right-10  u-right-0  _L:u-mr-100  u-mr-_10">
                <img src="/assets/images/svg/badge-100gara.svg" alt="全100柄（無地有り）" loading="lazy" width="150" height="160" className="p-svg-text u-ml-auto u-mr-auto  M:u-w-150  u-w-110" />
              </p>
            </h2>
            <div className="u-mt-40">
              <ul className="c-list  c-flex  c-flex--x15  c-flex--y20  u-justify-center">
                <li className="M:u-w-6/12  u-w-full  u-items-center">
                  <div className="u-relative  u-mw-full  u-pb-20">
                    <img src="/assets/images/door/202312/main-torinokowashi.png" srcSet="/assets/images/door/202312/main-torinokowashi@2x.png" width="353" height="350" alt="" loading="lazy" className="u-b" />
                  </div>
                  <h3 className="">
                    <img src="/assets/images/door/202312/hm-torinokowasi.svg" alt="こだわり 最高級鳥の子和紙" loading="lazy" width="321" height="61" className="p-svg-text u-ml-auto u-mr-auto" />
                  </h3>
                  <div className="u-flex  u-wrap  u-justify-center  u-items-center  u-mt-5">
                    <span className="p-parts-category">
                      {" 片面 "}
                    </span>
                    <span className="p-text-price  p-text-price--leader  p-text-price--tilde  u-ml-20">
                      <span className="num">
                        15,400~
                      </span>
                      {" "}
                    </span>
                  </div>
                  <p className="u-mt-5">
                    {" 楮大礼紙など越前和紙や、京からかみ、江戸からかみなども、お取り寄せできます。"}
                    <br />
                    {" 見本に触れて、日本の伝統文化和紙をお確かめください。 "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="c-container">
            <div className="u-mt-40">
              <ul className="c-list  c-flex  c-flex--x15  c-flex--y20">
                <li className="M:u-w-4/12  u-w-full  u-items-center">
                  <div className="u-relative  u-mw-full  u-pb-20">
                    <img src="/assets/images/door/202312/main-suzaku.png" srcSet="/assets/images/door/202312/main-suzaku@2x.png" width="305" height="350" alt="" loading="lazy" className="u-b" />
                    <div data-modal="modal05" data-modal-link="modal05" className="js-modal  p-parts-btn  p-parts-btn--modal  u-w-270  u-h-50  u-mt-20  u-mr-auto  u-ml-auto">
                      <span className="u-mr-15">
                        <svg width="16" height="16" className="c-icon" aria-hidden="true">
                          <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                        </svg>
                      </span>
                      <span className="u-b  u-size-14  u-700">
                        {" 見本を見る "}
                      </span>
                    </div>
                    <div className="p-door-modal" data-modal-target="modal05">
                      {" "}
                      <div className="u-mw-full  u-w-500  u-w-560  u-mr-auto  u-ml-auto">
                        {" "}
                        <div className="u-mb-45">
                          {" "}
                          <img src="/assets/images/door/202312/hm-suzaku.svg" alt="おすすめ 朱雀" loading="lazy" width="80" height="59" className="p-svg-text u-ml-auto u-mr-auto" />
                          {" "}
                        </div>
                        {" "}
                        <div className="js-splide  p-slide-main" data-type="slide" data-autoplay="pause" data-arrows="false" data-config="perPage:1,gap:10,speed:1000,pagination:true" data-config-md="perPage:1,gap:20,speed:1000" data-config-lg="perPage:1,perMove:1,gap:20,speed:1000" data-sync="#thumbnail-slider05">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_171.jpg" srcSet="/assets/images/door/202312/sub-suzaku_171@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_176.jpg" srcSet="/assets/images/door/202312/sub-suzaku_176@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_178.jpg" srcSet="/assets/images/door/202312/sub-suzaku_178@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_179.jpg" srcSet="/assets/images/door/202312/sub-suzaku_179@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_180.jpg" srcSet="/assets/images/door/202312/sub-suzaku_180@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_185.jpg" srcSet="/assets/images/door/202312/sub-suzaku_185@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div id="thumbnail-slider05" className="M:u-mt-10  p-slide-thumb" data-type="slide" data-arrows="false" data-pagination="false" data-is-navigation="true" data-autoplay="pause" data-config="gap:10,fixedWidth:85,fixedHeight:61" data-config-md="gap:10,fixedWidth:85,fixedHeight:61" data-config-lg="gap:10,fixedWidth:85,fixedHeight:61">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_171.jpg" srcSet="/assets/images/door/202312/sub-suzaku_171@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_176.jpg" srcSet="/assets/images/door/202312/sub-suzaku_176@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_178.jpg" srcSet="/assets/images/door/202312/sub-suzaku_178@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_179.jpg" srcSet="/assets/images/door/202312/sub-suzaku_179@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_180.jpg" srcSet="/assets/images/door/202312/sub-suzaku_180@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-suzaku_185.jpg" srcSet="/assets/images/door/202312/sub-suzaku_185@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="u-flex  u-justify-end">
                          {" "}
                          <p className="u-size-14  u-mt-10">
                            {" こちらは一例です。他にも無地や裾柄など多数ございます。 "}
                          </p>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                  </div>
                  <h3 className="u-mt-30">
                    <img src="/assets/images/door/202312/hm-suzaku.svg" alt="おすすめ 朱雀" loading="lazy" width="80" height="59" className="p-svg-text u-ml-auto u-mr-auto" />
                  </h3>
                  <div className="u-flex  u-wrap  u-justify-center  u-items-center  u-mt-5">
                    <span className="p-parts-category">
                      {" 片面 "}
                    </span>
                    <span className="p-text-price  p-text-price--leader  p-text-price--tilde  u-ml-20">
                      <span className="num">
                        13,200
                      </span>
                      {" "}
                    </span>
                    <p className="u-size-14  u-700  u-w-full  u-textcenter  u-mt-5">
                      {" 高級糸入り襖紙 （全28柄） "}
                    </p>
                  </div>
                  <p className="u-mt-5">
                    {" まるでシルクのような生地は、きめが細かく高級感があります。 "}
                  </p>
                </li>
                <li className="M:u-w-4/12  u-w-full  u-items-center">
                  <div className="u-relative  u-mw-full  u-pb-20">
                    <img src="/assets/images/door/202312/main-tidori.png?v3" srcSet="/assets/images/door/202312/main-tidori@2x.png?v3" width="403" height="385" alt="" loading="lazy" className="u-b" />
                    <div data-modal="modal01" data-modal-link="modal01" className="js-modal  p-parts-btn  p-parts-btn--modal  u-w-270  u-h-50  u-mt-20  u-mr-auto  u-ml-auto">
                      <span className="u-mr-15">
                        <svg width="16" height="16" className="c-icon" aria-hidden="true">
                          <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                        </svg>
                      </span>
                      <span className="u-b  u-size-14  u-700">
                        {" 見本を見る "}
                      </span>
                    </div>
                    <div className="p-door-modal" data-modal-target="modal01">
                      {" "}
                      <div className="u-mw-full  u-w-500  u-w-560  u-mr-auto  u-ml-auto">
                        {" "}
                        <div className="u-mb-45">
                          {" "}
                          <img src="/assets/images/door/202312/hm-tidori.svg" alt="おすすめ ちどり" loading="lazy" width="92" height="58" className="p-svg-text u-ml-auto u-mr-auto" />
                          {" "}
                        </div>
                        {" "}
                        <div className="js-splide  p-slide-main" data-type="slide" data-autoplay="pause" data-arrows="false" data-config="perPage:1,gap:10,speed:1000,pagination:true" data-config-md="perPage:1,gap:20,speed:1000" data-config-lg="perPage:1,perMove:1,gap:20,speed:1000" data-sync="#thumbnail-slider01">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_01.jpg?v3" srcSet="/assets/images/door/202312/sub-tidori_01@2x.jpg?v3 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_06.jpg?v3" srcSet="/assets/images/door/202312/sub-tidori_06@2x.jpg?v3 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_10.jpg?v3" srcSet="/assets/images/door/202312/sub-tidori_10@2x.jpg?v3 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_14.jpg?v3" srcSet="/assets/images/door/202312/sub-tidori_14@2x.jpg?v3 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_16.jpg?v3" srcSet="/assets/images/door/202312/sub-tidori_16@2x.jpg?v3 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_22.jpg?v3" srcSet="/assets/images/door/202312/sub-tidori_22@2x.jpg?v3 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div id="thumbnail-slider01" className="M:u-mt-10  p-slide-thumb" data-type="slide" data-arrows="false" data-pagination="false" data-is-navigation="true" data-autoplay="pause" data-config="gap:10,fixedWidth:85,fixedHeight:61" data-config-md="gap:10,fixedWidth:85,fixedHeight:61" data-config-lg="gap:10,fixedWidth:85,fixedHeight:61">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_01.jpg" srcSet="/assets/images/door/202312/sub-tidori_01@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_06.jpg" srcSet="/assets/images/door/202312/sub-tidori_06@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_10.jpg" srcSet="/assets/images/door/202312/sub-tidori_10@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_14.jpg" srcSet="/assets/images/door/202312/sub-tidori_14@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_16.jpg" srcSet="/assets/images/door/202312/sub-tidori_16@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-tidori_22.jpg" srcSet="/assets/images/door/202312/sub-tidori_22@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="u-flex  u-justify-end">
                          {" "}
                          <p className="u-size-14  u-mt-10">
                            {" こちらは一例です。他にも無地や裾柄など多数ございます。 "}
                          </p>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                  </div>
                  <h3 className="u-mt-30">
                    <img src="/assets/images/door/202312/hm-tidori.svg" alt="おすすめ ちどり" loading="lazy" width="92" height="58" className="p-svg-text u-ml-auto u-mr-auto" />
                  </h3>
                  <div className="u-flex  u-wrap  u-justify-center  u-items-center  u-mt-5">
                    <span className="p-parts-category">
                      {" 片面 "}
                    </span>
                    <span className="p-text-price  p-text-price--leader  p-text-price--tilde  u-ml-20">
                      <span className="num">
                        9,900
                      </span>
                      {" "}
                    </span>
                    <p className="u-size-14  u-700  u-w-full  u-textcenter  u-mt-5">
                      {" 柿渋・消臭抗菌糸入り襖紙 （全32柄） "}
                    </p>
                  </div>
                  <p className="u-mt-5">
                    {" 柿渋染めされた糸を使用。消臭・抗菌効果で空気をきれいにしてくれます。 "}
                  </p>
                </li>
                <li className="M:u-w-4/12  u-w-full  u-items-center">
                  <div className="u-relative  u-mw-full  u-pb-20">
                    <img src="/assets/images/door/202312/main-nozomi.png?v2" srcSet="/assets/images/door/202312/main-nozomi@2x.png?v2" width="403" height="385" alt="" loading="lazy" className="u-b" />
                    <div data-modal="modal02" data-modal-link="modal02" className="js-modal  p-parts-btn  p-parts-btn--modal  u-w-270  u-h-50  u-mt-20  u-mr-auto  u-ml-auto">
                      <span className="u-mr-15">
                        <svg width="16" height="16" className="c-icon" aria-hidden="true">
                          <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                        </svg>
                      </span>
                      <span className="u-b  u-size-14  u-700">
                        {" 見本を見る "}
                      </span>
                    </div>
                    <div className="p-door-modal" data-modal-target="modal02">
                      {" "}
                      <div className="u-mw-full  u-w-500  u-w-560  u-mr-auto  u-ml-auto">
                        {" "}
                        <div className="u-mb-45">
                          {" "}
                          <img src="/assets/images/door/202312/hm-nozomi.svg" alt="おすすめ のぞみ" loading="lazy" width="107" height="58" className="p-svg-text u-ml-auto u-mr-auto" />
                          {" "}
                        </div>
                        {" "}
                        <div className="js-splide  p-slide-main" data-type="slide" data-autoplay="pause" data-arrows="false" data-config="perPage:1,gap:10,speed:1000,pagination:true" data-config-md="perPage:1,gap:20,speed:1000" data-config-lg="perPage:1,perMove:1,gap:20,speed:1000" data-sync="#thumbnail-slider02">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_152.jpg" srcSet="/assets/images/door/202312/sub-nozomi_152@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_153.jpg" srcSet="/assets/images/door/202312/sub-nozomi_153@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_157.jpg" srcSet="/assets/images/door/202312/sub-nozomi_157@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_166.jpg" srcSet="/assets/images/door/202312/sub-nozomi_166@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_173.jpg" srcSet="/assets/images/door/202312/sub-nozomi_173@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_177.jpg" srcSet="/assets/images/door/202312/sub-nozomi_177@2x.jpg 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div id="thumbnail-slider02" className="M:u-mt-10  p-slide-thumb" data-type="slide" data-arrows="false" data-pagination="false" data-is-navigation="true" data-autoplay="pause" data-config="gap:10,fixedWidth:85,fixedHeight:61" data-config-md="gap:10,fixedWidth:85,fixedHeight:61" data-config-lg="gap:10,fixedWidth:85,fixedHeight:61">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_152.jpg" srcSet="/assets/images/door/202312/sub-nozomi_152@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_153.jpg" srcSet="/assets/images/door/202312/sub-nozomi_153@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_157.jpg" srcSet="/assets/images/door/202312/sub-nozomi_157@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_166.jpg" srcSet="/assets/images/door/202312/sub-nozomi_166@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_173.jpg" srcSet="/assets/images/door/202312/sub-nozomi_173@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/202312/sub-nozomi_177.jpg" srcSet="/assets/images/door/202312/sub-nozomi_177@2x.jpg 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="u-flex  u-justify-end">
                          {" "}
                          <p className="u-size-14  u-mt-10">
                            {" こちらは一例です。他にも無地や裾柄など多数ございます。 "}
                          </p>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                  </div>
                  <h3 className="u-mt-30">
                    <img src="/assets/images/door/202312/hm-nozomi.svg" alt="おすすめ のぞみ" loading="lazy" width="107" height="58" className="p-svg-text u-ml-auto u-mr-auto" />
                  </h3>
                  <div className="u-flex  u-wrap  u-justify-center  u-items-center  u-mt-5">
                    <span className="p-parts-category">
                      {" 片面 "}
                    </span>
                    <span className="p-text-price  p-text-price--leader  p-text-price--tilde  u-ml-20">
                      <span className="num">
                        7,700
                      </span>
                      {" "}
                    </span>
                    <p className="u-size-14  u-700  u-w-full  u-textcenter  u-mt-5">
                      {" 和風から洋風まで糸入り襖紙 （全37柄） "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="c-container">
            <div className="u-mt-40">
              <ul className="c-list  c-flex  c-flex--x15  c-flex--y20  u-justify-center">
                <li className="M:u-w-4/12  u-w-full  u-items-center">
                  <div className="u-relative  u-mw-full  u-pb-20">
                    <img src="/assets/images/door/202312/main-sizuka.png?v2" srcSet="/assets/images/door/202312/main-sizuka@2x.png?v2" width="403" height="385" alt="" loading="lazy" className="u-b" />
                    <div data-modal="modal03" data-modal-link="modal03" className="js-modal  p-parts-btn  p-parts-btn--modal  u-w-270  u-h-50  u-mt-20  u-mr-auto  u-ml-auto">
                      <span className="u-mr-15">
                        <svg width="16" height="16" className="c-icon" aria-hidden="true">
                          <use xlinkHref="/assets/svg/sprite.svg#i-magnifying-glass"></use>
                        </svg>
                      </span>
                      <span className="u-b  u-size-14  u-700">
                        {" 見本を見る "}
                      </span>
                    </div>
                    <div className="p-door-modal" data-modal-target="modal03">
                      {" "}
                      <div className="u-mw-full  u-w-500  u-w-560  u-mr-auto  u-ml-auto">
                        {" "}
                        <div className="u-mb-45">
                          {" "}
                          <img src="/assets/images/svg/hm-shizuka.svg" alt="おてごろ しずか" loading="lazy" width="101" height="59" className="p-svg-text u-ml-auto u-mr-auto" />
                          {" "}
                        </div>
                        {" "}
                        <div className="js-splide  p-slide-main" data-type="slide" data-autoplay="pause" data-arrows="false" data-config="perPage:1,gap:10,speed:1000,pagination:true" data-config-md="perPage:1,gap:20,speed:1000" data-config-lg="perPage:1,perMove:1,gap:20,speed:1000" data-sync="#thumbnail-slider03">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_01.jpg?v2" srcSet="/assets/images/door/slide-shizuka_01@2x.jpg?v2 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_02.jpg?v2" srcSet="/assets/images/door/slide-shizuka_02@2x.jpg?v2 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_03.jpg?v2" srcSet="/assets/images/door/slide-shizuka_03@2x.jpg?v2 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_04.jpg?v2" srcSet="/assets/images/door/slide-shizuka_04@2x.jpg?v2 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_05.jpg?v2" srcSet="/assets/images/door/slide-shizuka_05@2x.jpg?v2 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-main__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_06.jpg?v2" srcSet="/assets/images/door/slide-shizuka_06@2x.jpg?v2 2x" width="500" height="" className="u-w-full" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div id="thumbnail-slider03" className="M:u-mt-10  p-slide-thumb" data-type="slide" data-arrows="false" data-pagination="false" data-is-navigation="true" data-autoplay="pause" data-config="gap:10,fixedWidth:85,fixedHeight:61" data-config-md="gap:10,fixedWidth:85,fixedHeight:61" data-config-lg="gap:10,fixedWidth:85,fixedHeight:61">
                          {" "}
                          <div className="splide p-slider">
                            {" "}
                            <div className="splide__track">
                              {" "}
                              <ul className="splide__list">
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_01.jpg?v2" srcSet="/assets/images/door/slide-shizuka_01@2x.jpg?v2 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_02.jpg?v2" srcSet="/assets/images/door/slide-shizuka_02@2x.jpg?v2 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_03.jpg?v2" srcSet="/assets/images/door/slide-shizuka_03@2x.jpg?v2 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_04.jpg?v2" srcSet="/assets/images/door/slide-shizuka_04@2x.jpg?v2 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_05.jpg?v2" srcSet="/assets/images/door/slide-shizuka_05@2x.jpg?v2 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                                <li className="splide__slide">
                                  {" "}
                                  <div className="p-slide-thumb__item">
                                    {" "}
                                    <img src="/assets/images/door/slide-shizuka_06.jpg?v2" srcSet="/assets/images/door/slide-shizuka_06@2x.jpg?v2 2x" width="85" height="" className="" alt="" />
                                    {" "}
                                  </div>
                                  {" "}
                                </li>
                                {" "}
                              </ul>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="u-flex  u-justify-end">
                          {" "}
                          <p className="u-size-14  u-mt-10">
                            {" こちらは一例です。他にも無地や裾柄など多数ございます。 "}
                          </p>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                  </div>
                  <h3 className="u-mt-30">
                    <img src="/assets/images/svg/hm-shizuka.svg" alt="おてごろ しずか" loading="lazy" width="101" height="59" className="p-svg-text u-ml-auto u-mr-auto" />
                  </h3>
                  <div className="u-flex  u-wrap  u-justify-center  u-items-center  u-mt-5">
                    <span className="p-parts-category">
                      {" 片面 "}
                    </span>
                    <span className="p-text-price  p-text-price--leader  p-text-price--tilde  u-ml-20">
                      <span className="num">
                        5,500
                      </span>
                      {" "}
                    </span>
                    <p className="u-size-14  u-700  u-w-full  u-textcenter  u-mt-5">
                      {" プリント紙 （全30柄） "}
                    </p>
                  </div>
                  <p className="u-mt-5">
                    {" リーズナブルのお部屋をイメージチェンジ。 "}
                  </p>
                </li>
              </ul>
              <p className="M:u-textright  u-size-14  u-mt-20">
                {" ※掲載している柄は一例です、他柄・無地など各種ご用意しております。"}
                <br />
                {" ※片面とは、襖一枚の片側の張替えです。両面とは襖一枚の両面の張替えです。"}
                <br />
                {"構造やサイズによって価格が変わります。事前に無料で現場調査とお見積りいたします。 "}
              </p>
            </div>
            <div className="M:u-mt-75  u-mt-50">
              <div className="c-flex  c-flex--x15  c-flex--y15  L:u-wrap-no">
                <div className="L:u-w-auto  u-w-full  u-flex-00auto  u-items-center">
                  <div className="L:u-pr-20  L:u-pl-20">
                    <img src="/assets/images/door/pic-tatetuke.png?v2" srcSet="/assets/images/door/pic-tatetuke@2x.png?v2" width="430" height="268" alt="" loading="lazy" className="u-b" />
                  </div>
                </div>
                <div className="u-w-full">
                  <div className="u-border-solid-top  u-border-solid-bottom  u-border-gray-text  u-border-1  u-pt-20  u-pb-20  u-pl-10">
                    <ul className="c-list  u-size-14">
                      <li style={{ paddingLeft: "1em", textIndent: "-1em" }}>
                        ※工賃・配送・消費税込価格
                      </li>
                      <li style={{ paddingLeft: "1em", textIndent: "-1em" }}>
                        ※2日仕上げ
                      </li>
                      <li style={{ paddingLeft: "1em", textIndent: "-1em" }}>
                        {"※掲載している柄は一例です、他柄・無地など各種ご用意しております。 "}
                      </li>
                      <li style={{ paddingLeft: "1em", textIndent: "-1em" }}>
                        ※規格外のサイズや特殊物は別途お見積りいたします。
                      </li>
                      <li style={{ paddingLeft: "1em", textIndent: "-1em" }}>
                        ※片面とは、襖一枚の片側の張替えです。両面とは襖一枚の両面の張替えです。
                      </li>
                      <li style={{ paddingLeft: "1em", textIndent: "-1em" }}>
                        ※別途諸経費3300円/一式が工事全体に対してかかります。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="shoji" className="M:u-pt-80  u-pt-60">
        <div className="c-container">
          <h2 className="p-heading-main">
            <img src="/assets/images/svg/h-syojiharikae.svg" alt="障子張替え価格" loading="lazy" width="230" height="33" className="p-heading-main__label" />
          </h2>
          <div className="u-bg-blue-3b3980  u-radius-25  u-mt-35  u-pt-30  M:u-pr-30  u-pr-20  u-pb-35  M:u-pl-30  u-pl-20">
            <div className="c-flex  c-flex--x15  c-flex--y15  L:u-wrap-no">
              <div className="u-w-full">
                <div className="p-table-price  u-mb-15  L:u-pr-10">
                  <table>
                    <tbody>
                      <tr>
                        <th></th>
                        <th>
                          <span className="u-size-20">
                            大
                          </span>
                          {" "}
                          <span className="u-400">
                            （185×92cm）
                          </span>
                        </th>
                        <th>
                          <span className="u-size-20">
                            中
                          </span>
                          {" "}
                          <span className="u-400">
                            （120×92cm）
                          </span>
                        </th>
                        <th>
                          <span className="u-size-20">
                            小
                          </span>
                          {" "}
                          <span className="u-400">
                            （50×92cm）
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <td data-head="">
                          エコノミー
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              3,300
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              2,750
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              1,650
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td data-head="">
                          ストライク
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              4,400
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              3,300
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              2,200
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td data-head="">
                          プラカ 無地
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              6,600
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              5,500
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              3,300
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td data-head="">
                          ワーロン柄入り
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              11,000
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              8,800
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              5,500
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    エコノミー
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      一般的な障子紙
                    </p>
                  </dd>
                </dl>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    ストライク
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      エコノミーの約4倍の強度
                    </p>
                  </dd>
                </dl>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    プラカ 無地
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      とても破れにくく、冷暖房効率も大幅アップ。
                    </p>
                  </dd>
                </dl>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    ワーロン柄入り
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      樹脂素材で強度最高レベル。柄入りでオシャレな障子紙。
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="L:u-w-auto  u-w-full  u-flex-00auto  L:u-order-1  u-order-_1  u-items-center">
                <img src="/assets/images/door/pic-shoji.png?v2" srcSet="/assets/images/door/pic-shoji@2x.png?v2" width="430" height="268" alt="" loading="lazy" className="u-b  L:u-ml-10" />
              </div>
            </div>
          </div>
          <p className="M:u-textright  u-size-14  u-mt-15">
            {" ※工賃・配送・消費税込価格"}
            <br />
            {" ※別途諸経費3300円/一式が工事全体に対してかかります。"}
            <br />
            {" ※大・中・小のサイズは建具そのもののサイズです。規格外のサイズは採寸してお見積りいたします。 "}
          </p>
        </div>
      </section>
      <section className="M:u-pt-75  u-pt-60">
        <div className="c-container">
          <h2 className="p-heading-main">
            <img src="/assets/images/svg/h-amidoharikae.svg" alt="アミ戸張替え価格" loading="lazy" width="253" height="32" className="p-heading-main__label" />
          </h2>
          <div className="u-bg-blue-3b3980  u-radius-25  u-mt-35  u-pt-30  M:u-pr-30  u-pr-20  u-pb-35  M:u-pl-30  u-pl-20">
            <div className="c-flex  c-flex--x15  c-flex--y15  L:u-wrap-no">
              <div className="u-w-full">
                <div className="p-table-price  u-mb-15  L:u-pr-10">
                  <table>
                    <tbody>
                      <tr>
                        <th></th>
                        <th>
                          <span className="u-size-20">
                            大
                          </span>
                          {" "}
                          <span className="u-400">
                            （185×92cm）
                          </span>
                        </th>
                        <th>
                          <span className="u-size-20">
                            中
                          </span>
                          {" "}
                          <span className="u-400">
                            （120×92cm）
                          </span>
                        </th>
                        <th>
                          <span className="u-size-20">
                            小
                          </span>
                          {" "}
                          <span className="u-400">
                            （50×92cm）
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <td data-head="">
                          18メッシュ
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              3,300
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              2,750
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              1,650
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td data-head="">
                          24メッシュ
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              4,400
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              3,300
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              2,200
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td data-head="">
                          虫が嫌がる網
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              6,600
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              4,950
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              3,300
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td data-head="" className="u-nowrap">
                          ペットディフェンス
                        </td>
                        <td data-head="大 （185×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              13,200
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="中 （120×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              9,900
                            </span>
                            {" "}
                          </span>
                        </td>
                        <td data-head="小 （50×92cm）">
                          <span className="p-text-price">
                            <span className="num">
                              6,600
                            </span>
                            {" "}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    18メッシュ
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      一般的な網です。
                    </p>
                  </dd>
                </dl>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    24メッシュ
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      目が細かく小さい虫もシャットアウト。
                    </p>
                  </dd>
                </dl>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    虫が嫌がる網
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      網に虫が嫌がる成分を配合。蚊やカメムシにも効果あり。
                    </p>
                  </dd>
                </dl>
                <dl className="u-size-14  u-lh-15  u-gray-0  u-flex  M:u-row  u-column">
                  <dt className="u-flex-00auto  u-700">
                    ペットディフェンス
                  </dt>
                  <dd>
                    <p className="p-indent">
                      <span className="p-align-sub">
                        …
                      </span>
                      猫や犬の引っ掻きにお困りの方へおすすめ。
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="L:u-w-auto  u-w-full  u-flex-00auto  L:u-order-1  u-order-_1  u-items-center">
                <img src="/assets/images/door/pic-amido.png?v2" srcSet="/assets/images/door/pic-amido@2x.png?v2" width="430" height="268" alt="" loading="lazy" className="u-b  L:u-ml-10" />
              </div>
            </div>
          </div>
          <p className="M:u-textright  u-size-14  u-mt-15">
            {" ※工賃・配送・消費税込価格"}
            <br />
            {" ※別途諸経費3300円/一式が工事全体に対してかかります。"}
            <br />
            {" ※大・中・小のサイズは建具そのもののサイズです。規格外のサイズは採寸してお見積りいたします。 "}
          </p>
        </div>
      </section>
      <section className="M:u-pt-100  u-pt-60">
        <div className="c-container  L:u-pt-15">
          <h2 className="p-heading-main">
            <img src="/assets/images/svg/h-sekojirei.svg" alt="施工事例" loading="lazy" width="123" height="35" className="p-heading-main__label" />
          </h2>
          <div className="u-mt-40">
            <ul className="c-list  c-flex  c-flex--x15  c-flex--y20">
              <li className="M:u-w-4/12  u-w-full  u-items-center">
                <img src="/assets/images/door/pic-works-01.jpg?v2?20220328" srcSet="/assets/images/door/pic-works-01@2x.jpg?v2?20220328" width="370" height="230" alt="" loading="lazy" className="u-b" />
                <span className="u-size-18  u-lh-10  u-700  u-mt-20">
                  {" 襖 "}
                </span>
                <a href="/news/category/施工事例/襖-施工事例/" className="p-parts-btn  u-w-270  u-h-50  u-mt-20">
                  <span className="u-b  u-size-14  u-700">
                    {" 詳細はこちら "}
                  </span>
                  <span className="u-translate-left-center  u-right-0  u-mr-15">
                    <svg width="16" height="16" className="c-icon  u-sub" aria-hidden="true">
                      <use xlinkHref="/assets/svg/sprite.svg#i-arrow-right-circle"></use>
                    </svg>
                  </span>
                </a>
              </li>
              <li className="M:u-w-4/12  u-w-full  u-items-center">
                <img src="/assets/images/door/pic-works-02.jpg?v2?20220328" srcSet="/assets/images/door/pic-works-02@2x.jpg?v2?20220328" width="370" height="230" alt="" loading="lazy" className="u-b" />
                <span className="u-size-18  u-lh-10  u-700  u-mt-20">
                  {" 障子 "}
                </span>
                <a href="/news/category/施工事例/障子-施工事例/" className="p-parts-btn  u-w-270  u-h-50  u-mt-20">
                  <span className="u-b  u-size-14  u-700">
                    {" 詳細はこちら "}
                  </span>
                  <span className="u-translate-left-center  u-right-0  u-mr-15">
                    <svg width="16" height="16" className="c-icon  u-sub" aria-hidden="true">
                      <use xlinkHref="/assets/svg/sprite.svg#i-arrow-right-circle"></use>
                    </svg>
                  </span>
                </a>
              </li>
              <li className="M:u-w-4/12  u-w-full  u-items-center">
                <img src="/assets/images/door/pic-works-03.jpg?v2?20220328" srcSet="/assets/images/door/pic-works-03@2x.jpg?v2?20220328" width="370" height="230" alt="" loading="lazy" className="u-b" />
                <span className="u-size-18  u-lh-10  u-700  u-mt-20">
                  {" アミ戸 "}
                </span>
                <a href="/news/category/施工事例/アミド-施工事例/" className="p-parts-btn  u-w-270  u-h-50  u-mt-20">
                  <span className="u-b  u-size-14  u-700">
                    {" 詳細はこちら "}
                  </span>
                  <span className="u-translate-left-center  u-right-0  u-mr-15">
                    <svg width="16" height="16" className="c-icon  u-sub" aria-hidden="true">
                      <use xlinkHref="/assets/svg/sprite.svg#i-arrow-right-circle"></use>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
