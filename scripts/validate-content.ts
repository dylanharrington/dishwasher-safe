import { getItemProvenance, items, materials } from '../src/data/items.ts';

const errors: string[] = [];
const requiredText = ['slug', 'name', 'updated', 'verdict', 'shortAnswer', 'placement', 'cycle', 'dry', 'why'] as const;
const slugs = new Set(items.map((item) => item.slug));
const materialSlugs = new Set(materials.map((material) => material.slug));

for (const item of items) {
  for (const field of requiredText) if (typeof item[field] !== 'string' || !item[field].trim()) errors.push(`${item.slug}: ${field} must be non-empty`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.updated) || Number.isNaN(Date.parse(`${item.updated}T00:00:00Z`))) errors.push(`${item.slug}: updated must be a valid ISO date`);
  if (!item.caveats.length) errors.push(`${item.slug}: at least one caveat is required`);
  if (!item.materials.length || item.materials.some((slug) => !materialSlugs.has(slug))) errors.push(`${item.slug}: materials must reference known material slugs`);
  for (const faq of item.faqs ?? []) if (!faq.question.trim() || !faq.answer.trim()) errors.push(`${item.slug}: every FAQ needs a non-empty question and answer`);
  for (const slug of item.relatedSlugs ?? []) if (!slugs.has(slug) || slug === item.slug) errors.push(`${item.slug}: invalid related slug ${slug}`);
  const provenance = getItemProvenance(item);
  if (provenance.reviewedOn !== item.updated) errors.push(`${item.slug}: provenance review date must match updated`);
  if (!provenance.sources.length) errors.push(`${item.slug}: at least one source is required`);
  for (const source of provenance.sources) {
    if (!source.label.trim() || !source.publisher.trim()) errors.push(`${item.slug}: source label and publisher are required`);
    try { if (new URL(source.url).protocol !== 'https:') errors.push(`${item.slug}: source must use HTTPS (${source.url})`); } catch { errors.push(`${item.slug}: invalid source URL (${source.url})`); }
  }
}

if (new Set(items.map((item) => item.slug)).size !== items.length) errors.push('Item slugs must be unique');
if (errors.length) { console.error(`Content validation failed:\n- ${errors.join('\n- ')}`); process.exit(1); }
console.log(`Validated ${items.length} items, required fields, review dates, source provenance, FAQs, and relationships.`);
