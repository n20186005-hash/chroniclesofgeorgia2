import React from 'react';
import { useLocale } from 'next-intl';

const TOURS = [
  {
    url: 'https://www.trip.com/t/pJoQPuLZDU2',
    titles: {
      en: 'Day tour from Tbilisi: Mtskheta, Jvari Monastery, Gori and Uplistsikhe',
      ka: 'ერთდღიანი ტური თბილისიდან: მცხეთა, ჯვარი, გორი და უფლისციხე',
      ru: 'Однодневный тур из Тбилиси: Мцхета, Джвари, Гори и Уплисцихе',
      'zh-hant': '第比利斯出發：姆茨赫塔、十字修道院、哥里與烏普利斯齊赫一日遊',
      'zh-cn': '第比利斯出发：姆茨赫塔、十字修道院、哥里与乌普利斯齐赫一日游',
    },
  },
  {
    url: 'https://www.trip.com/t/hIOsasWZDU2',
    titles: {
      en: 'Tbilisi: Mtskheta Jvari Bazaar, Chronicles of Georgia and wine tour',
      ka: 'თბილისი: მცხეთის ჯვრის ბაზარი, საქართველოს მატიანე და ღვინის ტური',
      ru: 'Тбилиси: рынок Джвари в Мцхете, Летописи Грузии и винный тур',
      'zh-hant': '第比利斯：姆茨赫塔十字市集、格魯吉亞編年史與葡萄酒之旅',
      'zh-cn': '第比利斯：姆茨赫塔十字市集、格鲁吉亚编年史与葡萄酒之旅',
    },
  },
  {
    url: 'https://www.trip.com/t/ZQ0oOYYZDU2',
    titles: {
      en: 'Kakheti highlights from Tbilisi: Sighnaghi, Bodbe and Chronicles route',
      ka: 'კახეთის ტური თბილისიდან: სიღნაღი, ბოდბე და ქრონიკების მარშრუტი',
      ru: 'Лучшее в Кахетии из Тбилиси: Сигнахи, Бодбе и маршрут к монументу',
      'zh-hant': '第比利斯出發卡赫季精華：西格納吉、博德貝與編年史路線',
      'zh-cn': '第比利斯出发卡赫季精华：西格纳吉、博德贝与编年史路线',
    },
  },
  {
    url: 'https://www.trip.com/t/4UzsRFbZDU2',
    titles: {
      en: 'Tbilisi: Gudauri and Kazbegi day trip with 4WD',
      ka: 'თბილისი: გუდაური და ყაზბეგი ერთდღიანი ტური 4x4-ით',
      ru: 'Тбилиси: однодневная поездка в Гудаури и Казбеги на 4x4',
      'zh-hant': '第比利斯：古多里與卡茲別吉四驅一日遊',
      'zh-cn': '第比利斯：古多里与卡兹别吉四驱一日游',
    },
  },
  {
    url: 'https://www.trip.com/t/ssPwvDdZDU2',
    titles: {
      en: 'Tbilisi: Kakheti region tour with Sighnaghi and nine wine tastings',
      ka: 'თბილისი: კახეთის ტური სიღნაღით და 9 ღვინის დეგუსტაციით',
      ru: 'Тбилиси: тур по Кахетии, Сигнахи и 9 дегустаций вина',
      'zh-hant': '第比利斯：卡赫季地區、西格納吉與 9 次品酒體驗',
      'zh-cn': '第比利斯：卡赫季地区、西格纳吉与 9 次品酒体验',
    },
  },
  {
    url: 'https://www.trip.com/t/7p32n1fZDU2',
    titles: {
      en: 'Sighnaghi, nunnery, wine tasting and Tbilisi Sea private tour',
      ka: 'სიღნაღი, დედათა მონასტერი, ღვინის დაგემოვნება და თბილისის ზღვა',
      ru: 'Сигнахи, женский монастырь, дегустация вина и Тбилисское море',
      'zh-hant': '西格納吉、女修道院、品酒與第比利斯海包車之旅',
      'zh-cn': '西格纳吉、女修道院、品酒与第比利斯海包车之旅',
    },
  },
  {
    url: 'https://www.trip.com/t/8QotX3hZDU2',
    titles: {
      en: 'Slow day by Tbilisi Sea with open skies and lakeside views',
      ka: 'ნელი დღე თბილისის ზღვასთან, ცის და ტბის ხედებით',
      ru: 'Спокойный день у Тбилисского моря с озёрными панорамами',
      'zh-hant': '慢遊第比利斯海：湖藍與晴空的一日行程',
      'zh-cn': '慢游第比利斯海：湖蓝与晴空的一日行程',
    },
  },
  {
    url: 'https://www.trip.com/t/sLLlgCjZDU2',
    titles: {
      en: 'Tbilisi cable car, Mother of Georgia, Rike Park and Tbilisi Sea',
      ka: 'თბილისის საბაგირო, ქართლის დედა, რიყის პარკი და თბილისის ზღვა',
      ru: 'Канатная дорога Тбилиси, Мать Грузия, парк Рике и Тбилисское море',
      'zh-hant': '第比利斯纜車、喬治亞之母、里克公園與第比利斯海',
      'zh-cn': '第比利斯缆车、格鲁吉亚之母、里克公园与第比利斯海',
    },
  },
];

export default function RecommendedTours() {
  const locale = useLocale();
  const content = {
    en: 'Featured Caucasus Travel Experiences',
    ka: 'რჩეული კავკასიური სამოგზაურო გამოცდილებები',
    ru: 'Рекомендуемые путешествия по Кавказу',
    'zh-hant': '熱門精選：高加索深度旅行體驗',
    'zh-cn': '热门精选：高加索深度旅行体验',
  }[locale] ?? 'Featured Caucasus Travel Experiences';

  return (
    <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {content}
        </h3>
      </div>
      <div className="p-6">
        <ul className="grid md:grid-cols-2 gap-4">
          {TOURS.map((tour, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <a 
                href={tour.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors hover:underline text-sm md:text-base leading-snug"
              >
                {tour.titles[locale as keyof typeof tour.titles] ?? tour.titles.en}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
