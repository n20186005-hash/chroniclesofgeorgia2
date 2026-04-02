export const locales = ['ka', 'en', 'ru', 'zh-hant', 'zh-cn'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];