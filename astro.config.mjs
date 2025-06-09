// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeTableScroll from './scripts/rehypeTable';

// https://astro.build/config
export default defineConfig({
	site: 'https://boeliebots.nl',
	integrations: [mdx(), sitemap()],
	vite: {
	  plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [rehypeTableScroll]
	},
});
