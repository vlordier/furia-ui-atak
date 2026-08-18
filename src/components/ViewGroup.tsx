import type { Component, JSX } from 'solid-js'

export const ViewGroup: Component<{ title?: string; children?: JSX.Element }> = (props) => (
  <section
    class="atak-viewgroup"
    style={{
      border: '1px solid var(--atak-border)',
      background: 'linear-gradient(180deg, var(--atak-bg, #050506), #272d33)',
      padding: '10px',
    }}
  >
    {props.title ? (
      <header style={{ 'font-size': '12px', color: 'var(--atak-accent)', 'margin-bottom': '8px' }}>{props.title}</header>
    ) : null}
    {props.children}
  </section>
)
