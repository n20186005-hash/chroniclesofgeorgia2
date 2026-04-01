'use client';
import { useTranslations } from 'next-intl';

export default function Sources() {
  const t = useTranslations('sources');

  return (
    <section className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-2xl font-bold mb-6 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {t('text')}
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {t('disclaimer')}
        </p>
      </div>
    </section>
  );
}
