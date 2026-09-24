// Every user-facing string on the site lives here. No hardcoded English in
// .astro or .tsx files — see BUILD-PLAN.md Step 7. Content-collection body
// text (project case studies, blog posts) is exempt; that's content, not UI copy.
export const en = {
	nav: {
		work: 'Work',
		about: 'About',
		contact: 'Contact',
		cta: "Let's talk",
		menuOpen: 'Open menu',
		menuClose: 'Close menu',
	},
	hero: {
		role: 'Software Engineer',
		// This is the page's h1 — the hero leads with it instead of a separate
		// invented headline.
		// TODO(owner): bump the years figure as time passes, or swap for a
		// start year if you'd rather not maintain it by hand.
		statement:
			"I'm a frontend-focused software engineer with over 7 years of experience building scalable and user-friendly web applications.",
		ctaPrimary: 'Get in touch',
		ctaSecondary: 'See the work',
	},
	services: {
		title: 'Three things, done properly.',
		items: [
			{
				title: 'Marketing sites',
				description: 'Fast, conversion-focused sites. Designed, built, and deployed.',
			},
			{
				title: 'Web apps',
				description: 'Dashboards, portals, and internal tools.',
			},
			{
				title: 'Mobile apps',
				description: 'Cross-platform iOS and Android.',
			},
		],
	},
	work: {
		title: 'Recent projects.',
		seeAll: 'See all work',
		indexTitle: "Things I've built.",
		indexLead: 'Five projects, three disciplines.',
		filters: {
			all: 'All',
			website: 'Websites',
			'web-app': 'Web apps',
			'mobile-app': 'Mobile apps',
		},
		backToWork: 'Back to work',
		visitSite: 'Visit site',
		nextProject: 'Next project',
		client: 'Client',
		year: 'Year',
		role: 'Role',
		stack: 'Stack',
	},
	inHouse: {
		label: 'In-house product',
		title: 'Built in-house.',
		viewProject: 'View project',
	},
	process: {
		title: 'Four steps, no surprises.',
		steps: [
			{ title: 'Scope', description: 'A call, then a fixed price and a date.' },
			{ title: 'Design', description: 'Real screens before anything is built.' },
			{ title: 'Build', description: 'Weekly builds you can click.' },
			{ title: 'Ship', description: 'Deployed, measured, handed over.' },
		],
	},
	about: {
		statement: "I'm Boris — I design, build, and ship the whole thing myself.",
		cta: 'Work with me',
	},
	blog: {
		title: 'Notes on building for the web.',
		teaserTitle: 'Writing',
		readBlog: 'Read the blog',
		emptyTitle: 'Writing soon.',
		emptyLead: 'Notes on performance, Astro, and shipping fast.',
		emptyCta: 'See the work instead',
		backToWriting: 'All writing',
	},
	ctaBand: {
		title: 'Have something to build?',
		lead: 'Tell me about it. I reply within one business day.',
		cta: 'Start a project',
	},
	contact: {
		title: "Let's talk.",
		lead: "Tell me what you're building and I'll come back with a plan, a price, and a date.",
		responseTime: 'I reply within one business day.',
		formName: 'Your name',
		formEmail: 'Email',
		formMessage: 'What are you building?',
		formSubmit: 'Send message',
		formSubmitting: 'Sending…',
		formSubject: 'New enquiry from brsjsk.com',
		formSuccessTitle: "Thanks — I'll reply within one business day.",
		formSuccessReset: 'Send another',
		formError: 'Something went wrong. Try again, or email me directly instead.',
		formNotConfigured: 'The contact form isn’t live yet. In the meantime, email me directly:',
		errors: {
			nameRequired: 'Please enter your name.',
			emailInvalid: 'Please enter a valid email address.',
			messageTooShort: 'Tell me a little more — at least 20 characters.',
		},
	},
	footer: {
		privacy: 'Privacy',
	},
	consent: {
		body: 'This site uses analytics cookies to understand how visitors use it.',
		accept: 'Accept',
		reject: 'Reject',
		privacy: 'Privacy policy',
	},
	privacy: {
		title: 'Privacy policy',
	},
	notFound: {
		title: 'Page not found.',
		lead: "That link doesn't go anywhere. These do.",
		home: 'Go home',
		work: 'See the work',
	},
} as const;

export type Dictionary = typeof en;
