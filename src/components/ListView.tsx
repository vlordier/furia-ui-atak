import { For, type Component } from 'solid-js'

export const ListView: Component<{
  items: readonly { id: string; title: string; detail?: string }[]
  onSelect?: (id: string) => void
}> = (props) => (
  <ul class="atak-listview" data-testid="atak-listview" style={{ margin: 0, padding: 0, 'list-style': 'none' }}>
    <For each={props.items}>
      {(item) => (
        <li>
          <button
            type="button"
            onClick={() => props.onSelect?.(item.id)}
            style={{
              width: '100%',
              'text-align': 'left',
              padding: '8px 10px',
              background: 'var(--atak-panel)',
              border: '1px solid var(--atak-border)',
              color: 'var(--atak-text)',
              cursor: 'pointer',
            }}
          >
            <strong>{item.title}</strong>
            {item.detail ? <span style={{ display: 'block', color: 'var(--atak-muted)', 'font-size': '11px' }}>{item.detail}</span> : null}
          </button>
        </li>
      )}
    </For>
  </ul>
)
