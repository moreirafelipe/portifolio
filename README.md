# Portifolio

Personal portfolio React app.

## Summary
This repository contains a Create React App based portfolio site with several components and a small data visualization (GitHub skill stats).

## What I changed recently
- Added barrel exports for `src/components`, `src/pages`, `src/services`, `src/hooks`, and `src/utils` to simplify imports.
- Wrapped page sections in `.section-100vh` and added responsive/landscape Sass rules in `src/styles/index.scss` so each main section fills the viewport and has consistent margins.
- Added a short refactor plan in `REFACTORING.md`.

## Prerequisites
- Node.js: recommended v16.x (LTS) for compatibility with `react-scripts@5`. If you prefer to use Node 18/20/22, see Troubleshooting below for required fixes.
- npm (bundled with Node)

## Install & run
In project root:

```bash
npm install
npm start
```

## Common issues & fixes
- Error: "error:0308010C:digital envelope routines::unsupported" on Node 17+ (OpenSSL) — temporary fix:

```bash
# PowerShell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
npm start

# Windows CMD
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

- Error: "react_dom.render is not a function" — you're using React 18/19; update `src/index.jsx` to use the `createRoot` API from `react-dom/client`:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

- Loader/Babel/Webpack conflicts: Do NOT keep custom `webpack`/`babel-loader`/`@babel/*` entries in `devDependencies` while using `react-scripts`. Remove them from `package.json`, then reinstall:

```bash
# remove node_modules and lockfile
npm rm -rf node_modules package-lock.json
npm install
```

- `ajv` / `ajv-keywords` module errors: ensure compatible versions are installed. Example:

```bash
npm install ajv@^6.12.6 ajv-keywords@^3.5.2 --save-dev
npm install
```

- `recharts` / `react-redux` errors for `useSyncExternalStore` — either upgrade React to v18+ or pin `recharts` to a version compatible with React 17 (e.g. `recharts@2.1.16`).

## Conventions
- Components: `src/components/ComponentName/index.jsx` default export
- Pages: `src/pages/` with a default export per page
- Barrels: use `src/components/index.js` and `src/pages/index.js` for simpler imports
- Layout: use the `.section-100vh` wrapper (in `src/styles/index.scss`) to make each page section fill the viewport
