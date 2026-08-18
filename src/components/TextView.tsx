import type { Component } from 'solid-js'

export type TextViewTone = 'default' | 'success' | 'warning' | 'error'

export const TextView: Component<{ text: string; muted?: boolean; tone?: TextViewTone }> = (props) => (
  <p
    class="atak-textview"
    data-testid="atak-textview"
    data-tone={props.tone ?? 'default'}
    style={{ margin: 0, color: props.muted ? 'var(--atak-muted)' : undefined, 'line-height': 1.4 }}
  >
    {props.text}
  </p>
)
