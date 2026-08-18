import { Show, type Component, type JSX } from 'solid-js'

export type OverlayDrawerProps = {
  title: string
  open?: boolean
  side?: 'left' | 'right'
  children?: JSX.Element
}

export const OverlayDrawer: Component<OverlayDrawerProps> = (props) => (
  <Show when={props.open !== false}>
    <aside
      class="atak-overlay-drawer"
      data-testid="atak-overlay-drawer"
      data-side={props.side ?? 'right'}
      style={{
        width: '280px',
        'max-height': '100%',
        overflow: 'auto',
        background: 'var(--atak-panel)',
        border: '1px solid var(--atak-border)',
        padding: '10px',
      }}
    >
      <header
        style={{
          'font-size': '11px',
          'letter-spacing': '0.08em',
          'text-transform': 'uppercase',
          color: 'var(--atak-muted)',
          'margin-bottom': '8px',
        }}
      >
        {props.title}
      </header>
      {props.children}
    </aside>
  </Show>
)
