# Personal portfolio

A responsive one-page portfolio built with React and Vite.

## Start locally

```sh
cd ~/Documents/personal/portfolio
npm install
npm run dev
```

Open the local URL printed in the terminal. Press Ctrl+C to stop.

## Customize

- `src/App.jsx`: replace Your name, project placeholders, biography, and contact copy. Project information lives in the `projects` array at the top.
- `src/index.css`: colors, typography, spacing, and mobile styles.
- `index.html`: browser title and search description.
- `public/`: place project images or a resume here and reference them by `/filename`.

The project copy is placeholder content, not factual claims. Add your real email and project URLs before sharing. Fonts load from Google Fonts with local fallbacks.

## Production build

```sh
npm run build
npm run preview
```

The generated static website is in `dist/`. No backend or deployment is configured.
