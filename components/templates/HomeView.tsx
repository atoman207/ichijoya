import SiteShell from '@/components/layout/SiteShell'
import PageRuntime from '@/components/runtime/PageRuntime'
import HomeMain from './HomeMain'

/** front-page.php (served at "/" and, like on WordPress, at "/page/N/"). */
export default function HomeView() {
  return (
    <SiteShell home>
      <HomeMain />
      <PageRuntime fader />
    </SiteShell>
  )
}
