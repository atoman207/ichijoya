import Hero, { HERO } from '@/components/layout/Hero'
import PageRuntime from '@/components/runtime/PageRuntime'
import WpPageView, { wpPageMetadata } from '@/components/templates/WpPageView'
import { WP_PAGE } from '@/lib/wp'

export const generateMetadata = () => wpPageMetadata(WP_PAGE.contact, '/contact/')

/**
 * The REST API renders the Contact Form 7 shortcode outside of the page context; restore the
 * ids, action and container post the form has when WordPress serves /contact/.
 */
const asServedOnContactPage = (html: string) =>
  html
    .replaceAll('wpcf7-f7-o1', `wpcf7-f7-p${WP_PAGE.contact}-o1`)
    .replace(/action="[^"]*#wpcf7-f7-p\d+-o1"/, `action="/contact/#wpcf7-f7-p${WP_PAGE.contact}-o1"`)
    .replace('name="_wpcf7_container_post" value="0"', `name="_wpcf7_container_post" value="${WP_PAGE.contact}"`)

export default function ContactPage() {
  return (
    <WpPageView id={WP_PAGE.contact} hero={<Hero label={HERO.contact} />} footerContact={false} transform={asServedOnContactPage}>
      <PageRuntime contact />
    </WpPageView>
  )
}
