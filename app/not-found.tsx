import Hero from '@/components/layout/Hero'
import SiteShell from '@/components/layout/SiteShell'
import NotFoundMain from '@/components/templates/NotFoundMain'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({ title: 'ページが見つかりませんでした', path: '/', canonical: null })

/** 404.php */
export default function NotFound() {
  return (
    <SiteShell hero={<Hero />}>
      <NotFoundMain />
    </SiteShell>
  )
}
