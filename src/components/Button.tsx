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
      return { background: '#585858', color: '#cccccc', border: '1px solid #6e6e6e' }
    }
    return {
      background: 'linear-gradient(180deg, var(--atak-gradient-start), var(--atak-gradient-stop))',
      color: '#ffffff',
      border: '1px solid var(--atak-border)',
    }
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
