import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import BodyEnd from '@/components/layout/BodyEnd'
import SvgFilters from '@/components/layout/SvgFilters'
import ThemeBoot from '@/components/runtime/ThemeBoot'
import ThemeRuntime from '@/components/runtime/ThemeRuntime'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  formatDetection: { telephone: false },
  icons: {
    icon: '/assets/images/favicon.png',
    apple: [{ url: '/assets/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: { 'msapplication-TileColor': '#ffffff' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Same bootstrap the theme prints in <head>: flag JS support before first paint and load
// Noto Sans JP through Google's WebFont Loader.
const headScript = `document.documentElement.classList.add('js');document.documentElement.classList.remove('no-js');
WebFontConfig={google:{families:['Noto+Sans+JP:400,700']}};
(function(d){var wf=d.createElement('script'),s=d.scripts[0];wf.src='https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';wf.async=true;s.parentNode.insertBefore(wf,s);})(document);`

const gtmScript = (id: string) =>
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`
const gaScript = (id: string) =>
  `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="no-js" prefix="og: http://ogp.me/ns#" data-root="/" data-assets="/assets/" suppressHydrationWarning>
      <head>
        {GTM_ID && <script dangerouslySetInnerHTML={{ __html: gtmScript(GTM_ID) }} />}
        {/* Theme stylesheets, in the order and with the media queries of the WordPress theme */}
        <link rel="stylesheet" href="/assets/css/main.css?ver=20220615100203" />
        <link rel="stylesheet" href="/assets/css/main-minMD.css?ver=20220615100203" media="(min-width:768px)" />
        <link rel="stylesheet" href="/assets/css/main-minLG.css?ver=20220615100203" media="(min-width:1024px)" />
        <link rel="stylesheet" href="/assets/css/print.css?ver=2022032462218" media="print" />
        <link rel="stylesheet" href="/assets/css/Vendor/wp-editor.css?ver=20220330134129" />
        <link rel="stylesheet" href="/assets/css/Vendor/page-thanks.css?ver=20220328104747" />
        <link rel="stylesheet" href="/assets/css/add.css?1712027489" />
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
        {/* Stylesheets WordPress enqueues through wp_head() */}
        <link rel="stylesheet" href="/wp-includes/css/dist/block-library/style.min.css?ver=5.9.20" />
        <link rel="stylesheet" href="/assets/css/wp-global-styles.css" />
        <link rel="stylesheet" href="/plugins/contact-form-7/includes/css/styles.css?ver=5.6" />
        <link rel="stylesheet" href="/plugins/widget-google-reviews/assets/css/public-main.css?ver=2.1.4" />
        <link rel="stylesheet" href="/assets-theme/css/template.css?ver=20210829170448" />
        <link rel="stylesheet" href="/plugins/easy-fancybox/css/jquery.fancybox.min.css?ver=1.3.24" media="screen" />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: gaScript(GA_ID) }} />
          </>
        )}
      </head>
      <body>
        <div data-view-over="once-scroll"></div>
        {GTM_ID && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
          </noscript>
        )}
        <SvgFilters />
        {children}
        <BodyEnd />
        <ThemeBoot />
        <ThemeRuntime />
      </body>
    </html>
  )
}
