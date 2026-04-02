'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BlogPreview() {
  const t = useTranslations('blogPreview');
  const visitorT = useTranslations('visitorTestimonials');
  const locale = useLocale();
  const prefix = locale === 'ka' ? '' : `/${locale}`;

  const visitorItems = visitorT.raw('items') as Array<{
    author: string;
    title: string;
    nationality: string;
    content: string;
  }>;

  const excerptFrom = (content: string, maxLen = 120) => {
    const firstParagraph = content.split(/\n\s*\n/)[0]?.trim() || '';
    const text = firstParagraph.length ? firstParagraph : content.trim();
    return text.length > maxLen ? `${text.slice(0, maxLen)}…` : text;
  };

  const blogPosts = [
    {
      id: 'history',
      title: t('history.title'),
      description: t('history.description'),
      link: `${prefix}/blog/history`,
    },
    {
      id: 'architecture',
      title: t('architecture.title'),
      description: t('architecture.description'),
      link: `${prefix}/blog/architecture`,
    },
    {
      id: 'travel-tips',
      title: t('travelTips.title'),
      description: t('travelTips.description'),
      link: `${prefix}/blog/travel-tips`,
    },
    {
      id: 'photography',
      title: t('photography.title'),
      description: t('photography.description'),
      link: `${prefix}/blog/photography`,
    },
    {
      id: 'story-xiaotao',
      title: visitorItems?.[0]?.title || t('storyXiaotao.title'),
      description:
        visitorItems?.[0]?.content ? excerptFrom(visitorItems[0].content) : t('storyXiaotao.description'),
      link: `${prefix}/blog/stereoscopic-history`,
    },
    {
      id: 'story-jack',
      title: visitorItems?.[1]?.title || t('storyJack.title'),
      description:
        visitorItems?.[1]?.content ? excerptFrom(visitorItems[1].content) : t('storyJack.description'),
      link: `${prefix}/blog/hiking-unfinished-epic`,
    },
    {
      id: 'story-lina',
      title: visitorItems?.[2]?.title || t('storyLina.title'),
      description:
        visitorItems?.[2]?.content ? excerptFrom(visitorItems[2].content) : t('storyLina.description'),
      link: `${prefix}/blog/cultural-echo-caucasus`,
    },
    {
      id: 'story-katya',
      title: visitorItems?.[3]?.title || t('storyKatya.title'),
      description:
        visitorItems?.[3]?.content ? excerptFrom(visitorItems[3].content) : t('storyKatya.description'),
      link: `${prefix}/blog/monument-nostalgia-peace`,
    },
  ];

  return (
    <section id="blog-preview" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.link} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{post.id}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">{t('readMore')}</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`${prefix}/#blog-preview`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('viewAll')}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
