import { For, type Component } from 'solid-js'

export const SegmentedButton: Component<{
  value: string
  options: readonly { id: string; label: string }[]
  onChange?: (id: string) => void
}> = (props) => (
  <div class="atak-segmented" role="group" data-testid="atak-segmented" style={{ display: 'flex' }}>
    <For each={props.options}>
      {(opt) => {
        const active = () => opt.id === props.value
        return (
          <button
            type="button"
            aria-pressed={active()}
            onClick={() => props.onChange?.(opt.id)}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid var(--atak-border)',
              background: active() ? 'var(--atak-accent)' : 'var(--atak-panel)',
              color: active() ? 'var(--atak-bg)' : 'var(--atak-text)',
              cursor: 'pointer',
            }}
          >
            {opt.label}
          </button>
        )
      }}
    </For>
  </div>
)
