import type { Component } from 'solid-js'

export const CheckBox: Component<{
  label: string
  checked: boolean
  onChange?: (checked: boolean) => void
}> = (props) => (
  <label class="atak-checkbox" style={{ display: 'flex', gap: '8px', 'align-items': 'center', cursor: 'pointer' }}>
    <input
      type="checkbox"
      data-testid="atak-checkbox"
      checked={props.checked}
      onChange={(event) => props.onChange?.(event.currentTarget.checked)}
    />
    {props.label}
  </label>
)
