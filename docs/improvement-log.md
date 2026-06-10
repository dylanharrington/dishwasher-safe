# Improvement log

Newest entry first. Each Claude session appends an entry per the loop in
`CLAUDE.md`. Entry format: date, what changed, hypothesis, what to check in the
next analytics dump, updated backlog.

## 2026-06-10 (later) — Site-wide design refresh (Dylan-requested, not a backlog item)

**What changed:** Full visual redesign in `BaseLayout.astro` (global stylesheet
rewrite), same content/URLs/structured data. "Appliance manual" direction:
porcelain paper + faint tile-grid background, ink-blue text, hard offset print
shadows, Fraunces/Libre Franklin/IBM Plex Mono type (was Inter), verdicts as
rotated rubber stamps with a load animation, color-coded verdict chips on all
list cards (new `v-{verdict}` classes), answer card restyled from dark navy to
a bordered spec sheet with mono Rack/Cycle/Drying rows. Three Google Fonts
families now load (preconnect + swap).

**Not a ranking hypothesis.** Watch for second-order effects in the next dump:
GA4 engagement time on item pages (font payload could hurt LCP slightly;
clearer verdict scanning could help engagement). If Search Console positions
move, attribute to the bibs change (same day), not this.

## 2026-06-10 — Silicone bibs page aligned to page-1 query (backlog item 1)

**Evaluation of prior entry:** Baseline only, nothing to evaluate.

**What changed:** `/items/silicone-bibs/` retargeted to the exact phrasing
searchers use (no one searches "baby"):

- Title/H1 now exactly "Can silicone bibs go in the dishwasher?" (the
  26-impression, position-8.9 page-1 query) via a new optional `question`
  override field on `DishItem`.
- Item renamed "silicone baby bibs" → "silicone bibs"; "silicone baby bibs"
  kept as alias. The auto-generated `/can-you/` page title now exactly matches
  the #2 query "can you put silicone bibs in the dishwasher" (20 imp, pos 12).
- `shortAnswer` now leads with a direct "Yes —" above the fold.
- FAQ section + FAQPage schema extended with the remaining indexed variants:
  "are silicone bibs dishwasher safe", "can you put silicone bibs in the
  dishwasher", plus a hand-washing question.
- New optional per-item `updated` field; this page now shows/emits
  2026-06-10 instead of the site-wide 2026-05-04.

**Hypothesis:** Exact-match title/H1 + a direct yes answer + FAQ coverage of
all four indexed query variants nudges position 8.9 → top ~5 and converts some
of the ~54 bib-cluster impressions into the site's first organic clicks.

**Check in next dump:** `search-queries.csv` rows containing "bib" — clicks
(any nonzero is a win) and avg position vs baseline (26 imp @ 8.9; 20 @ 12.25;
6 @ 7.67; 2 @ 59). Also `/items/silicone-bibs/` row in `search-pages.csv`
(baseline 111 imp @ 10.3). Allow ~1–2 weeks for recrawl before judging.

**Backlog (priority order):**

1. ~~Silicone bibs page~~ — done this session.
2. **Hydro Flask cluster.** Strengthen `/items/hydro-flask/` to cover the full
   variant space (bottle, lid, straw lid, boot) on one authoritative page with
   FAQ schema, so the variants consolidate instead of splitting. (~160 imp,
   pos 29–44.)
3. **Cast iron + non-stick pages.** Same exact-query treatment for
   `/items/cast-iron-skillet/` and `/items/nonstick-pans/` (29 imp @ 36;
   22 imp @ 50). The `question`/`updated` fields added this session make this
   cheap.
4. **Query mining.** Sweep `search-queries.csv` for items with impressions but
   no dedicated page; batch-create the top gaps from `src/data` structures.
5. **Internal linking.** Homepage gets all entrances but item pages get ~no
   views — add prominent popular-items links / category hubs from the homepage.
6. **Technical sweep.** Sitemap completeness, canonicals, structured data
   validity across all item pages. (One-time check.)

**Next session: evaluate bib cluster if data is fresh, then backlog item 2.**

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
