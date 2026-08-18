import { For, type Component } from 'solid-js'

export const SegmentedButton: Component<{
  value: string
  options: readonly { id: string; label: string }[]
  onChange?: (id: string) => void
}> = (props) => (
  <div class="atak-segmented" role="group" data-testid="atak-segmented">
    <For each={props.options}>
      {(opt) => (
        <button type="button" aria-pressed={opt.id === props.value} onClick={() => props.onChange?.(opt.id)}>
          {opt.label}
        </button>
      )}
    </For>
  </div>
)
