# Casper Forward

A multi-page Next.js and TypeScript site for the Casper Forward post-hackathon builder program.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Public routes

- `/` — Casper Forward homepage
- `/teams` — public team directory
- `/apply` — Casper Forward application

The application page embeds the existing Google Form and includes a direct Google Forms fallback link. The form URLs are defined in `lib/application.ts`.

## Team data and logos

`data/teams.json` is the single source of truth for both the homepage team preview and the full Teams directory. The current records are demo placeholders that can be replaced with approved project data without changing the data structure or page layout.

To add or update a team:

1. Add its logo under `public/teams/<team-slug>/`.
2. Add or update the corresponding object in `data/teams.json`.
3. Use one supported status: `BUILDING`, `TESTNET`, `MAINNET PREP`, or `LIVE`.
4. Set `featured` to `true` to make the project eligible for the homepage preview. The first three featured records are shown.
5. Leave unavailable external-link values as empty strings.

Public team records should never include private contacts, blocker notes, internal status, follow-up history, or CRM data.

## Content and assets

- Shared program copy, navigation, resources, journey, support, and eligibility: `lib/content.ts`
- Shared types and supported team statuses: `lib/types.ts`
- Shared components: `components/`
- Team logos: `public/teams/`
- Support artwork: `public/images/support-hub.png`

The Casper Forward FAQ card is intentionally non-clickable until Muhammet provides the final FAQ/resource URL. Once available, update the single `href` value for that resource in `lib/content.ts`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

The current deployment assumption is Vercel using its detected Next.js defaults from the repository root. No environment variables or backend services are currently required. Vercel should install from the npm lockfile and run `npm run build`.
