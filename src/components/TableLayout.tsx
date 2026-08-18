import { For, type Component } from 'solid-js'

export const TableLayout: Component<{
  columns: readonly string[]
  rows: readonly (readonly string[])[]
}> = (props) => (
  <table class="atak-table" data-testid="atak-table">
    <thead>
      <tr>
        <For each={props.columns}>{(col) => <th>{col}</th>}</For>
      </tr>
    </thead>
    <tbody>
      <For each={props.rows}>
        {(row) => (
          <tr>
            <For each={row}>{(cell) => <td>{cell}</td>}</For>
          </tr>
        )}
      </For>
    </tbody>
  </table>
)
