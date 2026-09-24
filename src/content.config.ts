import { defineCollection, z, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// Optional on purpose: the migrated projects only had a title, image and
			// URL. Anything not actually known is left unset rather than invented,
			// and every component renders fine without it.
			client: z.string().optional(),
			summary: z.string().optional(),
			year: z.number().optional(),
			category: z.enum(['website', 'web-app', 'mobile-app']),
			role: z.array(z.string()).default([]),
			stack: z.array(z.string()).default([]),
			cover: image(),
			gallery: z.array(image()).default([]),
			videoUrl: z.url().optional(),
			liveUrl: z.url().optional(),
			metrics: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
			testimonial: reference('testimonials').optional(),
			featured: z.boolean().default(false),
			/** Own product rather than client work — surfaced by InHouse.astro. */
			inHouse: z.boolean().default(false),
			order: z.number().default(0),
		}),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			cover: image().optional(),
			draft: z.boolean().default(false),
		}),
});

const testimonials = defineCollection({
	loader: file('./src/data/testimonials.json'),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		role: z.string(),
		company: z.string(),
		quote: z.string(),
		avatar: z.string().optional(),
	}),
});

export const collections = { projects, blog, testimonials };
