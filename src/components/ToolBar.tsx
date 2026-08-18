import { For, type Component } from 'solid-js'
import { Button } from './Button'
import { IconHamburger, IconOverflow } from './icons'

export type ToolBarItem = { id: string; label: string; tone?: 'primary' | 'ghost' | 'danger' }

export const ToolBar: Component<{
  title?: string
  items: readonly ToolBarItem[]
  onAction?: (id: string) => void
}> = (props) => (
  <header class="atak-toolbar" data-testid="atak-toolbar">
    <button type="button" class="atak-toolbar-burger" aria-label="Menu" onClick={() => props.onAction?.('menu')}>
      <IconHamburger size={14} />
    </button>
    <strong style={{ 'letter-spacing': '0.06em', 'font-size': '0.75rem', flex: 1 }}>{props.title ?? 'ToolBar'}</strong>
    <div style={{ display: 'flex', gap: '6px' }}>
      <For each={props.items}>
        {(item) =>
          item.id === 'overflow' ? (
            <Button label="More" showLabel={false} icon={<IconOverflow size={14} />} tone="ghost" onClick={() => props.onAction?.(item.id)} />
          ) : (
            <Button label={item.label} tone={item.tone ?? 'ghost'} onClick={() => props.onAction?.(item.id)} />
          )
        }
      </For>
    </div>
  </header>
)
