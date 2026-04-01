import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed' // Only adds prefix when it's not the default locale
});

export const config = {
  // Skip all paths that should not be internationalized.
  // This avoids redirect loops for static files like robots.txt and sitemap.xml
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
