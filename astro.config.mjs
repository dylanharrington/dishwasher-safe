import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://dishwasher-safe.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
});
