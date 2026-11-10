import ArchiveView from '@/components/news/ArchiveView'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({ title: 'お知らせ', path: '/news/' })

/** Posts page (index.php), first page. */
export default function NewsIndexPage() {
  return <ArchiveView route={{ kind: 'index', page: 1 }} />
}
