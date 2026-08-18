import { describe, expect, it } from 'vitest'
import { ATAK_FIGMA_DESIGN, ATAK_FIGMA_PAGES } from './figma'
import { ATAK_KIT_COLORS } from './tokens'

describe('duplicated Figma file', () => {
  it('has an MCP-valid design fileKey and Color Guide accent', () => {
    expect(ATAK_FIGMA_DESIGN.fileKey).toMatch(/^[0-9a-zA-Z]{22,}$/)
    expect(ATAK_FIGMA_PAGES.colorGuide).toBe('372:534')
    expect(ATAK_FIGMA_PAGES.button).toBe('124:4542')
    expect(ATAK_KIT_COLORS.accent).toBe('#33b5e5')
    expect(ATAK_KIT_COLORS.bg).toBe('#222222')
  })
})
