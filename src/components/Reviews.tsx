'use client';
import { useTranslations } from 'next-intl';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= count ? 'var(--star-color)' : 'none'}
          stroke="var(--star-color)"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const t = useTranslations('reviews');
  const items = t.raw('items') as Array<{
    name: string;
    date: string;
    stars: number;
    text: string;
  }>;

  return (
    <section id="reviews" className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p
          className="text-sm leading-relaxed mb-10 max-w-3xl"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('declaration')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((review, i) => (
            <div key={i} className="review-card">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {review.date}
                  </p>
                </div>
                <StarRating count={review.stars} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* More reviews link */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/ZzzAahVcrVHDG3ug6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            {t('moreLink')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
