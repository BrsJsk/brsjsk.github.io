import type { APIContext } from 'astro';
import { SITE_URL } from '../consts';

export const prerender = true;

export function GET(context: APIContext) {
	const site = context.site ?? new URL(SITE_URL);
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain' },
	});
}
