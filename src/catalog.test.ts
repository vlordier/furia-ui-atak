import { describe, expect, it } from 'vitest'
import { ATAK_CATALOG, ATAK_CATALOG_SLUGS } from './catalog'

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
  'radialmenu',
  'mapsource',
  'symbology',
]

describe('ATAK catalog', () => {
  it('has an individual page slug for every required kit surface', () => {
    expect(ATAK_CATALOG_SLUGS).toEqual(required)
    expect(new Set(ATAK_CATALOG.map((p) => p.title)).size).toBe(required.length)
  })
})
