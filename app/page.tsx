import HomeView from '@/components/templates/HomeView'
import { pageMetadata } from '@/lib/metadata'
import { SITE_DESCRIPTION } from '@/lib/site'

export const metadata = pageMetadata({ path: '/', description: SITE_DESCRIPTION, type: 'website' })

/** front-page.php */
export default function HomePage() {
  return <HomeView />
}
