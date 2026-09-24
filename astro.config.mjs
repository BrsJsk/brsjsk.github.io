// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	// Fully static: every route is prerendered to HTML at build time and nginx
	// serves dist/ directly — no Node process, no pm2. The contact form posts
	// straight to Web3Forms from the browser, so nothing here needs a server.
	output: 'static',
	integrations: [react(), sitemap()],
	vite: { plugins: [tailwindcss()] },
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
		routing: { prefixDefaultLocale: false },
	},
	markdown: {
		shikiConfig: {
			// Dual themes with defaultColor:false emit --shiki-light / --shiki-dark
			// custom properties per token instead of a baked-in colour; global.css
			// then picks one based on prefers-color-scheme.
			themes: { light: 'github-light', dark: 'github-dark-default' },
			defaultColor: false,
		},
	},
	fonts: [
		{
			provider: fontProviders.fontshare(),
			name: 'Satoshi',
			// Note: this is intentionally NOT "--font-display" — Tailwind's theme
			// token of that name (global.css) wraps this one with fallbacks. Using
			// the same name for both would make the CSS variable self-referential.
			cssVariable: '--font-display-src',
			weights: [400, 500, 700, 900],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
			// Astro's fallback-metrics optimization spins up a local HTTP server
			// during prerender to measure font shapes — some sandboxes (and some
			// locked-down VPS setups) disallow binding a socket at all, which
			// throws EPERM. Disabling it costs a slightly less exact fallback
			// font match before the real webfont loads; nothing else changes.
			optimizedFallbacks: false,
		},
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-body-src',
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
			optimizedFallbacks: false,
		},
	],
});
