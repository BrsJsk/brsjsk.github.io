import { en } from './en';

export const dictionaries = { en } as const;
export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = 'en';

export function useTranslations(locale: Locale = defaultLocale) {
	return dictionaries[locale];
}
