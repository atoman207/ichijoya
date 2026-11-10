import SiteShell from '@/components/layout/SiteShell'
import PageRuntime from '@/components/runtime/PageRuntime'
import DoorMain from '@/components/templates/DoorMain'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({ title: '襖・障子・網戸の種類・張替え価格一覧', path: '/door/' })

/** page-door.php: fusuma / shoji / screen door types and prices (modal photo sliders). */
export default function DoorPage() {
  return (
    <SiteShell bodyClass="p-door">
      <DoorMain />
      <PageRuntime sliders modals />
    </SiteShell>
  )
}
