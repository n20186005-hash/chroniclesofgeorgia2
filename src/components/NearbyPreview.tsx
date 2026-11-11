import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {locales} from '@/i18n/config';
import {localizedPath} from '@/seo';
import {nearbyContent} from '@/content/nearby';

export default async function NearbyPreview({locale, compact = false}: {locale: string; compact?: boolean}) {
  const language = locales.find(value => value === locale);
  if (!language) return null;
  const t = await getTranslations({locale: language, namespace: 'nav'});
  return (
    <section id="nearby" className={compact ? 'my-12' : 'section-spacing'} style={{background: compact ? undefined : 'var(--bg-secondary)'}}>
      <div className={compact ? '' : 'max-w-6xl mx-auto px-6'}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight" style={{color: 'var(--text-primary)'}}>{t('nearby')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(nearbyContent[language]).map(page => (
            <Link key={page.slug} href={localizedPath(language, `/nearby/${page.slug}`)} className="block rounded-xl p-6 transition-shadow hover:shadow-lg" style={{background: 'var(--bg-card)', border: '1px solid var(--border-color)'}}>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>{page.title}</h3>
              <p className="text-base leading-relaxed" style={{color: 'var(--text-secondary)'}}>{page.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
