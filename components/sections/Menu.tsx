'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';

type CategoryKey = 'parrilla' | 'entradas' | 'sides' | 'wines' | 'desserts';

export function Menu() {
  const { t } = useLocale();
  const [active, setActive] = useState<CategoryKey>('parrilla');
  const cats = t.menu.sections;
  const items = cats[active].items;

  const order: CategoryKey[] = ['parrilla', 'entradas', 'sides', 'wines', 'desserts'];

  return (
    <section
      id="menu"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--vm-burgundy-deep)' }}
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 mb-16 lg:mb-24">
          <div>
            <p className="eyebrow mb-6">{t.menu.eyebrow}</p>
            <h2 className="display-lg font-display text-cream">{t.menu.title}</h2>
          </div>
          <p className="text-cream/70 text-lg lg:text-xl font-light max-w-xl lg:mt-auto leading-relaxed">
            {t.menu.lede}
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-14 lg:mb-20 border-b border-gold/15 pb-4">
          {order.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`relative pb-3 text-xs uppercase tracking-[0.3em] transition-colors duration-300 ${
                active === key ? 'text-gold' : 'text-cream/55 hover:text-cream'
              }`}
            >
              <span className="block">{cats[key].name}</span>
              <span className="block mt-1 font-display italic text-[10px] tracking-normal normal-case opacity-70">
                {cats[key].translation}
              </span>
              {active === key && (
                <motion.span
                  layoutId="menu-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-x-16 gap-y-2"
          >
            {items.map((item, i) => (
              <MenuItem key={`${active}-${i}`} item={item} index={i} signature={active === 'parrilla' && i === 0} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 flex items-center gap-6">
          <div className="rule-gold flex-1" />
          <p className="text-[10px] uppercase tracking-[0.36em] text-gold/70 text-center font-light">
            Prices in EUR · 6% service added for groups of 6+ · Allergens on request
          </p>
          <div className="rule-gold flex-1" />
        </div>
      </div>
    </section>
  );
}

type Item = {
  name: string;
  note: string;
  detail?: string;
  price: string;
};

function MenuItem({ item, index, signature }: { item: Item; index: number; signature?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      className="group relative border-b border-cream/10 py-7 cursor-default"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-cream group-hover:text-gold-bright transition-colors duration-300 flex items-center gap-3">
          {item.name}
          {signature && (
            <Flame size={16} className="text-gold animate-shimmer" aria-label="House signature" />
          )}
        </h3>
        <div className="flex-1 mx-3 border-b border-dotted border-cream/15 self-end mb-2" />
        <span className="font-numerals text-gold text-xl md:text-2xl shrink-0">{item.price}</span>
      </div>
      <p className="text-xs uppercase tracking-[0.22em] text-cream/55 mt-2">{item.note}</p>
      <AnimatePresence>
        {open && item.detail && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-cream/70 font-light max-w-prose mt-3 leading-relaxed overflow-hidden"
          >
            {item.detail}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
