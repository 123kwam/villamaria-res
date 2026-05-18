'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { Tag } from '@/components/ui/vapour-text-effect';

const VaporizeTextCycle = dynamic(() => import('@/components/ui/vapour-text-effect'), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const { t } = useLocale();
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('lg');

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setSize(w < 640 ? 'sm' : w < 1024 ? 'md' : 'lg');
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const fontSize = size === 'sm' ? '80px' : size === 'md' ? '140px' : '220px';

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden grain"
      style={{
        background:
          'radial-gradient(ellipse 90% 70% at 50% 100%, #A8302A 0%, #6B1A1F 35%, #3D0E11 75%, #1A0507 100%)',
      }}
    >
      {/* hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-transparent to-burgundy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/70 via-transparent to-burgundy-deep/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 pt-32 pb-20 lg:px-10 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-8"
        >
          {t.hero.eyebrow}
        </motion.p>

        {/* Vaporize text cycle */}
        <div className="relative h-[clamp(8rem,18vw,16rem)] w-full mb-4">
          <VaporizeTextCycle
            texts={[...t.hero.cycle]}
            font={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize,
              fontWeight: 500,
            }}
            color="rgb(245, 239, 226)"
            spread={4}
            density={6}
            animation={{ vaporizeDuration: 1.8, fadeInDuration: 1.1, waitDuration: 1.5 }}
            direction="left-to-right"
            alignment="left"
            tag={Tag.H1}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end"
        >
          <h2 className="font-display italic text-cream text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-xl whitespace-pre-line">
            {t.hero.title}
          </h2>
          <div className="max-w-md">
            <p className="text-cream/75 text-base lg:text-lg leading-relaxed mb-8 font-light">
              {t.hero.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#reserve" variant="primary">
                {t.hero.primary}
              </Button>
              <Button as="a" href="#menu" variant="ghost" arrow={false}>
                {t.hero.secondary}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom rule */}
        <div className="mt-16 lg:mt-20 flex items-center gap-6">
          <div className="rule-gold flex-1" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold/80">
            Prinsengracht · Amsterdam
          </span>
          <div className="rule-gold flex-1" />
        </div>
      </div>
    </section>
  );
}
