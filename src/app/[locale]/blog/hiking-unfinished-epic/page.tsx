import VisitorStoryBlogClient from '@/components/VisitorStoryBlogClient';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';

const STORY_INDEX = 1 as const;

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
  return {
    title: `${item.title} | Chronicles of Georgia`,
    description: desc.length >= 155 ? `${desc}…` : desc,
  };
}

export default function HikingUnfinishedEpicBlogPage() {
  return <VisitorStoryBlogClient storyIndex={STORY_INDEX} />;
}
