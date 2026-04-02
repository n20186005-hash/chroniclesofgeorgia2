'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export default function BlogPreview() {
  const t = useTranslations('blogPreview');
  const visitorT = useTranslations('visitorTestimonials');
  const locale = useLocale();
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

        {/* Featured Visitor Stories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {visitorItems.slice(0, 2).map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{item.author}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.nationality}</p>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-700 line-clamp-3 mb-4">
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
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>5/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogCategories.map((category) => (
            <Link key={category.id} href={category.link} className="group">
              <div 
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                  <h3 className="font-semibold mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {category.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
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
        </div>

        <div className="text-center">
          <Link 
            href={`${prefix}/blog`}
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