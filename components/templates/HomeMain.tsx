// front-page.php main content.
import HomeFeed from '@/components/news/HomeFeed'

export default function HomeMain() {
  return (
    <main className="p-top">
      <section className="p-top-intro  M:u-pt-100  u-pt-50">
        <div className="c-container  L:u-pt-20">
          <div className="c-flex  c-flex--x15  c-flex--y20  u-justify-center  L:u-wrap-no">
            <div className="M:u-w-auto  u--wfull  u-row  M:u-order-1">
              <h2>
                <img src="/assets/images/svg/v-meiji.svg" alt="明治三十五年創業" loading="lazy" width="60" height="" className="p-svg-text  M:u-w-60  u-w-50  m:u-hidden" />
                <img src="/assets/images/top/copy.png" alt="明治三十五年創業 現在四代目、四兄弟で営む一畳屋。私たちは「畳」に一生懸命です。" loading="lazy" width="650" height="280" className="u-b  M:u-hidden  u-w-325" />
              </h2>
              <p className="u-mr-30  u-order-_1  m:u-hidden">
                <img src="/assets/images/svg/v-genzai4-bg-222.svg" alt="現在四代目、四兄弟で営む一畳屋。私たちは「畳」に一生懸命です。" loading="lazy" width="112" height="" className="p-svg-text  M:u-w-110  u-w-90" />
              </p>
            </div>
            <div className="L:u-w-6/12  u-w-full  M:u-order-_1">
              <div className="p-top-intro__pic">
                <picture>
                  <source type="image/webp" srcSet="/assets/images/top/pic-intro.webp 1x, /assets/images/top/pic-intro@2x.webp 2x" />
                  <img src="/assets/images/top/pic-intro.jpg" srcSet="/assets/images/top/pic-intro@2x.jpg" width="685" height="480" alt="" loading="lazy" className="u-b  p-top-intro__pic-item" />
                </picture>
              </div>
            </div>
            <div className="M:u-w-auto  u-w-full">
              <p className="M:u-w-auto  u-w-full  M:u-tategaki  u-size-16  u-lh-26  M:u-mr-_5">
                {" 「兄弟で畳屋さん？しかも四人？珍しかね～」とよくお客様に驚かれます。"}
                <br />
                {" 同時に「お父さん、お母さんは嬉しかどね～」と頬を緩めてくださいます。"}
                <br />
                {" 「継げ」と言われたことはないですが、畳が大好きでお客様のことを考え"}
                <br className="m:u-hidden" />
                一生懸命働く両親の姿を、小さい頃からずっと見てきました。
                <br />
                {" だから四人ともが「自分も畳の仕事がしたい」と考えたのだと思います。"}
                <br />
                {" 畳には人を幸せな気持ちにしてくれる魅力がいっぱい詰まっています。"}
                <br />
                {" その魅力を今度は私たちが力を合わせ、"}
                <br className="m:u-hidden" />
                {"次世代を生きる子供たちに繋いでいきたいと思います。 "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-top-cm  M:u-pt-100  u-pt-60">
        <div className="c-container  L:u-pt-30">
          <h2>
            <img src="/assets/images/svg/yey-new-cm.svg" alt="新しいCMができました" loading="lazy" width="590" height="" className="p-svg-text  u-mr-auto  u-ml-auto" />
          </h2>
          <p className="u-size-18  u-lh-16  u-700  u-textcenter  u-mt-10">
            <span className="u-ib  u-mt-_4  M:u-size-30  u-size-22  u-green-488937">
              「日本一安心して注文できる畳屋」
            </span>
            <span className="u-ib  u-mt-_4  M:u-size-24  u-size-19">
              を目指し、日々精進中！
            </span>
          </p>
          <div className="p-top-cm__movie  u-mt-20">
            <div className="p-movie-770x435">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/wJqJllMgBHk?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="u-size-14  u-flex  u-justify-center  u-items-center  u-mt-15">
              <svg width="26" height="17" className="c-icon  u-green-488937  u-mr-15" aria-hidden="true">
                <use xlinkHref="/assets/svg/sprite.svg#i-sound"></use>
              </svg>
              {"音声が流れます。音量にご注意ください。 "}
            </p>
            <picture>
              <source type="image/webp" srcSet="/assets/images/top/tatami-amido.webp 1x, /assets/images/top/tatami-amido@2x.webp 2x" />
              <img src="/assets/images/top/tatami-amido.png" srcSet="/assets/images/top/tatami-amido@2x.png" width="272" height="376" alt="" loading="lazy" className="p-top-cm__movie-bg  p-top-cm__movie-bg--left" />
            </picture>
            <picture>
              <source type="image/webp" srcSet="/assets/images/top/fusuma-shoji.webp 1x, /assets/images/top/fusuma-shoji@2x.webp 2x" />
              <img src="/assets/images/top/fusuma-shoji.png" srcSet="/assets/images/top/fusuma-shoji@2x.png" width="250" height="372" alt="" loading="lazy" className="p-top-cm__movie-bg  p-top-cm__movie-bg--right" />
            </picture>
          </div>
        </div>
      </section>
      <section className="M:u-pt-100  u-pt-60  u-pb-100">
        <div className="c-container  c-container--large  L:u-pt-15">
          <h2 className="p-heading-main">
            <img src="/assets/images/svg/h-oshirase-koramu.svg" alt="お知らせ・コラム" loading="lazy" width="220" height="" className="p-svg-text  u-mr-auto  u-ml-auto" />
          </h2>
          <div className="u-mt-25  M:u-pr-50  M:u-pl-50">
            <HomeFeed />
          </div>
          <a href="/news/" className="p-parts-btn  u-w-270  u-h-50  u-mt-40  u-mr-auto  u-ml-auto">
            <span className="u-b  u-size-14  u-700">
              {" お知らせ・コラム一覧 "}
            </span>
            <span className="u-translate-left-center  u-right-0  u-mr-15">
              <svg width="16" height="16" className="c-icon  u-sub" aria-hidden="true">
                <use xlinkHref="/assets/svg/sprite.svg#i-arrow-right-circle"></use>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}
