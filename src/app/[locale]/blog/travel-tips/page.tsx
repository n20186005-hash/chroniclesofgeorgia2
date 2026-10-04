import BlogLayout from '@/components/BlogLayout';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { defaultLocale } from '@/i18n/config';
import Link from 'next/link';
import { alternatesForPath, canonicalForPath } from '@/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogPages.travelTips' });

  return {
    title: `${t('title')} | Chronicles of Georgia`,
    description: t('description'),
    alternates: {
      canonical: canonicalForPath(locale, '/blog/travel-tips'),
      languages: alternatesForPath('/blog/travel-tips'),
    },
  };
}

export default async function TravelTipsBlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogPages.travelTips' });
  const prefix = locale === defaultLocale ? '' : `/${locale}`;

  if (locale !== 'en') {
    return (
      <BlogLayout
        title={t('title')}
        description={t('description')}
        coverImage="https://images.unsplash.com/photo-1543888761-002fdf5eb8d6?q=80&w=2070&auto=format&fit=crop"
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

  return (
    <BlogLayout 
      title={t('title')}
      description={t('description')}
      coverImage="https://images.unsplash.com/photo-1543888761-002fdf5eb8d6?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="space-y-10">
        <section>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold mb-3">Quick Visitor Summary</h2>
            <p className="text-lg leading-relaxed text-blue-950">
              The Chronicles of Georgia is best approached as an open-air monument visit rather than a conventional ticketed attraction.
              Most visitors come for the scale, the relief details, the views over Tbilisi and the sunset photography. Plan roughly 45 to 90
              minutes on site, and give yourself a little extra time if you want to walk the full plaza, explore the lower reliefs and wait for better light.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Best Time to Visit</h2>
          <p className="text-lg leading-relaxed mb-6">
            If your schedule is flexible, prioritize golden hour. Sunrise is quieter and cooler, while sunset usually gives the most dramatic light on the bronze panels.
            Spring and autumn are the safest all-around seasons for comfort, photos and clearer views.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-amber-950 mb-4">
              We broke down the best timing in a dedicated guide covering sunrise, sunset, wind, seasonality and photography conditions.
            </p>
            <Link
              href={`${prefix}/blog/best-time-to-visit`}
              className="inline-flex items-center rounded-lg bg-amber-600 px-5 py-3 font-medium text-white transition-colors hover:bg-amber-700"
            >
              Read the Best Time to Visit Guide
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">How to Get There</h2>
          <p className="text-lg leading-relaxed mb-6">
            From central Tbilisi, the simplest option is usually Bolt or taxi, especially if you are targeting sunset. Public transport can work, but the final stretch is less direct and often less convenient than a car drop-off.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800">Bolt or Taxi</h4>
              <p className="text-blue-700">
                The most practical choice for most visitors. It reduces walking on the uphill approach and makes sunset timing easier to manage.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-purple-800">Public Transport + Short Transfer</h4>
              <p className="text-purple-700">
                Possible if you are keeping costs down, but most travelers still use a short taxi connection for the final approach instead of relying on a fully direct route.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Access, Parking and On-Site Conditions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-3">Access and Cost</h3>
              <p className="text-gray-700 leading-relaxed">
                Visitors generally experience the site as an open monument area rather than a staffed attraction with a regular ticketing flow. It is best to treat it as an outdoor stop and check conditions locally if you are visiting on a tight schedule.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-3">Parking and Surface</h3>
              <p className="text-gray-700 leading-relaxed">
                Parking is usually handled informally near the approach area and availability can change with traffic and timing. The plaza is open and exposed, with steps and uneven sections in parts, so comfortable footwear makes a real difference.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Accessibility, Walking Difficulty and Visit Duration</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              The easiest experience is to arrive close to the site by car and explore the upper area at your own pace. Some sections are easier than others, but this is not the kind of attraction where you should expect a fully controlled indoor-style visitor route.
            </p>
            <p>
              If mobility is a concern, focus on the most accessible viewpoints first and avoid planning the visit around lots of extra walking. If you are comfortable on your feet, 45 to 90 minutes is a good window; photographers may prefer longer near sunset.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">What to Bring</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Essentials</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Water, especially on warm or windy days</li>
                <li>Comfortable walking shoes with decent grip</li>
                <li>Phone or camera with enough battery for photos</li>
                <li>Sunscreen, sunglasses or a hat in brighter months</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Useful Extras</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>A light jacket for evening wind</li>
                <li>A small tripod if you plan sunset or low-light shots</li>
                <li>Offline map access in case signal feels patchy</li>
                <li>Tissues or basics if you prefer not to depend on nearby facilities</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Photography, Sunset and Tbilisi Sea</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              The site works best when you give yourself time to move around and watch how the light changes across the reliefs. Wide establishing shots, detail shots of the panels and skyline views all benefit from low-angle light.
            </p>
            <p>
              Because the monument sits near Tbilisi Sea, many visitors pair the two in the same outing. If you are building a relaxed afternoon plan, the lake area and the monument work naturally together.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Food, Toilets and Other Practical Expectations</h2>
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
            <ul className="list-disc list-inside space-y-3 text-yellow-950">
              <li>Do not assume there will always be full visitor services directly on-site.</li>
              <li>It is safer to use toilets, buy drinks and prepare small essentials before you head up.</li>
              <li>If you are visiting with kids or older travelers, plan a simpler route and a shorter stay window.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Final Local Tips</h2>
          <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-lg">
            The best visit is usually the one that stays simple: arrive a little before the light improves, bring water, do not rush the relief details, and leave enough time to just stand back and take in the scale.
          </blockquote>
        </section>
      </div>
    </BlogLayout>
  );
}
