import BlogLayout from '@/components/BlogLayout';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { locales, defaultLocale } from '@/i18n/config';
import type { Metadata } from 'next';
import TripAdBanner from '@/components/TripAdBanner';
import RecommendedTours from '@/components/RecommendedTours';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blogPreview' });
  const baseUrl = 'https://www.chroniclesofgeorgia.com';
  
  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/blog`,
    'en': `${baseUrl}/en/blog`,
    'ru': `${baseUrl}/ru/blog`,
    'zh-Hant': `${baseUrl}/zh-hant/blog`,
    'zh-CN': `${baseUrl}/zh-cn/blog`,
    'x-default': `${baseUrl}/blog`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`;

  return {
    title: `${t('title')} | Chronicles of Georgia`,
    description: t('subtitle'),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default async function BlogIndexPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'blogPreview' });
  const visitorT = await getTranslations({ locale, namespace: 'visitorTestimonials' });
  const prefix = locale === defaultLocale ? '' : `/${locale}`;

  const visitorItems = visitorT.raw('items') as Array<{
    author: string;
    title: string;
    nationality: string;
    content: string;
  }>;

  const blogCategories = [
    {
      id: 'history',
      icon: '📜',
      title: t('history.title'),
      description: t('history.description'),
      link: `${prefix}/blog/history`,
      themeVar: 'var(--blog-history-color)'
    },
    {
      id: 'architecture', 
      icon: '🏛️',
      title: t('architecture.title'),
      description: t('architecture.description'),
      link: `${prefix}/blog/architecture`,
      themeVar: 'var(--blog-architecture-color)'
    },
    {
      id: 'travel-tips',
      icon: '🎒',
      title: t('travelTips.title'), 
      description: t('travelTips.description'),
      link: `${prefix}/blog/travel-tips`,
      themeVar: 'var(--blog-travel-color)'
    },
    {
      id: 'photography',
      icon: '📸',
      title: t('photography.title'),
      description: t('photography.description'), 
      link: `${prefix}/blog/photography`,
      themeVar: 'var(--blog-photography-color)'
    }
  ];

  const travelStories = [
    {
      id: 'mtskheta-wine-tour',
      icon: '🍷',
      title: t('mtskhetaWineTour.title'),
      titleShort: t('mtskhetaWineTour.titleShort', { default: 'Wine Tour' }),
      description: t('mtskhetaWineTour.description'),
      link: `${prefix}/blog/mtskheta-wine-tour`,
      themeVar: '#9333ea' // Purple-600
    },
    {
      id: 'tbilisi-sighnaghi-4-days',
      icon: '🏰',
      title: t('tbilisiSighnaghi4Days.title'),
      titleShort: t('tbilisiSighnaghi4Days.titleShort', { default: '4 Days Tour' }),
      description: t('tbilisiSighnaghi4Days.description'),
      link: `${prefix}/blog/tbilisi-sighnaghi-4-days`,
      themeVar: '#e11d48' // Rose-600
    }
  ];

  const visitorStoryLinks = [
    `${prefix}/blog/stereoscopic-history`,
    `${prefix}/blog/hiking-unfinished-epic`,
    `${prefix}/blog/cultural-echo-caucasus`,
    `${prefix}/blog/monument-nostalgia-peace`
  ];

  return (
    <BlogLayout 
      title={t('title')}
      description={t('subtitle')}
      coverImage="https://images.unsplash.com/photo-1543888761-002fdf5eb8d6?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="space-y-12">
        {/* Guide Blogs */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guide categories mapping */}
            {blogCategories.map((category) => (
              <Link key={category.id} href={category.link} className="group">
                <div 
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <div 
                    className="h-32 flex items-center justify-center transition-colors duration-300 border-b"
                    style={{ backgroundColor: 'var(--blog-header-bg)', borderColor: 'var(--border-color)' }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                        {category.icon}
                      </div>
                      <span className="font-medium transition-colors duration-300" style={{ color: category.themeVar }}>
                        {category.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 transition-colors line-clamp-1" style={{ color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                    <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                      {category.description}
                    </p>
                    <div className="flex items-center transition-colors" style={{ color: category.themeVar }}>
                      <span className="text-sm font-medium">{t('readMore')}</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Additional Travel Stories mapping */}
            {travelStories.map((story) => (
              <Link key={story.id} href={story.link} className="group">
                <div 
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <div 
                    className="h-32 flex items-center justify-center transition-colors duration-300 border-b"
                    style={{ backgroundColor: 'var(--blog-header-bg)', borderColor: 'var(--border-color)' }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                        {story.icon}
                      </div>
                      <span className="font-medium transition-colors duration-300" style={{ color: story.themeVar }}>
                        {story.titleShort}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 transition-colors line-clamp-1" style={{ color: 'var(--text-primary)' }}>
                      {story.title}
                    </h3>
                    <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                      {story.description}
                    </p>
                    <div className="flex items-center transition-colors" style={{ color: story.themeVar }}>
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
        </section>

        <TripAdBanner id="SB15266995_blog_index_mid" type="home" />

        {/* Visitor Stories */}
        <section>
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            {visitorT('title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {visitorItems.map((item, index) => (
              <Link key={index} href={visitorStoryLinks[index] || '#'} className="group block">
                <div 
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg transition-colors group-hover:text-blue-600" style={{ color: 'var(--text-primary)' }}>
                          {item.author}
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.nationality}</p>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600" style={{ color: 'var(--text-primary)' }}>
                      {item.title}
                    </h4>
                    <p className="line-clamp-3 mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {item.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="text-sm font-medium">{t('readMore')}</span>
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <RecommendedTours />
      </div>
    </BlogLayout>
  );
}
