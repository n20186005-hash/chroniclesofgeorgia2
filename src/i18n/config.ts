export const locales = ['it', 'en', 'fr', 'zh-hant'] as const;
export const defaultLocale = 'it' as const;
export type Locale = (typeof locales)[number];
