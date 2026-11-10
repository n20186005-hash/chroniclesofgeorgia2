import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {locales} from '@/i18n/config';
import {canonicalForPath, alternatesForPath, localizedPath} from '@/seo';
import {nearbyContent, nearbySources, type NearbySourceId} from '@/content/nearby';

const slugs = ['tbilisi-sea', 'gardenia-shevardnadze'] as const;
type Params = {locale: string; slug: string};

function getPage({locale, slug}: Params) {
  const language = locales.find(value => value === locale);
  const topic = slugs.find(value => value === slug);
  if (!language || !topic) notFound();
  return nearbyContent[language][topic];
}

export function generateStaticParams() {
  return slugs.map(slug => ({slug}));
}

export async function generateMetadata({params}: {params: Promise<Params>}): Promise<Metadata> {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const page = getPage({locale, slug});
  const path = `/nearby/${slug}`;
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {canonical: canonicalForPath(locale, path), languages: alternatesForPath(path)},
    openGraph: {title: page.seoTitle, description: page.description, url: canonicalForPath(locale, path), type: 'article'},
    twitter: {card: 'summary', title: page.seoTitle, description: page.description},
  };
}

function SourceLinks({ids}: {ids?: NearbySourceId[]}) {
  if (!ids?.length) return null;
  return <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{color: 'var(--text-secondary)'}}>
    {ids.map(id => <li key={id}><a className="underline underline-offset-4" href={nearbySources[id].url} target="_blank" rel="noopener noreferrer">{nearbySources[id].title}</a></li>)}
  </ul>;
}

export default async function NearbyPage({params}: {params: Promise<Params>}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const page = getPage({locale, slug});
  const t = await getTranslations({locale, namespace: 'nav'});
  const sectionClass = 'py-9 border-t';
  const borderStyle = {borderColor: 'var(--border-color)'};
  return (
    <>
      <section className="pt-32 pb-14 md:pt-40 md:pb-20" style={{background: '#292524', color: '#fff'}}>
        <div className="max-w-4xl mx-auto px-6">
          <Link href={localizedPath(locale)} className="inline-block mb-6 text-sm underline underline-offset-4" style={{color: '#fff'}}>{t('home')}</Link>
          <p className="text-sm mb-3 text-white/80">{page.editorialLabel}</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 break-words">{page.title}</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">{page.tagline}</p>
          <p className="text-sm mt-6 text-white/80">{page.checkedLabel}: <time dateTime={page.checkedDate}>{page.checkedDate}</time></p>
        </div>
      </section>
      <article className="max-w-4xl mx-auto px-6 py-10 min-w-0 break-words" style={{color: 'var(--text-primary)'}}>
        <div className="pb-9 leading-relaxed text-lg" style={{color: 'var(--text-secondary)'}}>
          {page.intro.map(text => <p key={text}>{text}</p>)}
          <SourceLinks ids={page.introSourceIds} />
        </div>
        {page.sections.map((section, index) => <div key={section.module}>
          <section className={sectionClass} style={borderStyle} aria-labelledby={`section-${index}`}>
            <h2 id={`section-${index}`} className="text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>
            {section.paragraphs?.map(text => <p key={text} className="mb-4 leading-relaxed" style={{color: 'var(--text-secondary)'}}>{text}</p>)}
            {section.items && (section.module === 'visit-plan'
              ? <ol className="list-decimal pl-6 space-y-3 leading-relaxed" style={{color: 'var(--text-secondary)'}}>{section.items.map(text => <li key={text}>{text}</li>)}</ol>
              : <ul className="list-disc pl-6 space-y-3 leading-relaxed" style={{color: 'var(--text-secondary)'}}>{section.items.map(text => <li key={text}>{text}</li>)}</ul>)}
            <SourceLinks ids={section.sourceIds} />
          </section>
          {section.module === 'about' && <section className={sectionClass} style={borderStyle} aria-labelledby="basic-info">
            <h2 id="basic-info" className="text-2xl md:text-3xl font-bold mb-5">{page.basicInfoTitle}</h2>
            <dl className="rounded-xl border px-5" style={borderStyle}>{page.basicInfo.map((row, i) => <div key={row.label} className={`grid gap-2 py-4 sm:grid-cols-3 ${i ? 'border-t' : ''}`} style={borderStyle}><dt className="font-semibold">{row.label}</dt><dd className="sm:col-span-2 leading-relaxed" style={{color: 'var(--text-secondary)'}}>{row.value}</dd></div>)}</dl>
          </section>}
        </div>)}
        <section className={sectionClass} style={borderStyle}>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">{page.faqTitle}</h2>
          {page.faq.map(item => <details key={item.question} className="py-4 border-b" style={borderStyle}><summary className="cursor-pointer font-semibold">{item.question}</summary><p className="mt-3 leading-relaxed" style={{color: 'var(--text-secondary)'}}>{item.answer}</p><SourceLinks ids={item.sourceIds} /></details>)}
        </section>
        <nav className={sectionClass} style={borderStyle} aria-label={page.relatedTitle}>
          <h2 className="text-2xl font-bold mb-5">{page.relatedTitle}</h2>
          <ul className="flex flex-wrap gap-4">{page.related.map(link => <li key={link.path}><Link href={link.path} className="inline-block rounded-lg border px-4 py-3 underline underline-offset-4" style={borderStyle}>{link.label}</Link></li>)}</ul>
          <Link href={localizedPath(locale, '/blog')} className="inline-block mt-5 underline underline-offset-4">{t('blog')}</Link>
        </nav>
        <section className={sectionClass} style={borderStyle}>
          <h2 className="text-2xl font-bold mb-5">{page.sourceTitle}</h2>
          <ul className="space-y-3 text-sm leading-relaxed">{page.sources.map(id => <li key={id}><a className="underline underline-offset-4" href={nearbySources[id].url} target="_blank" rel="noopener noreferrer">{nearbySources[id].title}</a></li>)}</ul>
          <ul className="mt-6 space-y-3">{page.externalLinks.map(link => <li key={link.url}><a className="underline underline-offset-4" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul>
        </section>
      </article>
    </>
  );
}
