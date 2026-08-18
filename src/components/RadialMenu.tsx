import { For, type Component } from 'solid-js'

export type RadialMenuItem = { id: string; label: string }
export type RadialMenuProps = {
  items: readonly RadialMenuItem[]
  selected?: string
  onPick?: (id: string) => void
}

function wedge(i: number, n: number, r0: number, r1: number, cx: number, cy: number): string {
  const a0 = (i / n) * Math.PI * 2 - Math.PI / 2
  const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2
  const p = (r: number, a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  const [x0, y0] = p(r1, a0)
  const [x1, y1] = p(r1, a1)
  const [x2, y2] = p(r0, a1)
  const [x3, y3] = p(r0, a0)
  const large = a1 - a0 > Math.PI ? 1 : 0
  return `M ${x0} ${y0} A ${r1} ${r1} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 ${large} 0 ${x3} ${y3} Z`
}

function labelPos(i: number, n: number, r: number, cx: number, cy: number): { x: number; y: number } {
  const a = ((i + 0.5) / n) * Math.PI * 2 - Math.PI / 2
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

/** Unofficial kit radial — pie around self, not official ATAK. */
export const RadialMenu: Component<RadialMenuProps> = (props) => {
  const n = () => Math.max(props.items.length, 1)
  const size = 208
  const cx = 104
  const cy = 104
  return (
    <div class="atak-radial-menu" data-testid="atak-radial-menu" role="toolbar" style={{ width: `${size}px`, height: `${size}px`, position: 'relative' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r="100" fill="#000000bf" />
        <For each={props.items}>
          {(item, i) => {
            const on = () => item.id === props.selected
            const mid = () => labelPos(i(), n(), 68, cx, cy)
            return (
              <g>
                <path
                  d={wedge(i(), n(), 28, 96, cx, cy)}
                  fill={on() ? '#ffe35e' : '#d6d2bd'}
                  stroke={on() ? '#000' : '#131415'}
                  stroke-width="1"
                  class="atak-radial-wedge"
                  data-testid={`atak-radial-${item.id}`}
                  onClick={() => props.onPick?.(item.id)}
                  style={{ cursor: 'pointer' }}
                />
                <text x={mid().x} y={mid().y} text-anchor="middle" dominant-baseline="middle" font-size="10" fill="#131415" pointer-events="none">
                  {item.label}
                </text>
              </g>
            )
          }}
        </For>
        <circle cx={cx} cy={cy} r="22" fill="#fff89d" stroke="#131415" stroke-width="2" />
      </svg>
    </div>
  )
}
