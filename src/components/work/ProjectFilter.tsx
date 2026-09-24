import { useEffect, useState } from 'react';

interface Category {
	key: string;
	label: string;
}

interface Props {
	categories: Category[];
	totalCount: number;
}

// Filters cards that are already server-rendered in the DOM — never
// re-renders them from React state. That's what keeps /work fully usable
// and indexable with JavaScript disabled. See BUILD-PLAN.md Step 10.
export default function ProjectFilter({ categories, totalCount }: Props) {
	const [active, setActive] = useState('all');
	const [count, setCount] = useState(totalCount);

	useEffect(() => {
		const cards = document.querySelectorAll<HTMLElement>('[data-project-card]');
		let visible = 0;
		cards.forEach((card) => {
			const matches = active === 'all' || card.dataset.projectCard === active;
			card.hidden = !matches;
			if (matches) visible += 1;
		});
		setCount(visible);
	}, [active]);

	return (
		<div className="project-filter flex flex-wrap items-center justify-between gap-4">
			<div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
				{categories.map((category) => (
					<button
						key={category.key}
						type="button"
						aria-pressed={active === category.key}
						onClick={() => setActive(category.key)}
						className={[
							'rounded-full border px-4 py-2 text-sm transition-colors duration-150',
							active === category.key
								? 'border-[var(--color-accent)] text-[var(--color-text)]'
								: 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
						].join(' ')}
					>
						{category.label}
					</button>
				))}
			</div>
			<p aria-live="polite" className="text-sm text-[var(--color-text-subtle)]">
				{count} project{count === 1 ? '' : 's'}
			</p>
		</div>
	);
}
