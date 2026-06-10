# Improvement log

Newest entry first. Each Claude session appends an entry per the loop in
`CLAUDE.md`. Entry format: date, what changed, hypothesis, what to check in the
next analytics dump, updated backlog.

## 2026-06-10 — Baseline (no changes yet)

**Data window:** GA4 2026-04-29 → 2026-06-08; Search Console 2026-03-11 → 2026-06-08.

**State:** Strongest of the three sites in search. 2,001 impressions across
637 distinct queries and 42 pages, but **0 clicks**. Queries match the site's
intent exactly. Standouts:

- "can silicone bibs go in the dishwasher" — 26 impressions, **avg position
  8.9 (page 1)**. Closest to a first click.
- Hydro Flask cluster — ~160 impressions across many variants ("is a hydroflask
  dishwasher safe", "hydroflask lid dishwasher safe", …), positions 29–44.
- "can you put cast iron in the dishwasher" — 29 impressions, position 36.
- "can non stick pans go in the dishwasher" — 22 impressions, position 50.

GA4: 158 of 169 entrances are the homepage; item pages get almost no internal
traffic. Direct traffic is ~all bots/Dylan; ignore as a success metric.

**Backlog (priority order):**

1. **Silicone bibs page.** Check whether a dedicated page exists for the
   page-1 query; if not, create `/items/silicone-bibs/`. Either way: exact
   query phrasing in title/H1, direct yes/no answer above the fold, FAQPage
   structured data. This is the most likely first organic click.
2. **Hydro Flask cluster.** Strengthen `/items/hydro-flask/` to cover the
   full variant space (bottle, lid, straw lid, boot) on one authoritative page
   with FAQ schema, so the variants consolidate instead of splitting.
3. **Cast iron + non-stick pages.** Same treatment for
   `/items/cast-iron-skillet/` and a non-stick pans page.
4. **Query mining.** Sweep `search-queries.csv` for items with impressions but
   no dedicated page; batch-create the top gaps from `src/data` structures.
5. **Internal linking.** Homepage gets all entrances but item pages get ~no
   views — add prominent popular-items links / category hubs from the homepage.
6. **Technical sweep.** Sitemap completeness, canonicals, structured data
   validity across all item pages. (One-time check.)

**Next session: start with backlog item 1.**
