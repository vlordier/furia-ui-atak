import { For, type Component } from 'solid-js'
import { Button } from './Button'

export type ToolBarItem = { id: string; label: string; tone?: 'primary' | 'ghost' | 'danger' }

export const ToolBar: Component<{
  title?: string
  items: readonly ToolBarItem[]
  onAction?: (id: string) => void
}> = (props) => (
  <header
    class="atak-toolbar"
    data-testid="atak-toolbar"
    style={{
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      gap: '10px',
      padding: '8px 10px',
      background: 'var(--atak-panel)',
      border: '1px solid var(--atak-border)',
    }}
  >
    <strong style={{ 'letter-spacing': '0.06em', 'font-size': '12px' }}>{props.title ?? 'ToolBar'}</strong>
    <div style={{ display: 'flex', gap: '6px' }}>
      <For each={props.items}>
        {(item) => <Button label={item.label} tone={item.tone ?? 'ghost'} onClick={() => props.onAction?.(item.id)} />}
      </For>
    </div>
  </header>
)
