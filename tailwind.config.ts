import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#6B1A1F',
          deep: '#3D0E11',
          ember: '#A8302A',
        },
        gold: {
          DEFAULT: '#C8A24B',
          bright: '#E5C77A',
          muted: '#8E7536',
        },
        cream: {
          DEFAULT: '#F5EFE2',
          bone: '#E8DFCB',
        },
        ink: {
          DEFAULT: '#1A1110',
          soft: '#2A1E1C',
        },
        royal: '#1E3A8A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        numerals: ['var(--font-numerals)', 'DM Serif Display', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
