import { bootScript } from '@/lib/theme/boot'

/**
 * Runs the parse-time part of the theme script (current links, agree state, key visual fader) at
 * the end of <body>, where WordPress loads main.bundle.js, instead of waiting for React to
 * hydrate. See lib/theme/boot.ts. Development builds leave it to <ThemeRuntime/>.
 */
export default function ThemeBoot() {
  if (process.env.NODE_ENV !== 'production') return null
  return <script dangerouslySetInnerHTML={{ __html: bootScript() }} />
}
