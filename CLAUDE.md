# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server on localhost:3000
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint
```

## Project Overview

**Portal do Colaborador** is a Next.js 16 frontend for an employee portal (Aubay). Stack: React 19, TypeScript, Tailwind CSS, TanStack Query, React Hook Form, Zod.

**Current Status**: Early stage MVP with placeholder backend integration. Auth guard exists but auth system not yet implemented.

## Architecture: Feature-First Modules

Code is organized by business domain, not technical layer. Each module in `src/modules/` contains:

```
module-name/
├── domain/              # Pure types & business logic (types.ts, rules.ts)
├── infrastructure/      # API calls & integrations (api.ts)
├── application/         # Queries & commands using TanStack Query
└── presentation/        # React components (pages, forms, UI wiring)
```

**Key Pattern**: Move data fetching & validation to `infrastructure/` early; connect in `presentation/` via `useQuery()`; use TanStack Query with proper stale times (default: 30s).

**Minimal Boilerplate**: Don't create subdirectories unless there's real logic to separate. A small module can live in just `presentation/` + `domain/`.

## Styling & Design System

- **Tailwind CSS v4** (with PostCSS)
- Custom CSS variables in `globals.css` for Aubay brand colors: `--aubay-orange`, `--aubay-black`, `--aubay-grey`, `--aubay-warmgrey`, `--aubay-white`
- **Font**: Montserrat (loaded from Google Fonts, exposed as `--font-brand`)
- **Icons**: FontAwesome 7.2 (`fa-solid` classes, used with `aria-hidden`)

## Forms & Validation

Forms use **React Hook Form + Zod** combination:
- Define schemas in `module-name/schemas/` using Zod
- Wire validation in form components with `@hookform/resolvers`
- Keep schemas close to the forms that use them
- No custom error handling needed — RHF + Zod integration is automatic

Example: `src/modules/employee-profile/schemas/aubay-data.schema.ts` + `aubay-data-form.tsx`

## Data Fetching & Caching

**TanStack Query** is the source of truth for async state:
- Define queries in `application/` as factory functions (e.g., `employeeProfileQuery()`)
- Default config: 30s stale time, 1 retry, no refetch on window focus
- Placeholder API calls in `infrastructure/` return mock data; swap for real calls later
- Mutations aren't wired yet — placeholder `console.log()` for form submissions

## App Structure & Routing

- **Next.js App Router** (not Pages Router)
- `src/app/(private)/` is a route group for authenticated pages (guard not yet active)
- `src/shared/ui/` contains layout shells: `private-shell.tsx`, `private-header.tsx`
- All page routes wrap content in these shared shells for consistent layout
- Global providers (Query Client) are in `src/app/providers.tsx`

## Important: Next.js Version Matters

This is **Next.js 16.2.3** with potential breaking changes vs. training data:
- Always check `node_modules/next/dist/docs/` for feature docs
- Heed deprecation notices in console
- APIs and file structure may differ from standard tutorials
- When in doubt about routing, server components, or APIs: consult the docs or test locally

## Localization

App is fully in **Portuguese** (pt-PT locale). When adding strings:
- Use Portuguese text directly in components
- Format dates/times with `.toLocaleTimeString("pt-PT", ...)` or similar
- Keep language consistent (Portugal vs. Brazil Portuguese conventions)

## Scaling Without Overengineering

**Add structure only when needed:**
- Until there's a real backend, keep placeholder functions in `infrastructure/`
- Don't create mutation helpers until mutations exist
- Keep the module `application/` folder empty if there are no queries yet
- Single large page component is fine until it hits ~300 lines; then extract features into sub-components

**When Backend Integration Arrives:**
1. Replace `getEmployeeProfile()` in `infrastructure/` with real API calls
2. Add mutations alongside queries in `application/`
3. Mutation handlers replace `console.log()` placeholders in forms
4. Keep domain types stable; they're the contract between frontend and backend

## Key Files & Patterns

- **`src/app/layout.tsx`**: Root layout; adds Montserrat font, FontAwesome, AppProviders
- **`src/app/providers.tsx`**: Query Client initialization with defaults
- **`src/shared/lib/cn.ts`**: Tailwind class composition utility (if needed)
- **Module domains** (`domain/types.ts`): Single source of truth for shape of data
- **Schemas**: Live in `module/schemas/`; keyed by feature (not one file per schema)

## Testing, CI/CD, and Linting

- No test framework configured yet (Jest, Vitest, or Playwright can be added)
- ESLint enabled via Next.js config; no custom `.eslintrc`
- No CI pipeline configured
- Pre-commit hooks can be added later via Husky if needed

## Git & Commits

- Main branch is `main`
- Feature branches from `main`, PR back to `main`
- Squash commits for small features; keep logical commits for larger work

## Notes for Claude Instances

When working on this codebase:
1. Always verify Next.js version if unsure about an API (check `package.json`)
2. Placeholder functions in `infrastructure/` are stubs — confirm with user before swapping for real APIs
3. No authentication is wired yet; `auth-guard.tsx` is a placeholder
4. If adding a new module, use the feature-first structure above
5. Keep component tree shallow until complexity warrants extraction
6. Prefer inline styling with Tailwind over CSS files unless there's a reusable component library
