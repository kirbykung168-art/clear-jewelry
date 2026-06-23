'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import OrnateDivider from '@/components/OrnateDivider';
import SparkleField from '@/components/SparkleField';
import MagneticButton from '@/components/MagneticButton';
import Wordmark from '@/components/Wordmark';
import LetterDropTitle from '@/components/LetterDropTitle';
import WhisperLine from '@/components/WhisperLine';
import { BRAND } from '@/lib/brand';
import { useT, useLocale } from '@/components/LanguageProvider';

type LocalizedString = { en: string; th: string; zh?: string };
type Section = {
  eyebrow: LocalizedString;
  title:   LocalizedString;
  body:    { en: string[]; th: string[]; zh?: string[] };
};


export default function InfoPageBody({ sections }: { sections: Section[] }) {
  const t = useT();
  const { locale } = useLocale();
  return (
    <>
      {/* ============================== INTRO ============================== */}
      <section className="relative bg-ivory pt-40 lg:pt-48 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              'radial-gradient(800px 600px at 80% 30%, rgba(194,161,77,0.30) 0%, rgba(194,161,77,0.06) 35%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
                    <Reveal>
            <p className="eyebrow text-gold-deep">{t('inf.eyebrow')}</p>
            <h1
              className="display leading-[0.98] mt-4 max-w-4xl"
              style={{ fontSize: 'clamp(48px, 8vw, 160px)' }}
              lang={locale}
            >
              <LetterDropTitle text={t('inf.title.l1')} />
              <span className="display text-gold"> {t('inf.title.l2')}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <OrnateDivider className="mt-14" />
          </Reveal>
        </div>
      </section>

      {/* ============================== 4 SECTIONS ============================== */}
      <section className="bg-ivory pb-32 lg:pb-40">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-10 space-y-24 lg:space-y-32">
          {sections.map((s: Section, i: number) => (
            <Reveal key={i} delay={0.05 * i}>
              <article className="relative grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start">
                {/* Ghost background folio numeral (I/II/III/IV) intentionally
                    removed — it competed visually with the eyebrow label and
                    read as a bare bullet point. Eyebrows (EXPERTISE,
                    AUTHENTICITY, etc.) now serve as the unambiguous section
                    header. */}
                <header className="relative">
                  <p className="eyebrow text-gold-deep">
                    {s.eyebrow[locale]}
                  </p>
                  <h2
                    className="display leading-[1.05] mt-3"
                    style={{ fontSize: 'clamp(28px, 3.8vw, 52px)' }}
                    lang={locale}
                    dangerouslySetInnerHTML={{ __html: s.title[locale] }}
                  />
                  <hr className="gold-rule mt-6" />
                </header>
                <div className="relative space-y-5">
                  {s.body[locale].map((para: string, j: number) => (
                    <p
                      key={j}
                      className={`font-sans text-[15px] tracking-[0.02em] text-charcoal/85 leading-[1.9] ${
                        i === 0 && j === 0 ? 'dropcap' : ''
                      }`}
                      lang={locale}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}

                  {/* At-a-glance museum plaque for the Visiting section */}
                  {i === sections.length - 1 && (
                    <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-b border-[var(--rule)] py-8">
                      <div>
                        <dt className="eyebrow text-gold-deep/80">{t('foot.atelier')}</dt>
                        <dd className="display text-[19px] text-charcoal mt-2 leading-snug">
                          {BRAND.addressLines[0]}
                        </dd>
                      </div>
                      <div>
                        <dt className="eyebrow text-gold-deep/80">{t('foot.hours')}</dt>
                        <dd className="display text-[19px] text-charcoal mt-2 leading-snug" lang={locale}>
                          {t('tag.day')}
                        </dd>
                      </div>
                    </dl>
                  )}
                </div>
              </article>
              {i < sections.length - 1 && <OrnateDivider className="mt-16 opacity-70" />}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================== VISIT CTA ============================== */}
      <section className="bg-charcoal text-ivory py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(900px 700px at 50% 30%, rgba(194,161,77,0.30) 0%, rgba(194,161,77,0.05) 40%, transparent 75%)',
          }}
        />
        <SparkleField count={6} tone="gold" />
        <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10 text-center">
          <Reveal>
            {/* Wordmark lockup removed — the Footer below already shows
                the canonical CLEAR / JEWELRY brand mark; rendering one
                in this CTA too read as 'the logo twice at the bottom.' */}
            <p className="eyebrow text-gold-light">{t('foot.atelier')}</p>
            <h2
              className="display leading-tight mt-6"
              style={{ fontSize: 'clamp(32px, 4.4vw, 64px)' }}
            >
              {BRAND.addressLines[0]}
            </h2>
            <p className="font-sans text-[14px] tracking-[0.02em] text-ivory/85 mt-3">
              {t('tag.day')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="/book" className="btn btn-light">
                {t('cls.cta.book')} <span className="btn-arrow">→</span>
              </MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] py-3 sm:py-2 font-sans text-[12px] uppercase tracking-[0.28em] text-ivory/85 hover:text-gold-light transition-colors duration-500 underline underline-offset-8 decoration-gold/60 decoration-[0.5px]"
              >
                {t('cls.cta.contact')}
              </Link>
            </div>
            <WhisperLine tone="dark">
              {t('misc.bangkok.since')}
            </WhisperLine>
          </Reveal>
        </div>
      </section>

      {/* ============================== DIRECTIONS ============================== */}
      <section className="bg-ivory py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background:
              'radial-gradient(900px 600px at 50% 0%, rgba(194,161,77,0.28) 0%, rgba(194,161,77,0.04) 45%, transparent 75%)',
          }}
        />
        <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10">
          <Reveal>
            <header className="text-center mb-10 lg:mb-14">
              <p className="eyebrow text-gold-deep" lang={locale}>
                {t('info.directions.eyebrow')}
              </p>
              <h2
                className="display-italic leading-tight mt-4 text-charcoal"
                style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
                lang={locale}
              >
                {t('info.directions.title')}
              </h2>
              <hr className="border-0 h-px bg-gold-light/60 w-20 mt-6 mx-auto" />
              <p
                className="font-sans text-[14.5px] tracking-[0.02em] text-charcoal/80 leading-[1.85] max-w-[58ch] mx-auto mt-6"
                lang={locale}
              >
                {t('info.directions.body')}
              </p>
            </header>

            <div
              className="relative p-4 lg:p-6 bg-ivory"
              style={{
                border: '1px solid rgba(194, 161, 77, 0.40)',
                boxShadow: '0 14px 44px -20px rgba(20, 16, 12, 0.22), 0 2px 14px rgba(20, 16, 12, 0.06)',
              }}
            >
              {/* corner ornaments */}
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 22, height: 22, borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 10, right: 10, width: 22, height: 22, borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ bottom: 10, left: 10, width: 22, height: 22, borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 22, height: 22, borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' }} />

              <div className="relative w-full overflow-hidden bg-charcoal/5">
                {/* Google Maps embed — no API key required for the simple
                    output=embed format. Loads the actual Maps tile UI,
                    fully interactive (pan / zoom / Streetview link). */}
                <iframe
                  title="Gaysorn Centre · Bangkok"
                  src="https://maps.google.com/maps?q=Clear+Jewelry,+Gaysorn+Centre,+999+Ploenchit+Rd,+Bangkok&z=17&output=embed"
                  className="block w-full h-[280px] lg:h-[420px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Below-embed link row */}
              <div className="mt-5 lg:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center">
                <a
                  href="https://maps.app.goo.gl/vqqDxncmMUP83qYs6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] font-sans text-[11px] uppercase tracking-[0.32em] text-charcoal hover:text-gold-deep transition-colors duration-500 border-b border-charcoal/40 hover:border-gold-deep"
                  lang={locale}
                >
                  {t('info.directions.openInMaps')} <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/vqqDxncmMUP83qYs6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] font-sans text-[11px] uppercase tracking-[0.32em] text-charcoal hover:text-gold-deep transition-colors duration-500 border-b border-charcoal/40 hover:border-gold-deep"
                  lang={locale}
                >
                  {t('info.directions.getDirections')} <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
