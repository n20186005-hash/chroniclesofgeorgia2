'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const keywords = t.raw('keywords') as string[];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/gallery/images (1).jpg')`,
        }}
      />
      <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-up animate-delay-1">
          {t('subtitle')}
        </p>

        {/* Rating & Hours */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 animate-fade-in-up animate-delay-2">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={star <= 4 ? '#fbbf24' : 'none'}
                  stroke="#fbbf24"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium">{t('rating')} {t('ratingCount')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {t('openHours')}
          </div>
        </div>

        {/* Google Maps link */}
        <a
          href="https://maps.app.goo.gl/ZzzAahVcrVHDG3ug6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors mb-8 animate-fade-in-up animate-delay-3"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {t('openMaps')}
        </a>

        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-2 animate-fade-in-up animate-delay-4">
          {keywords.map((kw: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
          <polyline points="7 13 12 18 17 13" />
          <polyline points="7 6 12 11 17 6" />
        </svg>
      </div>
    </section>
  );
}
