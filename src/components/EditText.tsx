import type { Component } from 'solid-js'

export type EditTextState = 'default' | 'inactive' | 'focus' | 'error'

export const EditText: Component<{
  value: string
  label?: string
  placeholder?: string
  error?: boolean
  state?: EditTextState
  onInput?: (value: string) => void
}> = (props) => {
  const state = () => (props.error ? 'error' : props.state ?? 'default')
  return (
    <label class="atak-edittext" data-state={state()} data-error={props.error ? '' : undefined}>
      {props.label ?? 'EditText'}
      <input
        data-testid="atak-edittext"
        value={props.value}
        placeholder={props.placeholder}
        disabled={state() === 'inactive'}
        onInput={(event) => props.onInput?.(event.currentTarget.value)}
      />
    </label>
  )
}
