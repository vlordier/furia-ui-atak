export type AtakScenarioPage = {
  slug: string
  title: string
  summary: string
}

/** Composed Example Plugin scenes — not official ATAK. */
export const ATAK_SCENARIOS: readonly AtakScenarioPage[] = [
  {
    slug: 'ops-cop',
    title: 'Dynamic Ops — COP',
    summary: 'Map + dock: table, tabs, seek, radial. Training stand-in for Example 1.',
  },
  {
    slug: 'ops-modal',
    title: 'Dynamic Ops — Modal',
    summary: 'Same COP with a blocking edit modal. Training stand-in for Example 2.',
  },
  {
    slug: 'ops-sa',
    title: 'SA + GeoChat',
    summary: 'Peer list and training chat over the map drawer.',
  },
  {
    slug: 'ops-radial',
    title: 'Radial on map',
    summary: 'Affiliation marks and radial actions on a dark COP.',
  },
] as const

export const ATAK_SCENARIO_SLUGS = ATAK_SCENARIOS.map((s) => s.slug)
