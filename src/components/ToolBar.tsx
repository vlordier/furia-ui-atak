import { For, type Component, type JSX } from 'solid-js'
import { Button } from './Button'
import { IconHamburger, IconOverflow } from './icons'

export type ToolBarItem = { id: string; label: string; tone?: 'primary' | 'ghost' | 'danger'; icon?: JSX.Element }

export const ToolBar: Component<{
  title?: string
  items: readonly ToolBarItem[]
  onAction?: (id: string) => void
}> = (props) => (
  <header class="atak-toolbar" data-testid="atak-toolbar">
    <button type="button" class="atak-toolbar-burger" aria-label="Menu" onClick={() => props.onAction?.('menu')}>
      <IconHamburger size={16} />
    </button>
    <strong style={{ 'letter-spacing': '0.04em', 'font-size': '0.75rem', flex: 1, 'font-weight': 500 }}>{props.title ?? 'ToolBar'}</strong>
    <div style={{ display: 'flex', gap: '2px', 'align-items': 'center' }}>
      <For each={props.items}>
        {(item) =>
          item.icon || item.id === 'overflow' ? (
            <Button
              label={item.label}
              showLabel={false}
              icon={item.icon ?? <IconOverflow size={16} />}
              tone="ghost"
              onClick={() => props.onAction?.(item.id)}
            />
          ) : (
            <Button label={item.label} tone={item.tone ?? 'ghost'} onClick={() => props.onAction?.(item.id)} />
          )
        }
      </For>
    </div>
  </header>
)
