import type { Component } from 'solid-js'

export const EditText: Component<{
  value: string
  label?: string
  placeholder?: string
  onInput?: (value: string) => void
}> = (props) => (
  <label class="atak-edittext" style={{ display: 'block', 'font-size': '11px', color: 'var(--atak-muted)' }}>
    {props.label ?? 'EditText'}
    <input
      data-testid="atak-edittext"
      value={props.value}
      placeholder={props.placeholder}
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
