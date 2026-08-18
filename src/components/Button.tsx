import type { Component } from 'solid-js'

export type AtakButtonTone = 'primary' | 'ghost' | 'danger'
export type AtakButtonVariant = 'contained' | 'outlined' | 'tile'

export const Button: Component<{
  label: string
  tone?: AtakButtonTone
  variant?: AtakButtonVariant
  disabled?: boolean
  onClick?: () => void
}> = (props) => (
  <button
    type="button"
    class="atak-button"
    data-tone={props.tone ?? 'primary'}
    data-variant={props.variant ?? 'contained'}
    disabled={props.disabled}
    onClick={() => props.onClick?.()}
  >
    {props.label}
  </button>
)
