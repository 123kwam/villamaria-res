'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { LOCALES, Locale } from '@/lib/i18n/dictionaries';

export function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#heritage', label: t.nav.heritage },
    { href: '#menu', label: t.nav.menu },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reserve', label: t.nav.reserve },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-burgundy-deep/85 backdrop-blur-md border-b border-gold/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-10 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Villa Maria home">
          <div className="relative h-11 w-16 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Villa Maria"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:block leading-tight">
            <div className="font-display text-xl text-cream tracking-wide">Villa Maria</div>
            <div className="eyebrow text-[10px] tracking-[0.36em] -mt-0.5">Argentine Steakhouse</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.28em] text-cream/85 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-1 text-[11px] uppercase tracking-[0.24em]">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-cream/30">·</span>}
                <button
                  onClick={() => setLocale(l as Locale)}
                  className={`px-1 transition-colors duration-200 ${
                    locale === l ? 'text-gold' : 'text-cream/55 hover:text-cream'
                  }`}
                  aria-label={`Switch to ${l}`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <a
            href="#reserve"
            className="hidden sm:inline-flex items-center gap-2 border border-gold/60 text-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] hover:bg-gold hover:text-burgundy-deep transition-all duration-300"
          >
            {t.nav.cta}
          </a>

          <button
            className="lg:hidden text-cream"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-burgundy-deep border-t border-gold/15 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-xs uppercase tracking-[0.28em] text-cream hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-cream/10 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l as Locale)}
                  className={`px-1 ${locale === l ? 'text-gold' : 'text-cream/55'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
