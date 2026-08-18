import { Show, type Component, type JSX } from 'solid-js'
import { Button } from './Button'

export const Modal: Component<{
  open: boolean
  title: string
  children?: JSX.Element
  onClose?: () => void
}> = (props) => (
  <Show when={props.open}>
    <div
      class="atak-modal-backdrop"
      data-testid="atak-modal"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        display: 'grid',
        'place-items': 'center',
        'z-index': 20,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          width: 'min(360px, 92vw)',
          background: 'var(--atak-panel)',
          border: '1px solid var(--atak-border)',
          padding: '14px',
        }}
      >
        <h2 style={{ margin: '0 0 10px', 'font-size': '14px' }}>{props.title}</h2>
        {props.children}
        <div style={{ 'margin-top': '12px', 'text-align': 'right' }}>
          <Button label="Close" tone="ghost" onClick={() => props.onClose?.()} />
        </div>
      </div>
    </div>
  </Show>
)
