import { useEffect, useId, useRef, useState } from 'react';

interface NavLink {
	label: string;
	href: string;
}

interface Props {
	links: NavLink[];
	ctaLabel: string;
	ctaHref: string;
	openLabel: string;
	closeLabel: string;
}

// The only React on the nav. Its job is focus management for the full-screen
// overlay — trap focus while open, restore it to the trigger on close, lock
// body scroll, close on Escape or link click. See BUILD-PLAN.md Step 6.
export default function MobileMenu({ links, ctaLabel, ctaHref, openLabel, closeLabel }: Props) {
	const [open, setOpen] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const menuId = useId();

	useEffect(() => {
		if (!open) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const panel = panelRef.current;
		const focusable = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
		focusable?.[0]?.focus();

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				setOpen(false);
				return;
			}
			if (e.key !== 'Tab' || !focusable || focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}

		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [open]);

	function close() {
		setOpen(false);
		triggerRef.current?.focus();
	}

	return (
		<div className="lg:hidden">
			<button
				ref={triggerRef}
				type="button"
				className="inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]"
				aria-label={open ? closeLabel : openLabel}
				aria-expanded={open}
				aria-controls={menuId}
				onClick={() => setOpen((v) => !v)}
			>
				<span
					className="block h-[1.5px] w-4 bg-[var(--color-text)] transition-transform duration-200"
					style={open ? { transform: 'translateY(3.25px) rotate(45deg)' } : undefined}
				/>
				<span
					className="block h-[1.5px] w-4 bg-[var(--color-text)] transition-transform duration-200"
					style={open ? { transform: 'translateY(-3.25px) rotate(-45deg)' } : undefined}
				/>
			</button>

			<div
				id={menuId}
				ref={panelRef}
				role="dialog"
				aria-modal="true"
				aria-hidden={!open}
				inert={!open}
				className={[
					'fixed inset-0 z-[60] flex flex-col justify-between bg-[var(--color-base)] p-6 pt-24 transition-[opacity,transform] duration-200 ease-out',
					open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
				].join(' ')}
			>
				<nav aria-label="Mobile">
					<ul className="flex flex-col gap-6">
						{links.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={close}
									className="font-display text-3xl font-medium text-[var(--color-text)]"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<a href={ctaHref} onClick={close} className="btn" data-variant="primary">
					<span className="btn__label">{ctaLabel}</span>
				</a>
			</div>
		</div>
	);
}
