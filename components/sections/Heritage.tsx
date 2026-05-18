'use client';

import dynamic from 'next/dynamic';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const FlowArt = dynamic(() => import('@/components/ui/story-scroll'), { ssr: false });
const FlowSection = dynamic(
  () => import('@/components/ui/story-scroll').then((m) => ({ default: m.FlowSection })),
  { ssr: false },
);

export function Heritage() {
  const { t } = useLocale();
  const p = t.heritage;

  return (
    <section id="heritage" className="relative">
      <FlowArt aria-label={p.title}>
        {/* INTRO */}
        <FlowSection
          aria-label={p.eyebrow}
          style={{ backgroundColor: 'var(--vm-burgundy)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-cream/85">{p.eyebrow}</p>
          <hr className="my-[2vw] border-none border-t border-cream/30" />
          <h2 className="display-xl font-display whitespace-pre-line">
            {p.title}
          </h2>
          <hr className="my-[2vw] border-none border-t border-cream/30" />
          <p className="mt-auto max-w-[55ch] text-[clamp(1rem,2vw,1.6rem)] leading-relaxed font-light text-cream/85">
            {p.lede}
          </p>
        </FlowSection>

        {/* ORIGIN */}
        <FlowSection
          aria-label={p.panels.origin.tag}
          style={{ backgroundColor: 'var(--vm-charcoal)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-gold">{p.panels.origin.tag}</p>
          <hr className="my-[2vw] border-none border-t border-gold/35" />
          <h3 className="display-xl font-display whitespace-pre-line italic">
            {p.panels.origin.h}
          </h3>
          <hr className="my-[2vw] border-none border-t border-gold/35" />
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <p className="max-w-[50ch] text-[clamp(1rem,1.6vw,1.4rem)] leading-relaxed font-light text-cream/80">
              {p.panels.origin.body}
            </p>
            <div className="flex justify-end">
              <div className="font-numerals text-gold text-[clamp(4rem,12vw,11rem)] leading-none">
                M.<span className="text-cream/30">23</span>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* FIRE */}
        <FlowSection
          aria-label={p.panels.fire.tag}
          style={{ backgroundColor: 'var(--vm-ember)', color: 'var(--vm-cream)' }}
          className="relative"
        >
          <p className="eyebrow text-cream/85">{p.panels.fire.tag}</p>
          <hr className="my-[2vw] border-none border-t border-cream/40" />
          <h3 className="display-xl font-display whitespace-pre-line">
            {p.panels.fire.h}
          </h3>
          <hr className="my-[2vw] border-none border-t border-cream/40" />
          <p className="max-w-[55ch] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-light text-cream/90">
            {p.panels.fire.body}
          </p>
          <hr className="my-[2vw] border-none border-t border-cream/40" />
          <div className="flex flex-wrap gap-[3vw]">
            {p.panels.fire.stats.map((stat) => (
              <div key={stat.label} className="min-w-[180px] flex-1">
                <p className="font-numerals text-cream text-[clamp(2.5rem,5vw,4rem)] leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* ROOM */}
        <FlowSection
          aria-label={p.panels.room.tag}
          style={{ backgroundColor: 'var(--vm-cream)', color: 'var(--vm-charcoal)' }}
        >
          <p className="eyebrow" style={{ color: 'var(--vm-burgundy)' }}>
            {p.panels.room.tag}
          </p>
          <hr className="my-[2vw] border-none border-t" style={{ borderColor: 'rgba(26,17,16,0.2)' }} />
          <h3 className="display-xl font-display whitespace-pre-line italic" style={{ color: 'var(--vm-burgundy)' }}>
            {p.panels.room.h}
          </h3>
          <hr className="my-[2vw] border-none border-t" style={{ borderColor: 'rgba(26,17,16,0.2)' }} />
          <p className="max-w-[55ch] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-light" style={{ color: 'var(--vm-charcoal)' }}>
            {p.panels.room.body}
          </p>
          <hr className="my-[2vw] border-none border-t" style={{ borderColor: 'rgba(26,17,16,0.2)' }} />
          <p className="mt-auto ml-auto max-w-[40ch] text-right font-display italic text-[clamp(1.25rem,2.5vw,2.2rem)] leading-snug" style={{ color: 'var(--vm-burgundy)' }}>
            “The kind of place you leave reluctantly.”
          </p>
        </FlowSection>

        {/* INVITE */}
        <FlowSection
          aria-label={p.panels.invite.tag}
          style={{ backgroundColor: 'var(--vm-burgundy-deep)', color: 'var(--vm-cream)' }}
        >
          <p className="eyebrow text-gold">{p.panels.invite.tag}</p>
          <hr className="my-[2vw] border-none border-t border-gold/40" />
          <h3 className="display-xl font-display whitespace-pre-line">
            {p.panels.invite.h}
          </h3>
          <hr className="my-[2vw] border-none border-t border-gold/40" />
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <p className="max-w-[50ch] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-light text-cream/85">
              {p.panels.invite.body}
            </p>
            <div className="flex md:justify-end">
              <a
                href="#reserve"
                className="group inline-flex items-center gap-3 border border-gold text-gold px-7 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-burgundy-deep transition-all duration-300"
              >
                {p.panels.invite.cta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </FlowSection>
      </FlowArt>
    </section>
  );
}
