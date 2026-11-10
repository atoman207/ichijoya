'use client'

import Script from 'next/script'
import { useEffect } from 'react'

type W = Window & {
  FB?: { XFBML?: { parse: (el?: Element) => void } }
  twttr?: { widgets?: { load: (el?: Element) => void } }
  LineIt?: { loadButton: () => void }
}

/**
 * Loads the Facebook, X (Twitter) and LINE share-button scripts the single template embeds, and
 * re-renders the buttons when a post is opened through client-side navigation.
 */
export default function ShareWidgets() {
  useEffect(() => {
    const w = window as W
    w.FB?.XFBML?.parse()
    w.twttr?.widgets?.load()
    w.LineIt?.loadButton()
  }, [])
  return (
    <>
      <Script id="facebook-jssdk" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v9.0" strategy="afterInteractive" crossOrigin="anonymous" />
      <Script id="twitter-wjs" src="https://platform.twitter.com/widgets.js" strategy="afterInteractive" />
      <Script id="line-it-loader" src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" strategy="afterInteractive" />
    </>
  )
}
