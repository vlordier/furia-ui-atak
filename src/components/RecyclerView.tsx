import { createMemo, For, type Component } from 'solid-js'

export const RecyclerView: Component<{
  items: readonly { id: string; title: string }[]
  windowStart?: number
  windowSize?: number
  onSelect?: (id: string) => void
}> = (props) => {
  const visible = createMemo(() => {
    const start = props.windowStart ?? 0
    const size = props.windowSize ?? 8
    return props.items.slice(start, start + size)
  })
  return (
    <div class="atak-recyclerview" data-testid="atak-recyclerview">
      <For each={visible()}>
        {(item) => (
          <button type="button" onClick={() => props.onSelect?.(item.id)}>
            {item.title}
          </button>
        )}
      </For>
    </div>
  )
}
