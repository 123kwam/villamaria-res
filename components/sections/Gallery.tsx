'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1600&q=80',
    alt: 'Steak on the grill',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sliced ribeye plated',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80',
    alt: 'Restaurant interior',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dining room at night',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wine glass',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wine bottles',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Grill fire close-up',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bar service',
    span: '',
  },
];

export function Gallery() {
  const { t } = useLocale();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-28 lg:py-40"
      style={{ backgroundColor: 'var(--vm-charcoal)' }}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 mb-14 lg:mb-20 items-end">
          <div>
            <p className="eyebrow mb-6">{t.gallery.eyebrow}</p>
            <h2 className="display-lg font-display text-cream whitespace-pre-line">
              {t.gallery.title}
            </h2>
          </div>
          <p className="text-cream/65 text-lg font-light max-w-md lg:justify-self-end leading-relaxed">
            {t.gallery.lede}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[240px]">
          {IMAGES.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden ${img.span}`}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-burgundy-deep/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-12"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors z-10"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={IMAGES[lightbox].src.replace('w=1200', 'w=2000').replace('w=1600', 'w=2400')}
                alt={IMAGES[lightbox].alt}
                fill
                sizes="80vw"
                className="object-contain"
              />
              <p className="absolute bottom-[-2.5rem] left-0 text-xs uppercase tracking-[0.32em] text-cream/70">
                {IMAGES[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
