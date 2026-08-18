import { describe, expect, it } from 'vitest'
import { ATAK_CATALOG_SLUGS, ATAK_KIT_COLORS, ATAK_SCENARIO_SLUGS, atakDisclaimer } from './index'

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

describe('package consumer', () => {
  it('loads catalog slugs and refuses official ATAK wording via the public entry', () => {
    expect(ATAK_CATALOG_SLUGS).toEqual(required)
    expect(atakDisclaimer()).toMatch(/not official ATAK/)
    expect(ATAK_KIT_COLORS.accent).toBe('#33b5e5')
    expect(ATAK_KIT_COLORS.bg).toBe('#222222')
    expect(ATAK_KIT_COLORS.error).toBe('#c12a2a')
    expect(ATAK_KIT_COLORS.friendly).toBe('#9dfbff')
    expect(ATAK_SCENARIO_SLUGS).toContain('ops-cop')
    expect(ATAK_SCENARIO_SLUGS).toHaveLength(4)
  })
})
