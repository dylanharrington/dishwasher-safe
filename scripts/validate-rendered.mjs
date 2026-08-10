import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve('dist/items');
const slugs = (await readdir(root, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
const errors = [];
for (const slug of slugs) {
  const html = await readFile(resolve(root, slug, 'index.html'), 'utf8');
  if (/\b(?:undefined|null)\b/i.test(html)) errors.push(`${slug}: rendered undefined/null token`);
  if (/<p class="answer-text">\s*<\/p>/.test(html)) errors.push(`${slug}: empty primary answer`);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) errors.push(`${slug}: missing JSON-LD`);
  for (const [, raw] of blocks) {
    let data;
    try { data = JSON.parse(raw); } catch { errors.push(`${slug}: invalid JSON-LD`); continue; }
    const nodes = Array.isArray(data) ? data : [data];
    for (const node of nodes.filter((entry) => entry?.['@type'] === 'FAQPage')) {
      for (const question of node.mainEntity ?? []) if (!question?.acceptedAnswer?.text?.trim()) errors.push(`${slug}: FAQ answer has no text`);
    }
  }
  if (!html.includes('Sources and review') || !html.includes('Content reviewed')) errors.push(`${slug}: missing rendered provenance`);
}
if (errors.length) { console.error(`Rendered validation failed:\n- ${errors.join('\n- ')}`); process.exit(1); }
console.log(`Validated ${slugs.length} rendered item pages for critical content and structured-data defects.`);
