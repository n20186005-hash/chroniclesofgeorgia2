'use client';
import { useTranslations } from 'next-intl';

export default function VisitorTestimonials() {
  const t = useTranslations('visitorTestimonials');
  const testimonials = t.raw('items') as Array<{
    author: string;
    title: string;
    content: string;
    nationality: string;
  }>;

  return (
    <section id="visitor-testimonials" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="mb-4">
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {testimonial.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span 
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    @{testimonial.author}
                  </span>
                  <span 
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ 
                      background: 'var(--bg-secondary)', 
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {testimonial.nationality}
                  </span>
                </div>
              </div>
              
              <div 
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: 'var(--text-secondary)' }}
              >
                {testimonial.content}
              </div>
              
              <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p 
            className="text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('footer')}
          </p>
        </div>
      </div>
    </section>
  );
}