# `@furia/ui-atak`

Unofficial **SolidJS** kit. Furia owns this code.

Visual **references** (not authorship):

- [ATAK Design System](https://www.figma.com/community/file/1571370238280853168/atak-design-system-tactical-assault-kit-team-awareness-kit) (Figma Community file `1571370238280853168`)
- [WinTAK Design System](https://www.figma.com/community/file/1573375430276099247/wintak-design-system-windows-tactical-assault-kit-team-awareness-kit)
- [Patrick Sherlund on GitHub](https://github.com/Patrick-Sherlund) — related public work, **not** the author of this package

See [ATTRIBUTION.md](./ATTRIBUTION.md).

**Not** ATAK-CIV/GOV/MIL, **not** official WinTAK, **not** TAK.gov, **not** a TAK Server client.

This package is carved out of Furia so TAK-adjacent chrome can be shared without pulling Delta desktop C2 or `@furia/ui` into every consumer.

## Catalog pages

`npm run catalog` — one page per surface:

ATAK Base · ToolBar · TabLayout · CheckBox · Spinner · EditText · SeekBar · RadioButton · Modal · Button · TextView · SegmentedButton · TableLayout · ListView · RecyclerView · AccordionView · ViewGroup · ATAK RadialMenu · ATAK Map Source · ATAK Symbology

**Scenarios** (Example Plugin stand-ins): Dynamic Ops — COP · Modal · SA + GeoChat · Radial on map. Hash routes `#/ops-cop`, `#/ops-modal`, `#/ops-sa`, `#/ops-radial`.

Catalog screenshots: [ops-cop](./catalog/renders/ops-cop.png) · [ops-modal](./catalog/renders/ops-modal.png) · [ops-sa](./catalog/renders/ops-sa.png) · [ops-radial](./catalog/renders/ops-radial.png) · [button](./catalog/renders/button.png)

## What you get

| Export | Role |
| --- | --- |
| `SaRow` / `StatusChip` | SA list row + live/stale/error |
| `OverlayDrawer` | Map-side SA / peer drawer |
| `RadialTool` | Compact radial action cluster |
| `GeoChatThread` | Training b-t-f chat list |
| `BottomBar` / `IconButton` | Android-style bottom action strip |
| `SearchField` / `MapChip` | Find callsign + map layer chips |
| `atakEdgeBuilderTarget` | Furia Builder target `ds-tak-edge` |
| `ATAK_DS_SOURCE` | Provenance for the community file |

There was **no** 1:1 Solid port of every Figma frame. These are the kit surfaces we actually use (CoT SA, overlay, GeoChat). Desktop Furia/Delta chrome stays Furia.

## Install

```bash
npm install @furia/ui-atak solid-js
```

```tsx
import { OverlayDrawer, SaRow } from '@furia/ui-atak'
import '@furia/ui-atak/tokens.css'

<OverlayDrawer title="SA">
  <SaRow callsign="HAWK-1" state="live" />
</OverlayDrawer>
```

## Split rules

- This pack **must not** import `@furia/builder`.
- `@furia/ui` **must not** import `@furia/ui-atak` (platform stays kit-agnostic).
- Hosts (`tupac` `ds-tak-edge`) may depend on this package.

See [PLATFORM-SPLIT.md](./PLATFORM-SPLIT.md).

## Pair Design skill

Project skill (Grok): `.grok/skills/pair-design/` — vendored from [mary13/pair-design-agent-skill](https://github.com/mary13/pair-design-agent-skill) (MIT). Invoke with `/pair-design` or “let’s pair design”. One artifact per turn; decisions go in `decision-template-lite.md` / `decision-template.md`.
