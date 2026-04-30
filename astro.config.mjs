import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://isdishwashersafe.com';

export default defineConfig({
  site,
  integrations: [sitemap({
    filter: (page) => !new URL(page).pathname.startsWith('/can-you/') || new URL(page).pathname === '/can-you/',
  })],
});
