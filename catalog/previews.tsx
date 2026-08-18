import { createSignal, type Component } from 'solid-js'
import {
  Base,
  BottomBar,
  Button,
  CheckBox,
  EditText,
  GeoChatThread,
  ListView,
  MapChip,
  MapSource,
  Modal,
  OverlayDrawer,
  RadioButton,
  RadialMenu,
  RecyclerView,
  SaRow,
  SearchField,
  SeekBar,
  SegmentedButton,
  Spinner,
  SymbologyLegend,
  TabLayout,
  TableLayout,
  TextView,
  ToolBar,
} from '../src'

export const previews: Record<string, Component> = {
  base: () => (
    <Base drawer={<SaRow callsign="HAWK-1" state="live" />}>
      <div style={{ padding: '16px', color: 'var(--atak-muted)' }}>Map canvas</div>
    </Base>
  ),
  toolbar: () => <ToolBar title="Navigation & Action" items={[{ id: 'back', label: 'Back' }, { id: 'go', label: 'GoTo' }]} />,
  tablayout: () => {
    const [tab, setTab] = createSignal('sa')
    return (
      <TabLayout tabs={[{ id: 'sa', label: 'SA' }, { id: 'chat', label: 'Chat' }]} active={tab()} onChange={setTab}>
        <TextView text={`Active tab: ${tab()}`} />
      </TabLayout>
    )
  },
  checkbox: () => {
    const [on, setOn] = createSignal(true)
    return <CheckBox label="Show stale tracks" checked={on()} onChange={setOn} />
  },
  spinner: () => {
    const [v, setV] = createSignal('cot')
    return <Spinner value={v()} onChange={setV} options={[{ id: 'cot', label: 'CoT' }, { id: 'chat', label: 'GeoChat' }]} />
  },
  edittext: () => {
    const [v, setV] = createSignal('')
    return <EditText label="Callsign" value={v()} onInput={setV} placeholder="HAWK-1" />
  },
  textview: () => <TextView text="Read-only TextView — training CoT, not official ATAK." muted />,
  seekbar: () => {
    const [v, setV] = createSignal(40)
    return <SeekBar label="Stale window (s)" value={v()} onInput={setV} />
  },
  radiobutton: () => {
    const [v, setV] = createSignal('live')
    return (
      <div>
        <RadioButton name="mode" value="live" label="Live" checked={v() === 'live'} onChange={setV} />
        <RadioButton name="mode" value="replay" label="Replay" checked={v() === 'replay'} onChange={setV} />
      </div>
    )
  },
  segmentedbutton: () => {
    const [v, setV] = createSignal('2d')
    return <SegmentedButton value={v()} onChange={setV} options={[{ id: '2d', label: '2D' }, { id: '3d', label: '3D' }]} />
  },
  button: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button label="Primary" />
      <Button label="Ghost" tone="ghost" />
      <Button label="Danger" tone="danger" />
    </div>
  ),
  modal: () => {
    const [open, setOpen] = createSignal(false)
    return (
      <div>
        <Button label="Open modal" onClick={() => setOpen(true)} />
        <Modal open={open()} title="Confirm" onClose={() => setOpen(false)}>
          <TextView text="Blocking dialog over the map." />
        </Modal>
      </div>
    )
  },
  tablelayout: () => (
    <TableLayout columns={['Callsign', 'Type', 'State']} rows={[['HAWK-1', 'a-f-A', 'live'], ['OWL-2', 'a-f-G', 'stale']]} />
  ),
  listview: () => <ListView items={[{ id: '1', title: 'HAWK-1', detail: 'a-f-A' }, { id: '2', title: 'OWL-2', detail: 'stale' }]} />,
  recyclerview: () => (
    <RecyclerView items={Array.from({ length: 40 }, (_, i) => ({ id: String(i), title: `Track ${i + 1}` }))} windowSize={6} />
  ),
  radialmenu: () => <RadialMenu items={[{ id: 'goto', label: 'Go' }, { id: 'redx', label: 'RX' }, { id: 'chat', label: 'CH' }]} />,
  mapsource: () => {
    const [v, setV] = createSignal<'osm' | 'imagery' | 'terrain' | 'none'>('osm')
    return <MapSource value={v()} onChange={setV} />
  },
  symbology: () => <SymbologyLegend />,
  extra: () => (
    <div style={{ display: 'grid', gap: '10px' }}>
      <SearchField value="" />
      <MapChip label="Traffic" active />
      <OverlayDrawer title="Peers">
        <SaRow callsign="HAWK-1" state="live" />
      </OverlayDrawer>
      <BottomBar items={[{ id: 'a', label: 'A' }]} />
      <GeoChatThread messages={[{ id: '1', from: 'HAWK-1', body: 'On station', at: '12:01' }]} />
    </div>
  ),
}
