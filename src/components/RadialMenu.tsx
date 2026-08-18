import { For, type Component, type JSX } from 'solid-js'
import { IconChat, IconGoto, IconRedXMark } from './icons'

export type RadialMenuItem = { id: string; label: string; icon?: JSX.Element }
export type RadialMenuProps = {
  items: readonly RadialMenuItem[]
  selected?: string
  onPick?: (id: string) => void
}

const SLOTS = 8

function wedge(i: number, r0: number, r1: number, cx: number, cy: number): string {
  const gap = 0.02
  const a0 = (i / SLOTS) * Math.PI * 2 - Math.PI / 2 + gap
  const a1 = ((i + 1) / SLOTS) * Math.PI * 2 - Math.PI / 2 - gap
  const p = (r: number, a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  const [x0, y0] = p(r1, a0)
  const [x1, y1] = p(r1, a1)
  const [x2, y2] = p(r0, a1)
  const [x3, y3] = p(r0, a0)
  return `M ${x0} ${y0} A ${r1} ${r1} 0 0 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 0 0 ${x3} ${y3} Z`
}

function mid(i: number, r: number, cx: number, cy: number) {
  const a = ((i + 0.5) / SLOTS) * Math.PI * 2 - Math.PI / 2
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

const stockIcon = (id: string) => {
  if (id === 'goto' || id === 'go') return <IconGoto size={14} />
  if (id === 'redx' || id === 'rx') return <IconRedXMark size={14} />
  if (id === 'chat' || id === 'ch') return <IconChat size={14} />
  return null
}

/** Copied from unofficial Figma RadialMenu (8 wedges, self disc). Not official ATAK. */
export const RadialMenu: Component<RadialMenuProps> = (props) => {
  const slots = () =>
    Array.from({ length: SLOTS }, (_, i) => props.items[i] ?? { id: `empty-${i}`, label: '', empty: true as const })
  const size = 208
  const cx = 104
  const cy = 104
  return (
    <div class="atak-radial-menu" data-testid="atak-radial-menu" role="toolbar" style={{ width: `${size}px`, height: `${size}px`, position: 'relative' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r="102" fill="#000000bf" />
        <For each={slots()}>
          {(item, i) => {
            const on = () => !('empty' in item && item.empty) && item.id === props.selected
            const empty = () => 'empty' in item && item.empty
            const pos = () => mid(i(), 64, cx, cy)
            return (
              <g>
                <path
                  d={wedge(i(), 32, 98, cx, cy)}
                  fill={empty() ? '#3a3a36' : on() ? '#ffe35e' : '#d6d2bd'}
                  stroke={on() ? '#000' : '#131415'}
                  stroke-width="0.75"
                  data-testid={empty() ? undefined : `atak-radial-${item.id}`}
                  onClick={() => !empty() && props.onPick?.(item.id)}
                  style={{ cursor: empty() ? 'default' : 'pointer' }}
                />
              </g>
            )
          }}
        </For>
        <polygon points="104,86 118,104 104,122 90,104" fill="#fff89d" stroke="#131415" stroke-width="1.5" />
      </svg>
      <For each={slots()}>
        {(item, i) => {
          const empty = () => 'empty' in item && item.empty
          if (empty()) return null
          const pos = mid(i(), 64, 104, 104)
          return (
            <span
              style={{
                position: 'absolute',
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: 'translate(-50%, -50%)',
                color: '#131415',
                'pointer-events': 'none',
                display: 'flex',
              }}
            >
              {item.icon ?? stockIcon(item.id)}
            </span>
          )
        }}
      </For>
    </div>
  )
}
