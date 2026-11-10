import Hero, { HERO } from '@/components/layout/Hero'
import WpPageView, { wpPageMetadata } from '@/components/templates/WpPageView'
import { WP_PAGE } from '@/lib/wp'

export const generateMetadata = () => wpPageMetadata(WP_PAGE.recruit, '/recruit/')

export default function RecruitPage() {
  return <WpPageView id={WP_PAGE.recruit} hero={<Hero label={HERO.recruit} />} />
}
