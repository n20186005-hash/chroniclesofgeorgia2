import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.piazzapopoloascoli.com';

  // Core routes
  const routes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for all locales and routes
  routes.forEach((route) => {
    locales.forEach((locale) => {
      // Prioritize home pages
      const priority = route === '' ? 1 : 0.8;
      
      // Determine frequency
      const changeFrequency = route === '' ? 'weekly' : 'monthly';
      
      // If it's the default locale, we don't use the prefix because of 'as-needed' setting in middleware
      const urlPath = locale === defaultLocale ? route : `/${locale}${route}`;
      
      sitemapEntries.push({
        url: `${baseUrl}${urlPath}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemapEntries;
}