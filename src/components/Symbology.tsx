import { For, type Component } from 'solid-js'

export type Affiliation = 'friendly' | 'hostile' | 'neutral' | 'unknown'

/** Color Guide Symbology/Marker fills — not official 2525 product. */
const fill: Record<Affiliation, string> = {
  friendly: '#9dfbff',
  hostile: '#ff8282',
  neutral: '#9dffaf',
  unknown: '#fff89d',
}

export const Symbology: Component<{
  affiliation: Affiliation
  label?: string
}> = (props) => (
  <span class="atak-symbology" data-testid="atak-symbology" data-affiliation={props.affiliation} style={{ display: 'inline-flex', 'align-items': 'center', gap: '8px' }}>
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <polygon points="9,2 16,16 2,16" fill={fill[props.affiliation]} stroke="#000" stroke-width="0.8" />
    </svg>
    {props.label ?? props.affiliation}
  </span>
)

export const SymbologyLegend: Component = () => (
  <div style={{ display: 'flex', gap: '12px', 'flex-wrap': 'wrap' }}>
    <For each={(['friendly', 'hostile', 'neutral', 'unknown'] as const)}>{(aff) => <Symbology affiliation={aff} />}</For>
  </div>
)
