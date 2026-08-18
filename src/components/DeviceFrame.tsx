import type { Component, JSX } from 'solid-js'

export const DeviceFrame: Component<{ children?: JSX.Element; title?: string }> = (props) => (
  <div
    class="atak-device"
    data-testid="atak-device"
    style={{
      width: '100%',
      'max-width': '920px',
      height: '480px',
      background: '#111',
      border: '8px solid #1a1a1a',
      'border-radius': '18px',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {props.children}
  </div>
)
