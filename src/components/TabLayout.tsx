import { For, type Component, type JSX } from 'solid-js'

export type TabItem = { id: string; label: string }

export const TabLayout: Component<{
  tabs: readonly TabItem[]
  active: string
  onChange?: (id: string) => void
  children?: JSX.Element
}> = (props) => (
  <div class="atak-tablayout" data-testid="atak-tablayout">
    <div role="tablist">
      <For each={props.tabs}>
        {(tab) => (
          <button type="button" role="tab" aria-selected={tab.id === props.active} onClick={() => props.onChange?.(tab.id)}>
            {tab.label}
          </button>
        )}
      </For>
    </div>
    <div role="tabpanel" style={{ padding: '10px' }}>
      {props.children}
    </div>
  </div>
)
