'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { locales } from '@/i18n/config';

const localeNames: Record<string, string> = {
  'it': 'Italiano',
  'en': 'English',
  'fr': 'Français',
  'zh-hant': '繁體中文',
};

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix from pathname
    let path = pathname;
    for (const l of locales) {
      if (path.startsWith(`/${l}/`) || path === `/${l}`) {
        path = path.slice(`/${l}`.length) || '/';
        break;
      }
    }
    const newPath = newLocale === 'it' ? path : `/${newLocale}${path}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
        style={{
          color: 'var(--text-secondary)',
          background: 'transparent',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {localeNames[locale] || locale}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 py-1 rounded-lg shadow-lg z-50 min-w-[140px]"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
          }}
        >
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className="w-full text-left px-4 py-2 text-sm transition-colors"
              style={{
                color: l === locale ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: l === locale ? 600 : 400,
                background: l === locale ? 'var(--bg-secondary)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (l !== locale) e.currentTarget.style.background = 'var(--bg-secondary)';
              }}
              onMouseLeave={(e) => {
                if (l !== locale) e.currentTarget.style.background = 'transparent';
              }}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
