import { For, type Component, type JSX } from 'solid-js'
import { Button } from './Button'
import { IconHamburger, IconLayers, IconOverflow, IconPoint } from './icons'

export type ToolBarItem = { id: string; label: string; tone?: 'primary' | 'ghost' | 'danger'; icon?: JSX.Element }

function stockItems(items: readonly ToolBarItem[]): ToolBarItem[] {
  if (items.length) {
    return items.map((item) => {
      if (item.icon) return item
      if (item.id === 'overflow') return { ...item, icon: <IconOverflow size={16} /> }
      if (item.id === 'layers') return { ...item, icon: <IconLayers size={16} /> }
      if (item.id === 'goto' || item.id === 'point') return { ...item, icon: <IconPoint size={16} /> }
      return item
    })
  }
  return [
    { id: 'layers', label: 'Layers', icon: <IconLayers size={16} /> },
    { id: 'point', label: 'Point', icon: <IconPoint size={16} /> },
    { id: 'overflow', label: 'More', icon: <IconOverflow size={16} /> },
  ]
}

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
      <For each={stockItems(props.items)}>
        {(item) => (
          <Button
            label={item.label}
            showLabel={!item.icon}
            icon={item.icon}
            tone="ghost"
            onClick={() => props.onAction?.(item.id)}
          />
        )}
      </For>
    </div>
  </header>
)
