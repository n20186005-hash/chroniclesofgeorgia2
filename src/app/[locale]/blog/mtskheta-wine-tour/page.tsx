import BlogLayout from '@/components/BlogLayout';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { alternatesForPath, canonicalForPath } from '@/seo';

const PAGE_SLUG = 'mtskheta-wine-tour';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogPages.mtskhetaWineTour' });

  return {
    title: `${t('title')} | Chronicles of Georgia`,
    description: t('description'),
    alternates: {
      canonical: canonicalForPath(locale, `/blog/${PAGE_SLUG}`),
      languages: alternatesForPath(`/blog/${PAGE_SLUG}`),
    },
  };
}

export default async function MtskhetaWineTourPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogPages.mtskhetaWineTour' });
  const affiliateT = await getTranslations({ locale, namespace: 'affiliate' });

  const cleanMarkdown = (text: string) => text.replace(/\*\*/g, '');

  return (
    <BlogLayout 
      title={t('title')}
      description={t('description')}
      coverImage="https://images.unsplash.com/photo-1596484552993-80b671a81f3b?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="space-y-8">
        <div className="flex items-center text-sm text-gray-500 mb-8 border-b pb-4">
          <span className="font-medium mr-4">✍️ {t('author')}</span>
          <span>📅 {t('date')}</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-8 whitespace-pre-line">
            {cleanMarkdown(t('intro'))}
          </p>

          <div className="space-y-10 mt-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.departure.title')}</h2>
              <p className="whitespace-pre-line">{cleanMarkdown(t('sections.departure.content'))}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.bazaar.title')}</h2>
              <p className="whitespace-pre-line">{cleanMarkdown(t('sections.bazaar.content'))}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.holy.title')}</h2>
              <p className="whitespace-pre-line">{cleanMarkdown(t('sections.holy.content'))}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.monument.title')}</h2>
              <p className="whitespace-pre-line">{cleanMarkdown(t('sections.monument.content'))}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.wine.title')}</h2>
              <p className="whitespace-pre-line">{cleanMarkdown(t('sections.wine.content'))}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.return.title')}</h2>
              <p className="whitespace-pre-line">{cleanMarkdown(t('sections.return.content'))}</p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-900">{t('sections.tips.title')}</h3>
              <ul className="space-y-3 mb-6">
                {(t.raw('sections.tips.items') as string[]).map((item: string, index: number) => {
                  return (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{cleanMarkdown(item)}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="whitespace-pre-line italic text-gray-700">
                {cleanMarkdown(t('sections.tips.conclusion'))}
              </p>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 italic text-center">
              * {affiliateT('disclosure')}
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
