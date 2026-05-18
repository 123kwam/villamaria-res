'use client';

import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
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
              href="https://www.google.com/maps/place/Lange+Leidsedwarsstraat+45,+1017+NG+Amsterdam"
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
                href={t.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-cream/20 px-4 h-11 hover:border-gold hover:text-gold transition-colors text-cream/70 text-xs uppercase tracking-[0.28em]"
                aria-label="Follow Villa Maria on Instagram"
              >
                <Instagram size={16} />
                <span>villa.maria.steakhouse</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] border border-gold/20 overflow-hidden">
            <iframe
              title="Villa Maria location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.8780%2C52.3625%2C4.8845%2C52.3660&layer=mapnik&marker=52.3640%2C4.8813"
              className="absolute inset-0 w-full h-full"
              style={{ filter: 'invert(0.92) hue-rotate(180deg) saturate(0.7)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-burgundy-deep/30" />
            <div className="absolute bottom-6 left-6 right-6 bg-burgundy-deep/95 backdrop-blur-sm border border-gold/20 p-5 z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Lange Leidsedwarsstraat 45</p>
              <p className="font-display text-cream text-xl italic">A short walk from Leidseplein.</p>
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
  const content = (
    <p className="text-cream font-light text-lg lg:text-xl leading-snug">
      {lines.map((l) => (
        <span key={l} className="block">
          {l}
        </span>
      ))}
    </p>
  );

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.32em] text-gold">{label}</span>
      </div>
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:text-gold transition-colors block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
