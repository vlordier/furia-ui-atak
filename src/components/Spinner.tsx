import { For, type Component } from 'solid-js'

export type SpinnerOption = { id: string; label: string }

export const Spinner: Component<{
  label?: string
  value: string
  options: readonly SpinnerOption[]
  onChange?: (id: string) => void
}> = (props) => (
  <label class="atak-spinner" style={{ display: 'block', 'font-size': '11px', color: 'var(--atak-muted)' }}>
    {props.label ?? 'Spinner'}
    <select
      data-testid="atak-spinner"
      value={props.value}
      onChange={(event) => props.onChange?.(event.currentTarget.value)}
      style={{
        display: 'block',
        width: '100%',
        'margin-top': '4px',
        padding: '8px 10px',
        background: 'var(--atak-bg)',
        border: '1px solid var(--atak-border)',
        color: 'var(--atak-text)',
      }}
    >
      <For each={props.options}>{(opt) => <option value={opt.id}>{opt.label}</option>}</For>
    </select>
  </label>
)
