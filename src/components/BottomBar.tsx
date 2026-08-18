import { For, type Component, type JSX } from 'solid-js'
import { IconButton } from './IconButton'
import { IconChat, IconGoto, IconRedXMark } from './icons'

export type BottomBarItem = { id: string; label: string; icon?: JSX.Element }

const fallbackIcon = (id: string) => {
  if (id === 'goto' || id === 'go') return <IconGoto size={16} />
  if (id === 'redx' || id === 'rx') return <IconRedXMark size={16} />
  if (id === 'chat' || id === 'ch') return <IconChat size={16} />
  return undefined
}

export const BottomBar: Component<{
  items: readonly BottomBarItem[]
  onPick?: (id: string) => void
}> = (props) => (
  <nav
    class="atak-bottom-bar"
    data-testid="atak-bottom-bar"
    aria-label="ATAK-inspired action bar"
    style={{
      display: 'flex',
      'justify-content': 'space-around',
      'align-items': 'center',
      height: '48px',
      padding: '4px 8px',
      background: '#222',
      border: '1px solid var(--atak-border)',
    }}
  >
    <For each={props.items}>
      {(item) => (
        <IconButton label={item.label} onClick={() => props.onPick?.(item.id)}>
          {item.icon ?? fallbackIcon(item.id)}
        </IconButton>
      )}
    </For>
  </nav>
)
