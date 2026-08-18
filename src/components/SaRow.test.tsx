import { render } from '@solidjs/testing-library'
import { describe, expect, it, vi } from 'vitest'
import { SaRow } from './SaRow'

describe('SaRow', () => {
  it('renders callsign and reports selection', () => {
    const onSelect = vi.fn()
    const { getByTestId } = render(() => (
      <SaRow callsign="HAWK-1" state="live" cotType="a-f-A" onSelect={onSelect} />
    ))
    const row = getByTestId('atak-sa-row')
    expect(row.textContent).toContain('HAWK-1')
    expect(row.textContent).toMatch(/live/i)
    row.click()
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
