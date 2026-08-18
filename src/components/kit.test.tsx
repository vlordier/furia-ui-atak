import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@solidjs/testing-library'
import { CheckBox } from './CheckBox'
import { Button } from './Button'
import { EditText } from './EditText'
import { SeekBar } from './SeekBar'
import { TabLayout } from './TabLayout'
import { SegmentedButton } from './SegmentedButton'
import { Spinner } from './Spinner'
import { ListView } from './ListView'
import { AccordionView } from './AccordionView'
import { Modal } from './Modal'
import { MapSource } from './MapSource'
import { RadioButton } from './RadioButton'
import { TextView } from './TextView'

describe('kit controls', () => {
  it('toggles checkbox', () => {
    const onChange = vi.fn()
    const { getByTestId } = render(() => <CheckBox label="Show stale" checked={false} onChange={onChange} />)
    fireEvent.click(getByTestId('atak-checkbox'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('fires button click', () => {
    const onClick = vi.fn()
    const { getByText } = render(() => <Button label="GoTo" onClick={onClick} />)
    fireEvent.click(getByText('GoTo'))
    expect(onClick).toHaveBeenCalled()
  })

  it('edits text', () => {
    const onInput = vi.fn()
    const { getByTestId } = render(() => <EditText value="" onInput={onInput} />)
    fireEvent.input(getByTestId('atak-edittext'), { target: { value: 'HAWK-1' } })
    expect(onInput).toHaveBeenCalledWith('HAWK-1')
  })

  it('moves seekbar', () => {
    const onInput = vi.fn()
    const { getByTestId } = render(() => <SeekBar value={10} onInput={onInput} />)
    fireEvent.input(getByTestId('atak-seekbar'), { target: { value: '40' } })
    expect(onInput).toHaveBeenCalledWith(40)
  })

  it('switches tabs exclusively', () => {
    const onChange = vi.fn()
    const { getByRole } = render(() => (
      <TabLayout tabs={[{ id: 'sa', label: 'SA' }, { id: 'chat', label: 'Chat' }]} active="sa" onChange={onChange} />
    ))
    fireEvent.click(getByRole('tab', { name: 'Chat' }))
    expect(onChange).toHaveBeenCalledWith('chat')
  })

  it('selects spinner option', () => {
    const onChange = vi.fn()
    const { getByTestId } = render(() => (
      <Spinner value="cot" onChange={onChange} options={[{ id: 'cot', label: 'CoT' }, { id: 'chat', label: 'GeoChat' }]} />
    ))
    fireEvent.change(getByTestId('atak-spinner'), { target: { value: 'chat' } })
    expect(onChange).toHaveBeenCalledWith('chat')
  })

  it('selects a segmented option exclusively', () => {
    const onChange = vi.fn()
    const { getByRole } = render(() => (
      <SegmentedButton value="2d" onChange={onChange} options={[{ id: '2d', label: '2D' }, { id: '3d', label: '3D' }]} />
    ))
    fireEvent.click(getByRole('button', { name: '3D' }))
    expect(onChange).toHaveBeenCalledWith('3d')
  })

  it('selects a list row', () => {
    const onSelect = vi.fn()
    const { getByTestId } = render(() => (
      <ListView items={[{ id: '1', title: 'HAWK-1' }, { id: '2', title: 'OWL-2' }]} onSelect={onSelect} />
    ))
    fireEvent.click(getByTestId('atak-list-2'))
    expect(onSelect).toHaveBeenCalledWith('2')
  })

  it('expands accordion sections', () => {
    const onChange = vi.fn()
    const { getByTestId, queryByText } = render(() => (
      <AccordionView
        onChange={onChange}
        sections={[
          { id: 'sa', title: 'SA', body: <span>sa-body</span> },
          { id: 'chat', title: 'Chat', body: <span>chat-body</span> },
        ]}
      />
    ))
    expect(queryByText('sa-body')).toBeTruthy()
    fireEvent.click(getByTestId('atak-accordion-chat'))
    expect(onChange).toHaveBeenCalledWith('chat')
    expect(queryByText('chat-body')).toBeTruthy()
  })

  it('closes a modal', () => {
    const onClose = vi.fn()
    const { getByText } = render(() => (
      <Modal open title="Confirm" onClose={onClose}>
        <TextView text="Blocking" />
      </Modal>
    ))
    fireEvent.click(getByText('Close'))
    expect(onClose).toHaveBeenCalled()
  })

  it('changes map source', () => {
    const onChange = vi.fn()
    const { getByTestId } = render(() => <MapSource value="osm" onChange={onChange} />)
    fireEvent.click(getByTestId('atak-map-imagery'))
    expect(onChange).toHaveBeenCalledWith('imagery')
  })

  it('selects a radio in a group', () => {
    const onChange = vi.fn()
    const { getAllByTestId } = render(() => (
      <div>
        <RadioButton name="mode" value="live" label="Live" checked onChange={onChange} />
        <RadioButton name="mode" value="replay" label="Replay" checked={false} onChange={onChange} />
      </div>
    ))
    fireEvent.click(getAllByTestId('atak-radio')[1]!)
    expect(onChange).toHaveBeenCalledWith('replay')
  })
})
