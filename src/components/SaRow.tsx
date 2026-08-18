import type { Component } from 'solid-js'
import { StatusChip, type SaLinkState } from './StatusChip'

export type SaRowProps = {
  callsign: string
  cotType?: string
  state: SaLinkState
  staleAfter?: string
  onSelect?: () => void
}

export const SaRow: Component<SaRowProps> = (props) => (
  <button
    type="button"
    class="atak-sa-row"
    data-testid="atak-sa-row"
    onClick={() => props.onSelect?.()}
    style={{
      display: 'flex',
      width: '100%',
      'align-items': 'center',
      'justify-content': 'space-between',
      gap: '8px',
      padding: '8px 10px',
      background: 'var(--atak-panel)',
      border: '1px solid var(--atak-border)',
      color: 'var(--atak-text)',
      cursor: 'pointer',
      'text-align': 'left',
    }}
  >
    <span>
      <strong style={{ 'letter-spacing': '0.03em' }}>{props.callsign}</strong>
      <span style={{ display: 'block', color: 'var(--atak-muted)', 'font-size': '11px' }}>
        {props.cotType ?? 'a-f-G'}
        {props.staleAfter ? ` · ${props.staleAfter}` : ''}
      </span>
    </span>
    <StatusChip state={props.state} />
  </button>
)
