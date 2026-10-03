# Security scanning

This Astro micro-site uses lightweight dependency scanning:

- GitHub Dependabot version updates for npm, weekly Monday 9am PT
- GitHub Dependabot vulnerability alerts and security updates, enabled in repository settings
- GitHub Actions `npm audit --audit-level=high` on pull requests, weekly schedule, and manual dispatch

CodeQL is intentionally not included by default. This is a static Astro site with no server runtime, and CodeQL may require GitHub Advanced Security on private repositories. Add it later if the site grows backend code or accepts user input.

The audit workflow fails only on high or critical vulnerabilities to avoid noisy failures from moderate dev-only tooling issues.

## Current baseline

Verified 2026-08-19:

- Astro resolves to 7.1.3, and the PostCSS dependency path resolves to patched `nanoid` 3.3.18.
- `npm audit --audit-level=high` reports 0 vulnerabilities.
- `npm run build` succeeds with 0 Astro diagnostics.

## Accepted advisories

`npm run audit:high` (also used by the npm audit workflow and the daily micro-site check) fails on any high or critical advisory except those listed in `.github/audit-allowlist.json`. An accepted advisory fails again as soon as a safe non-major fix exists or after its `reviewBy` date.

- **GHSA-ch52-4w7c-c8xp** (http-cache-semantics, via Astro), accepted 2026-10-03 until 2026-11-03: no patched version exists. Astro uses the library only to cache remote images during the static build, and the site serves prebuilt files with no shared HTTP cache, so the cross-user cache leak doesn't apply.
