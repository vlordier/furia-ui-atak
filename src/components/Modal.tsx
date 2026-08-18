import { Show, type Component, type JSX } from 'solid-js'
import { Button } from './Button'

export const Modal: Component<{
  open: boolean
  title: string
  children?: JSX.Element
  onClose?: () => void
}> = (props) => (
  <Show when={props.open}>
    <div class="atak-modal-backdrop" data-testid="atak-modal">
      <div class="atak-modal" role="dialog" aria-modal="true">
        <h2>{props.title}</h2>
        <div class="atak-modal-body">
          {props.children}
          <div style={{ 'margin-top': '12px', 'text-align': 'right' }}>
            <Button label="Close" tone="ghost" onClick={() => props.onClose?.()} />
          </div>
        </div>
      </div>
    </div>
  </Show>
)
