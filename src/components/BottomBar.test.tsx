import { render } from '@solidjs/testing-library'
import { describe, expect, it, vi } from 'vitest'
import { BottomBar } from './BottomBar'

describe('BottomBar', () => {
  it('exposes kit actions and reports picks', () => {
    const onPick = vi.fn()
    const { getByLabelText } = render(() => (
      <BottomBar items={[{ id: 'goto', label: 'GoTo' }, { id: 'redx', label: 'RedX' }]} onPick={onPick} />
    ))
    getByLabelText('GoTo').click()
    expect(onPick).toHaveBeenCalledWith('goto')
  })
})
