'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const IMAGES = [
  {
    src: '/photos/food-tenderloin.jpg',
    alt: 'Tenderloin plated in low light',
    span: 'md:col-span-2 md:row-span-2',
  },
  { src: '/photos/bar.jpg', alt: 'The bar — hanging glassware and bottles', span: '' },
  { src: '/photos/food-parrillada.jpg', alt: 'Parrillada with grilled corn for two', span: '' },
  {
    src: '/photos/room-long.jpg',
    alt: 'Long view of the dining room and bar',
    span: 'md:col-span-2',
  },
  { src: '/photos/wine-wall.jpg', alt: 'Villa Maria wine wall display', span: '' },
  { src: '/photos/food-skewer.jpg', alt: 'Beef skewer with charred peppers and onion', span: '' },
  {
    src: '/photos/room-arches.jpg',
    alt: 'Red arches, cowhide booths, the bar beyond',
    span: 'md:col-span-2',
  },
  { src: '/photos/food-fish.jpg', alt: 'Grilled fish plated with garnish', span: '' },
  { src: '/photos/food-surf-turf.jpg', alt: 'Surf and turf — steak with grilled prawns', span: '' },
  {
    src: '/photos/room-canal-art.jpg',
    alt: 'Dining room with Amsterdam canal photograph',
    span: 'md:col-span-2',
  },
  { src: '/photos/food-dessert.jpg', alt: 'Dessert plate with dulce-de-leche flan', span: '' },
  { src: '/photos/room-cowhide.jpg', alt: 'Cowhide booths beneath warm pendant lamps', span: '' },
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
                src={IMAGES[lightbox].src}
                alt={IMAGES[lightbox].alt}
                fill
                sizes="80vw"
                quality={90}
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
