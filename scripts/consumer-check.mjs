/**
 * Fresh consumer of the public entry (src/index.ts) via vite-node.
 * Does not reimplement catalog or disclaimer.
 */
/** Same modules the package barrel re-exports (avoid Solid client-only SSR). */
import { ATAK_CATALOG_SLUGS } from '../src/catalog.ts'
import { atakDisclaimer } from '../src/source.ts'
import { ATAK_KIT_COLORS } from '../src/tokens.ts'

const required = [
  'base',
  'toolbar',
  'tablayout',
  'checkbox',
  'spinner',
  'edittext',
  'seekbar',
  'radiobutton',
  'modal',
  'button',
  'textview',
  'segmentedbutton',
  'tablelayout',
  'listview',
  'recyclerview',
  'accordionview',
  'viewgroup',
  'radialmenu',
  'mapsource',
  'symbology',
]

if (ATAK_CATALOG_SLUGS.join() !== required.join()) {
  console.error('slug mismatch', ATAK_CATALOG_SLUGS)
  process.exit(1)
}
if (!/not official ATAK/.test(atakDisclaimer())) {
  console.error('disclaimer missing official-ATAK refusal')
  process.exit(1)
}
if (ATAK_KIT_COLORS.accent !== '#33b5e5') {
  console.error('accent token missing')
  process.exit(1)
}
console.log('consumer ok slugs=' + ATAK_CATALOG_SLUGS.length)
console.log(atakDisclaimer())
