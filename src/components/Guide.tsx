'use client';
import { useTranslations } from 'next-intl';

export default function Guide() {
  const t = useTranslations('guide');
  const whatInsideItems = t.raw('whatInside.items') as string[];
  const tipsItems = t.raw('tips.items') as string[];
  const compHeaders = t.raw('comparison.headers') as string[];
  const compRows = t.raw('comparison.rows') as string[][];

  return (
    <section id="guide" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Visit Duration */}
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('visitDuration.title')}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('visitDuration.text')}
            </p>
          </div>

          {/* Worth It */}
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('worthIt.title')}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('worthIt.text')}
            </p>
          </div>
        </div>

        {/* What Inside */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('whatInside.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatInsideItems.map((item: string, i: number) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                <span className="text-lg">
                  {['\u{1F3DB}\uFE0F', '\u26EA', '\u2615', '\u{1F3D7}\uFE0F', '\u{1F35D}'][i] || '\u{1F4CD}'}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('tips.title')}
          </h3>
          <ol className="space-y-3">
            {tipsItems.map((tip: string, i: number) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Comparison Table */}
        <div>
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('comparison.title')}
          </h3>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  {compHeaders.map((h: string, i: number) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((row: string[], i: number) => (
                  <tr key={i}>
                    {row.map((cell: string, j: number) => (
                      <td key={j} className={j === 0 ? 'font-medium' : ''}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
