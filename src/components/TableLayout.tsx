import { For, type Component } from 'solid-js'

export const TableLayout: Component<{
  columns: readonly string[]
  rows: readonly (readonly string[])[]
}> = (props) => (
  <table class="atak-table" data-testid="atak-table" style={{ width: '100%', 'border-collapse': 'collapse', 'font-size': '12px' }}>
    <thead>
      <tr>
        <For each={props.columns}>
          {(col) => (
            <th style={{ 'text-align': 'left', padding: '6px 8px', border: '1px solid var(--atak-border)', color: 'var(--atak-muted)' }}>
              {col}
            </th>
          )}
        </For>
      </tr>
    </thead>
    <tbody>
      <For each={props.rows}>
        {(row) => (
          <tr>
            <For each={row}>
              {(cell) => <td style={{ padding: '6px 8px', border: '1px solid var(--atak-border)' }}>{cell}</td>}
            </For>
          </tr>
        )}
      </For>
    </tbody>
  </table>
)
