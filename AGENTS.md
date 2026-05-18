# AGENTS.md

## Project Snapshot

- Repo type: dual-track personal CV/portfolio repo.
- Legacy runtime at repo root: plain HTML, CSS, and vanilla JavaScript.
- New incremental migration app: `react-cv/` using Vite + React + TypeScript + Tailwind.
- Legacy entry point: `index.html`.
- React entry point: `react-cv/src/main.tsx`.
- Local legacy assets live in `css/`, `js/`, `img/`, and `certificados/`.
- UI dependencies for the legacy site are loaded from CDNs in `index.html`: Bootstrap, Popper, jQuery Slim, Font Awesome, Google Fonts, and Icons8 assets.

## Repository Layout

- `index.html` - legacy single-page shell and all root markup.
- `css/style.css` - legacy custom styling, responsive rules, overlays, cards, and section layouts.
- `js/func.js` - legacy client-side behavior: popovers, "ver mas", clipboard copy, startup overlays, and portfolio filtering.
- `img/` - screenshots, media, icons, and background assets used by the legacy site.
- `certificados/` - downloadable CVs and certificates referenced from the legacy page.
- `react-cv/` - incremental React migration workspace.
- `react-cv/src/data/cv.ts` - centralized bilingual CV content for the React app.
- `react-cv/src/types/` - shared React CV types.
- `react-cv/src/components/sections/` - React CV section components for the single-page layout.

## Commands

There is NO repo-wide build, lint, or automated test command. The legacy site has no tooling; the React app inside `react-cv/` has its own local scripts.

### Local Preview

- Preferred local server: `python -m http.server 8000`
- Alternate local server if Node is available: `npx serve .`
- Direct file open also works for basic markup review: open `index.html` in a browser.
- React app dev server: from `react-cv/`, run `npm install` once and then `npm run dev`.

### Build

- Legacy root build: none configured.
- React app build: available inside `react-cv/` via `npm run build`, but only use it when a task explicitly asks for a build.

### Lint / Format

- Legacy root lint: none configured.
- React app lint: none configured in the initial scaffold.
- Format: none configured.
- If formatting manually, preserve the existing 2-space indentation style in `index.html`, `css/style.css`, and `js/func.js`.
- In `react-cv/`, preserve the existing TypeScript + JSX formatting style introduced by nearby files.

### Tests

- Automated test suite: none configured.
- Single test runner: none configured.
- Focused validation means serving either the legacy page locally or the React app locally and testing ONLY the area you changed.

### Single-Test Guidance

When a task says "run a single test", interpret it as a single focused manual verification because the repo has no automated tests.

Recommended flow:

1. Start a local server: `python -m http.server 8000`
2. Open `http://localhost:8000/`
3. Exercise only the affected area

React-specific focused flow:

1. Run `npm install` inside `react-cv/` if dependencies are not present.
2. Run `npm run dev` inside `react-cv/`.
3. Open the Vite URL and exercise only the affected React section.

Examples of a single focused manual test:

- Clipboard behavior: click any email link that triggers `copiarCorreo()` and confirm the Bootstrap popover shows `!Copiado!`.
- Skills expansion: click `Ver mas` and confirm `.habilitiesItem2` items toggle between hidden and visible.
- Portfolio filter: click one filter button and confirm only the matching `.static`, `.django`, or `.reactNative` cards remain visible.
- Responsive navigation: shrink below `760px` and confirm the mobile navbar replaces the fixed aside.

## Working Rules For Agents

- Do not build unless the task explicitly asks for it.
- Keep changes small and targeted.
- Preserve coexistence: legacy root site and `react-cv/` must be able to evolve independently.
- Before editing legacy content, identify the section anchor or component block in `index.html` and update the matching styles or behavior in the related legacy file only.
- Before editing React content, identify the matching data shape in `react-cv/src/data/cv.ts` and the section component that renders it.
- If you add a new asset, keep it under the appropriate app boundary and reference it relative to that app.
- Avoid renaming legacy public IDs, section anchors, CSS classes, or global JS functions unless the task explicitly requires it; markup, CSS, and JS are tightly coupled.
- Keep React migration work inside `react-cv/` unless the task is explicitly about shared hygiene or documentation.

## Coexistence Rules

- The repo root remains the production-like legacy implementation until a task explicitly migrates a slice.
- `react-cv/` is an incremental rewrite, not a replacement switch.
- Do not import legacy JS/CSS directly into the React app.
- Prefer re-modeling legacy content into typed data under `react-cv/src/data/` rather than coupling React components to root HTML.
- When content exists in both apps, treat the legacy root as the source to compare fidelity against.
- If a React task needs a legacy asset, call out path/runtime implications before wiring it, because Vite app boundaries differ from the root static site.

## React CV Conventions

- Stack: Vite + React + TypeScript + Tailwind.
- Product direction: single-page, editorial/premium redesign, bilingual with Spanish default, no dark mode in v1.
- Centralize CV content in `react-cv/src/data/cv.ts`.
- Keep shared shapes in `react-cv/src/types/`.
- Build sections as focused components under `react-cv/src/components/sections/`.
- Prefer presentational components fed by typed data over hardcoded copy inside JSX.
- Keep the first migration slices faithful to the legacy CV content, even when the visual design changes significantly.

## HTML Conventions

- Use semantic sections and keep the current single-page anchor navigation structure.
- Preserve existing IDs such as `sectionPrincipal`, `aboutMe`, `portfolio`, `resumen`, `skills`, and `contacto`; navigation links depend on them.
- Maintain 2-space indentation and double-quoted attributes.
- Match the existing pattern of Bootstrap utility classes mixed with custom classes.
- Reuse existing wrappers like `.title`, `.myWorks`, `.habilitiesItem`, and `.btnContactame` before inventing new patterns.
- When editing repeated cards or info blocks, copy an adjacent block and change the minimum required fields.
- Inline handlers already exist (`onclick="..."`). Prefer not to introduce more unless staying consistent is simpler than a larger refactor.

## CSS Conventions

- All custom CSS lives in `css/style.css`; keep related rules near the existing section block when possible.
- Preserve the existing style language: blue accent `#007ced`, white cards, rounded corners, box shadows, and responsive breakpoints.
- Use the current naming approach for classes: mostly lowercase or lowerCamel-style names such as `.divPrincipal`, `.btnVerMas`, `.habilitiesItem2`.
- Keep breakpoints aligned with the current file unless there is a strong reason to add a new one.
- Do not introduce a CSS framework replacement or CSS modules; this repo is plain global CSS.
- Prefer extending an existing class over creating a slightly different duplicate.
- Be careful with `.overlay`: the class is used both for page-load transitions and overlay labels inside portfolio cards.

## JavaScript Conventions

- All custom JavaScript currently lives in `js/func.js`; keep new behavior there unless a task explicitly asks for restructuring.
- This is plain browser JS, not TypeScript and not module-based. Do not add imports/exports unless you are also introducing tooling.
- Preserve the existing 2-space indentation, double quotes, and semicolons.
- Existing functions use global scope because `index.html` calls them directly from inline handlers. If you keep inline handlers, the functions must stay globally accessible.
- Current naming mixes Spanish and English (`verMas`, `copiarCorreo`, `works`). Follow nearby naming instead of forcing a repo-wide convention shift.
- Use DOM guards when adding logic so missing elements do not break page load.
- Prefer straightforward DOM APIs over abstractions; the site is small and already imperative.
- Avoid `console.log` additions in final code. Remove temporary debugging before finishing.

## Error Handling Expectations

- Fail soft in the browser: check that queried elements exist before reading properties or mutating classes.
- If a feature depends on Bootstrap JS objects, initialize only when the target element is present.
- Do not let a missing optional element break unrelated sections of the page.
- Keep clipboard, popover, and toggle interactions resilient to repeated clicks.

## Dependency Guidance

- `index.html` currently loads Bootstrap JS twice indirectly: `bootstrap.bundle.min.js` from 5.3.2 and `bootstrap.min.js` from 5.1.3, plus separate Popper and jQuery Slim.
- Do not add more UI library versions without a clear reason; version duplication already increases the chance of regressions.
- If a task touches head scripts or styles, preserve compatibility first and call out dependency cleanup separately as a follow-up.

## Content And Asset Editing

- Keep text changes aligned with the bilingual tone already present in the page; most UI copy is Spanish.
- Preserve downloadable document links under `certificados/` unless the task is specifically about replacing files.
- When swapping screenshots or media, keep filenames web-safe if you create new ones; existing names include spaces and mixed casing, so avoid multiplying that pattern.
- Validate image, video, and document paths after editing because this repo relies on direct relative references.

## Manual Verification Checklist

- Open the page and confirm it renders without missing asset errors.
- Check the exact section you changed on desktop width.
- Check the same section below `760px` because the layout switches from fixed aside to mobile navbar.
- If you touched JS, click the affected control at least twice to catch toggle-state issues.
- If you changed links or downloadable assets, open the target once.

## Guidance Sources Checked

- No root `AGENTS.md` existed before this file.
- No `.cursor/rules/` directory was present.
- No `.cursorrules` file was present.
- No `.github/copilot-instructions.md` file was present.

## Good Agent Outcomes In This Repo

- Small edits that preserve the single-page structure.
- Consistent updates across `index.html`, `css/style.css`, and `js/func.js` when a feature spans markup, styles, and behavior.
- Clear manual verification notes because there is no automated safety net.

## Bad Agent Outcomes In This Repo

- Adding tooling, frameworks, or a build step without being asked.
- Renaming anchors, classes, or global functions casually.
- Making style-only fixes without checking mobile behavior.
- Editing CDN dependencies blindly.
- Claiming automated tests passed when no automated tests exist.
