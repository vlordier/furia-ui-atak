import type { Component } from 'solid-js'

export const RadioButton: Component<{
  name: string
  value: string
  label: string
  checked: boolean
  onChange?: (value: string) => void
}> = (props) => (
  <label class="atak-radio">
    <input
      type="radio"
      name={props.name}
      value={props.value}
      data-testid="atak-radio"
      checked={props.checked}
      onChange={() => props.onChange?.(props.value)}
    />
    {props.label}
  </label>
)
