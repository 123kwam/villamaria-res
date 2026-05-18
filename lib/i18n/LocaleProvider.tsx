'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { dictionaries, Locale, LOCALES, Dictionary } from './dictionaries';

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'vm-locale';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LOCALES as string[]).includes(saved)) {
      setLocaleState(saved as Locale);
    } else {
      const browser = (navigator.language || 'en').slice(0, 2);
      if ((LOCALES as string[]).includes(browser)) {
        setLocaleState(browser as Locale);
      }
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] as Dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
