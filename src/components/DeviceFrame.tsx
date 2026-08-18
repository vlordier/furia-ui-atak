import type { Component, JSX } from 'solid-js'

export const DeviceFrame: Component<{ children?: JSX.Element; title?: string; phone?: boolean }> = (props) => (
  <div
    class="atak-device"
    data-testid="atak-device"
    data-phone={props.phone ? '' : undefined}
    style={
      props.phone
        ? {
            width: '360px',
            height: '640px',
            background: '#111',
            border: '10px solid #1a1a1a',
            'border-radius': '28px',
            overflow: 'hidden',
            position: 'relative',
          }
        : {
            width: '100%',
            'max-width': '920px',
            height: '480px',
            background: '#111',
            border: '8px solid #1a1a1a',
            'border-radius': '18px',
            overflow: 'hidden',
            position: 'relative',
          }
    }
  >
    {props.children}
  </div>
)
