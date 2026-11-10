import DrawerContact from './DrawerContact'
import DrawerLine from './DrawerLine'
import DrawerNav from './DrawerNav'

/**
 * Contents of the drawer: the [data-drawer] elements of the page in index order (2: nav,
 * 3: footer contact info, 4: LINE button). /contact/ has no footer contact block.
 */
export default function DrawerItems({ contact = true }: { contact?: boolean }) {
  return (
    <>
      <DrawerNav />
      {contact && <DrawerContact />}
      <DrawerLine />
    </>
  )
}
