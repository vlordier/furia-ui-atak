import type { Component } from 'solid-js'

export const SearchField: Component<{
  value: string
  placeholder?: string
  onInput?: (value: string) => void
}> = (props) => (
  <label
    class="atak-search-field"
    style={{ display: 'block', color: 'var(--atak-muted)', 'font-size': '11px' }}
  >
    Search
    <input
      data-testid="atak-search-field"
      value={props.value}
      placeholder={props.placeholder ?? 'Find callsign…'}
      onInput={(event) => props.onInput?.(event.currentTarget.value)}
      style={{
        display: 'block',
        width: '100%',
        'margin-top': '4px',
        padding: '8px 10px',
        background: 'var(--atak-bg)',
        border: '1px solid var(--atak-border)',
        color: 'var(--atak-text)',
      }}
    />
  </label>
)
