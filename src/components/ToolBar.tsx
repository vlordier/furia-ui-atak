import { For, type Component } from 'solid-js'
import { Button } from './Button'

export type ToolBarItem = { id: string; label: string; tone?: 'primary' | 'ghost' | 'danger' }

export const ToolBar: Component<{
  title?: string
  items: readonly ToolBarItem[]
  onAction?: (id: string) => void
}> = (props) => (
  <header class="atak-toolbar" data-testid="atak-toolbar">
    <button type="button" class="atak-toolbar-burger" aria-label="Menu" onClick={() => props.onAction?.('menu')}>
      ☰
    </button>
    <strong style={{ 'letter-spacing': '0.06em', 'font-size': '12px', flex: 1 }}>{props.title ?? 'ToolBar'}</strong>
    <div style={{ display: 'flex', gap: '6px' }}>
      <For each={props.items}>
        {(item) => <Button label={item.label} tone={item.tone ?? 'ghost'} onClick={() => props.onAction?.(item.id)} />}
      </For>
    </div>
  </header>
)
