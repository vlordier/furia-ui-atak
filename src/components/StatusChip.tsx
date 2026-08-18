import type { Component } from 'solid-js'

export type SaLinkState = 'live' | 'stale' | 'error'

const color: Record<SaLinkState, string> = {
  live: 'var(--atak-live)',
  stale: 'var(--atak-stale)',
  error: 'var(--atak-error)',
}

export const StatusChip: Component<{ state: SaLinkState; label?: string }> = (props) => (
  <span
    class="atak-status-chip"
    data-state={props.state}
    style={{
      display: 'inline-flex',
      'align-items': 'center',
      gap: '6px',
      padding: '1px 8px',
      'border-radius': '999px',
      border: `1px solid ${color[props.state]}`,
      color: color[props.state],
      'font-size': '11px',
      'letter-spacing': '0.04em',
      'text-transform': 'uppercase',
    }}
  >
    <span
      style={{
        width: '6px',
        height: '6px',
        'border-radius': '50%',
        background: color[props.state],
      }}
    />
    {props.label ?? props.state}
  </span>
)
