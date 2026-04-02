'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const STORY_SLUGS = [
  'stereoscopic-history',
  'hiking-unfinished-epic',
  'cultural-echo-caucasus',
  'monument-nostalgia-peace',
] as const;

interface VisitorStoryBlogClientProps {
  storyIndex: 0 | 1 | 2 | 3;
}

export default function VisitorStoryBlogClient({ storyIndex }: VisitorStoryBlogClientProps) {
  const locale = useLocale();
  const prefix = locale === 'ka' ? '' : `/${locale}`;
  const t = useTranslations('visitorTestimonials');
  const ui = useTranslations('visitorStoryBlog');

  const items = t.raw('items') as Array<{
    author: string;
    title: string;
    nationality: string;
    content: string;
  }>;
  const item = items[storyIndex];
  if (!item) {
    return null;
  }
  const paragraphs = item.content.split(/\n\n+/).filter(Boolean);

  const otherIndices = [0, 1, 2, 3].filter((i) => i !== storyIndex) as (0 | 1 | 2 | 3)[];

  return (
    <>
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-end overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/gallery/images (1).jpg')` }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-12 md:pb-16">
          <Link
            href={`${prefix}/#blog-preview`}
            className="inline-flex items-center text-white/85 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {ui('backToBlog')}
          </Link>
          <p className="text-white/80 text-sm font-medium tracking-wide uppercase mb-2">{ui('sectionLabel')}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">{item.title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-white/95 font-medium">@{item.author}</span>
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.95)' }}
            >
              {item.nationality}
            </span>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="p-8 md:p-10 rounded-xl shadow-lg"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed mb-6 last:mb-0"
                style={{ color: 'var(--text-secondary)' }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pb-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {ui('moreStories')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherIndices.map((idx) => {
              const related = items[idx];
              if (!related) return null;
              return (
                <Link
                  key={idx}
                  href={`${prefix}/blog/${STORY_SLUGS[idx]}`}
                  className="group p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-3 group-hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {related.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                    @{related.author} · {related.nationality}
                  </p>
                  <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1">
                    {ui('readStory')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`${prefix}/#visitor-testimonials`}
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {ui('seeOnHome')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
