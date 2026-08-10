# Dishwasher Safe?

Small SEO utility site for direct dishwasher-safe answers.

## Commands

- `npm run dev`
- `npm run build`
- `npm run validate:content`
- `npm run validate:rendered` (after a build)
- `npm run preview`

## Links

- Production: https://isdishwashersafe.com
- Vercel preview: https://dishwasher-safe.vercel.app
- Domain: isdishwashersafe.com

## Tracking

See `docs/project-plan.md` for launch tasks and expansion notes.

Item content is release-gated: every guide must have non-empty answer/spec fields, an explicit review date, and at least one tracked source. The production build also scans every rendered item page for empty answers, missing FAQ answer text, and leaked `undefined`/`null` values.
