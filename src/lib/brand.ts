/**
 * CLEAR JEWELRY — single source of truth for brand facts.
 * Edit values here; pages read from this file.
 */

export const BRAND = {
  name: 'Clear Jewelry',
  wordmark: 'CLEAR',
  wordmarkSubtitle: 'JEWELRY',
  tagline: 'Gemstone art since 1993',
  establishedYear: 1993,

  // ---- Contact ----
  // Public phone number removed at owner's request — bookings + enquiries now
  // route through WhatsApp (QR on the Contact page) and LINE.
  phoneDisplay: null as string | null,
  phoneTel: null as string | null,
  // No public email — enquiries route through WhatsApp / LINE.
  email: null as string | null,
  lineHandle: 'clearjewelry',
  lineUrl: 'https://line.me/R/ti/p/@clearjewelry',
  // Instagram removed at owner's request — WhatsApp is the primary
  // contact channel; LINE is the secondary fallback.
  whatsappUrl: 'https://wa.me/qr/GTYE6MWRH54LK1',
  whatsappQrPath: '/images/contact/whatsapp-qr.png',

  // ---- Location ----
  addressLines: [
    'Gaysorn Centre, 3rd Floor',
    'Gaysorn Village, 999 Ploenchit Rd',
    'Lumpini, Pathumwan, Bangkok',
  ],
  addressOneLine: 'Gaysorn Centre, 3rd Floor, Gaysorn Village, 999 Ploenchit Rd, Lumpini, Pathumwan, Bangkok',
  hours: '11:00 – 18:00 daily',
  transitNote: '',

  // ---- Google Map embed for Gaysorn Village ----
  googleMapEmbedUrl:
    'https://maps.google.com/maps?q=Clear+Jewelry,+Gaysorn+Centre,+999+Ploenchit+Rd,+Bangkok&z=17&output=embed',
  googleMapsUrl:
    'https://maps.app.goo.gl/vqqDxncmMUP83qYs6?g_st=ic',

  // ---- Trust signals ----
  trustSignals: [
    { label: 'GIA-Certified', detail: 'Every signature stone' },
    { label: 'Unheated Rarities', detail: 'Burmese rubies · Royal blue sapphires' },
    { label: 'Bespoke Design', detail: 'One-of-one commissions' },
    { label: 'Since 1993', detail: '30+ years in Bangkok' },
  ],
};

import type { CopyKey } from './i18n';

export const NAV_LINKS: { href: string; labelKey: CopyKey }[] = [
  { href: '/',         labelKey: 'nav.home' },
  { href: '/gallery',  labelKey: 'nav.gallery' },
  { href: '/about',    labelKey: 'nav.about' },
  { href: '/info',     labelKey: 'nav.info' },
  { href: '/contact',  labelKey: 'nav.contact' },
];
