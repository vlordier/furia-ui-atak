import { For, type Component } from 'solid-js'

export const ListView: Component<{
  items: readonly { id: string; title: string; detail?: string }[]
  onSelect?: (id: string) => void
}> = (props) => (
  <ul class="atak-listview" data-testid="atak-listview">
    <li class="atak-list-header" style={{ padding: '6px 10px', color: '#fff', 'border-bottom': '1px solid #555', 'font-size': '12px' }}>
      List
    </li>
    <For each={props.items}>
      {(item) => (
        <li>
          <button type="button" data-testid={`atak-list-${item.id}`} onClick={() => props.onSelect?.(item.id)}>
            <strong style={{ color: '#fff' }}>{item.title}</strong>
            {item.detail ? <span style={{ display: 'block', 'font-size': '11px' }}>{item.detail}</span> : null}
          </button>
        </li>
      )}
    </For>
  </ul>
)
