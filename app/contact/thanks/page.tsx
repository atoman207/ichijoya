import Hero from '@/components/layout/Hero'
import WpPageView, { wpPageMetadata } from '@/components/templates/WpPageView'
import { WP_PAGE } from '@/lib/wp'

export const generateMetadata = () => wpPageMetadata(WP_PAGE.thanks, '/contact/thanks/', 'noindex, nofollow')

export default function ThanksPage() {
  return <WpPageView id={WP_PAGE.thanks} hero={<Hero />} bodyClass="thanks" />
}
