# Molasses Barber & Beauty

A landing page for Molasses Barber & Beauty, built with React + Vite and a hand-rolled CSS design system (no Tailwind or component library).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## What's inside

- `src/App.jsx` — page composition (Nav, Hero, Services, Craft, Reviews, CTA band, Footer)
- `src/components/` — one file per section
- `src/hooks/useNavTheme.js` — the logic behind the dynamic nav: it watches every section with a `data-nav-theme="dark"|"light"` attribute and flips the nav's colors/background to match whatever section currently sits behind it
- `src/styles/` — the design system, one stylesheet per section plus `tokens.css` for shared colors, type scale, and the `.btn` / `.glass-on-*` primitives

## Design notes

- **Palette:** deep molasses ink (`--ink`), warm amber (`--amber`), poured-gold accent (`--gold`), airy cream base (`--cream`).
- **Type:** Fraunces (display/headlines) paired with Manrope (body/UI) — loaded from Google Fonts in `index.html`.
- **Motion:** a single orchestrated fade/rise on the hero at page load; everything else responds to hover or scroll rather than animating on its own.
- **Nav theming:** add `data-nav-theme="dark"` or `"light"` to any `<section>` and the nav will automatically match it as it scrolls past.


