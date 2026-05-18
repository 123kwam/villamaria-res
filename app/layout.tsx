import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, DM_Serif_Display, Playfair_Display } from 'next/font/google';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const numerals = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-numerals',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Villa Maria — Argentine Steakhouse',
  description:
    'Quebracho-fired asado, Mendoza wines, and Argentine hospitality. Reservations open nightly.',
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${numerals.variable}`}
    >
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
