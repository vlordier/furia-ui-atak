import type { Component } from 'solid-js'

export const TextView: Component<{ text: string; muted?: boolean }> = (props) => (
  <p
    class="atak-textview"
    data-testid="atak-textview"
    style={{ margin: 0, color: props.muted ? 'var(--atak-muted)' : 'var(--atak-text)', 'line-height': 1.4 }}
  >
    {props.text}
  </p>
)
