'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-10 border-t border-gold/15"
      style={{ backgroundColor: '#1A0507' }}
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-20">
              <Image src="/logo.png" alt="Villa Maria" fill sizes="80px" className="object-contain" />
            </div>
            <div>
              <p className="font-display text-cream text-2xl">Villa Maria</p>
              <p className="eyebrow text-[10px] tracking-[0.34em] -mt-0.5">{t.footer.tagline}</p>
            </div>
          </div>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.28em] text-cream/70">
            <li>
              <a href="#heritage" className="hover:text-gold transition-colors">
                {t.nav.heritage}
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-gold transition-colors">
                {t.nav.menu}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gold transition-colors">
                {t.nav.gallery}
              </a>
            </li>
            <li>
              <a href="#reserve" className="hover:text-gold transition-colors">
                {t.nav.reserve}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition-colors">
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        <div className="rule-gold mb-8" />

        <div className="flex flex-col-reverse md:flex-row gap-4 items-start md:items-center justify-between text-xs text-cream/45">
          <p>{year} {t.footer.rights.replace('©', '©')}</p>
          <p className="font-display italic text-cream/60">Designed in Amsterdam · Fired in Argentina.</p>
        </div>
      </div>
    </footer>
  );
}
