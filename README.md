# Maluzin Institucional

Site institucional da Maluzin — Vite + React + TypeScript + Tailwind CSS.

## Deploy

Deploy automatizado via GitHub Actions (.github/workflows/deploy.yml):
- Push para `main` → build com Node 20 → publica `dist/` em `gh-pages`.
- GitHub Pages serve a partir de `gh-pages` no domínio `www.maluzin.com.br`.

## Scripts

```
npm install --legacy-peer-deps
npm run dev
npm run build
npm run start
```
