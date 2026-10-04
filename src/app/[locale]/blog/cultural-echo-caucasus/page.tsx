import VisitorStoryBlogClient from '@/components/VisitorStoryBlogClient';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { alternatesForPath, canonicalForPath } from '@/seo';

const STORY_INDEX = 2 as const;
const PAGE_SLUG = 'cultural-echo-caucasus';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale as Locale}.json`)).default as {
    visitorTestimonials?: { items?: Array<{ title: string; content: string }> };
  };
  const item = messages.visitorTestimonials?.items?.[STORY_INDEX];
  if (!item) {
    return { title: 'Chronicles of Georgia' };
  }
  const desc = item.content.replace(/\s+/g, ' ').trim().slice(0, 155);

  return {
    title: `${item.title} | Chronicles of Georgia`,
    description: desc.length >= 155 ? `${desc}…` : desc,
    alternates: {
      canonical: canonicalForPath(locale, `/blog/${PAGE_SLUG}`),
      languages: alternatesForPath(`/blog/${PAGE_SLUG}`),
    },
  };
}

export default function CulturalEchoCaucasusBlogPage() {
  return <VisitorStoryBlogClient storyIndex={STORY_INDEX} />;
}
