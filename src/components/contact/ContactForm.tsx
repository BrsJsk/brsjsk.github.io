import { useId, useState, type FormEvent } from 'react';

interface Labels {
	name: string;
	email: string;
	message: string;
	submit: string;
	submitting: string;
}

interface ErrorMessages {
	nameRequired: string;
	emailInvalid: string;
	messageTooShort: string;
}

interface Props {
	/** Web3Forms public access key. Empty disables submission (see notice below). */
	accessKey: string;
	/** Subject line on the email Web3Forms sends you. */
	subject: string;
	labels: Labels;
	errorMessages: ErrorMessages;
	successTitle: string;
	successReset: string;
	genericError: string;
	notConfigured: string;
	email: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Field = 'name' | 'email' | 'message';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
	'rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors duration-150 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_var(--focus-ring)]';

// Posts straight to Web3Forms from the browser, which is what lets the whole
// site build as static files with no server. Validation still happens here so
// bad input never leaves the page.
export default function ContactForm({
	accessKey,
	subject,
	labels,
	errorMessages,
	successTitle,
	successReset,
	genericError,
	notConfigured,
	email,
}: Props) {
	const [status, setStatus] = useState<Status>('idle');
	const [values, setValues] = useState({ name: '', email: '', message: '' });
	const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
	const formId = useId();

	function fieldError(field: Field): string | null {
		if (field === 'name') return values.name.trim().length >= 2 ? null : errorMessages.nameRequired;
		if (field === 'email') return EMAIL_RE.test(values.email) ? null : errorMessages.emailInvalid;
		return values.message.trim().length >= 20 ? null : errorMessages.messageTooShort;
	}

	const errors: Partial<Record<Field, string | null>> = {
		name: touched.name ? fieldError('name') : null,
		email: touched.email ? fieldError('email') : null,
		message: touched.message ? fieldError('message') : null,
	};

	function handleBlur(field: Field) {
		setTouched((t) => ({ ...t, [field]: true }));
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setTouched({ name: true, email: true, message: true });

		if (fieldError('name') || fieldError('email') || fieldError('message')) return;

		setStatus('submitting');
		const formData = new FormData(e.currentTarget);
		formData.append('access_key', accessKey);
		formData.append('subject', subject);
		formData.append('from_name', 'joskonic.com');
		// Web3Forms uses this to thread replies back to the sender.
		formData.append('replyto', values.email);

		try {
			const res = await fetch(WEB3FORMS_ENDPOINT, {
				method: 'POST',
				body: formData,
			});
			const data = await res.json();
			setStatus(data?.success ? 'success' : 'error');
		} catch {
			setStatus('error');
		}
	}

	if (!accessKey) {
		return (
			<div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<p className="text-sm text-[var(--color-text-muted)]">
					{notConfigured}{' '}
					<a
						href={`mailto:${email}`}
						className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-2"
					>
						{email}
					</a>
				</p>
			</div>
		);
	}

	if (status === 'success') {
		return (
			<div
				role="status"
				className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center"
			>
				<p className="mb-3 text-lg font-medium text-[var(--color-text)]">{successTitle}</p>
				<button
					type="button"
					className="text-sm text-[var(--color-text-muted)] underline decoration-[var(--color-border-strong)] underline-offset-2 hover:text-[var(--color-text)]"
					onClick={() => {
						setValues({ name: '', email: '', message: '' });
						setTouched({});
						setStatus('idle');
					}}
				>
					{successReset}
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<label htmlFor={`${formId}-name`} className="text-sm font-medium text-[var(--color-text)]">
					{labels.name}
				</label>
				<input
					id={`${formId}-name`}
					name="name"
					type="text"
					required
					value={values.name}
					onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
					onBlur={() => handleBlur('name')}
					aria-invalid={!!errors.name}
					aria-describedby={errors.name ? `${formId}-name-error` : undefined}
					className={inputClass}
				/>
				{errors.name && (
					<p id={`${formId}-name-error`} className="text-sm text-[var(--color-danger)]">
						{errors.name}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor={`${formId}-email`} className="text-sm font-medium text-[var(--color-text)]">
					{labels.email}
				</label>
				<input
					id={`${formId}-email`}
					name="email"
					type="email"
					required
					value={values.email}
					onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
					onBlur={() => handleBlur('email')}
					aria-invalid={!!errors.email}
					aria-describedby={errors.email ? `${formId}-email-error` : undefined}
					className={inputClass}
				/>
				{errors.email && (
					<p id={`${formId}-email-error`} className="text-sm text-[var(--color-danger)]">
						{errors.email}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor={`${formId}-message`} className="text-sm font-medium text-[var(--color-text)]">
					{labels.message}
				</label>
				<textarea
					id={`${formId}-message`}
					name="message"
					rows={6}
					required
					value={values.message}
					onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
					onBlur={() => handleBlur('message')}
					aria-invalid={!!errors.message}
					aria-describedby={errors.message ? `${formId}-message-error` : undefined}
					className={inputClass}
				/>
				{errors.message && (
					<p id={`${formId}-message-error`} className="text-sm text-[var(--color-danger)]">
						{errors.message}
					</p>
				)}
			</div>

			{/* Web3Forms' own honeypot: it rejects any submission where this is
			    checked. Real users never see it; bots that fill every field do. */}
			<input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} />

			<button type="submit" className="btn" data-variant="primary" disabled={status === 'submitting'}>
				<span className="btn__label">{status === 'submitting' ? labels.submitting : labels.submit}</span>
			</button>

			<p aria-live="polite" className="text-sm text-[var(--color-danger)]">
				{status === 'error' && (
					<>
						{genericError}{' '}
						<a href={`mailto:${email}`} className="underline">
							{email}
						</a>
					</>
				)}
			</p>
		</form>
	);
}
