import { useLocale } from 'next-intl';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = 'https://www.chroniclesofgeorgia.com';
  const path = '/privacy-policy';

  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}${path}`,
    'en': `${baseUrl}/en${path}`,
    'ru': `${baseUrl}/ru${path}`,
    'zh-Hant': `${baseUrl}/zh-hant${path}`,
    'zh-CN': `${baseUrl}/zh-cn${path}`,
    'x-default': `${baseUrl}/en${path}`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: 'Privacy Policy - Chronicles of Georgia',
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function PrivacyPolicyPage() {
  const locale = useLocale();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: March 2026",
      sections: [
        {
          title: "1. Information Collection",
          text: "We are committed to protecting your privacy. This site primarily serves as an informational platform about the Chronicles of Georgia monument and generally does not actively collect personally identifiable information from users. However, through server logs and analytics tools, we may collect non-personally identifiable information such as browser type, access times, and page view records."
        },
        {
          title: "2. Use of Cookies",
          text: "To provide a better user experience and understand how the site is used, we may use cookies. These cookies are used to remember user preferences and analyze site traffic. You can adjust cookie settings in your browser."
        },
        {
          title: "3. Third-Party Links",
          text: "This site may contain links to third-party sites (e.g., Google Maps). We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy statements of any site that collects personal information when you leave our site."
        },
        {
          title: "4. Contact Us",
          text: "If you have any questions or concerns regarding this privacy policy, please contact us at: n20186005@gmail.com"
        }
      ],
      backHome: "Back to Home"
    },
    'zh-hant': {
      title: "隱私政策",
      lastUpdated: "最後更新：2026年3月",
      sections: [
        {
          title: "1. 資訊收集",
          text: "我們致力於保護您的隱私。本網站主要作為格魯吉亞編年史紀念碑的資訊平台，通常不會主動收集使用者的個人識別資訊。然而，透過伺服器日誌和分析工具，我們可能會收集非個人識別資訊，例如瀏覽器類型、存取時間和網頁瀏覽記錄。"
        },
        {
          title: "2. Cookie 的使用",
          text: "為了提供更好的使用者體驗並了解網站的使用情況，我們可能會使用 Cookie。這些 Cookie 用於記住使用者偏好和分析網站流量。您可以在瀏覽器中調整 Cookie 設定。"
        },
        {
          title: "3. 第三方連結",
          text: "本網站可能包含指向第三方網站（例如 Google 地圖）的連結。我們對這些外部網站的隱私慣例不承擔任何責任。我們鼓勵您在離開本網站時閱讀收集個人資訊的任何網站的隱私聲明。"
        },
        {
          title: "4. 聯絡我們",
          text: "如果您對本隱私政策有任何疑問或疑慮，請聯絡我們：n20186005@gmail.com"
        }
      ],
      backHome: "返回首頁"
    },
    ru: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: Март 2026",
      sections: [
        {
          title: "1. Сбор информации",
          text: "Мы стремимся защищать вашу конфиденциальность. Этот сайт в первую очередь служит информационной платформой о памятнике Летописи Грузии и обычно не активно собирает персональную информацию от пользователей. Однако через журналы сервера и инструменты аналитики мы можем собирать неперсонализированную информацию, такую как тип браузера, время доступа и записи просмотра страниц."
        },
        {
          title: "2. Использование файлов cookie",
          text: "Чтобы обеспечить лучший пользовательский опыт и понять, как используется сайт, мы можем использовать файлы cookie. Эти файлы cookie используются для запоминания предпочтений пользователей и анализа трафика сайта. Вы можете настроить параметры cookie в своем браузере."
        },
        {
          title: "3. Сторонние ссылки",
          text: "Этот сайт может содержать ссылки на сторонние сайты (например, Google Карты). Мы не несем ответственности за политику конфиденциальности этих внешних сайтов. Мы рекомендуем вам прочитать заявления о конфиденциальности любого сайта, который собирает персональную информацию, когда вы покидаете наш сайт."
        },
        {
          title: "4. Свяжитесь с нами",
          text: "Если у вас есть вопросы или проблемы, связанные с этой политикой конфиденциальности, пожалуйста, свяжитесь с нами: n20186005@gmail.com"
        }
      ],
      backHome: "Вернуться на главную"
    },
    ka: {
      title: "კონფიდენციალურობის პოლიტიკა",
      lastUpdated: "ბოლო განახლება: მარტი 2026",
      sections: [
        {
          title: "1. ინფორმაციის შეგროვება",
          text: "ჩვენ ვიცავთ თქვენს კონფიდენციალურობას. ეს საიტი ძირითადად slouz的信息平台ა საქართველოს მატიანის მონუმენტის შესახებ და ჩვეულებრივ არ აგროვებს აქტიურად პერსონალურ ინფორმაციას მომხმარებლებისგან. თუმცა, სერვერის ჟურნალებისა და ანალიტიკის ინსტრუმენტების მეშვეობით, ჩვენ შეიძლება შევაგროვოთ არაპერსონალური ინფორმაცია, როგორიცაა ბრაუზერის ტიპი, წვდომის დრო და გვერდების ნახვის ჩანაწერები."
        },
        {
          title: "2. Cookie-ების გამოყენება",
          text: "კარგი მომხმარებლის გამოცდილებისა და საიტის გამოყენების გაგებისთვის, ჩვენ შეიძლება გამოვიყენოთ Cookie-ები. ეს Cookie-ები გამოიყენება მომხმარებლის უპირატესობების დასამახსოვრებლად და საიტის ტრაფიკის ანალიზისთვის. შეგიძლიათ მოირგოთ Cookie-ების პარამეტრები თქვენს ბრაუზერში."
        },
        {
          title: "3. მესამე მხარის ბმულები",
          text: "ეს საიტი შეიძლება შეიცავდეს ბმულებს მესამე მხარის საიტებზე (მაგალითად, Google Maps). ჩვენ არ ვართ პასუხისმგებელი ამ გარე საიტების კონფიდენციალურობის პრაქტიკაზე. გირჩევთ, წაიკითხოთ კონფიდენციალურობის განცხადებები ნებისმიერი საიტისთვის, რომელიც აგროვებს პერსონალურ ინფორმაციას, როდესაც ტოვებთ ჩვენს საიტს."
        },
        {
          title: "4. დაგვიკავშირდით",
          text: "თუ გაქვთ რაიმე კითხვები ან შეშფოთება ამ კონფიდენციალურობის პოლიტიკასთან დაკავშირებით, გთხოვთ, დაგვიკავშირდეთ: n20186005@gmail.com"
        }
      ],
      backHome: "მთავარ გვერდზე დაბრუნება"
    }
  };

  const currentContent = content[locale as keyof typeof content] || content.en;

  return (
    <div className="section-spacing min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {currentContent.backHome}
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {currentContent.title}
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          {currentContent.lastUpdated}
        </p>

        <div className="space-y-8" style={{ color: 'var(--text-secondary)' }}>
          {currentContent.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {section.title}
              </h2>
              <p className="leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}