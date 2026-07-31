# bindian0509.github.io

Personal site for Bharat Verma — engineering leader working on platform and payments.
Live at **[bindian0509.github.io](https://bindian0509.github.io/)**.

A single-page, statically exported Next.js site. No CMS, no database, no analytics,
no client-side data fetching. Content lives in typed arrays at the top of each
component, which makes an edit a one-line change and a diff easy to read.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, `output: "export"`) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss` |
| Fonts | Newsreader (serif), Inter (sans), IBM Plex Mono — loaded from Google Fonts |
| Hosting | GitHub Pages, deployed by GitHub Actions |

## Requirements

**Node.js >= 20.9.0.** Next.js 16 refuses to start below this and the error is
explicit about it. Check with `node -v` before opening an issue with yourself.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint
```

There is no `npm start` worth running — `output: "export"` means the build produces
plain HTML in `out/`. To preview the real artifact, serve that directory:

```bash
npx serve out
```

## Layout

```
src/
  app/
    layout.tsx      Metadata, viewport, font <link>s, <html> shell
    page.tsx        Section order — the whole site is one page
    globals.css     Design tokens and base styles (see below)
  components/
    Navbar.tsx      Fixed masthead, scroll-aware background
    Hero.tsx        Name, positioning line, availability band, key figures
    About.tsx       Practice areas + the operating-model cycle diagram
    Experience.tsx  Proportional career timeline + detailed role history
    Achievements.tsx Outcome grid with attribution
    Skills.tsx      Toolkit, grouped
    Contact.tsx     Email, profiles, conversation topics
    Footer.tsx
```

`bharat-jul-2026.tex` is the LaTeX source for the résumé and is unrelated to the
build — it lives here so the site and the CV stay in sync when one changes.

## Design system

Everything visual is driven by tokens in the `@theme` block of
[`src/app/globals.css`](src/app/globals.css). Tailwind v4 generates utilities from
them automatically, so `--color-ink-muted` becomes `text-ink-muted`, `bg-ink-muted`
and so on.

| Token | Role |
| --- | --- |
| `--color-paper` | Page background |
| `--color-ink` | Headings and primary text |
| `--color-ink-muted` | Body copy |
| `--color-ink-subtle` | Eyebrow labels, captions |
| `--color-rule` | Hairline dividers |
| `--color-rule-strong` | Emphasised rules, diagram connectors |
| `--color-accent` | Links, metrics, the one colour on the page |
| `--color-accent-soft` | Accent-tinted panel backgrounds |

No component hardcodes a hex value, with one deliberate exception: the brand
colours on the social icons in `Contact.tsx`, which are passed as a `--brand`
custom property per link. Because of this, switching the whole site between light
and dark is a matter of changing eight values in `globals.css` and the
`color-scheme` / `viewport.themeColor` pair in `layout.tsx`. It was built light
first and converted with no component changes at all.

### Cascade layers

Base element styles are wrapped in `@layer base` and custom classes (`.eyebrow`,
`.link-rule`) in `@layer components`. This is not cosmetic. An unlayered
`a { color: inherit }` outranks Tailwind's layered utilities and will silently
break `text-accent` on every link. If you add global CSS here, put it in a layer.

### Motion

The only animated element is the availability dot in the hero. A
`prefers-reduced-motion` block at the end of `globals.css` disables transitions and
animations wholesale, so new animated elements are covered by default.

### Diagrams

The career timeline and the operating-model cycle are built from CSS grid, borders
and small inline SVG arrowheads — not Mermaid or a charting library. They use the
same tokens as the rest of the page, add nothing to the bundle, and render on the
server. The career timeline's segment widths come from a `span` field (tenure in
years) fed into `grid-template-columns` as `fr` units, with a `minmax` floor so
short tenures stay legible.

## Editing content

Each section's copy is a typed array at the top of its component:

| Data | File |
| --- | --- |
| `figures`, `domains` | `Hero.tsx` |
| `practice`, `operatingModel` | `About.tsx` |
| `roles`, `timeline` | `Experience.tsx` |
| `outcomes`, `delivered` | `Achievements.tsx` |
| `groups` | `Skills.tsx` |
| `socialLinks`, `conversations` | `Contact.tsx` |
| `navItems` | `Navbar.tsx` |

When adding a role, update **both** `roles` (the narrative history) and `timeline`
(the proportional strip). They are separate on purpose — the strip carries only
what fits in a narrow column.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds on every push
to `gh-pages` or `main` and publishes `out/` through `actions/deploy-pages`. It runs
`npm ci`, so **`package-lock.json` must be committed and in sync with
`package.json`** or the build fails before it reaches Next.js.

Despite the branch name, `gh-pages` here is a source branch — the workflow uploads a
Pages artifact rather than committing built files to a branch.

## Licence

MIT — see [LICENSE](LICENSE). The code is free to reuse; the content, career history
and copy are not.
