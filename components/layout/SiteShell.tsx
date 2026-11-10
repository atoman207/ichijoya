import type { ReactNode } from 'react'
import ShellRuntime from '@/components/runtime/ShellRuntime'
import Footer from './Footer'
import HeaderHome from './HeaderHome'
import HeaderInner from './HeaderInner'

type Props = {
  /** Extra class on #body: "l-body--2col" (news templates), "p-door" or "thanks". */
  bodyClass?: string
  home?: boolean
  hero?: ReactNode
  side?: ReactNode
  /** /contact/ omits the footer contact block (and its drawer clone). */
  footerContact?: boolean
  pageTop?: boolean
  children?: ReactNode
  /** Raw HTML for #body-main (pages whose content comes from the WordPress editor). */
  mainHtml?: string
  /**
   * WordPress loads block-library CSS only on single posts, category and date archives; the
   * stylesheet is scoped to #body[data-wp-block-library] so it applies on exactly those pages.
   */
  wpBlockLibrary?: boolean
}

/** The #body skeleton printed by header.php / footer.php around every template. */
export default function SiteShell({ bodyClass = '', home = false, hero, side, footerContact = true, pageTop = false, children, mainHtml, wpBlockLibrary = false }: Props) {
  return (
    <div id="body" className={`l-body ${bodyClass}`} data-wp-block-library={wpBlockLibrary ? '' : undefined}>
      {home ? <HeaderHome /> : <HeaderInner drawerContact={footerContact} />}
      {hero}
      <div id="body-container" className="l-body__container" data-component="container">
        {mainHtml !== undefined ? (
          <div id="body-main" className="l-body__main" data-component="main" dangerouslySetInnerHTML={{ __html: mainHtml }} />
        ) : (
          <div id="body-main" className="l-body__main" data-component="main">
            {children}
          </div>
        )}
        <div id="body-side" className="l-body__side" data-component="side">
          <div id="body-side-inner" className="l-body__side-inner">
            {side}
          </div>
        </div>
      </div>
      <Footer contact={footerContact} pageTop={pageTop} />
      {mainHtml !== undefined && children}
      <ShellRuntime />
    </div>
  )
}
