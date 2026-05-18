'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { Button } from '@/components/ui/Button';

export function Events() {
  const { t } = useLocale();

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--vm-cream)' }}>
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <p className="eyebrow mb-6" style={{ color: 'var(--vm-burgundy)' }}>
            {t.events.eyebrow}
          </p>
          <h2 className="display-lg font-display whitespace-pre-line italic mb-8" style={{ color: 'var(--vm-burgundy-deep)' }}>
            {t.events.title}
          </h2>
          <p className="text-ink/70 text-lg font-light leading-relaxed max-w-md mb-10">
            {t.events.lede}
          </p>

          <div className="space-y-5 mb-10 max-w-md">
            <Row label="Capacity" value="Up to 60 guests · full buy-out" />
            <Row label="Private room" value="20 seated · 30 cocktail" />
            <Row label="Menus" value="Set parrillada · tasting · à la carte" />
            <Row label="Cellar" value="120+ Argentine wines" />
          </div>

          <Button as="a" href="mailto:events@restaurantvillamaria.nl" variant="primary">
            {t.events.cta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative aspect-[4/5] max-w-lg ml-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1400&q=80"
            alt="Private dining room"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy-deep/80 to-transparent p-8">
            <p className="font-display italic text-cream text-2xl">“The back room is where the year’s best dinners happen.”</p>
            <p className="text-gold text-xs uppercase tracking-[0.28em] mt-3">— Het Parool</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-ink/10">
      <span className="text-[10px] uppercase tracking-[0.28em] text-burgundy">{label}</span>
      <span className="text-ink/85 font-light">{value}</span>
    </div>
  );
}
