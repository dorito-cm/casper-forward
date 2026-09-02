# Casper Forward prototype

A maintainable, multi-page Next.js/TypeScript prototype for Casper Forward. It includes one shared content and data layer, a public team directory, and four meaningfully different visual concepts.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production check:

```bash
npm run build
npm start
```

## Routes and visual concepts

- `/` and `/style-a`: Casper Editorial (default)
- `/style-b`: Builder / Technical
- `/style-c`: Premium Dark
- `/style-d`: Minimal Institutional
- `/teams`: default public team directory
- `/style-a/teams` through `/style-d/teams`: directory rendered in each concept

All concepts use the same components and copy. Theme classes in `app/globals.css` provide their different design systems; they do not duplicate business logic.

## Team data

[`data/teams.json`](data/teams.json) is the single source of truth for both the landing-page preview and full directories. The included records are deliberately labeled demo placeholders and must be replaced with approved participant data before launch.

To add or edit a team:

1. Add its logo under `public/teams/<team-slug>/logo.svg` (PNG or WebP also work).
2. Add or update the corresponding object in `data/teams.json`.
3. Use one supported status: `BUILDING`, `TESTNET`, `MAINNET PREP`, or `LIVE`.
4. Set `featured` to `true` to make the project eligible for the landing-page preview. The first three featured records are shown.
5. Leave unavailable external-link values as empty strings.

Public team records should never include private contacts, blocker notes, internal status, follow-up history, or CRM data.

## Content and assets

- Shared program copy, navigation, resources, journey, support, and eligibility: `lib/content.ts`
- Shared types and supported statuses: `lib/types.ts`
- Shared components: `components/`
- Team logos: `public/teams/`
- Support artwork: `public/images/support-hub.png`

The FAQ, workspace, and application links remain safe placeholders until approved URLs are supplied.

## Deploy to Vercel

Import the repository into Vercel and accept the detected Next.js defaults. No environment variables or backend services are required. Vercel will run `npm run build` and deploy the application from the repository root.
