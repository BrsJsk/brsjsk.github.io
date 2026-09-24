import { getCollection } from 'astro:content';

// Gates the Blog link in Nav and Footer. Both call this so there's exactly
// one place that decides whether the blog is "launched" — see BUILD-PLAN.md
// Step 12. Drafts don't count, and drafts are also excluded from prod builds
// via `import.meta.env.PROD` wherever posts are listed.
export async function hasPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.length > 0;
}

// Drafts are visible in dev (so they can be previewed) but excluded from
// production builds and feeds.
export async function getPublishedPosts() {
	const showDrafts = !import.meta.env.PROD;
	const posts = await getCollection('blog', ({ data }) => showDrafts || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(body: string) {
	return Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));
}

const dateFormatter = new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', year: 'numeric' });

export function formatDate(date: Date) {
	return dateFormatter.format(date);
}
