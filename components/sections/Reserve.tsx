'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Check } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { Button } from '@/components/ui/Button';

const TIMES = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
const PARTY = [2, 3, 4, 5, 6];

export function Reserve() {
  const { t } = useLocale();
  const labels = t.reserve.labels;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    date: '',
    time: '19:30',
    guests: '2',
    occasion: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      id="reserve"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--vm-burgundy)' }}
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — image / brand */}
        <div className="relative">
          <p className="eyebrow mb-6">{t.reserve.eyebrow}</p>
          <h2 className="display-lg font-display text-cream mb-8">{t.reserve.title}</h2>
          <p className="text-cream/75 text-lg font-light leading-relaxed max-w-md mb-12">
            {t.reserve.lede}
          </p>
          <div className="relative aspect-[4/5] max-w-md overflow-hidden">
            <Image
              src="/photos/room-table-intimate.jpg"
              alt="An intimate table for two at Villa Maria"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              quality={88}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/80 via-burgundy-deep/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display italic text-cream text-2xl leading-snug">
                Bring people you love.
              </p>
              <p className="font-display italic text-gold text-2xl leading-snug">
                Leave with new ones.
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 border border-gold/20 p-8 lg:p-10 bg-burgundy-deep/40 backdrop-blur-sm"
              >
                <div className="grid sm:grid-cols-3 gap-4">
                  <FieldWrap label={labels.date} icon={<Calendar size={14} />}>
                    <input
                      type="date"
                      min={today}
                      required
                      value={form.date}
                      onChange={update('date')}
                      className="vm-input"
                    />
                  </FieldWrap>
                  <FieldWrap label={labels.time} icon={<Clock size={14} />}>
                    <select required value={form.time} onChange={update('time')} className="vm-input">
                      {TIMES.map((tm) => (
                        <option key={tm} value={tm}>
                          {tm}
                        </option>
                      ))}
                    </select>
                  </FieldWrap>
                  <FieldWrap label={labels.guests} icon={<Users size={14} />}>
                    <select required value={form.guests} onChange={update('guests')} className="vm-input">
                      {PARTY.map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </FieldWrap>
                </div>

                <FieldWrap label={labels.occasion}>
                  <select value={form.occasion} onChange={update('occasion')} className="vm-input">
                    <option value="">—</option>
                    {t.reserve.occasions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </FieldWrap>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FieldWrap label={labels.name}>
                    <input required value={form.name} onChange={update('name')} className="vm-input" />
                  </FieldWrap>
                  <FieldWrap label={labels.phone}>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update('phone')}
                      className="vm-input"
                    />
                  </FieldWrap>
                </div>

                <FieldWrap label={labels.email}>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className="vm-input"
                  />
                </FieldWrap>

                <FieldWrap label={labels.notes}>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={update('notes')}
                    className="vm-input resize-none"
                  />
                </FieldWrap>

                <div className="pt-2">
                  <Button type="submit" variant="primary">
                    {labels.submit}
                  </Button>
                </div>

                <style jsx>{`
                  .vm-input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(245, 239, 226, 0.25);
                    padding: 0.6rem 0;
                    color: var(--vm-cream);
                    font-size: 0.95rem;
                    font-weight: 300;
                    outline: none;
                    transition: border-color 0.3s ease;
                    color-scheme: dark;
                  }
                  .vm-input:focus {
                    border-bottom-color: var(--vm-gold);
                  }
                  .vm-input::placeholder {
                    color: rgba(245, 239, 226, 0.4);
                  }
                  select.vm-input {
                    appearance: none;
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path fill='%23C8A24B' d='M6 8L2 4h8z'/></svg>");
                    background-repeat: no-repeat;
                    background-position: right 0.25rem center;
                    padding-right: 1.5rem;
                  }
                  select.vm-input option {
                    background: var(--vm-burgundy-deep);
                    color: var(--vm-cream);
                  }
                `}</style>
              </motion.form>
            ) : (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="border border-gold/40 p-10 lg:p-14 bg-burgundy-deep/60 backdrop-blur-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold mb-8">
                  <Check size={28} className="text-gold" />
                </div>
                <h3 className="font-display italic text-3xl lg:text-4xl text-cream mb-4">
                  {labels.confirm}
                </h3>
                <p className="text-cream/70 font-light leading-relaxed max-w-md mx-auto mb-10">
                  {labels.confirmBody}
                </p>
                <div className="text-sm text-cream/60 mb-8 space-y-1">
                  <p>
                    <span className="text-gold">{form.date}</span> · {form.time} · {form.guests}{' '}
                    {labels.guests}
                  </p>
                  <p>{form.name}</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-[0.28em] text-gold hover:text-gold-bright transition-colors"
                >
                  {labels.again} →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FieldWrap({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold/85 mb-1">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
