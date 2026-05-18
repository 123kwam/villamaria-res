'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const FlowArt = dynamic(() => import('@/components/ui/story-scroll'), { ssr: false });
const FlowSection = dynamic(
  () => import('@/components/ui/story-scroll').then((m) => ({ default: m.FlowSection })),
  { ssr: false },
);

function PanelImage({
  src,
  alt,
  borderClass = 'border-gold/30',
}: {
  src: string;
  alt: string;
  borderClass?: string;
}) {
  return (
    <div className="pointer-events-none hidden lg:block absolute right-[4vw] top-1/2 -translate-y-1/2 w-[30%] aspect-[3/4] z-10 shadow-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="32vw"
        quality={88}
        className="object-cover"
      />
      <div className={`absolute inset-0 border ${borderClass}`} />
      <div className="absolute -inset-2 border border-gold/10 pointer-events-none" />
    </div>
  );
}

export function Heritage() {
  const { t } = useLocale();
  const p = t.story;

  return (
    <section id="heritage" className="relative">
      <FlowArt aria-label={p.title}>
        {/* INTRO */}
        <FlowSection
          aria-label={p.eyebrow}
          style={{ backgroundColor: 'var(--vm-burgundy)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-cream/85">{p.eyebrow}</p>
          <hr className="my-[2vw] border-none border-t border-cream/30 lg:max-w-[60%]" />
          <h2 className="display-xl font-display whitespace-pre-line lg:max-w-[65%]">{p.title}</h2>
          <hr className="my-[2vw] border-none border-t border-cream/30 lg:max-w-[60%]" />
          <p className="mt-auto max-w-[55ch] text-[clamp(1rem,2vw,1.6rem)] leading-relaxed font-light text-cream/85">
            {p.lede}
          </p>
          <PanelImage
            src="/photos/hero-grill.jpg"
            alt="Chef tending the parrilla — meat and shrimp on the embers"
          />
        </FlowSection>

        {/* ORIGIN — Selim's discovery (quote is the visual) */}
        <FlowSection
          aria-label={p.panels.origin.tag}
          style={{ backgroundColor: 'var(--vm-charcoal)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-gold">{p.panels.origin.tag}</p>
          <hr className="my-[2vw] border-none border-t border-gold/35" />
          <h3 className="display-xl font-display whitespace-pre-line italic">{p.panels.origin.h}</h3>
          <hr className="my-[2vw] border-none border-t border-gold/35" />
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-12 items-center">
            <p className="max-w-[50ch] text-[clamp(1rem,1.6vw,1.4rem)] leading-relaxed font-light text-cream/80">
              {p.panels.origin.body}
            </p>
            <div className="relative hidden lg:block w-[22vw] aspect-[3/4] shadow-2xl">
              <Image
                src="/photos/bar.jpg"
                alt="The Villa Maria bar — bottles and hanging glassware"
                fill
                sizes="22vw"
                quality={88}
                className="object-cover"
              />
              <div className="absolute inset-0 border border-gold/30" />
            </div>
            <blockquote className="font-display italic text-gold/90 text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug max-w-[40ch] lg:text-right">
              {p.panels.origin.quote}
              <footer className="mt-4 not-italic text-[10px] uppercase tracking-[0.32em] text-cream/60 font-sans">
                — Selim, Owner
              </footer>
            </blockquote>
          </div>
        </FlowSection>

        {/* PRINCIPLES — three pillars */}
        <FlowSection
          aria-label={p.panels.principles.tag}
          style={{ backgroundColor: 'var(--vm-cream)', color: 'var(--vm-charcoal)' }}
        >
          <p className="eyebrow" style={{ color: 'var(--vm-burgundy)' }}>
            {p.panels.principles.tag}
          </p>
          <hr className="my-[2vw] border-none border-t lg:max-w-[60%]" style={{ borderColor: 'rgba(26,17,16,0.18)' }} />
          <h3
            className="display-xl font-display whitespace-pre-line italic lg:max-w-[65%]"
            style={{ color: 'var(--vm-burgundy)' }}
          >
            {p.panels.principles.h}
          </h3>
          <hr className="my-[2vw] border-none border-t lg:max-w-[60%]" style={{ borderColor: 'rgba(26,17,16,0.18)' }} />
          <p
            className="max-w-[60ch] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-light italic font-display lg:max-w-[55%]"
            style={{ color: 'var(--vm-charcoal)' }}
          >
            {p.panels.principles.body}
          </p>
          <hr className="my-[2vw] border-none border-t" style={{ borderColor: 'rgba(26,17,16,0.18)' }} />
          <div className="grid sm:grid-cols-3 gap-[3vw]">
            {p.panels.principles.pillars.map((pillar) => (
              <div key={pillar.label}>
                <p className="text-[10px] uppercase tracking-[0.32em] mb-3" style={{ color: 'var(--vm-burgundy)' }}>
                  {pillar.label}
                </p>
                <p
                  className="font-display text-[clamp(1.4rem,2.2vw,2rem)] leading-snug"
                  style={{ color: 'var(--vm-charcoal)' }}
                >
                  {pillar.value}
                </p>
              </div>
            ))}
          </div>
          <PanelImage
            src="/photos/food-steak-topdown.jpg"
            alt="Charcoal-grilled steak, top-down with salad and fries"
            borderClass="border-burgundy/40"
          />
        </FlowSection>

        {/* FIRE */}
        <FlowSection
          aria-label={p.panels.fire.tag}
          style={{ backgroundColor: 'var(--vm-ember)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-cream/85">{p.panels.fire.tag}</p>
          <hr className="my-[2vw] border-none border-t border-cream/40 lg:max-w-[60%]" />
          <h3 className="display-xl font-display whitespace-pre-line lg:max-w-[65%]">{p.panels.fire.h}</h3>
          <hr className="my-[2vw] border-none border-t border-cream/40 lg:max-w-[60%]" />
          <p className="max-w-[55ch] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-light text-cream/90">
            {p.panels.fire.body}
          </p>
          <hr className="my-[2vw] border-none border-t border-cream/40 lg:max-w-[60%]" />
          <div className="flex flex-wrap gap-[3vw] lg:max-w-[60%]">
            {p.panels.fire.stats.map((stat) => (
              <div key={stat.label} className="min-w-[180px] flex-1">
                <p className="font-numerals text-cream text-[clamp(2.5rem,5vw,4rem)] leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/75">{stat.label}</p>
              </div>
            ))}
          </div>
          <PanelImage
            src="/photos/food-parrillada.jpg"
            alt="Charcoal parrillada with grilled corn and meats"
            borderClass="border-cream/40"
          />
        </FlowSection>

        {/* ROOM */}
        <FlowSection
          aria-label={p.panels.room.tag}
          style={{ backgroundColor: 'var(--vm-burgundy-deep)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-gold">{p.panels.room.tag}</p>
          <hr className="my-[2vw] border-none border-t border-gold/35 lg:max-w-[60%]" />
          <h3 className="display-xl font-display whitespace-pre-line italic lg:max-w-[65%]">{p.panels.room.h}</h3>
          <hr className="my-[2vw] border-none border-t border-gold/35 lg:max-w-[60%]" />
          <p className="max-w-[55ch] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-light text-cream/85">
            {p.panels.room.body}
          </p>
          <hr className="my-[2vw] border-none border-t border-gold/35 lg:max-w-[60%]" />
          <p className="mt-auto max-w-[40ch] lg:max-w-[55%] font-display italic text-[clamp(1.25rem,2.5vw,2.2rem)] leading-snug text-gold/90">
            “The kind of place you leave reluctantly.”
          </p>
          <PanelImage
            src="/photos/room-arches.jpg"
            alt="The red-arch booths and cowhide seating at Villa Maria"
          />
        </FlowSection>

        {/* INVITE */}
        <FlowSection
          aria-label={p.panels.invite.tag}
          style={{ backgroundColor: 'var(--vm-burgundy)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-gold">{p.panels.invite.tag}</p>
          <hr className="my-[2vw] border-none border-t border-gold/40 lg:max-w-[60%]" />
          <h3 className="display-xl font-display whitespace-pre-line lg:max-w-[65%]">{p.panels.invite.h}</h3>
          <hr className="my-[2vw] border-none border-t border-gold/40 lg:max-w-[60%]" />
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end lg:max-w-[60%]">
            <p className="max-w-[50ch] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-light text-cream/85">
              {p.panels.invite.body}
            </p>
            <div className="flex md:justify-end">
              <a
                href="#reserve"
                className="group inline-flex items-center gap-3 border border-gold text-gold px-7 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-burgundy-deep transition-all duration-300"
              >
                {p.panels.invite.cta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
          <PanelImage
            src="/photos/room-table-intimate.jpg"
            alt="An intimate two-top at Villa Maria, set and ready"
          />
        </FlowSection>
      </FlowArt>
    </section>
  );
}
