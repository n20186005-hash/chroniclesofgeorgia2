import BlogLayout from '@/components/BlogLayout';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales, defaultLocale } from '@/i18n/config';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blogPages.architecture' });
  const baseUrl = 'https://www.chroniclesofgeorgia.com';
  
  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/blog/architecture`,
    'en': `${baseUrl}/en/blog/architecture`,
    'ru': `${baseUrl}/ru/blog/architecture`,
    'zh-Hant': `${baseUrl}/zh-hant/blog/architecture`,
    'zh-CN': `${baseUrl}/zh-cn/blog/architecture`,
    'x-default': `${baseUrl}/blog/architecture`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}/blog/architecture` : `${baseUrl}/${locale}/blog/architecture`;

  return {
    title: `${t('title')} | Chronicles of Georgia`,
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function ArchitectureBlogPage() {
  const t = useTranslations('blogPages.architecture');

  return (
    <BlogLayout 
      title={t('title')}
      description={t('description')}
      coverImage="https://images.unsplash.com/photo-1555580289-417101886f78?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.design.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.design.content')}
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6">
            <h3 className="font-semibold text-lg mb-2">{t('sections.design.highlight.title')}</h3>
            <p className="text-purple-800">{t('sections.design.highlight.content')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.structure.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.structure.content')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">16</span>
              </div>
              <h4 className="font-semibold mb-2">{t('sections.structure.columns.title')}</h4>
              <p className="text-gray-700 text-sm">{t('sections.structure.columns.content')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-2xl font-bold">35m</span>
              </div>
              <h4 className="font-semibold mb-2">{t('sections.structure.height.title')}</h4>
              <p className="text-gray-700 text-sm">{t('sections.structure.height.content')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-2xl font-bold">∞</span>
              </div>
              <h4 className="font-semibold mb-2">{t('sections.structure.details.title')}</h4>
              <p className="text-gray-700 text-sm">{t('sections.structure.details.content')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.materials.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.materials.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{t('sections.materials.bronze.title')}</h4>
              <p className="text-gray-700">{t('sections.materials.bronze.content')}</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{t('sections.materials.craftsmanship.title')}</h4>
              <p className="text-gray-700">{t('sections.materials.craftsmanship.content')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.symbolism.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.symbolism.content')}
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-lg">
            {t('sections.symbolism.quote')}
          </blockquote>
        </section>
      </div>
    </BlogLayout>
  );
}