'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, ArrowUpRight } from 'lucide-react';
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

          {/* Exterior + wayfinding card */}
          <a
            href="https://www.google.com/maps/place/Lange+Leidsedwarsstraat+45,+1017+NG+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] border border-gold/20 overflow-hidden block"
            aria-label="Open Villa Maria on Google Maps"
          >
            <Image
              src="/photos/exterior-facade.jpg"
              alt="Villa Maria facade on Lange Leidsedwarsstraat — number 45, terrace tables outside"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              quality={90}
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 via-burgundy-deep/15 to-burgundy-deep/30" />
            <div className="absolute top-6 right-6 inline-flex items-center gap-2 bg-gold/95 text-burgundy-deep px-3 py-2 text-[10px] uppercase tracking-[0.28em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Open in maps <ArrowUpRight size={14} />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-burgundy-deep/95 backdrop-blur-sm border border-gold/20 p-5 z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                Lange Leidsedwarsstraat 45
              </p>
              <p className="font-display text-cream text-xl italic">
                A short walk from Leidseplein.
              </p>
            </div>
          </a>
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
