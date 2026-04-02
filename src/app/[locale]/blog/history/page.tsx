import BlogLayout from '@/components/BlogLayout';
import { useTranslations } from 'next-intl';

export default function HistoryBlogPage() {
  const t = useTranslations('blogPages.history');

  return (
    <BlogLayout 
      title={t('title')}
      description={t('description')}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.ancient.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.ancient.content')}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
            <h3 className="font-semibold text-lg mb-2">{t('sections.ancient.highlight.title')}</h3>
            <p className="text-blue-800">{t('sections.ancient.highlight.content')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.medieval.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.medieval.content')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>{t('sections.medieval.points.0')}</li>
            <li>{t('sections.medieval.points.1')}</li>
            <li>{t('sections.medieval.points.2')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.modern.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.modern.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">{t('sections.modern.facts.0.title')}</h4>
              <p className="text-gray-700">{t('sections.modern.facts.0.content')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">{t('sections.modern.facts.1.title')}</h4>
              <p className="text-gray-700">{t('sections.modern.facts.1.content')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.monument.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.monument.content')}
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-lg">
            {t('sections.monument.quote')}
          </blockquote>
        </section>
      </div>
    </BlogLayout>
  );
}