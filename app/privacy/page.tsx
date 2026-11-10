import Hero, { HERO } from '@/components/layout/Hero'
import WpPageView, { wpPageMetadata } from '@/components/templates/WpPageView'
import { WP_PAGE } from '@/lib/wp'

export const generateMetadata = () => wpPageMetadata(WP_PAGE.privacy, '/privacy/')

export default function PrivacyPage() {
  return <WpPageView id={WP_PAGE.privacy} hero={<Hero label={HERO.privacy} />} />
}
