import { useEffect, useState } from 'react';

const STORAGE_KEY = 'brsjsk.consent';

interface Props {
	gaId: string;
	body: string;
	accept: string;
	reject: string;
	privacyLabel: string;
}

// Consent-gated analytics. Nothing is loaded and no cookie is set until the
// visitor explicitly accepts — which is what GDPR actually requires, as
// opposed to the common "banner that tracks you while you read it" pattern.
// BaseLayout only renders this at all when a GA id is configured.
function loadAnalytics(gaId: string) {
	if (document.getElementById('ga-script')) return;

	const script = document.createElement('script');
	script.id = 'ga-script';
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
	document.head.appendChild(script);

	const w = window as Window & {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	};
	w.dataLayer = w.dataLayer || [];

	function gtag(...args: unknown[]) {
		w.dataLayer?.push(args);
	}

	w.gtag = gtag;
	gtag('js', new Date());
	gtag('config', gaId, { anonymize_ip: true });
}

export default function CookieConsent({ gaId, body, accept, reject, privacyLabel }: Props) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let stored: string | null = null;
		try {
			stored = localStorage.getItem(STORAGE_KEY);
		} catch {
			// Storage can throw in private mode / with cookies blocked. Treat as
			// "no decision yet" but don't crash the page.
		}

		if (stored === 'granted') {
			loadAnalytics(gaId);
			return;
		}
		if (stored === 'denied') return;
		setVisible(true);
	}, [gaId]);

	function decide(granted: boolean) {
		try {
			localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied');
		} catch {
			// Ignore — the banner still closes for this session.
		}
		if (granted) loadAnalytics(gaId);
		setVisible(false);
	}

	if (!visible) return null;

	return (
		<div
			role="dialog"
			aria-label="Cookie consent"
			className="fixed bottom-4 left-4 right-4 z-[70] mx-auto flex max-w-2xl flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-overlay)] sm:flex-row sm:items-center sm:gap-4"
		>
			<p className="flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
				{body}{' '}
				<a
					href="/privacy"
					className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-2"
				>
					{privacyLabel}
				</a>
			</p>
			<div className="flex shrink-0 items-center gap-2">
				<button type="button" onClick={() => decide(false)} className="btn" data-variant="secondary" data-size="sm">
					<span className="btn__label">{reject}</span>
				</button>
				<button type="button" onClick={() => decide(true)} className="btn" data-variant="primary" data-size="sm">
					<span className="btn__label">{accept}</span>
				</button>
			</div>
		</div>
	);
}
