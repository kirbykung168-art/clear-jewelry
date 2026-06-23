'use client';

import clsx from 'clsx';
import { LOCALES, Locale } from '@/lib/i18n';
import { useLocale } from './LanguageProvider';

/**
 * Minimal three-letter language pill switcher. EN · TH · CN.
 *
 * Mobile: each pill is sized to a ≥44×44 tap target via min-h/min-w. The
 * visual letter remains compact (10px tracking-[0.22em]); the touch zone
 * extends invisibly so phone users don't mis-tap the wrong locale.
 */
export default function LanguageToggle({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light';
  className?: string;
}) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={clsx(
        'inline-flex items-center font-sans text-[10px] tracking-[0.22em] uppercase',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l, i) => (
        <button
          key={l.id}
          type="button"
          onClick={() => setLocale(l.id as Locale)}
          aria-pressed={l.id === locale}
          className={clsx(
            'inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 transition-colors duration-500',
            l.id === locale
              ? variant === 'light'
                ? 'text-gold-light underline underline-offset-4 decoration-gold/60 decoration-[0.5px]'
                : 'text-gold underline underline-offset-4 decoration-gold/60 decoration-[0.5px]'
              : variant === 'light'
              ? 'text-ivory/60 hover:text-ivory'
              : 'text-charcoal/55 hover:text-charcoal',
          )}
        >
          <span>{l.short}</span>
          {i < LOCALES.length - 1 && (
            <span aria-hidden className={clsx('ml-2 -mr-2', variant === 'light' ? 'text-ivory/30' : 'text-charcoal/25')}>·</span>
          )}
        </button>
      ))}
    </div>
  );
}
