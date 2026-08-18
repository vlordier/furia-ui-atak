import { For, type Component } from 'solid-js'
import { IconButton } from './IconButton'

export type BottomBarItem = { id: string; label: string }

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
      padding: '6px 8px',
      background: 'var(--atak-panel)',
      border: '1px solid var(--atak-border)',
    }}
  >
    <For each={props.items}>
      {(item) => <IconButton label={item.label} onClick={() => props.onPick?.(item.id)} />}
    </For>
  </nav>
)
