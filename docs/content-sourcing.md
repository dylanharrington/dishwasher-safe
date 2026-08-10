# Content sourcing notes

This site should stay conservative:

- Prefer “check the manufacturer label/manual” for product-specific answers, and link the current official support/manual source.
- Avoid claiming exact brand guidance unless verified against current manufacturer docs.
- Use broad material rules only when they are stable and common sense: wood and cast iron avoid dishwasher, top rack for heat-sensitive plastic, hand wash delicate crystal and good knives.
- When in doubt, answer “it depends” and explain what changes the answer.

## Required content record

Every item must carry an explicit ISO `updated` date and a provenance entry in `src/data/items.ts`. A provenance entry includes a human-readable label, publisher, and HTTPS URL. The page renders these references and its reviewed-on date; source clicks are recorded as `official_source_click` when GA4 is configured.

Do not bulk-refresh dates. Change `updated` only after reviewing the answer, rack, cycle, drying, caveats, FAQs, and cited source. `npm run validate:content` checks record completeness and `npm run validate:rendered` checks generated HTML and FAQ structured data.

For model families, state only what the cited official manual supports. Provide a model-number/manual lookup path when one brand name covers materially different parts or appliances.
