import SiteShell from '@/components/layout/SiteShell'
import ChangeMain from '@/components/templates/ChangeMain'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({ title: '畳の種類・価格一覧', path: '/change/' })

/** page-change.php: tatami types and prices. */
export default function ChangePage() {
  return (
    <SiteShell>
      <ChangeMain />
    </SiteShell>
  )
}
