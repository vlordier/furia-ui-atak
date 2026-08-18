import type { Component } from 'solid-js'

export const MapChip: Component<{ label: string; active?: boolean; onClick?: () => void }> = (props) => (
  <button
    type="button"
    class="atak-map-chip"
    data-testid="atak-map-chip"
    data-active={props.active ? 'true' : 'false'}
    onClick={() => props.onClick?.()}
    style={{
      padding: '4px 10px',
      'border-radius': '999px',
      border: '1px solid var(--atak-accent)',
      background: props.active ? 'var(--atak-accent)' : 'transparent',
      color: props.active ? 'var(--atak-bg)' : 'var(--atak-text)',
      'font-size': '11px',
      cursor: 'pointer',
    }}
  >
    {props.label}
  </button>
)
