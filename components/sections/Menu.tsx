'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Leaf } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { MENU_CATEGORIES, MenuCategory } from '@/lib/i18n/dictionaries';

type Size = { label: string; price: string };
type Item = {
  name: string;
  note?: string;
  detail?: string;
  price?: string;
  sizes?: readonly Size[];
  veg?: boolean;
};

export function Menu() {
  const { t } = useLocale();
  const [active, setActive] = useState<MenuCategory>('grilledMeat');
  const cats = t.menu.sections;
  const section = cats[active];
  const items = section.items as readonly Item[];
  const intro = 'intro' in section ? (section as { intro?: string }).intro : undefined;

  return (
    <section
      id="menu"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--vm-burgundy-deep)' }}
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 mb-14 lg:mb-20">
          <div>
            <p className="eyebrow mb-6">{t.menu.eyebrow}</p>
            <h2 className="display-lg font-display text-cream">{t.menu.title}</h2>
          </div>
          <p className="text-cream/70 text-lg lg:text-xl font-light max-w-xl lg:mt-auto leading-relaxed">
            {t.menu.lede}
          </p>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex flex-wrap gap-x-7 gap-y-3 mb-12 lg:mb-16 border-b border-gold/15 pb-4"
        >
          {MENU_CATEGORIES.map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`relative pb-3 text-xs uppercase tracking-[0.28em] transition-colors duration-300 ${
                active === key ? 'text-gold' : 'text-cream/55 hover:text-cream'
              }`}
            >
              <span className="block whitespace-nowrap">{cats[key].name}</span>
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

        {/* Section intro (e.g. "Served with salad, fries, rice or jacket potato") */}
        {intro && (
          <AnimatePresence mode="wait">
            <motion.p
              key={`intro-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[11px] uppercase tracking-[0.32em] text-gold/80 mb-8 italic normal-case font-display"
            >
              {intro}
            </motion.p>
          </AnimatePresence>
        )}

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={
              active === 'grilledMeat'
                ? 'space-y-2'
                : 'grid md:grid-cols-2 gap-x-16 gap-y-2'
            }
          >
            {items.map((item, i) => (
              <MenuItemRow
                key={`${active}-${i}`}
                item={item}
                index={i}
                signature={active === 'grilledMeat' && i === 1}
                widePrice={active === 'grilledMeat' && !!item.sizes}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {active === 'grilledMeat' && (
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-cream/45">
            {t.menu.meatSizesHeader}
          </p>
        )}

        <div className="mt-20 flex items-center gap-6">
          <div className="rule-gold flex-1" />
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold/70 text-center font-light">
            {t.menu.footnote}
          </p>
          <div className="rule-gold flex-1" />
        </div>
      </div>
    </section>
  );
}

function MenuItemRow({
  item,
  index,
  signature,
  widePrice,
}: {
  item: Item;
  index: number;
  signature?: boolean;
  widePrice?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.035, 0.4), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      className="group relative border-b border-cream/10 py-6 cursor-default focus:outline-none focus:bg-cream/[0.02]"
    >
      <div className={`flex items-baseline gap-4 ${widePrice ? 'flex-col lg:flex-row lg:items-baseline' : ''}`}>
        <div className="flex items-baseline gap-3 min-w-0">
          <h3 className="font-display text-2xl md:text-3xl text-cream group-hover:text-gold-bright transition-colors duration-300 flex items-center gap-3">
            {item.name}
            {signature && (
              <Flame size={16} className="text-gold animate-shimmer" aria-label="House signature" />
            )}
            {item.veg && <Leaf size={14} className="text-emerald-300/70" aria-label="Vegetarian" />}
          </h3>
        </div>

        {!widePrice && (
          <>
            <div className="flex-1 mx-3 border-b border-dotted border-cream/15 self-end mb-2" />
            {item.price && (
              <span className="font-numerals text-gold text-xl md:text-2xl shrink-0">
                {item.price}
              </span>
            )}
          </>
        )}

        {widePrice && item.sizes && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-6 w-full lg:w-auto lg:ml-auto">
            {item.sizes.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-start lg:items-center border border-cream/10 px-3 py-2 hover:border-gold/40 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.28em] text-cream/55">{s.label}</span>
                <span className="font-numerals text-gold text-lg md:text-xl">{s.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {item.note && (
        <p className="text-xs uppercase tracking-[0.22em] text-cream/55 mt-2">{item.note}</p>
      )}

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
