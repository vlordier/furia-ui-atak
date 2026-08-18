import type { Component, JSX } from 'solid-js'
import { ToolBar } from './ToolBar'
import { OverlayDrawer } from './OverlayDrawer'
import { BottomBar } from './BottomBar'

export const Base: Component<{
  title?: string
  drawer?: JSX.Element
  children?: JSX.Element
}> = (props) => (
  <div class="atak-base atak-kit" data-testid="atak-base">
    <ToolBar title={props.title ?? 'ATAK Base'} items={[{ id: 'overflow', label: '⋮' }]} />
    <div style={{ display: 'flex', flex: 1, 'min-height': 0 }}>
      <div class="atak-base-map">{props.children}</div>
      <OverlayDrawer title="SA" open>
        {props.drawer}
      </OverlayDrawer>
    </div>
    <BottomBar items={[{ id: 'goto', label: 'Go' }, { id: 'redx', label: 'RX' }, { id: 'chat', label: 'CH' }]} />
  </div>
)
