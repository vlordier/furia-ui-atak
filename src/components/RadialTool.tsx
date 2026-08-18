import { For, type Component } from 'solid-js'

export type RadialToolItem = { id: string; label: string }

export type RadialToolProps = {
  items: readonly RadialToolItem[]
  selected?: string
  onPick?: (id: string) => void
}

export const RadialTool: Component<RadialToolProps> = (props) => (
  <div
    class="atak-radial-tool"
    data-testid="atak-radial-tool"
    role="toolbar"
    style={{
      display: 'flex',
      gap: '8px',
      'flex-wrap': 'wrap',
      padding: '10px',
      background: '#000000bf',
      'border-radius': '999px',
    }}
  >
    <For each={props.items}>
      {(item) => {
        const on = () => item.id === props.selected
        return (
          <button
            type="button"
            onClick={() => props.onPick?.(item.id)}
            style={{
              width: '44px',
              height: '44px',
              'border-radius': '50%',
              border: on() ? '2px solid #000' : '1px solid #d6d2bd',
              background: on() ? '#ffe35e' : '#fff89d',
              color: '#131415',
              'font-size': '10px',
              cursor: 'pointer',
            }}
          >
            {item.label}
          </button>
        )
      }}
    </For>
  </div>
)
