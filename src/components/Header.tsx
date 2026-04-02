'use client';
import { useTranslations, useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { defaultLocale } from '@/i18n/config';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (blogDropdownOpen && !(event.target as Element).closest('.blog-dropdown')) {
        setBlogDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [blogDropdownOpen]);

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
        <Link href="/" className="text-lg font-semibold tracking-tight" style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}>
          Chronicles of Georgia
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}>
          <a href={`${prefix}/#intro`} className="hover:opacity-70 transition-opacity">{t('home')}</a>
          <a href={`${prefix}/#gallery`} className="hover:opacity-70 transition-opacity">{t('gallery')}</a>
          <a href={`${prefix}/#reviews`} className="hover:opacity-70 transition-opacity">{t('reviews')}</a>
          <a href={`${prefix}/#guide`} className="hover:opacity-70 transition-opacity">{t('guide')}</a>
          
          <Link href={`${prefix}/blog`} className="hover:opacity-70 transition-opacity">
            {t('blog')}
          </Link>
          
          <a href={`${prefix}/#map`} className="hover:opacity-70 transition-opacity">{t('map')}</a>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}