export type AtakCatalogPage = {
  slug: string
  title: string
  group: 'chrome' | 'controls' | 'lists' | 'map'
  summary: string
}

/** One page per kit surface. Keep in sync with `src/components` and catalog routes. */
export const ATAK_CATALOG: readonly AtakCatalogPage[] = [
  { slug: 'base', title: 'ATAK Base', group: 'chrome', summary: 'Map-first shell: canvas, bars, optional drawer.' },
  { slug: 'toolbar', title: 'ToolBar', group: 'chrome', summary: 'Navigation and action strip.' },
  { slug: 'tablayout', title: 'TabLayout', group: 'chrome', summary: 'Horizontal tabs for stacked panes.' },
  { slug: 'checkbox', title: 'CheckBox', group: 'controls', summary: 'Binary toggle with label.' },
  { slug: 'spinner', title: 'Spinner', group: 'controls', summary: 'ComboBox / drop-down picker.' },
  { slug: 'edittext', title: 'EditText', group: 'controls', summary: 'Single-line editable field (Android EditText).' },
  { slug: 'seekbar', title: 'SeekBar', group: 'controls', summary: 'Continuous slider.' },
  { slug: 'radiobutton', title: 'RadioButton', group: 'controls', summary: 'Single-select option in a group.' },
  { slug: 'modal', title: 'Modal', group: 'controls', summary: 'Blocking dialog over the map.' },
  { slug: 'button', title: 'Button', group: 'controls', summary: 'Primary / ghost / danger press target.' },
  { slug: 'textview', title: 'TextView', group: 'controls', summary: 'Read-only text block.' },
  { slug: 'segmentedbutton', title: 'SegmentedButton', group: 'controls', summary: 'Exclusive segment control.' },
  { slug: 'tablelayout', title: 'TableLayout', group: 'lists', summary: 'Fixed-column table.' },
  { slug: 'listview', title: 'ListView', group: 'lists', summary: 'Simple scrolling list.' },
  { slug: 'recyclerview', title: 'RecyclerView', group: 'lists', summary: 'Windowed list for long SA feeds.' },
  { slug: 'accordionview', title: 'AccordionView', group: 'lists', summary: 'Expandable section list.' },
  { slug: 'viewgroup', title: 'ViewGroup', group: 'lists', summary: 'Generic grouped view container.' },
  { slug: 'radialmenu', title: 'ATAK RadialMenu', group: 'map', summary: 'Radial action cluster on the map.' },
  { slug: 'mapsource', title: 'ATAK Map Source', group: 'map', summary: 'Basemap source picker.' },
  { slug: 'symbology', title: 'ATAK Symbology', group: 'map', summary: 'Affiliation marks (not official 2525 product).' },
] as const

export const ATAK_CATALOG_SLUGS = ATAK_CATALOG.map((page) => page.slug)

/** Catalog slug → shipped export name used on that page. */
export const ATAK_CATALOG_EXPORTS: Record<(typeof ATAK_CATALOG)[number]['slug'], string> = {
  base: 'Base',
  toolbar: 'ToolBar',
  tablayout: 'TabLayout',
  checkbox: 'CheckBox',
  spinner: 'Spinner',
  edittext: 'EditText',
  seekbar: 'SeekBar',
  radiobutton: 'RadioButton',
  modal: 'Modal',
  button: 'Button',
  textview: 'TextView',
  segmentedbutton: 'SegmentedButton',
  tablelayout: 'TableLayout',
  listview: 'ListView',
  recyclerview: 'RecyclerView',
  accordionview: 'AccordionView',
  viewgroup: 'ViewGroup',
  radialmenu: 'RadialMenu',
  mapsource: 'MapSource',
  symbology: 'Symbology',
}
