import { For, Show, createSignal, type Component, type JSX } from 'solid-js'

export type AccordionSection = { id: string; title: string; body: JSX.Element }

export const AccordionView: Component<{
  sections: AccordionSection[]
  onChange?: (id: string | null) => void
}> = (props) => {
  const [open, setOpen] = createSignal<string | null>(props.sections[0]?.id ?? null)
  const toggle = (id: string) => {
    const next = open() === id ? null : id
    setOpen(next)
    props.onChange?.(next)
  }
  return (
    <div class="atak-accordion" data-testid="atak-accordion" style={{ border: '1px solid var(--atak-border)', background: 'var(--atak-panel)' }}>
      <For each={props.sections}>
        {(section) => (
          <div style={{ 'border-bottom': '1px solid var(--atak-border)' }}>
            <button
              type="button"
              data-testid={`atak-accordion-${section.id}`}
              onClick={() => toggle(section.id)}
              style={{
                width: '100%',
                'text-align': 'left',
                padding: '10px 12px',
                background: open() === section.id ? '#616262' : '#030304',
                color: 'var(--atak-text)',
                border: 0,
                cursor: 'pointer',
              }}
            >
              {section.title}
            </button>
            <Show when={open() === section.id}>
              <div style={{ padding: '10px 12px' }}>{section.body}</div>
            </Show>
          </div>
        )}
      </For>
    </div>
  )
}
