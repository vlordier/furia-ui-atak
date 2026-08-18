import { For, type Component, type JSX } from 'solid-js'

export type TabItem = { id: string; label: string }

export const TabLayout: Component<{
  tabs: readonly TabItem[]
  active: string
  onChange?: (id: string) => void
  children?: JSX.Element
}> = (props) => (
  <div class="atak-tablayout" data-testid="atak-tablayout">
    <div role="tablist" style={{ display: 'flex', 'border-bottom': '1px solid var(--atak-border)' }}>
      <For each={props.tabs}>
        {(tab) => {
          const on = () => tab.id === props.active
          return (
            <button
              type="button"
              role="tab"
              aria-selected={on()}
              onClick={() => props.onChange?.(tab.id)}
              style={{
                flex: 1,
                padding: '8px',
                border: 'none',
                'border-bottom': on() ? '2px solid var(--atak-accent)' : '2px solid transparent',
                background: 'transparent',
                color: on() ? 'var(--atak-text)' : 'var(--atak-muted)',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          )
        }}
      </For>
    </div>
    <div role="tabpanel" style={{ padding: '10px' }}>
      {props.children}
    </div>
  </div>
)
