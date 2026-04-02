import VisitorStoryBlogClient from '@/components/VisitorStoryBlogClient';
import type { Metadata } from 'next';
import { locales, defaultLocale } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

const STORY_INDEX = 0 as const;
const PAGE_SLUG = 'stereoscopic-history';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = (await import(`../../../../../messages/${locale as Locale}.json`)).default as {
    visitorTestimonials?: { items?: Array<{ title: string; content: string }> };
  };
  const item = messages.visitorTestimonials?.items?.[STORY_INDEX];
  if (!item) {
    return { title: 'Chronicles of Georgia' };
  }
  const desc = item.content.replace(/\s+/g, ' ').trim().slice(0, 155);

  const baseUrl = 'https://www.chroniclesofgeorgia.com';
  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/blog/${PAGE_SLUG}`,
    'en': `${baseUrl}/en/blog/${PAGE_SLUG}`,
    'ru': `${baseUrl}/ru/blog/${PAGE_SLUG}`,
    'zh-Hant': `${baseUrl}/zh-hant/blog/${PAGE_SLUG}`,
    'zh-CN': `${baseUrl}/zh-cn/blog/${PAGE_SLUG}`,
    'x-default': `${baseUrl}/blog/${PAGE_SLUG}`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}/blog/${PAGE_SLUG}` : `${baseUrl}/${locale}/blog/${PAGE_SLUG}`;

  return {
    title: `${item.title} | Chronicles of Georgia`,
    description: desc.length >= 155 ? `${desc}…` : desc,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function StereoscopicHistoryBlogPage() {
  return <VisitorStoryBlogClient storyIndex={STORY_INDEX} />;
}
