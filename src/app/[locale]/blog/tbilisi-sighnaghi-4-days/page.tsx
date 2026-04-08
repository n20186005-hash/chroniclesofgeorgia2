import BlogLayout from '@/components/BlogLayout';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales, defaultLocale } from '@/i18n/config';
import type { Metadata } from 'next';

const PAGE_SLUG = 'tbilisi-sighnaghi-4-days';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blogPages.tbilisiSighnaghi4Days' });
  const baseUrl = 'https://www.chroniclesofgeorgia.com';
  
  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/blog/${PAGE_SLUG}`,
    'en': `${baseUrl}/en/blog/${PAGE_SLUG}`,
    'ru': `${baseUrl}/ru/blog/${PAGE_SLUG}`,
    'zh-Hant': `${baseUrl}/zh-hant/blog/${PAGE_SLUG}`,
    'zh-CN': `${baseUrl}/zh-cn/blog/${PAGE_SLUG}`,
    'x-default': `${baseUrl}/blog/${PAGE_SLUG}`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}/blog/${PAGE_SLUG}` : `${baseUrl}/${locale}/blog/${PAGE_SLUG}`;

  return {
    title: `${t('title')} | Chronicles of Georgia`,
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function TbilisiSighnaghi4DaysPage() {
  const t = useTranslations('blogPages.tbilisiSighnaghi4Days');

  return (
    <BlogLayout 
      title={t('title')}
      description={t('description')}
      coverImage="https://images.unsplash.com/photo-1568864455826-66380633b49d?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="space-y-8">
        <div className="flex items-center text-sm text-gray-500 mb-8 border-b pb-4">
          <span className="font-medium mr-4">✍️ {t('author')}</span>
          <span>📅 {t('date')}</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-8 whitespace-pre-line">
            {t('intro')}
          </p>

          <div className="space-y-10 mt-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.day1.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.day1.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.day2.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.day2.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.day3.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.day3.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{t('sections.day4.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.day4.content')}</p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-900">{t('sections.tips.title')}</h3>
              <p className="whitespace-pre-line italic text-gray-700">
                {t('sections.tips.conclusion')}
              </p>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 italic text-center">
              * 本站部分連結為 Trip.com 聯盟連結，點擊預訂的價格與官方完全一致，不會對您產生任何額外費用，您的支持將能讓我們持續更新更多實用的旅行攻略。
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
