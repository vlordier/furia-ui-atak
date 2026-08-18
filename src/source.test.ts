import { describe, expect, it } from 'vitest'
import { ATAK_DS_REFERENCES, ATAK_DS_SOURCE, ATAK_EDGE_BUILDER_TARGET_ID, atakDisclaimer } from './source'
import { atakEdgeBuilderTarget } from './target'

describe('ATAK kit source', () => {
  it('points at the unofficial community file and refuses official claim', () => {
    expect(ATAK_DS_SOURCE.fileId).toBe('1571370238280853168')
    expect(ATAK_DS_SOURCE.designFileKey).toBe('vKo7t5RQdfIRvRZ7GQwT0G')
    expect(ATAK_DS_SOURCE.url).toContain('1571370238280853168')
    expect(ATAK_DS_SOURCE.designUrl).toContain('vKo7t5RQdfIRvRZ7GQwT0G')
    expect(ATAK_DS_REFERENCES.patrickSherlundGithub).toBe('https://github.com/Patrick-Sherlund')
    expect(ATAK_DS_SOURCE.claim).toBe('not-official-atak')
    expect(atakDisclaimer()).toMatch(/not official ATAK/)
    expect(atakEdgeBuilderTarget.id).toBe(ATAK_EDGE_BUILDER_TARGET_ID)
    expect(atakEdgeBuilderTarget.catalogIds).toContain('atak.sa-row')
  })
})
