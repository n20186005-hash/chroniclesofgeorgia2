import BlogLayout from '@/components/BlogLayout';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales, defaultLocale } from '@/i18n/config';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blogPages.photography' });
  const baseUrl = 'https://www.chroniclesofgeorgia.com';
  
  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/blog/photography`,
    'en': `${baseUrl}/en/blog/photography`,
    'ru': `${baseUrl}/ru/blog/photography`,
    'zh-Hant': `${baseUrl}/zh-hant/blog/photography`,
    'zh-CN': `${baseUrl}/zh-cn/blog/photography`,
    'x-default': `${baseUrl}/blog/photography`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}/blog/photography` : `${baseUrl}/${locale}/blog/photography`;

  return {
    title: `${t('title')} | Chronicles of Georgia`,
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function PhotographyBlogPage() {
  const t = useTranslations('blogPages.photography');

  return (
    <BlogLayout 
      title={t('title')}
      description={t('description')}
      coverImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.bestSpots.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.bestSpots.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800">{t('sections.bestSpots.locations.0.title')}</h4>
              <p className="text-blue-700">{t('sections.bestSpots.locations.0.content')}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-green-800">{t('sections.bestSpots.locations.1.title')}</h4>
              <p className="text-green-700">{t('sections.bestSpots.locations.1.content')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.lighting.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.lighting.content')}
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="font-semibold text-lg mb-2">{t('sections.lighting.goldenHour.title')}</h3>
            <p className="text-yellow-800">{t('sections.lighting.goldenHour.content')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.composition.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.composition.content')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-2xl">📐</span>
              </div>
              <h4 className="font-semibold mb-2">{t('sections.composition.techniques.0.title')}</h4>
              <p className="text-purple-700 text-sm">{t('sections.composition.techniques.0.content')}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">{t('sections.composition.techniques.1.title')}</h4>
              <p className="text-orange-700 text-sm">{t('sections.composition.techniques.1.content')}</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-2xl">🌄</span>
              </div>
              <h4 className="font-semibold mb-2">{t('sections.composition.techniques.2.title')}</h4>
              <p className="text-teal-700 text-sm">{t('sections.composition.techniques.2.content')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.equipment.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.equipment.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{t('sections.equipment.essential.title')}</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>{t('sections.equipment.essential.items.0')}</li>
                <li>{t('sections.equipment.essential.items.1')}</li>
                <li>{t('sections.equipment.essential.items.2')}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{t('sections.equipment.optional.title')}</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>{t('sections.equipment.optional.items.0')}</li>
                <li>{t('sections.equipment.optional.items.1')}</li>
                <li>{t('sections.equipment.optional.items.2')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.postProcessing.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.postProcessing.content')}
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-lg">
            {t('sections.postProcessing.quote')}
          </blockquote>
        </section>
      </div>
    </BlogLayout>
  );
}