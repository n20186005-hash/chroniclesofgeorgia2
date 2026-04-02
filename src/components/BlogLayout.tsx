'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BlogLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  coverImage?: string;
}

export default function BlogLayout({ title, description, children, coverImage }: BlogLayoutProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const t = useTranslations('visitorStoryBlog');

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header */}
      <div className="relative h-96 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            {!pathname.endsWith('/blog') && (
              <Link 
                href={`/${locale}/blog`}
                className="inline-flex items-center text-blue-200 hover:text-white mb-4 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('backToBlog')}
              </Link>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          {children}
        </article>
        
        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href={`/${locale}/blog/architecture`} className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2 group-hover:text-blue-600">Architecture Guide</h4>
                <p className="text-sm text-gray-600">Explore the stunning architecture of the Chronicles of Georgia monument.</p>
              </div>
            </Link>
            <Link href={`/${locale}/blog/travel-tips`} className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2 group-hover:text-blue-600">Travel Tips</h4>
                <p className="text-sm text-gray-600">Essential tips for visiting the monument and surrounding areas.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}