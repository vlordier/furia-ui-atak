import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@solidjs/testing-library'
import { CheckBox } from './CheckBox'
import { Button } from './Button'
import { EditText } from './EditText'
import { SeekBar } from './SeekBar'
import { TabLayout } from './TabLayout'

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

  it('switches tabs', () => {
    const onChange = vi.fn()
    const { getByRole } = render(() => (
      <TabLayout tabs={[{ id: 'sa', label: 'SA' }, { id: 'chat', label: 'Chat' }]} active="sa" onChange={onChange} />
    ))
    fireEvent.click(getByRole('tab', { name: 'Chat' }))
    expect(onChange).toHaveBeenCalledWith('chat')
  })
})
