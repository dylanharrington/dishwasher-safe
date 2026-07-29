# Security scanning

This Astro micro-site uses lightweight dependency scanning:

- GitHub Dependabot version updates for npm, weekly Monday 9am PT
- GitHub Dependabot vulnerability alerts and security updates, enabled in repository settings
- GitHub Actions `npm audit --audit-level=high` on pull requests, weekly schedule, and manual dispatch

CodeQL is intentionally not included by default. This is a static Astro site with no server runtime, and CodeQL may require GitHub Advanced Security on private repositories. Add it later if the site grows backend code or accepts user input.

The audit workflow fails only on high or critical vulnerabilities to avoid noisy failures from moderate dev-only tooling issues.

## Current baseline

Verified 2026-07-29:

- Astro resolves to 7.1.3, with patched transitive versions of Sharp 0.35.3/libvips 1.3.2, `fast-uri` 3.1.4, SVGO 4.0.2, and `js-yaml` 4.3.0.
- `npm audit --audit-level=high` reports 0 vulnerabilities.
- `npm run build` succeeds with 0 Astro diagnostics.
