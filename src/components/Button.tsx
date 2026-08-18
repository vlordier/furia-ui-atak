import type { Component, JSX } from 'solid-js'

export type AtakButtonTone = 'primary' | 'ghost' | 'danger'
export type AtakButtonVariant = 'contained' | 'outlined' | 'tile'
export type AtakButtonState = 'default' | 'pressed'
export type AtakButtonType = 'default' | 'tile'

export const Button: Component<{
  label: string
  tone?: AtakButtonTone
  variant?: AtakButtonVariant
  state?: AtakButtonState
  type?: AtakButtonType
  icon?: JSX.Element
  showLabel?: boolean
  disabled?: boolean
  onClick?: () => void
}> = (props) => {
  const variant = () => props.variant ?? (props.type === 'tile' ? 'tile' : 'contained')
  return (
    <button
      type="button"
      class="atak-button"
      data-tone={props.tone ?? 'primary'}
      data-variant={variant()}
      data-state={props.state ?? 'default'}
      data-icon={props.icon ? 'true' : 'false'}
      disabled={props.disabled}
      onClick={() => props.onClick?.()}
    >
      {props.icon}
      {props.showLabel === false ? null : props.label}
    </button>
  )
}
