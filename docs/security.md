# Security scanning

This Astro micro-site uses lightweight dependency scanning:

- GitHub Dependabot version updates for npm, weekly Monday 9am PT
- GitHub Dependabot vulnerability alerts and security updates, enabled in repository settings
- GitHub Actions `npm audit --audit-level=high` on pull requests, weekly schedule, and manual dispatch

CodeQL is intentionally not included by default. This is a static Astro site with no server runtime, and CodeQL may require GitHub Advanced Security on private repositories. Add it later if the site grows backend code or accepts user input.

Current baseline when scanning was added: npm audit reported 5 moderate dev-tooling advisories through `@astrojs/check`/language-server/yaml dependencies and 0 high/critical advisories. The audit workflow fails only on high or critical vulnerabilities to avoid noisy failures from moderate dev-only tooling issues.
