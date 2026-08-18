import type { Component } from 'solid-js'
import { Symbology, type Affiliation } from './Symbology'

export const MapMarker: Component<{
  affiliation: Affiliation
  x: string
  y: string
  label?: string
}> = (props) => (
  <div
    class="atak-map-marker"
    data-testid="atak-map-marker"
    style={{
      position: 'absolute',
      left: props.x,
      top: props.y,
      transform: 'translate(-50%, -80%)',
    }}
  >
    <Symbology affiliation={props.affiliation} label={props.label} />
  </div>
)
