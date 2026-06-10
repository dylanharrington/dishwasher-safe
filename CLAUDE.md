# Dishwasher Safe — Claude session guide

Read `AGENTS.md` for content/coding rules. Note one stale line there: the
domain IS now chosen and live — https://isdishwashersafe.com, deployed to
Vercel from `main` on GitHub (`dylanharrington/dishwasher-safe`).

## Facts

- GA4 property `properties/535293566`, measurement ID `G-70HCESJDXC`
- Search Console property `sc-domain:isdishwashersafe.com`
- Launched 2026-04-29
- Analytics CSVs: `../analytics/dishwasher-safe/` (only present when this repo
  lives at `/Users/dylan/code/microsites/`; if missing, ask Dylan). Read
  `../analytics/MANIFEST.md` for export date and caveats before using.

## Self-improvement loop

Every session, in order:

1. Read `docs/improvement-log.md` (newest entry first) — it says what was
   changed last time and what metric to check.
2. Check `../analytics/MANIFEST.md` export date. If the data is fresh enough to
   evaluate the last entry's hypothesis, do so and record the verdict. If the
   data predates the last change, say so and skip evaluation — don't guess.
3. Pick the highest-priority backlog item from the log (or form a better
   hypothesis from fresh data). Do ONE focused improvement per session, not a
   broad sweep — otherwise we can't attribute movement in the data.
4. Verify: `npm run build` must pass. Commit (Conventional Commits style),
   push to `main` (auto-deploys via Vercel).
5. Append a new entry to `docs/improvement-log.md`: date, what changed, the
   hypothesis, exactly what to look for in the next data dump, and the updated
   backlog.

Ground rules: Search Console clicks/impressions/position are the scoreboard
(GA4 direct traffic is mostly bots/Dylan). Never fabricate manufacturer claims
or hands-on testing. Pages must answer the exact query above the fold.
