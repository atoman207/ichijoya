import Hero, { HERO } from '@/components/layout/Hero'
import SiteShell from '@/components/layout/SiteShell'
import PageRuntime from '@/components/runtime/PageRuntime'
import AboutMain from '@/components/templates/AboutMain'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({ title: '会社・店舗案内', path: '/about/' })

/** page-about.php: company profile, shops (with modal galleries and Google reviews). */
export default function AboutPage() {
  return (
    <SiteShell hero={<Hero label={HERO.about} />}>
      <AboutMain />
      <PageRuntime modals reviews />
    </SiteShell>
  )
}
