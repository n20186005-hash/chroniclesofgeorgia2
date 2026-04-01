'use client';
import { useTranslations } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('map');

  return (
    <section id="map" className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('address')}
        </p>

        <div className="map-container rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.8702700992676!2d13.57296797701293!3d42.85447237115122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331fd11b4d4b447%3A0x4c5d14fff6ec287b!2sPiazza%20del%20Popolo%2C%20Ascoli%20Piceno%2C%20AP!5e0!3m2!1sen!2sus!4v1774421641697!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://maps.app.goo.gl/ZzzAahVcrVHDG3ug6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
          </a>
        </div>
      </div>
    </section>
  );
}
