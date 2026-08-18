import { For, type Component } from 'solid-js'

export type SpinnerOption = { id: string; label: string }

export const Spinner: Component<{
  label?: string
  value: string
  options: readonly SpinnerOption[]
  onChange?: (id: string) => void
}> = (props) => (
  <label class="atak-spinner">
    {props.label ?? 'Spinner'}
    <select data-testid="atak-spinner" value={props.value} onChange={(event) => props.onChange?.(event.currentTarget.value)}>
      <For each={props.options}>{(opt) => <option value={opt.id}>{opt.label}</option>}</For>
    </select>
  </label>
)
