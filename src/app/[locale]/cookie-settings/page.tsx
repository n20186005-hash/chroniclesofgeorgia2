import { useLocale } from 'next-intl';
import { CookieSettingsClient } from './client';
import { alternatesForPath, canonicalForPath } from '@/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const path = '/cookie-settings';

  return {
    title: 'Cookie Settings - Chronicles of Georgia',
    alternates: {
      canonical: canonicalForPath(locale, path),
      languages: alternatesForPath(path),
    },
  };
}

export default function CookieSettingsPage() {
  const locale = useLocale();

  // Client-side component for state management
  return <CookieSettingsClient locale={locale} />;
}
