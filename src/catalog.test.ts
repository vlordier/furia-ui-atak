import { describe, expect, it } from 'vitest'
import * as pack from './index'
import { ATAK_CATALOG, ATAK_CATALOG_EXPORTS, ATAK_CATALOG_SLUGS } from './catalog'
import { previews } from '../catalog/previews'
import { ATAK_FIGMA_PAGES } from './figma'
import { ATAK_SCENARIOS, ATAK_SCENARIO_SLUGS } from './scenarios'

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
] as const

describe('ATAK catalog', () => {
  it('has an individual page slug for every required kit surface', () => {
    expect(ATAK_CATALOG_SLUGS).toEqual([...required])
    expect(new Set(ATAK_CATALOG.map((p) => p.title)).size).toBe(required.length)
  })

  it('pairs every slug with a catalog preview and a shipped export', () => {
    for (const slug of ATAK_CATALOG_SLUGS) {
      expect(previews[slug], `preview for ${slug}`).toBeTypeOf('function')
      const exportName = ATAK_CATALOG_EXPORTS[slug as keyof typeof ATAK_CATALOG_EXPORTS]
      expect(exportName).toBeTruthy()
      expect((pack as Record<string, unknown>)[exportName], `export ${exportName}`).toBeTypeOf('function')
      expect(ATAK_FIGMA_PAGES[slug as keyof typeof ATAK_FIGMA_PAGES]).toMatch(/^\d+:\d+$/)
    }
  })

  it('pairs every scenario slug with a composed preview', () => {
    expect(ATAK_SCENARIO_SLUGS).toEqual(['ops-cop', 'ops-modal', 'ops-sa', 'ops-radial'])
    expect(new Set(ATAK_SCENARIOS.map((s) => s.title)).size).toBe(4)
    for (const slug of ATAK_SCENARIO_SLUGS) {
      expect(previews[slug], `scenario preview ${slug}`).toBeTypeOf('function')
    }
    expect(pack.DynamicOps).toBeTypeOf('function')
    expect(pack.DeviceFrame).toBeTypeOf('function')
    expect(pack.MapMarker).toBeTypeOf('function')
  })
})
