import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// The whole motion system for the site — three primitives only. See
// BUILD-PLAN.md §1.6. If a section needs motion that isn't one of these
// three, the answer is that it doesn't need motion.
export function initMotion() {
	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduced) {
		document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
			el.style.opacity = '1';
			el.style.transform = 'none';
		});
		document.querySelectorAll<HTMLElement>('[data-reveal-stagger], [data-reveal-load]').forEach((container) => {
			Array.from(container.children).forEach((child) => {
				(child as HTMLElement).style.opacity = '1';
				(child as HTMLElement).style.transform = 'none';
			});
		});
		return;
	}

	gsap.registerPlugin(ScrollTrigger);

	// P1 — single element reveal on viewport entry, once.
	document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
		const delay = parseFloat(el.dataset.revealDelay ?? '0');
		gsap.fromTo(
			el,
			{ opacity: 0, y: 8 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay,
				ease: 'power2.out',
				scrollTrigger: { trigger: el, start: 'top 85%', once: true },
			},
		);
	});

	// P2 — container reveals its direct children with a 60ms stagger, once.
	document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((container) => {
		const children = Array.from(container.children) as HTMLElement[];
		if (!children.length) return;
		gsap.fromTo(
			children,
			{ opacity: 0, y: 8 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power2.out',
				stagger: 0.06,
				scrollTrigger: { trigger: container, start: 'top 85%', once: true },
			},
		);
	});

	// P3 — hero load stagger. Fires immediately, no ScrollTrigger.
	document.querySelectorAll<HTMLElement>('[data-reveal-load]').forEach((container) => {
		const children = Array.from(container.children) as HTMLElement[];
		if (!children.length) return;
		gsap.fromTo(
			children,
			{ opacity: 0, y: 8 },
			{ opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08 },
		);
	});

	document.fonts?.ready?.then(() => ScrollTrigger.refresh());
}
