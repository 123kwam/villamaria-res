'use client';

import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export function Contact() {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40"
      style={{ backgroundColor: 'var(--vm-burgundy-deep)' }}
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 lg:mb-20">
          <p className="eyebrow mb-6">{t.contact.eyebrow}</p>
          <h2 className="display-lg font-display text-cream">{t.contact.title}</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="space-y-10">
            <Block
              icon={<MapPin size={18} className="text-gold" />}
              label="Address"
              lines={t.contact.address.split('\n')}
            />
            <Block
              icon={<Phone size={18} className="text-gold" />}
              label="Phone"
              lines={[t.contact.phone]}
              href={`tel:${t.contact.phone.replace(/\s+/g, '')}`}
            />
            <Block
              icon={<Mail size={18} className="text-gold" />}
              label="Email"
              lines={[t.contact.email]}
              href={`mailto:${t.contact.email}`}
            />

            <div>
              <div className="flex items-center gap-3 text-gold mb-4">
                <div className="h-[1px] w-8 bg-gold/60" />
                <span className="text-[10px] uppercase tracking-[0.32em]">Hours</span>
              </div>
              <ul className="space-y-2 text-cream/80 font-light text-[15px]">
                {t.contact.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                className="w-11 h-11 inline-flex items-center justify-center border border-cream/20 hover:border-gold hover:text-gold transition-colors text-cream/70"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                className="w-11 h-11 inline-flex items-center justify-center border border-cream/20 hover:border-gold hover:text-gold transition-colors text-cream/70"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] border border-gold/20 overflow-hidden">
            <iframe
              title="Villa Maria location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.882%2C52.367%2C4.892%2C52.373&layer=mapnik&marker=52.370%2C4.887"
              className="absolute inset-0 w-full h-full grayscale-[0.6] contrast-90"
              style={{ filter: 'invert(0.92) hue-rotate(180deg) saturate(0.7)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-burgundy-deep/30" />
            <div className="absolute bottom-6 left-6 right-6 bg-burgundy-deep/95 backdrop-blur-sm border border-gold/20 p-5 z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Prinsengracht</p>
              <p className="font-display text-cream text-xl italic">A short walk from Westerkerk.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({
  icon,
  label,
  lines,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  href?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.32em] text-gold">{label}</span>
      </div>
      {href ? (
        <a
          href={href}
          className="text-cream font-light text-lg lg:text-xl leading-snug hover:text-gold transition-colors"
        >
          {lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </a>
      ) : (
        <p className="text-cream font-light text-lg lg:text-xl leading-snug">
          {lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
