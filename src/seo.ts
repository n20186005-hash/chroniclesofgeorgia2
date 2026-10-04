import { defaultLocale, locales } from '@/i18n/config';

export const SITE_URL = 'https://www.chroniclesofgeorgia.com';

export function localizedPath(locale: string, path = '') {
  return locale === defaultLocale ? path || '/' : `/${locale}${path}`;
}

export function canonicalForPath(locale: string, path = '') {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function alternatesForPath(path = '') {
  const languages: Record<string, string> = {};

  locales.forEach((locale) => {
    const key = locale === 'zh-hant' ? 'zh-Hant' : locale === 'zh-cn' ? 'zh-CN' : locale;
    languages[key] = `${SITE_URL}${localizedPath(locale, path)}`;
  });

  languages['x-default'] = `${SITE_URL}${localizedPath(defaultLocale, path)}`;

  return languages;
}
