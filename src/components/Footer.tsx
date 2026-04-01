'use client';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = locale === 'it' ? '' : `/${locale}`;

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('support')}{' '}
              <a
                href="mailto:claritleonelmnicol@gmail.com"
                className="underline"
                style={{ color: 'var(--accent)' }}
              >
                claritleonelmnicol@gmail.com
              </a>
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
              {t('rights')}
            </p>
          </div>
          <div className="flex gap-6 text-xs" style={{ color: 'var(--text-muted)' }}>
            <a href={`${prefix}/privacy-policy`} className="hover:underline">{t('privacy')}</a>
            <a href={`${prefix}/terms-of-service`} className="hover:underline">{t('terms')}</a>
            <a href={`${prefix}/cookie-settings`} className="hover:underline">{t('cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
