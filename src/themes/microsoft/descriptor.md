# Theme Descriptor — Microsoft

## Metadata

- **Theme id:** `microsoft`
- **Primary slide authoring pattern:** `microsoft`
- **Compatible design systems:** `default`
- **Mood:** corporate, clean, professional, secure, trustworthy
- **Read this file when:** `deck.config.js` uses `theme: 'microsoft'` or the custom theme path points to `src/themes/microsoft/microsoft.css`

## Slide personality

Microsoft slides feel authoritative and clean — dark surfaces with restrained blue accents that echo the Microsoft brand. The visual language is rooted in Fluent Design: subtle depth, clear hierarchy, and deliberate use of the Microsoft Blue (#0078D4). Decoration is minimal — no floating orbs, no heavy gradients. Instead, an angular panel (a clipped gradient shape on the right) and a thin blue gradient top line create a consistent, polished identity across every slide. Content always leads; chrome never competes.

## Exact JSX skeleton

Use this exact starting structure for new slides:

```jsx
import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./MyNewSlide.module.css";

export default function MyNewSlide({ index }) {
  return (
    <Slide index={index} className={styles.myNewSlide}>
      <div className={styles.angularPanel} />
      <div className={styles.topLine} />

      <div className={`${styles.body} content-frame content-gutter`}>
        {/* Slide content */}
      </div>

      <BottomBar text="Project Footer Text" />
    </Slide>
  );
}
```

### Required child order inside `<Slide>`

1. `<div className={styles.angularPanel} />` — subtle clipped gradient shape on the right side
2. `<div className={styles.topLine} />` — thin blue gradient bar across the top
3. One content wrapper using `content-frame content-gutter`
4. `<BottomBar text="..." />` as the last child

### What NOT to include

- No `<div className="accent-bar" />` — this is for the default DECKIO theme
- No `<div className="orb" />` or orb classes — these are for the default DECKIO theme
- No `grid-dots` — not part of the Microsoft visual language
- No multi-color bars — the theme uses all-blue accents only

## Exact CSS skeleton

```css
.myNewSlide {
  background: var(--background);
  padding: 0 0 44px 0;
}

/* ── Microsoft angular panel ── */
.angularPanel {
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(0, 120, 212, 0.06) 40%,
    rgba(0, 90, 158, 0.1) 70%,
    rgba(0, 120, 212, 0.04) 100%
  );
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 10% 100%);
  pointer-events: none;
  z-index: 0;
}

.topLine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 20;
  background: linear-gradient(
    90deg,
    var(--ms-blue-dark) 0%,
    var(--ms-blue) 50%,
    var(--ms-blue-light) 100%
  );
}

/* ── Subtle blue ambient glow ── */
/* (No glow element needed — the angularPanel provides ambient depth) */

.body {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  position: relative;
  overflow: hidden;
  background: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
}

.card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--ms-blue);
  opacity: 0.7;
}
```

## Token table

### Use these tokens

- `var(--background)` — #1b1b1b, dark surface
- `var(--foreground)` — #ffffff, primary text
- `var(--muted-foreground)` — #a0a0a0, secondary text
- `var(--secondary)` — #2d2d2d, card/elevated surface
- `var(--border)` — #404040, borders
- `var(--accent)` — #0078d4, Microsoft Blue
- `var(--ms-blue)` — #0078d4, primary brand blue
- `var(--ms-blue-light)` — #2b88d8, lighter blue for gradients
- `var(--ms-blue-dark)` — #005a9e, darker blue for depth

### Never use in this theme

- `accent-bar` global class
- `orb` global class
- `grid-dots` global class
- Multi-color decorative bars (no red/green/yellow segments)
- Neon or punk colors from the default/funky-punk themes
- `--cyan`, `--purple`, `--green`, `--pink` — use `--ms-blue` variants instead

## Decorative elements available

| Element          | How to use it                                                                   |
| ---------------- | ------------------------------------------------------------------------------- |
| `angularPanel`   | Required first child — clipped gradient shape on the right, provides depth      |
| `topLine`        | Required second child — thin blue gradient bar across the top (dark→blue→light) |
| Card left accent | Card `::before` with `var(--ms-blue)` left border strip (3px, opacity 0.7)      |

## Available components

| Resource                                                                                 | Import path             |
| ---------------------------------------------------------------------------------------- | ----------------------- |
| `Slide`, `BottomBar`, `Navigation`, `SlideProvider`, `useSlides`, `GenericThankYouSlide` | `'@deckio/deck-engine'` |
| Data / logos                                                                             | `'../data/<file>'`      |

## Anti-patterns

1. Using `accent-bar` global class (belongs to default theme)
2. Using `orb` global class (belongs to default theme)
3. Using `grid-dots` (not in Microsoft visual language)
4. Neon/punk gradient colors
5. Heavy gradients on card surfaces — Microsoft prefers flat, solid surfaces
6. Using `flex: 1` on the body wrapper
7. Adding `flex-direction: column` on the slide root
8. Overloading the slide until it overflows the viewport
9. Using the Microsoft logo, wordmark, or icon without license
10. Implying official Microsoft endorsement or affiliation

## Branding compliance notes

Per Microsoft Trademark Guidelines:

- This theme uses Microsoft's **public brand colors** for a presentation about Microsoft programs
- The Microsoft logo, wordmark, and product icons are **not** included as theme elements
- The four-color bar is an **abstract decorative element** inspired by the brand palette
- All trademark references in slide content should use Microsoft brand names as adjectives (e.g., "Microsoft Teams software", not "Teams")
- Include trademark footnote on Sources slide: "Microsoft, [product names] are trademarks of the Microsoft group of companies."

## Example slide direction

A strong Microsoft slide combines a clear heading, concise supporting copy, and well-spaced content blocks over a clean dark surface. Cards use flat backgrounds with subtle left-accent borders in Microsoft Blue. The four-color bar at the top anchors the Microsoft identity without being loud. Content density is moderate — prefer white space over cramming.
