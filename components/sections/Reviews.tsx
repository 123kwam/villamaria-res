'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export function Reviews() {
  const { t } = useLocale();
  const items = t.reviews.items;
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  return (
    <section
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--vm-charcoal) 0%, var(--vm-burgundy-deep) 100%)',
      }}
    >
      <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="text-center mb-14 lg:mb-20">
          <p className="eyebrow mb-6">{t.reviews.eyebrow}</p>
          <h2 className="display-lg font-display text-cream italic">{t.reviews.title}</h2>
        </div>

        <div className="relative min-h-[280px] lg:min-h-[240px]">
          <Quote
            size={64}
            className="absolute -top-8 -left-2 text-gold/20"
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative pt-10 px-4 lg:px-12 text-center"
            >
              <blockquote className="font-display italic text-cream text-2xl md:text-3xl lg:text-4xl leading-snug max-w-3xl mx-auto">
                “{items[idx].quote}”
              </blockquote>
              <figcaption className="mt-10">
                <p className="text-gold uppercase tracking-[0.3em] text-xs">
                  {items[idx].author}
                </p>
                <p className="text-cream/55 mt-2 text-sm font-light">{items[idx].context}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="p-3 border border-cream/20 text-cream/70 hover:text-gold hover:border-gold transition-all duration-300"
            aria-label="Previous review"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-[2px] transition-all duration-300 ${
                  i === idx ? 'w-10 bg-gold' : 'w-5 bg-cream/30 hover:bg-cream/60'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 border border-cream/20 text-cream/70 hover:text-gold hover:border-gold transition-all duration-300"
            aria-label="Next review"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
