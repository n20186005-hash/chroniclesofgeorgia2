import BlogLayout from '@/components/BlogLayout';
import type { Locale } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';
import { alternatesForPath, canonicalForPath } from '@/seo';

type TimeCard = {
  title: string;
  content: string;
};

type SeasonCard = {
  title: string;
  content: string;
};

type PageContent = {
  intro: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  timesTitle: string;
  times: TimeCard[];
  seasonsTitle: string;
  seasons: SeasonCard[];
  photographyTitle: string;
  photographyIntro: string;
  photographyTips: string[];
  practicalTitle: string;
  practicalTips: string[];
  goalTitle: string;
  goalTips: string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

const pageContent: Record<Locale, PageContent> = {
  en: {
    intro:
      'If you only have one shot at visiting the Chronicles of Georgia, plan for golden hour. The monument is most impressive when the light is low, the bronze reliefs pick up texture, and the skyline over Tbilisi feels open and dramatic.',
    quickAnswerTitle: 'Quick Answer',
    quickAnswer:
      'For most visitors, the best time to visit the Chronicles of Georgia is around sunrise or sunset in spring and autumn. Those hours bring softer light, fewer harsh shadows, more comfortable temperatures and stronger photo conditions than the middle of the day.',
    timesTitle: 'Best Time of Day',
    times: [
      {
        title: 'Sunrise',
        content:
          'Best for quiet surroundings, cooler air and a calmer atmosphere. Early light can make the upper reliefs look cleaner and more sculptural.',
      },
      {
        title: 'Morning',
        content:
          'A practical all-around choice if you want good visibility without the stronger midday heat. It also works well if you are pairing the monument with other Tbilisi stops.',
      },
      {
        title: 'Sunset / Golden Hour',
        content:
          'Usually the strongest overall choice for visitors and photographers. The lower sun adds depth to the bronze panels and often gives the site its most memorable mood.',
      },
    ],
    seasonsTitle: 'Best Season',
    seasons: [
      {
        title: 'Spring',
        content:
          'One of the safest choices overall. Temperatures are usually more comfortable, colors feel fresher and the light is often clear enough for wide shots.',
      },
      {
        title: 'Autumn',
        content:
          'Another excellent season for balanced weather and softer tones. Late-afternoon light can feel especially cinematic when the air is dry and clear.',
      },
      {
        title: 'Summer',
        content:
          'Visit early or late. Midday sun can feel intense on the open plaza, and contrast can be hard for photography when the bronze surfaces reflect strong light.',
      },
      {
        title: 'Winter',
        content:
          'Winter can be dramatic and atmospheric, but expect colder wind and a harsher overall feel. Go only if you are comfortable with changing weather.',
      },
    ],
    photographyTitle: 'Photography and Weather',
    photographyIntro:
      'The monument is exposed, elevated and highly dependent on light direction. A little timing makes a big difference here.',
    photographyTips: [
      'Golden hour gives the reliefs more depth than flat midday light.',
      'Wind matters more than many visitors expect, especially in colder months.',
      'If skies are overcast, details can still look strong, but the site feels less dramatic from a distance.',
      'After rain, surfaces and atmosphere can look striking, but footing may feel less comfortable in places.',
    ],
    practicalTitle: 'Crowds and Practical Timing',
    practicalTips: [
      'Weekday mornings and evenings are usually calmer than busy afternoon windows.',
      'Plan roughly 45 to 90 minutes if you want time for photos, walking and taking in the reliefs.',
      'If you are arriving by Bolt or taxi, sunset timing is easy to target and usually gives the best payoff.',
      'Do not rely on full visitor facilities on-site; bring water and take care of essentials before you go.',
    ],
    goalTitle: 'Choose the Best Time for Your Goal',
    goalTips: [
      'For the best photos: sunset first, sunrise second.',
      'For fewer people: sunrise or early weekday morning.',
      'For the easiest general visit: mid-morning in spring or autumn.',
      'For dramatic atmosphere: winter light or a windy sunset, if conditions are comfortable for you.',
    ],
    ctaTitle: 'Need the Full Visitor Guide?',
    ctaText:
      'Use the visitor guide for transport options, access expectations, what to bring, visit duration and on-the-ground planning.',
    ctaLabel: 'Open the Visitor Guide',
  },
  ka: {
    intro:
      'თუ მხოლოდ ერთი დროის ფანჯარა გაქვთ, ყველაზე კარგი არჩევანი ხშირად ოქროს საათია. სწორედ ამ დროს ბრინჯაოს რელიეფები მეტ სიღრმეს იძენს და მონუმენტი უფრო შთამბეჭდავად ჩანს.',
    quickAnswerTitle: 'მოკლე პასუხი',
    quickAnswer:
      'უმეტესობისთვის საქართველოს მატიანის მოსანახულებლად საუკეთესო დრო არის მზის ამოსვლის ან ჩასვლის პერიოდი გაზაფხულსა და შემოდგომაზე. ამ დროს ამინდი უფრო კომფორტულია და ფოტოების პირობებიც უკეთესია.',
    timesTitle: 'დღის საუკეთესო მონაკვეთი',
    times: [
      { title: 'მზის ამოსვლა', content: 'კარგია სიმშვიდისთვის, გრილი ჰაერისთვის და ნაკლები ხალხისთვის.' },
      { title: 'დილა', content: 'საუკეთესო ბალანსია კომფორტულ ვიზიტსა და კარგ ხილვადობას შორის.' },
      { title: 'მზის ჩასვლა', content: 'ყველაზე შთამბეჭდავი შუქი ფოტოგრაფიისთვის და მონუმენტის ატმოსფეროსთვის.' },
    ],
    seasonsTitle: 'საუკეთესო სეზონი',
    seasons: [
      { title: 'გაზაფხული', content: 'ერთ-ერთი ყველაზე საიმედო სეზონი რბილი ამინდისა და ნათელი ხედებისთვის.' },
      { title: 'შემოდგომა', content: 'კომფორტული ტემპერატურა და რბილი საღამოს ფერები.' },
      { title: 'ზაფხული', content: 'სჯობს ადრე დილით ან საღამოს, რადგან შუადღე შეიძლება ძალიან ცხელი იყოს.' },
      { title: 'ზამთარი', content: 'შეიძლება ძალიან ეფექტური იყოს, მაგრამ ქარი და სიცივე გასათვალისწინებელია.' },
    ],
    photographyTitle: 'ფოტოგრაფია და ამინდი',
    photographyIntro: 'ეს ადგილი ღიაა ქარისა და განათების მიმართ, ამიტომ დროის სწორად შერჩევა მნიშვნელოვანია.',
    photographyTips: [
      'ოქროს საათზე რელიეფები უფრო გამოკვეთილად ჩანს.',
      'ქარი განსაკუთრებით მნიშვნელოვანია ცივ თვეებში.',
      'ღრუბლიან ამინდშიც დეტალები კარგია, თუმცა საერთო დრამატულობა იკლებს.',
      'წვიმის შემდეგ ატმოსფერო საინტერესოა, მაგრამ გადაადგილება ნაკლებად კომფორტული შეიძლება იყოს.',
    ],
    practicalTitle: 'ხალხი და პრაქტიკული დრო',
    practicalTips: [
      'კვირის დღეების დილა და საღამო ხშირად უფრო მშვიდია.',
      'ვიზიტისთვის დაახლოებით 45-90 წუთი გაითვალისწინეთ.',
      'ტაქსით ან Bolt-ით მისვლისას განსაკუთრებით მოსახერხებელია მზის ჩასვლის დროზე დაგეგმვა.',
      'სასურველია წყალი და საჭირო ნივთები წინასწარ მოიმარაგოთ.',
    ],
    goalTitle: 'დროის არჩევა თქვენი მიზნის მიხედვით',
    goalTips: [
      'ფოტოებისთვის: ჯერ მზის ჩასვლა, შემდეგ ამოსვლა.',
      'ნაკლები ხალხისთვის: ადრე დილით.',
      'ყველაზე მარტივი ვიზიტისთვის: შუადღემდე გაზაფხულსა ან შემოდგომაზე.',
      'დრამატული ატმოსფეროსთვის: ქარიანი საღამო ან ზამთარი.',
    ],
    ctaTitle: 'გჭირდებათ სრული გზამკვლევი?',
    ctaText: 'იხილეთ ვიზიტორთა გზამკვლევი ტრანსპორტის, საჭირო ნივთებისა და პრაქტიკული რჩევებისთვის.',
    ctaLabel: 'გახსენით გზამკვლევი',
  },
  ru: {
    intro:
      'Если у вас только одно удобное окно для визита, лучше всего выбирать золотой час. В это время рельефы выглядят объёмнее, а сам монумент воспринимается гораздо сильнее.',
    quickAnswerTitle: 'Короткий ответ',
    quickAnswer:
      'Для большинства посетителей лучшее время для визита к Летописи Грузии - рассвет или закат весной и осенью. В эти часы свет мягче, температура комфортнее, а условия для фото заметно лучше.',
    timesTitle: 'Лучшее время суток',
    times: [
      { title: 'Рассвет', content: 'Подходит для тишины, прохлады и меньшего количества людей.' },
      { title: 'Утро', content: 'Хороший баланс между комфортом, обзором и удобством маршрута.' },
      { title: 'Закат', content: 'Самый сильный вариант для атмосферы и фотографии.' },
    ],
    seasonsTitle: 'Лучший сезон',
    seasons: [
      { title: 'Весна', content: 'Один из самых надёжных сезонов для мягкой погоды и приятного света.' },
      { title: 'Осень', content: 'Комфортная температура и красивые тёплые оттенки вечером.' },
      { title: 'Лето', content: 'Лучше ехать рано утром или ближе к вечеру, чтобы избежать жёсткого полуденного солнца.' },
      { title: 'Зима', content: 'Атмосферно и эффектно, но ветер и холод ощущаются сильнее.' },
    ],
    photographyTitle: 'Фотография и погода',
    photographyIntro: 'Площадка открытая, поэтому свет и ветер сильно влияют на впечатление.',
    photographyTips: [
      'Золотой час подчёркивает рельефы лучше, чем ровный полуденный свет.',
      'Ветер особенно важен в холодный сезон.',
      'В пасмурную погоду детали остаются читаемыми, но панорама выглядит спокойнее.',
      'После дождя атмосфера может быть очень выразительной, но поверхность местами менее удобна.',
    ],
    practicalTitle: 'Люди и практическое планирование',
    practicalTips: [
      'Утро и вечер по будням обычно спокойнее.',
      'На визит лучше заложить примерно 45-90 минут.',
      'Если едете на Bolt или такси, закат удобно планировать заранее.',
      'Не рассчитывайте на полноценную инфраструктуру на месте, воду лучше взять с собой.',
    ],
    goalTitle: 'Выберите время под свою цель',
    goalTips: [
      'Для фото: сначала закат, потом рассвет.',
      'Для меньшего количества людей: раннее утро.',
      'Для самого удобного визита: середина утра весной или осенью.',
      'Для драматичной атмосферы: зимний свет или ветреный закат.',
    ],
    ctaTitle: 'Нужен полный гид?',
    ctaText: 'Откройте visitor guide с транспортом, доступом, списком вещей и практическими советами.',
    ctaLabel: 'Открыть гид',
  },
  'zh-hant': {
    intro:
      '如果你這次只能挑一個時段去，最值得優先考慮的通常就是日出或日落前後的黃金時段。這時青銅浮雕的層次感更明顯，整個紀念碑也更有氣勢。',
    quickAnswerTitle: '快速結論',
    quickAnswer:
      '多數情況下，格魯吉亞編年史最適合在春秋兩季的日出或日落時段造訪。這兩個時間光線更柔和、溫度更舒服，拍照效果通常也比正午更好。',
    timesTitle: '一天中最適合的時段',
    times: [
      { title: '日出', content: '人少、空氣較涼，整體氛圍更安靜。' },
      { title: '上午', content: '如果想兼顧舒適度與行程安排，上午通常最穩妥。' },
      { title: '日落', content: '整體效果通常最好，特別適合拍照與感受現場氣氛。' },
    ],
    seasonsTitle: '最適合的季節',
    seasons: [
      { title: '春季', content: '氣溫較舒服，也是最穩定的造訪季節之一。' },
      { title: '秋季', content: '天氣通常平衡，傍晚色調也更柔和。' },
      { title: '夏季', content: '建議避開正午，優先選清晨或傍晚。' },
      { title: '冬季', content: '氣氛感強，但風與低溫會更明顯。' },
    ],
    photographyTitle: '拍照與天氣條件',
    photographyIntro: '這個景點地勢開闊，光線方向和風況都會直接影響體驗。',
    photographyTips: [
      '黃金時段比正午更容易拍出浮雕層次。',
      '冬天和風大的日子體感差異會很明顯。',
      '陰天仍然適合拍細節，但整體場景會少一點戲劇感。',
      '雨後畫面可能很有氛圍，不過走動時要更留意地面。',
    ],
    practicalTitle: '人潮與實際安排',
    practicalTips: [
      '平日早上和傍晚通常比下午更安靜。',
      '建議預留 45 到 90 分鐘拍照與慢慢看浮雕。',
      '如果是搭 Bolt 或計程車，抓日落時段通常很划算。',
      '現場不要預期有完整旅遊設施，水和基本用品最好先準備好。',
    ],
    goalTitle: '依照目的挑時間',
    goalTips: [
      '想拍照：先選日落，其次日出。',
      '想避開人潮：選平日清晨。',
      '想要整體最舒服：選春秋上午。',
      '想要強烈氣氛：冬天或有風的日落時段。',
    ],
    ctaTitle: '還想看完整交通與現場資訊？',
    ctaText: '可以接著閱讀 visitor guide，裡面整理了交通方式、停留時間、攜帶建議與現場實用提醒。',
    ctaLabel: '查看 Visitor Guide',
  },
  'zh-cn': {
    intro:
      '如果你这次只能挑一个时段去，最值得优先考虑的通常就是日出或日落前后的黄金时段。这时青铜浮雕的层次更明显，整个纪念碑也会更有气势。',
    quickAnswerTitle: '快速结论',
    quickAnswer:
      '多数情况下，格鲁吉亚编年史最适合在春秋两季的日出或日落时段造访。这两个时间光线更柔和、温度更舒服，拍照效果通常也比正午更好。',
    timesTitle: '一天中最适合的时段',
    times: [
      { title: '日出', content: '人少、空气较凉，整体氛围更安静。' },
      { title: '上午', content: '如果想兼顾舒适度和行程安排，上午通常最稳妥。' },
      { title: '日落', content: '整体效果通常最好，尤其适合拍照和感受现场氛围。' },
    ],
    seasonsTitle: '最适合的季节',
    seasons: [
      { title: '春季', content: '气温更舒服，也是最稳定的造访季节之一。' },
      { title: '秋季', content: '天气通常平衡，傍晚色调也更柔和。' },
      { title: '夏季', content: '建议避开正午，优先选清晨或傍晚。' },
      { title: '冬季', content: '氛围感强，但风和低温会更明显。' },
    ],
    photographyTitle: '拍照与天气条件',
    photographyIntro: '这个景点地势开阔，光线方向和风况都会直接影响体验。',
    photographyTips: [
      '黄金时段比正午更容易拍出浮雕层次。',
      '冬天和大风天气的体感差异会很明显。',
      '阴天仍然适合拍细节，但整体场景会少一些戏剧感。',
      '雨后画面可能很有氛围，不过走动时要更留意地面。',
    ],
    practicalTitle: '人流与实际安排',
    practicalTips: [
      '工作日早上和傍晚通常比下午更安静。',
      '建议预留 45 到 90 分钟拍照和慢慢看浮雕。',
      '如果是搭 Bolt 或出租车，抓日落时段通常很划算。',
      '现场不要预期有完整旅游设施，水和基本用品最好先准备好。',
    ],
    goalTitle: '按目的选时间',
    goalTips: [
      '想拍照：先选日落，其次日出。',
      '想避开人流：选工作日清晨。',
      '想要整体最舒服：选春秋上午。',
      '想要更强氛围：冬天或有风的日落时段。',
    ],
    ctaTitle: '还想看完整交通和现场信息？',
    ctaText: '可以继续阅读 visitor guide，里面整理了交通方式、停留时间、携带建议和现场实用提醒。',
    ctaLabel: '查看 Visitor Guide',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogPages.bestTimeToVisit' });

  return {
    title: `${t('title')} | Chronicles of Georgia`,
    description: t('description'),
    alternates: {
      canonical: canonicalForPath(locale, '/blog/best-time-to-visit'),
      languages: alternatesForPath('/blog/best-time-to-visit'),
    },
  };
}

export default async function BestTimeToVisitPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogPages.bestTimeToVisit' });
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const content = pageContent[locale] ?? pageContent.en;

  return (
    <BlogLayout
      title={t('title')}
      description={t('description')}
      coverImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="space-y-10">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed">{content.intro}</p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-2xl font-bold mb-3">{content.quickAnswerTitle}</h2>
            <p className="text-lg leading-relaxed text-amber-950">{content.quickAnswer}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-5">{content.timesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.times.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="leading-relaxed text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-5">{content.seasonsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.seasons.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="leading-relaxed text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{content.photographyTitle}</h2>
          <p className="text-lg leading-relaxed mb-5">{content.photographyIntro}</p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {content.photographyTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{content.practicalTitle}</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {content.practicalTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{content.goalTitle}</h2>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <ul className="list-disc list-inside space-y-3 text-blue-950">
              {content.goalTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold mb-3">{content.ctaTitle}</h2>
          <p className="text-lg leading-relaxed mb-5 text-gray-700">{content.ctaText}</p>
          <Link
            href={`${prefix}/blog/travel-tips`}
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            {content.ctaLabel}
          </Link>
        </section>
      </div>
    </BlogLayout>
  );
}
