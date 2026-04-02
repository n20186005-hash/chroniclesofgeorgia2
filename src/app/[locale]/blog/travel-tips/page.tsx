import BlogLayout from '@/components/BlogLayout';
import { useTranslations } from 'next-intl';

export default function TravelTipsBlogPage() {
  const t = useTranslations('blogPages.travelTips');

  return (
    <BlogLayout 
      title={t('title')}
      description={t('description')}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.planning.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.planning.content')}
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h3 className="font-semibold text-lg mb-2">{t('sections.planning.bestTime.title')}</h3>
            <p className="text-green-800">{t('sections.planning.bestTime.content')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.transportation.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.transportation.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800">{t('sections.transportation.options.0.title')}</h4>
              <p className="text-blue-700">{t('sections.transportation.options.0.content')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-purple-800">{t('sections.transportation.options.1.title')}</h4>
              <p className="text-purple-700">{t('sections.transportation.options.1.content')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.whatToBring.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.whatToBring.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{t('sections.whatToBring.essentials.title')}</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>{t('sections.whatToBring.essentials.items.0')}</li>
                <li>{t('sections.whatToBring.essentials.items.1')}</li>
                <li>{t('sections.whatToBring.essentials.items.2')}</li>
                <li>{t('sections.whatToBring.essentials.items.3')}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{t('sections.whatToBring.optional.title')}</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>{t('sections.whatToBring.optional.items.0')}</li>
                <li>{t('sections.whatToBring.optional.items.1')}</li>
                <li>{t('sections.whatToBring.optional.items.2')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('sections.localTips.title')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('sections.localTips.content')}
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="font-semibold text-lg mb-2">{t('sections.localTips.insider.title')}</h3>
            <p className="text-yellow-800">{t('sections.localTips.insider.content')}</p>
          </div>
          <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-lg">
            {t('sections.localTips.quote')}
          </blockquote>
        </section>
      </div>
    </BlogLayout>
  );
}