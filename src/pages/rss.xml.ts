import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/blog';
import { SITE_NAME, SITE_DESCRIPTION } from '../consts';

export const prerender = true;

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();

	return rss({
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		site: context.site ?? 'https://brsjsk.com',
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
	});
}
