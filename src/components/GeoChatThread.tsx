import { For, type Component } from 'solid-js'

export type GeoChatMessage = {
  id: string
  from: string
  body: string
  at: string
}

export const GeoChatThread: Component<{ messages: readonly GeoChatMessage[] }> = (props) => (
  <ol
    class="atak-geochat"
    data-testid="atak-geochat"
    style={{ margin: 0, padding: 0, 'list-style': 'none' }}
  >
    <For each={props.messages}>
      {(msg) => (
        <li
          style={{
            padding: '6px 0',
            'border-bottom': '1px solid var(--atak-border)',
          }}
        >
          <div style={{ color: 'var(--atak-accent)', 'font-size': '11px' }}>
            {msg.from} · {msg.at}
          </div>
          <div>{msg.body}</div>
        </li>
      )}
    </For>
  </ol>
)
