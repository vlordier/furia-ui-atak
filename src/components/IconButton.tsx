import type { Component, JSX } from 'solid-js'

export type IconButtonProps = {
  label: string
  children?: JSX.Element
  tone?: 'default' | 'danger'
  onClick?: () => void
}

export const IconButton: Component<IconButtonProps> = (props) => (
  <button
    type="button"
    class="atak-icon-button"
    aria-label={props.label}
    data-testid="atak-icon-button"
    onClick={() => props.onClick?.()}
    style={{
      width: '40px',
      height: '40px',
      padding: 0,
      border: '1px solid var(--atak-border)',
      background: props.tone === 'danger' ? '#2a1210' : 'var(--atak-panel)',
      color: props.tone === 'danger' ? 'var(--atak-error)' : 'var(--atak-text)',
      cursor: 'pointer',
    }}
  >
    {props.children ?? props.label.slice(0, 2)}
  </button>
)
