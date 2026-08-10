# Improvement log

Newest entry first. Each Claude session appends an entry per the loop in
`CLAUDE.md`. Entry format: date, what changed, hypothesis, what to check in the
next analytics dump, updated backlog.

## 2026-08-10 — Weekly-audit remediation and content release gates

Fixed the baby-bottles missing-answer defect across visible copy, metadata, and JSON-LD. Added required item review dates, per-guide provenance, visible official references, content validation, and post-build rendered-page validation. The build now fails for missing critical fields, sources, malformed dates/relationships, rendered `undefined`/`null`, empty primary answers, or empty FAQ answer text.

Made the generic air-fryer basket guide the umbrella intent owner with a part-by-part decision table, a powered-body prohibition, and model/manual lookup steps. Added a Ninja model-family table and explicit generic-versus-Ninja link labels; preserved the narrower part pages. Expanded travel-mug lids for disassembly, oil/odor/mold cleanup, and drying, and expanded ceramic mugs for handmade, printed/photo, metallic, cracked, and insulated exceptions.

Replaced the flat homepage list with editorial topic groups. Added GA4 events for finder searches, zero results, result clicks, guide cards, related guides, FAQ opens, and official-source clicks. Next audit should compare generic/part/brand air-fryer query ownership and inspect these events by landing page.

## 2026-06-10 (third pass) — Backlog sweep + UX pass (Dylan-requested batch)

**Note on attribution:** Dylan explicitly asked for a batch session, overriding
the one-change-per-session rule. Per-query position changes can still be
attributed (each page's title change maps to one query cluster), but site-wide
engagement shifts will be confounded with the same-day design refresh.

**Backlog items closed (2, 3, 5, 6 + part of 4):**

- **Hydro Flask (item 2, 628 imp @ 36):** title/H1 → "Is a Hydro Flask
  dishwasher safe?"; FAQs now cover washing, lids, straw lids, older bottles;
  added "Hydroflask" (one-word, how people actually type it) to aliases.
- **Cast iron (item 3, 106 imp @ 36):** title → "Can you put cast iron in the
  dishwasher?" (exact 29-imp query); FAQs: rescue-after-dishwasher, enameled.
- **Non-stick (item 3, 129 imp @ 43):** title → "Can non stick pans go in the
  dishwasher?" (exact 22-imp query); FAQs added.
- **Also retargeted:** Yeti ("Are Yeti cups dishwasher safe?"), crystal ("Can
  crystal go in the dishwasher?" — 17 imp @ 18), baby bottles ("Can you wash
  baby bottles in the dishwasher?" + sterilizing FAQs), mason jars (canning
  jar FAQs). All get updated=2026-06-10.
- **Query mining (item 4):** swept all 637 queries. No big page gaps — the
  tail is covered by material pages. Brand-bottle queries (Medela, Dr.
  Brown's) deferred: need Dylan's call on manufacturer claims.
- **Internal linking (item 5):** site-wide footer nav (Browse + 6 popular
  guides) puts item links on every page; homepage now lists ALL 25 items
  (popular first) instead of 12.
- **Technical sweep (item 6):** verified clean — robots.txt + sitemap link ok,
  39 URLs in sitemap, /can-you/* and 404 correctly excluded, canonicals fine,
  JSON-LD valid by construction. Added missing 404 page.
- **Refactor:** per-item FAQs moved from template conditionals into
  `items.ts` as a `faqs` field.

**UX pass (same session):** client-side instant filter on homepage and
/items/ (matches names + aliases + verdicts, no-results state points to
materials); hero pills replaced with a color-coded verdict legend; card
answers clamped to 3 lines for scannability; branded 404; cross-links from
item hubs to materials.

**Check in next dump:** position movement on the hydro flask cluster (~628
imp, baseline ~36), cast iron (~106 @ 36), nonstick (~129 @ 43), yeti (~228
@ 40), crystal (~98 @ 29), baby bottles (~167 @ 55), mason jars (~156 @ 20).
GA4: do item pages finally get internal pageviews now that the homepage
lists everything and the footer links guides?

**Backlog (new priority order):**

1. Evaluate the 2026-06-10 changes once fresh data lands (~1–2 weeks).
2. Brand baby-bottle pages (Medela, Dr. Brown's) — NEEDS DYLAN INPUT on
   manufacturer-claim policy.
3. Consider a dedicated "sterilizing bottles in the dishwasher" guide page if
   the baby-bottles FAQ doesn't capture that ~20-imp cluster.
4. Watch CWV/LCP after font additions (three Google Fonts families).

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
