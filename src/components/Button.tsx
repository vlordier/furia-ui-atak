import type { Component, JSX } from 'solid-js'

export type AtakButtonTone = 'primary' | 'ghost' | 'danger'

export const Button: Component<{
  label: string
  tone?: AtakButtonTone
  disabled?: boolean
  onClick?: () => void
}> = (props) => {
  const tone = () => props.tone ?? 'primary'
  const style = (): JSX.CSSProperties => {
    if (tone() === 'danger') {
      return { background: '#2a1210', color: 'var(--atak-error)', border: '1px solid var(--atak-error)' }
    }
    if (tone() === 'ghost') {
      return { background: 'transparent', color: 'var(--atak-text)', border: '1px solid var(--atak-border)' }
    }
    return { background: 'var(--atak-accent)', color: 'var(--atak-bg)', border: '1px solid var(--atak-accent)' }
  }
  return (
    <button
      type="button"
      class="atak-button"
      data-tone={tone()}
      disabled={props.disabled}
      onClick={() => props.onClick?.()}
      style={{ padding: '8px 14px', 'font-size': '13px', cursor: props.disabled ? 'not-allowed' : 'pointer', ...style() }}
    >
      {props.label}
    </button>
  )
}
