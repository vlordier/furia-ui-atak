import { For, type Component } from 'solid-js'

export type MapSourceId = 'osm' | 'imagery' | 'terrain' | 'none'

export const MAP_SOURCES: readonly { id: MapSourceId; label: string }[] = [
  { id: 'osm', label: 'OSM' },
  { id: 'imagery', label: 'Imagery' },
  { id: 'terrain', label: 'Terrain' },
  { id: 'none', label: 'None' },
]

export const MapSource: Component<{
  value: MapSourceId
  onChange?: (id: MapSourceId) => void
}> = (props) => (
  <fieldset class="atak-map-source" data-testid="atak-map-source" style={{ border: '1px solid var(--atak-border)', margin: 0, padding: '8px' }}>
    <legend style={{ color: 'var(--atak-muted)', 'font-size': '11px' }}>Map source</legend>
    <For each={MAP_SOURCES}>
      {(src) => (
        <label style={{ display: 'block', padding: '4px 0', cursor: 'pointer' }}>
          <input
            type="radio"
            name="atak-map-source"
            checked={props.value === src.id}
            onChange={() => props.onChange?.(src.id)}
          />{' '}
          {src.label}
        </label>
      )}
    </For>
  </fieldset>
)
