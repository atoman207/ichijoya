import SiteShell from '@/components/layout/SiteShell'
import HomeMain from './HomeMain'

/**
 * front-page.php (served at "/" and, like on WordPress, at "/page/N/"). The key visual fader starts
 * from <ThemeBoot/>.
 */
export default function HomeView() {
  return (
    <SiteShell home>
      <HomeMain />
    </SiteShell>
  )
}
