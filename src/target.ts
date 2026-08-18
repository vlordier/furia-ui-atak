import { ATAK_EDGE_BUILDER_TARGET_ID } from './source'

export const C2_PACKAGE_KIND = 'furia.c2-package@2.0.0' as const

export type AtakBuilderTarget = {
  id: typeof ATAK_EDGE_BUILDER_TARGET_ID
  displayName: string
  catalogIds: readonly string[]
  profileIds: readonly string[]
  runtimeCapabilities: readonly string[]
  packageKind: typeof C2_PACKAGE_KIND
}

/** TAK-adjacent catalog for Furia Builder. Not an ATAK plugin APK. */
export const atakEdgeBuilderTarget: AtakBuilderTarget = {
  id: ATAK_EDGE_BUILDER_TARGET_ID,
  displayName: 'TAK edge (training)',
  catalogIds: ['ds.cot-peer', 'ds.geochat', 'ds.objects', 'atak.sa-row', 'atak.overlay-drawer'],
  profileIds: ['ds-tak-edge'],
  runtimeCapabilities: ['observe.cot'],
  packageKind: C2_PACKAGE_KIND,
}
