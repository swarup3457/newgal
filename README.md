# Interactive Component Gallery

A small React + Vite + Tailwind app demonstrating React fundamentals for the Module 2 Capstone.

## What it includes
- 6 interactive demo components (Counter, Form, Toggle, Expandable Card, Todo List, Color Picker)
- Category filtering, real-time search, result counter
- Responsive grid (1 / 2 / 3 columns)
- Local color theme persistence and todo persistence in localStorage

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173`

## Build
```bash
npm run build
npm run preview
```

## Project structure
```
src/
  components/      # UI composed components
  demos/           # demo components and registry mapping
  data/            # components metadata json
  utils/           # helper functions (search & filter)
  App.jsx
  main.jsx
  index.css
```

## Notes / Next steps
- Add modal with full demo + code snippets (use `prism-react-renderer`).
- Add React Router for per-component pages.
- Add tests with Vitest / React Testing Library.
- Deploy to Vercel/Netlify.
