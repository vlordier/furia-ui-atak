import { createSignal, type Component } from 'solid-js'
import {
  AccordionView,
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
  ViewGroup,
  DynamicOps,
  DeviceFrame,
  MapMarker,
  IconGoto,
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
    return (
      <div style={{ display: 'grid', gap: '12px', 'max-width': '280px' }}>
        <EditText label="Callsign" value={v()} onInput={setV} placeholder="HAWK-1" />
        <EditText label="Inactive" value="OWL-2" state="inactive" />
        <EditText label="Error" value="bad" error />
      </div>
    )
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
    <div style={{ display: 'flex', gap: '8px', 'flex-wrap': 'wrap', 'align-items': 'flex-start' }}>
      <Button label="Default" />
      <Button label="Pressed" state="pressed" />
      <Button label="Outlined" variant="outlined" />
      <Button label="Outlined pressed" variant="outlined" state="pressed" />
      <Button label="Tile" type="tile" icon={<IconGoto size={18} />} />
      <Button label="Icon" showLabel={false} icon={<IconGoto size={14} />} />
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
  accordionview: () => (
    <AccordionView
      sections={[
        { id: 'sa', title: 'SA', body: <SaRow callsign="HAWK-1" state="live" /> },
        { id: 'chat', title: 'GeoChat', body: <TextView text="Training thread" muted /> },
      ]}
    />
  ),
  viewgroup: () => (
    <ViewGroup title="Group">
      <TextView text="Generic ViewGroup container." />
    </ViewGroup>
  ),
  radialmenu: () => (
    <RadialMenu items={[{ id: 'goto', label: 'Go' }, { id: 'redx', label: 'RX' }, { id: 'chat', label: 'CH' }, { id: 'lock', label: 'LK' }]} selected="goto" />
  ),
  mapsource: () => {
    const [v, setV] = createSignal<'osm' | 'imagery' | 'terrain' | 'none'>('osm')
    return <MapSource value={v()} onChange={setV} />
  },
  symbology: () => <SymbologyLegend />,
  'ops-cop': () => <DynamicOps />,
  'ops-modal': () => <DynamicOps modal />,
  'ops-sa': () => (
    <Base
      title="SA"
      drawer={
        <>
          <SaRow callsign="HAWK-1" state="live" cotType="a-f-A" />
          <SaRow callsign="OWL-2" state="stale" cotType="a-f-G" staleAfter="12s" />
          <SaRow callsign="VIPER" state="error" cotType="a-h-A" />
          <GeoChatThread
            messages={[
              { id: '1', from: 'HAWK-1', body: 'On station', at: '12:01' },
              { id: '2', from: 'OWL-2', body: 'Stale — last report 12s', at: '12:02' },
            ]}
          />
        </>
      }
    >
      <div style={{ position: 'relative', height: '100%', background: 'linear-gradient(180deg, #2a3340, #14181e)' }}>
        <MapMarker affiliation="friendly" x="40%" y="30%" label="HAWK-1" />
        <MapMarker affiliation="unknown" x="55%" y="48%" label="OWL-2" />
        <MapMarker affiliation="hostile" x="28%" y="62%" label="VIPER" />
      </div>
    </Base>
  ),
  'ops-radial': () => (
    <DeviceFrame>
      <div style={{ position: 'relative', height: '100%', background: 'linear-gradient(180deg, #2a3340, #14181e)' }}>
        <MapMarker affiliation="friendly" x="46%" y="40%" />
        <MapMarker affiliation="hostile" x="58%" y="52%" />
        <div style={{ position: 'absolute', left: '42%', top: '46%' }}>
          <RadialMenu items={[{ id: 'goto', label: 'Go' }, { id: 'redx', label: 'RX' }, { id: 'chat', label: 'CH' }, { id: 'lock', label: 'LK' }]} selected="chat" />
        </div>
      </div>
    </DeviceFrame>
  ),
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
