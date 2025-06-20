// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeTableScroll from './scripts/rehypeTable';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: 'https://boeliebots.nl',
    integrations: [mdx(), sitemap(), vue()],
    vite: {
      plugins: [tailwindcss()],
    },
    markdown: {
        rehypePlugins: [rehypeTableScroll]
    },
});