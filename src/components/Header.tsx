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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        <Link href={prefix || '/'} className="text-sm sm:text-lg font-semibold tracking-tight leading-tight min-w-0 max-w-[40%] xl:max-w-none" style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}>
          Chronicles of Georgia
        </Link>
        <nav className="hidden xl:flex items-center gap-5 text-sm" style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}>
          <a href={`${prefix}/#intro`} className="hover:opacity-70 transition-opacity">{t('home')}</a>
          <a href={`${prefix}/#gallery`} className="hover:opacity-70 transition-opacity">{t('gallery')}</a>
          <a href={`${prefix}/#reviews`} className="hover:opacity-70 transition-opacity">{t('reviews')}</a>
          <a href={`${prefix}/#guide`} className="hover:opacity-70 transition-opacity">{t('guide')}</a>
          
          <Link href={`${prefix}/blog`} className="hover:opacity-70 transition-opacity">
            {t('blog')}
          </Link>
          
          <a href={`${prefix}/#nearby`} className="hover:opacity-70 transition-opacity">{t('nearby')}</a>
          <a href={`${prefix}/#map`} className="hover:opacity-70 transition-opacity">{t('map')}</a>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
          <details className="relative xl:hidden">
            <summary className="list-none flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer" aria-label={t('menu')} style={{color: scrolled ? 'var(--text-primary)' : '#fff'}}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </summary>
            <nav aria-label={t('menu')} className="absolute right-0 top-full mt-2 w-64 max-w-[85vw] rounded-xl shadow-lg p-3 grid gap-1 text-sm" style={{background: 'var(--bg-card)', border: '1px solid var(--border-color)'}}>
              <a href={`${prefix}/#intro`} className="rounded-lg px-3 py-3">{t('home')}</a>
              <a href={`${prefix}/#gallery`} className="rounded-lg px-3 py-3">{t('gallery')}</a>
              <a href={`${prefix}/#reviews`} className="rounded-lg px-3 py-3">{t('reviews')}</a>
              <a href={`${prefix}/#guide`} className="rounded-lg px-3 py-3">{t('guide')}</a>
              <Link href={`${prefix}/blog`} className="rounded-lg px-3 py-3">{t('blog')}</Link>
              <a href={`${prefix}/#nearby`} className="rounded-lg px-3 py-3">{t('nearby')}</a>
              <a href={`${prefix}/#map`} className="rounded-lg px-3 py-3">{t('map')}</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
