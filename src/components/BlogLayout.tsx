'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import TripAdBanner from './TripAdBanner';
import RecommendedTours from './RecommendedTours';
import { defaultLocale, locales } from '@/i18n/config';

interface BlogLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  coverImage?: string;
}

export default function BlogLayout({ title, description, children, coverImage }: BlogLayoutProps) {
  const pathname = usePathname();
  const firstSegment = pathname.split('/')[1] || '';
  const locale = locales.includes(firstSegment as (typeof locales)[number]) ? firstSegment : defaultLocale;
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const t = useTranslations('visitorStoryBlog');
  const blogPreviewT = useTranslations('blogPreview');
  const layoutT = useTranslations('blogLayout');

  // Default cover image if not provided
  const defaultImage = "https://images.unsplash.com/photo-1543888761-002fdf5eb8d6?q=80&w=2070&auto=format&fit=crop";

  const relatedPosts = [
    {
      href: `${prefix}/blog/best-time-to-visit`,
      title: blogPreviewT('bestTime.title'),
      description: blogPreviewT('bestTime.description'),
    },
    {
      href: `${prefix}/blog/travel-tips`,
      title: blogPreviewT('travelTips.title'),
      description: blogPreviewT('travelTips.description'),
    },
    {
      href: `${prefix}/blog/architecture`,
      title: blogPreviewT('architecture.title'),
      description: blogPreviewT('architecture.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header (Replicating Homepage Hero) */}
      <div className="relative h-[60vh] min-h-[400px] flex flex-col justify-center">
        <Image
          src={coverImage || defaultImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 w-full mt-16">
          <div className="text-white">
            {!pathname.endsWith('/blog') && (
              <Link 
                href={`${prefix}/blog`}
                className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('backToBlog')}
              </Link>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl drop-shadow leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <TripAdBanner id="SB15271426_blog_top" type="tours" />
        
        <article className="prose prose-lg max-w-none my-12">
          {children}
        </article>
        
        <RecommendedTours />
        
        <div className="my-12">
          <TripAdBanner id="SB15271076_blog_bottom" type="hotels" />
        </div>
        
        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-6">{layoutT('relatedArticles')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-2 group-hover:text-blue-600">{post.title}</h4>
                  <p className="text-sm text-gray-600">{post.description}</p>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
