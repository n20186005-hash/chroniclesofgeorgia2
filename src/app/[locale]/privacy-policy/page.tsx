import { useLocale } from 'next-intl';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = 'https://www.piazzapopoloascoli.com';
  const path = '/privacy-policy';

  const alternateLanguages: Record<string, string> = {
    'it': `${baseUrl}/it${path}`,
    'en': `${baseUrl}/en${path}`,
    'fr': `${baseUrl}/fr${path}`,
    'zh-Hant': `${baseUrl}/zh-hant${path}`,
    'x-default': `${baseUrl}/en${path}`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: 'Privacy Policy - Piazza del Popolo',
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
          text: "We are committed to protecting your privacy. This site primarily serves as an informational platform and generally does not actively collect personally identifiable information from users. However, through server logs and analytics tools, we may collect non-personally identifiable information such as browser type, access times, and page view records."
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
          text: "If you have any questions or concerns regarding this privacy policy, please contact us at: claritleonelmnicol@gmail.com"
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
          text: "我們致力於保護您的隱私。本網站主要作為資訊平台，通常不會主動收集使用者的個人識別資訊。然而，透過伺服器日誌和分析工具，我們可能會收集非個人識別資訊，例如瀏覽器類型、存取時間和網頁瀏覽記錄。"
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
          text: "如果您對本隱私政策有任何疑問或疑慮，請聯絡我們：claritleonelmnicol@gmail.com"
        }
      ],
      backHome: "返回首頁"
    },
    fr: {
      title: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : Mars 2026",
      sections: [
        {
          title: "1. Collecte d'informations",
          text: "Nous nous engageons à protéger votre vie privée. Ce site sert principalement de plateforme d'information et ne collecte généralement pas activement d'informations d'identification personnelle des utilisateurs. Cependant, par le biais des journaux de serveur et des outils d'analyse, nous pouvons collecter des informations non personnellement identifiables telles que le type de navigateur, les temps d'accès et les enregistrements de pages vues."
        },
        {
          title: "2. Utilisation des cookies",
          text: "Pour offrir une meilleure expérience utilisateur et comprendre comment le site est utilisé, nous pouvons utiliser des cookies. Ces cookies sont utilisés pour se souvenir des préférences des utilisateurs et analyser le trafic du site. Vous pouvez ajuster les paramètres des cookies dans votre navigateur."
        },
        {
          title: "3. Liens tiers",
          text: "Ce site peut contenir des liens vers des sites tiers (par exemple, Google Maps). Nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous encourageons à lire les déclarations de confidentialité de chaque site qui collecte des informations personnelles lorsque vous quittez notre site."
        },
        {
          title: "4. Nous contacter",
          text: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à : claritleonelmnicol@gmail.com"
        }
      ],
      backHome: "Retour à l'accueil"
    },
    it: {
      title: "Informativa sulla privacy",
      lastUpdated: "Ultimo aggiornamento: Marzo 2026",
      sections: [
        {
          title: "1. Raccolta di informazioni",
          text: "Ci impegniamo a proteggere la tua privacy. Questo sito funge principalmente da piattaforma informativa e generalmente non raccoglie attivamente informazioni di identificazione personale dagli utenti. Tuttavia, attraverso i log del server e gli strumenti di analisi, potremmo raccogliere informazioni non identificabili personalmente come il tipo di browser, i tempi di accesso e i record di visualizzazione delle pagine."
        },
        {
          title: "2. Uso dei cookie",
          text: "Per fornire una migliore esperienza utente e capire come viene utilizzato il sito, potremmo utilizzare i cookie. Questi cookie vengono utilizzati per ricordare le preferenze dell'utente e analizzare il traffico del sito. Puoi modificare le impostazioni dei cookie nel tuo browser."
        },
        {
          title: "3. Link di terze parti",
          text: "Questo sito può contenere link a siti di terze parti (es. Google Maps). Non siamo responsabili per le pratiche sulla privacy di questi siti esterni. Ti invitiamo a leggere le dichiarazioni sulla privacy di ogni sito che raccoglie informazioni personali quando lasci il nostro sito."
        },
        {
          title: "4. Contattaci",
          text: "Se hai domande o dubbi su questa informativa sulla privacy, ti preghiamo di contattarci a: claritleonelmnicol@gmail.com"
        }
      ],
      backHome: "Torna alla home"
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
