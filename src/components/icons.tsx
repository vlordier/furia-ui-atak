import type { Component } from 'solid-js'

const svg = (d: string): Component<{ size?: number; label?: string }> => (props) => (
  <svg width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" aria-hidden={props.label ? undefined : true} aria-label={props.label}>
    <path fill="currentColor" d={d} />
  </svg>
)

export const IconHamburger = svg('M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z')
export const IconOverflow = svg('M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z')
export const IconGoto = svg('M12 2l4 8h-3v10h-2V10H8l4-8z')
export const IconChat = svg('M4 4h16v10H7l-3 3V4z')
export const IconRedX = svg('M6 6l12 12M18 6L6 18')

export const IconRedXMark: Component<{ size?: number }> = (props) => (
  <svg width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="none" stroke="currentColor" stroke-width="2" d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const IconLayers = svg('M12 3l9 5-9 5-9-5 9-5zm0 8.5l9 5-9 5-9-5 9-5z')
export const IconPoint = svg('M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 4a3 3 0 100 6 3 3 0 000-6z')
export const IconCaret = svg('M7 10l5 5 5-5H7z')
