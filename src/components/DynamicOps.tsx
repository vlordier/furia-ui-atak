import { createSignal, type Component } from 'solid-js'
import { DeviceFrame } from './DeviceFrame'
import { MapMarker } from './MapMarker'
import { ToolBar } from './ToolBar'
import { TabLayout } from './TabLayout'
import { TableLayout } from './TableLayout'
import { CheckBox } from './CheckBox'
import { SeekBar } from './SeekBar'
import { Button } from './Button'
import { RadialMenu } from './RadialMenu'
import { Modal } from './Modal'
import { EditText } from './EditText'
import { TextView } from './TextView'
import { Spinner } from './Spinner'

export const DynamicOps: Component<{ modal?: boolean }> = (props) => {
  const [tab, setTab] = createSignal('tracks')
  const [range, setRange] = createSignal(40)
  const [stale, setStale] = createSignal(true)
  const [open, setOpen] = createSignal(props.modal === true)
  const [callsign, setCallsign] = createSignal('HAWK-1')
  const [kind, setKind] = createSignal('air')

  return (
    <DeviceFrame>
      <div style={{ display: 'flex', height: '100%', background: 'linear-gradient(180deg, #2a3340, #14181e)' }}>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <MapMarker affiliation="friendly" x="38%" y="22%" />
          <MapMarker affiliation="friendly" x="42%" y="28%" />
          <MapMarker affiliation="unknown" x="36%" y="32%" />
          <MapMarker affiliation="hostile" x="18%" y="48%" />
          <MapMarker affiliation="neutral" x="28%" y="52%" />
          <MapMarker affiliation="friendly" x="22%" y="58%" />
          <div style={{ position: 'absolute', left: '32%', top: '52%' }}>
            <RadialMenu items={[{ id: 'goto', label: 'Go' }, { id: 'redx', label: 'RX' }, { id: 'chat', label: 'CH' }]} selected="goto" />
          </div>
        </div>
        <aside style={{ width: '334px', display: 'flex', 'flex-direction': 'column', background: 'linear-gradient(180deg, #050506, #272d33)' }}>
          <ToolBar title="Dyn Ops" items={[{ id: 'overflow', label: '⋮' }]} />
          <TabLayout tabs={[{ id: 'tracks', label: 'Tracks' }, { id: 'layers', label: 'Layers' }]} active={tab()} onChange={setTab}>
            <div style={{ display: 'flex', gap: '8px', 'margin-bottom': '8px' }}>
              <Button label="Refresh" />
              <Button label="Edit" onClick={() => setOpen(true)} />
            </div>
            <TableLayout
              columns={['CS', 'Type', 'St']}
              rows={[
                ['HAWK-1', 'a-f-A', 'live'],
                ['OWL-2', 'a-f-G', 'stale'],
                ['VIPER', 'a-h-A', 'live'],
              ]}
            />
            <div style={{ 'margin-top': '10px' }}>
              <CheckBox label="Show stale" checked={stale()} onChange={setStale} />
              <SeekBar label="Range" value={range()} onInput={setRange} />
            </div>
          </TabLayout>
        </aside>
      </div>
      <Modal open={open()} title="Edit track" onClose={() => setOpen(false)}>
        <EditText label="Callsign" value={callsign()} onInput={setCallsign} />
        <Spinner label="Kind" value={kind()} onChange={setKind} options={[{ id: 'air', label: 'Air' }, { id: 'ground', label: 'Ground' }]} />
        <TextView text="Training CoT — not official ATAK." muted />
      </Modal>
    </DeviceFrame>
  )
}
