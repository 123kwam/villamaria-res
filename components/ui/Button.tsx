'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'primary' | 'ghost' | 'gold';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  arrow?: boolean;
  as?: 'button' | 'a';
  href?: string;
};

const styles: Record<Variant, string> = {
  primary:
    'bg-gold text-burgundy-deep hover:bg-gold-bright border border-gold hover:border-gold-bright',
  ghost:
    'bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold',
  gold:
    'bg-transparent text-gold border border-gold hover:bg-gold hover:text-burgundy-deep',
};

export function Button({
  variant = 'primary',
  arrow = true,
  className = '',
  children,
  as = 'button',
  href,
  ...rest
}: Props) {
  const base =
    'group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-out';
  const cls = `${base} ${styles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (as === 'a' && href) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
