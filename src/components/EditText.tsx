import type { Component } from 'solid-js'

export const EditText: Component<{
  value: string
  label?: string
  placeholder?: string
  error?: boolean
  onInput?: (value: string) => void
}> = (props) => (
  <label class="atak-edittext" data-error={props.error ? '' : undefined}>
    {props.label ?? 'EditText'}
    <input
      data-testid="atak-edittext"
      value={props.value}
      placeholder={props.placeholder}
      onInput={(event) => props.onInput?.(event.currentTarget.value)}
    />
  </label>
)
