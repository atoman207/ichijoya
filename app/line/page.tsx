import SiteShell from '@/components/layout/SiteShell'
import LineMain from '@/components/templates/LineMain'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({ title: 'LINEでお問い合わせ', path: '/line/' })

/** page-line.php */
export default function LinePage() {
  return (
    <SiteShell>
      <LineMain />
    </SiteShell>
  )
}
