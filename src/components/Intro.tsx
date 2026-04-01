'use client';
import { useTranslations } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const highlights = t.raw('highlights') as string[];

  return (
    <section id="intro" className="section-spacing">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>
        <ul className="space-y-4">
          {highlights.map((item: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
