import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n/config';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const messages = await getMessages();
  const meta = (messages as Record<string, Record<string, string>>).meta;

  const baseUrl = 'https://www.chroniclesofgeorgia.com';
  
  // Base alternate languages for the home page (or base path)
  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}`,
    'en': `${baseUrl}/en`,
    'ru': `${baseUrl}/ru`,
    'zh-Hant': `${baseUrl}/zh-hant`,
    'zh-CN': `${baseUrl}/zh-cn`,
    'x-default': `${baseUrl}`,
  };

  const canonicalUrl = locale === defaultLocale ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: meta?.title || 'Chronicles of Georgia - საქართველოს მატიანე',
    description: meta?.description || 'Independent tourism guide to the Chronicles of Georgia monument.',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    other: {
      'google-adsense-account': 'ca-pub-9279583389810634',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale === 'zh-hant' ? 'zh-Hant' : locale === 'zh-cn' ? 'zh-CN' : locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}