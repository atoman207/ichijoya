/** #hero block of header.php: the page heading is an SVG lettering image. */
export default function Hero({ label, as = 'h1' }: { label?: { src: string; alt: string }; as?: 'h1' | 'div' }) {
  const Tag = as
  return (
    <div id="hero" className="l-hero" data-component="hero" data-view-over="header">
      <div className="l-hero__inner">
        {label && (
          <Tag id="hero-main" className="p-heading-main u-w-full">
            <img src={label.src} alt={label.alt} height="34" className="p-heading-main__label l-hero-label" />
          </Tag>
        )}
      </div>
    </div>
  )
}

export const HERO = {
  about: { src: '/assets/images/svg/h-daihyouaisatsu.svg', alt: '代表挨拶' },
  news: { src: '/assets/images/svg/h-oshirase-koramu.svg', alt: 'お知らせ・コラム' },
  contact: { src: '/assets/images/svg/h-otoiawase.svg', alt: 'お問い合わせ' },
  privacy: { src: '/assets/images/svg/h-kojinjohou.svg', alt: '個人情報保護方針' },
  recruit: { src: '/assets/images/svg/h-saiyoujouhou.svg', alt: '採用情報' },
} as const
