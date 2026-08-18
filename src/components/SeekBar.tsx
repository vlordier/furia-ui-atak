import type { Component } from 'solid-js'

export const SeekBar: Component<{
  value: number
  min?: number
  max?: number
  label?: string
  onInput?: (value: number) => void
}> = (props) => {
  const min = () => props.min ?? 0
  const max = () => props.max ?? 100
  const pct = () => {
    const span = max() - min() || 1
    return ((props.value - min()) / span) * 100
  }
  return (
    <label class="atak-seekbar">
      {props.label ?? 'SeekBar'} · {props.value}
      <div class="atak-seekbar-track" style={{ '--atak-seek': `${pct()}%` } as Record<string, string>}>
        <input
          type="range"
          data-testid="atak-seekbar"
          min={min()}
          max={max()}
          value={props.value}
          onInput={(event) => props.onInput?.(Number(event.currentTarget.value))}
        />
      </div>
    </label>
  )
}
