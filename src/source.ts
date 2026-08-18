/**
 * Unofficial community Figma kits. Not ATAK-CIV/GOV/MIL, WinTAK, or TAK.gov.
 */

/** Public references only — not authors of this package. */
export const ATAK_DS_REFERENCES = {
  figmaAtak:
    'https://www.figma.com/community/file/1571370238280853168/atak-design-system-tactical-assault-kit-team-awareness-kit',
  figmaAtakDesign:
    'https://www.figma.com/design/vKo7t5RQdfIRvRZ7GQwT0G/ATAK-Design-System---Tactical-Assault-Kit---Team-Awareness-Kit--Community---Copy-',
  figmaWintak:
    'https://www.figma.com/community/file/1573375430276099247/wintak-design-system-windows-tactical-assault-kit-team-awareness-kit',
  patrickSherlundGithub: 'https://github.com/Patrick-Sherlund',
} as const

export const ATAK_DS_SOURCE = {
  kind: 'figma-community-unofficial',
  fileId: '1571370238280853168',
  /** MCP fileKey for the team duplicate (community numeric ids are not valid keys). */
  designFileKey: 'vKo7t5RQdfIRvRZ7GQwT0G',
  url: ATAK_DS_REFERENCES.figmaAtak,
  designUrl: ATAK_DS_REFERENCES.figmaAtakDesign,
  claim: 'not-official-atak',
} as const

export const WINTAK_DS_SOURCE = {
  kind: 'figma-community-unofficial',
  fileId: '1573375430276099247',
  url: ATAK_DS_REFERENCES.figmaWintak,
  claim: 'not-official-wintak',
} as const

export const ATAK_EDGE_BUILDER_TARGET_ID = 'ds-tak-edge' as const

export function atakDisclaimer(): string {
  return 'Training CoT interop — not official ATAK / TAK Server.'
}

export type AtakInspiredToken = {
  id: string
  use: string
  furiaStay: string
}

export const ATAK_INSPIRED_TOKENS: readonly AtakInspiredToken[] = [
  {
    id: 'map-overlay-drawer',
    use: 'CoT SA / peer status as a side drawer',
    furiaStay: 'quiet COP tirette, not ATAK radial as default',
  },
  {
    id: 'sa-row-status',
    use: 'stale / live / error pills on CoT rows',
    furiaStay: 'existing StatusPill / Furia tokens',
  },
  {
    id: 'geochat-thread',
    use: 'b-t-f training chat',
    furiaStay: 'Chat tirette product chrome',
  },
  {
    id: 'cot-inject-affordance',
    use: 'Objects → inject CoT live (training)',
    furiaStay: 'label as training-replay, never official ATAK',
  },
]
