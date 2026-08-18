import { For, createMemo, createSignal, onCleanup, onMount } from 'solid-js'
import { ATAK_CATALOG } from '../src/catalog'
import { previews } from './previews'

const readSlug = () => {
  const raw = location.hash.replace(/^#\/?/, '')
  return ATAK_CATALOG.some((p) => p.slug === raw) ? raw : ATAK_CATALOG[0]!.slug
}

export function App() {
  const [slug, setSlug] = createSignal(readSlug())
  const page = createMemo(() => ATAK_CATALOG.find((p) => p.slug === slug()) ?? ATAK_CATALOG[0]!)
  const Preview = createMemo(() => previews[page().slug] ?? previews.button)

  const onHash = () => setSlug(readSlug())
  onMount(() => {
    window.addEventListener('hashchange', onHash)
    if (!location.hash) location.hash = `#/${ATAK_CATALOG[0]!.slug}`
  })
  onCleanup(() => window.removeEventListener('hashchange', onHash))

  return (
    <div class="atak-kit" style={{ display: 'flex', 'min-height': '100vh' }}>
      <nav style={{ width: '240px', padding: '12px', 'border-right': '1px solid var(--atak-border)', overflow: 'auto' }}>
        <div style={{ 'font-size': '11px', color: 'var(--atak-muted)', 'margin-bottom': '10px' }}>FURIA ATAK KIT</div>
        <For each={ATAK_CATALOG}>
          {(item) => (
            <a
              href={`#/${item.slug}`}
              style={{
                display: 'block',
                padding: '6px 4px',
                color: item.slug === slug() ? 'var(--atak-accent)' : 'var(--atak-text)',
                'text-decoration': 'none',
                'font-size': '13px',
              }}
            >
              {item.title}
            </a>
          )}
        </For>
      </nav>
      <main style={{ flex: 1, padding: '20px' }}>
        <p style={{ color: 'var(--atak-muted)', 'font-size': '11px', 'letter-spacing': '0.08em' }}>{page().group.toUpperCase()}</p>
        <h1 style={{ margin: '4px 0 8px', 'font-size': '22px' }}>{page().title}</h1>
        <p style={{ color: 'var(--atak-muted)', 'max-width': '52ch' }}>{page().summary}</p>
        <section style={{ 'margin-top': '20px' }}>
          <Preview />
        </section>
      </main>
    </div>
  )
}
