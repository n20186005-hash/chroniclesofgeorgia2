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

  const blogCategories = [
    {
      id: 'history',
      icon: '📜',
      title: t('history.title'),
      description: t('history.description'),
      link: `${prefix}/blog/history`,
      gradient: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-800',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:text-blue-600',
      linkColor: 'text-blue-600',
      linkHoverColor: 'text-blue-700'
    },
    {
      id: 'architecture', 
      icon: '🏛️',
      title: t('architecture.title'),
      description: t('architecture.description'),
      link: `${prefix}/blog/architecture`,
      gradient: 'from-purple-100 to-purple-200',
      textColor: 'text-purple-800',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:text-purple-600',
      linkColor: 'text-purple-600',
      linkHoverColor: 'text-purple-700'
    },
    {
      id: 'travel-tips',
      icon: '🎒',
      title: t('travelTips.title'), 
      description: t('travelTips.description'),
      link: `${prefix}/blog/travel-tips`,
      gradient: 'from-green-100 to-green-200',
      textColor: 'text-green-800',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:text-green-600',
      linkColor: 'text-green-600',
      linkHoverColor: 'text-green-700'
    },
    {
      id: 'photography',
      icon: '📸',
      title: t('photography.title'),
      description: t('photography.description'), 
      link: `${prefix}/blog/photography`,
      gradient: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-800',
      bgColor: 'bg-orange-600',
      hoverColor: 'hover:text-orange-600',
      linkColor: 'text-orange-600',
      linkHoverColor: 'text-orange-700'
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
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-32 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-2 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-xl">{category.icon}</span>
                    </div>
                    <span className={`${category.textColor} font-medium`}>{category.title}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`font-semibold mb-2 ${category.hoverColor} transition-colors`}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {category.description}
                  </p>
                  <div className={`flex items-center ${category.linkColor} group-hover:${category.linkHoverColor} transition-colors`}>
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