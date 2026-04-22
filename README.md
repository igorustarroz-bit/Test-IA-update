# Celonis Community — Design System (MVP)

Code implementation of the Celonis Community site design system.
Built with **React 18 + TypeScript + Tailwind + GSAP + Storybook 8**.

Source of truth:

- Foundations → [Web‑DS‑Foundations‑1.0](https://www.figma.com/design/eANF7lOciInZLEe1iIUuvJ/Web-DS-_-Foundations-1.0) (fileKey `eANF7lOciInZLEe1iIUuvJ`)
- Components → [Web‑DS‑Components](https://www.figma.com/design/CF8yosaBUqYA3udefFkXyB/Web-DS-_-Components) (fileKey `CF8yosaBUqYA3udefFkXyB`)
- Community screens → [Community‑Site](https://www.figma.com/design/IclXSqkHD5Ia6ODJHRfsn4/Community-Site) (fileKey `IclXSqkHD5Ia6ODJHRfsn4`)

## What this MVP includes

- **Foundations** wired to Figma variables:
  - Primitive color ramps (Grey, Blue Celonis, Green Celonis, Yellow, Red)
  - Semantic tokens (text / background / border / graph) as CSS variables with Light + Dark themes
  - Typography (Poppins, paragraph styles)
  - Spacing scale (Figma numeric tokens 00‑12 + `s`)
  - Radius scale (`none, sm, md, lg, xl, pill`)
- **3 MVP components**: `Button`, `Card` (with GSAP hover lift), `Badge`
- **Storybook** with a `Foundations/` section and `Components/` section
- **Theme switcher** in the Storybook toolbar (Light / Dark)

## Getting started

```bash
# 1. Install deps
npm install

# 2. Run Storybook (main deliverable)
npm run storybook
# → opens http://localhost:6006

# 3. Or run the Vite smoke page
npm run dev
```

## Project layout

```
celonis-community/
├── .storybook/            # Storybook config (main, preview, theme addon)
├── src/
│   ├── components/        # Button, Card, Badge (+ stories co-located)
│   ├── hooks/             # useGSAP – context-scoped GSAP helper
│   ├── lib/               # cn (class merger), tokens (JS mirror of Figma)
│   ├── stories/           # Introduction.mdx + Foundations/* stories
│   ├── App.tsx            # smoke page
│   ├── main.tsx
│   └── index.css          # Tailwind + CSS variable themes
├── tailwind.config.ts     # Maps Figma tokens to Tailwind theme
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Token usage cheat sheet

```tsx
// Semantic (themeable)
<div className="bg-bg-base text-text-high border border-border-low" />

// Primitive (palette — use when semantic doesn't fit yet)
<div className="bg-blue-celonis-60 text-grey-white" />

// Figma spacing scale
<div className="p-04 gap-02" />    // 16px padding, 8px gap

// Typography
<p className="text-p-m" />         // Paragraph M – 14/18
<p className="text-p-xl" />        // Paragraph XL – 18/24
```

## Status & next steps

**Done in this pass**

- Tokens extracted from Figma via the Figma MCP (Color primitives + Light Base semantic tokens)
- Base scaffolding (Vite + React + TS + Tailwind + Storybook)
- Three seed components with variants and stories

**Pending / next iteration**

- Pull **Dark Base** semantic tokens from Figma (currently inverted placeholders)
- Pull **shadow / elevation** tokens (currently a plausible default scale)
- Pull the **real typography scale** (headings h1‑h6) from Components file
- Convert community screen modules (`M00‑*`) into components one by one
- Add `tailwind-merge` once more complex components need class overrides

## Pushing to GitHub

```bash
cd celonis-community
git init
git add .
git commit -m "Initial MVP – foundations + Button/Card/Badge"
git branch -M main
git remote add origin https://github.com/igorustarroz-bit/Test-IA-update.git
git push -u origin main
```

> If the repo already has commits, replace the last two lines with
> `git pull origin main --rebase && git push`.
