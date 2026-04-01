'use client';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight" style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}>
          Piazza del Popolo
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}>
          <a href="#intro" className="hover:opacity-70 transition-opacity">{t('home')}</a>
          <a href="#gallery" className="hover:opacity-70 transition-opacity">{t('gallery')}</a>
          <a href="#reviews" className="hover:opacity-70 transition-opacity">{t('reviews')}</a>
          <a href="#guide" className="hover:opacity-70 transition-opacity">{t('guide')}</a>
          <a href="#map" className="hover:opacity-70 transition-opacity">{t('map')}</a>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
