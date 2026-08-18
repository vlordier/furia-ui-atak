import type { Component, JSX } from 'solid-js'
import { ToolBar } from './ToolBar'
import { OverlayDrawer } from './OverlayDrawer'
import { BottomBar } from './BottomBar'
import { DeviceFrame } from './DeviceFrame'

export const Base: Component<{
  title?: string
  drawer?: JSX.Element
  children?: JSX.Element
  phone?: boolean
}> = (props) => (
  <DeviceFrame phone={props.phone !== false}>
    <div class="atak-base atak-kit" data-testid="atak-base" style={{ height: '100%' }}>
      <ToolBar title={props.title ?? 'ATAK Base'} items={[{ id: 'overflow', label: '⋮' }]} />
      <div style={{ display: 'flex', flex: 1, 'min-height': 0 }}>
        <div class="atak-base-map">{props.children}</div>
        <OverlayDrawer title="SA" open>
          {props.drawer}
        </OverlayDrawer>
      </div>
      <BottomBar items={[{ id: 'goto', label: 'Go' }, { id: 'redx', label: 'RX' }, { id: 'chat', label: 'CH' }]} />
    </div>
  </DeviceFrame>
)
