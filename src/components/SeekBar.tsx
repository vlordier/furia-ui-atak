import type { Component } from 'solid-js'

export const SeekBar: Component<{
  value: number
  min?: number
  max?: number
  label?: string
  onInput?: (value: number) => void
}> = (props) => (
  <label class="atak-seekbar" style={{ display: 'block', 'font-size': '11px', color: 'var(--atak-muted)' }}>
    {props.label ?? 'SeekBar'} · {props.value}
    <input
      type="range"
      data-testid="atak-seekbar"
      min={props.min ?? 0}
      max={props.max ?? 100}
      value={props.value}
      onInput={(event) => props.onInput?.(Number(event.currentTarget.value))}
      style={{ display: 'block', width: '100%', 'margin-top': '6px' }}
    />
  </label>
)
