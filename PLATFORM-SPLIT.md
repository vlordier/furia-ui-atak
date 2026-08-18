# `@furia/ui-atak` in the platform split

Product **TAK-edge** UI pack. Inspired by unofficial ATAK/WinTAK Figma community kits. **Not** official ATAK.

| This package | `@furia/ui` | `tupac` |
| --- | --- | --- |
| TAK-adjacent chrome + `ds-tak-edge` target | Generic primitives / layout runtime | Delta host; may admit `ds-tak-edge` |

## Forbidden

- This package must **not** import `@furia/builder` or a host C2.
- `@furia/ui` must **not** import `@furia/ui-atak`.
- Do not ship TAK Product Center marks or claim official ATAK.

## Visual references (not authors)

- ATAK Figma Community file: https://www.figma.com/community/file/1571370238280853168/atak-design-system-tactical-assault-kit-team-awareness-kit
- WinTAK Figma Community file: https://www.figma.com/community/file/1573375430276099247/wintak-design-system-windows-tactical-assault-kit-team-awareness-kit
- Patrick Sherlund (GitHub): https://github.com/Patrick-Sherlund — reference only

This package is Furia’s. See [ATTRIBUTION.md](./ATTRIBUTION.md).

Community files are read-only until duplicated into an org team. This repo implements the **operator surfaces we need**, not every kit frame.
