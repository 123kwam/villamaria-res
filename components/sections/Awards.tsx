'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export function Awards() {
  const { t } = useLocale();

  return (
    <section
      className="relative py-24 lg:py-32 border-t border-b border-gold/15"
      style={{
        background:
          'linear-gradient(180deg, var(--vm-burgundy-deep) 0%, #2A0509 100%)',
      }}
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 mb-14 lg:mb-20 items-end">
          <div>
            <p className="eyebrow mb-5">{t.awards.eyebrow}</p>
            <h2 className="display-lg font-display text-cream whitespace-pre-line italic">
              {t.awards.title}
            </h2>
          </div>
          <p className="text-cream/65 text-lg font-light leading-relaxed max-w-xl">
            {t.awards.lede}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
          {t.awards.items.map((badge, i) => (
            <motion.figure
              key={badge.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative h-32 w-32 lg:h-40 lg:w-40 mb-4 grayscale-[0.2] opacity-90 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  sizes="(min-width: 1024px) 160px, 128px"
                  quality={95}
                  className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                />
              </div>
              <figcaption className="text-[10px] uppercase tracking-[0.3em] text-cream/65 group-hover:text-gold transition-colors duration-300 max-w-[160px]">
                {badge.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
