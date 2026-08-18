import type { Component } from 'solid-js'

export const CheckBox: Component<{
  label: string
  checked: boolean
  onChange?: (checked: boolean) => void
}> = (props) => (
  <label class="atak-checkbox">
    <span class="atak-checkbox-box" data-checked={props.checked ? '' : undefined}>
      <input
        type="checkbox"
        data-testid="atak-checkbox"
        checked={props.checked}
        onChange={(event) => props.onChange?.(event.currentTarget.checked)}
      />
      <svg class="atak-checkbox-mark" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M2 6.2L4.6 9 10 3" fill="none" stroke="#33b5e5" stroke-width="1.8" />
      </svg>
    </span>
    {props.label}
  </label>
)
