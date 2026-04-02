'use client';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('nav');
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
          <a href="#intro" className="hover:opacity-70 transition-opacity">{t('home')}</a>
          <a href="#gallery" className="hover:opacity-70 transition-opacity">{t('gallery')}</a>
          <a href="#reviews" className="hover:opacity-70 transition-opacity">{t('reviews')}</a>
          <a href="#guide" className="hover:opacity-70 transition-opacity">{t('guide')}</a>
          
          {/* Blog Dropdown */}
          <div className="relative blog-dropdown">
            <button
              onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
              className="hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              {t('blog')}
              <svg 
                className={`w-3 h-3 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {blogDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg py-2" 
                   style={{ 
                     background: 'var(--bg-card)', 
                     border: '1px solid var(--border-color)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <Link 
                  href="/blog/history" 
                  className="block px-4 py-2 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setBlogDropdownOpen(false)}
                >
                  {t('history')}
                </Link>
                <Link 
                  href="/blog/architecture" 
                  className="block px-4 py-2 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setBlogDropdownOpen(false)}
                >
                  {t('architecture')}
                </Link>
                <Link 
                  href="/blog/travel-tips" 
                  className="block px-4 py-2 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setBlogDropdownOpen(false)}
                >
                  {t('travel-tips')}
                </Link>
                <Link 
                  href="/blog/photography" 
                  className="block px-4 py-2 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setBlogDropdownOpen(false)}
                >
                  {t('photography')}
                </Link>
              </div>
            )}
          </div>
          
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