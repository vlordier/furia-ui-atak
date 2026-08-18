import { For, type Component } from 'solid-js'

export type RadialToolItem = { id: string; label: string }

export type RadialToolProps = {
  items: readonly RadialToolItem[]
  onPick?: (id: string) => void
}

export const RadialTool: Component<RadialToolProps> = (props) => (
  <div
    class="atak-radial-tool"
    data-testid="atak-radial-tool"
    role="toolbar"
    style={{ display: 'flex', gap: '6px', 'flex-wrap': 'wrap' }}
  >
    <For each={props.items}>
      {(item) => (
        <button
          type="button"
          onClick={() => props.onPick?.(item.id)}
          style={{
            width: '44px',
            height: '44px',
            'border-radius': '50%',
            border: '1px solid var(--atak-accent)',
            background: 'var(--atak-bg)',
            color: 'var(--atak-text)',
            'font-size': '10px',
            cursor: 'pointer',
          }}
        >
          {item.label}
        </button>
      )}
    </For>
  </div>
)
