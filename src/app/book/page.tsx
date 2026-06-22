import type { Metadata } from 'next';
import BookClient from './BookClient';
import { getContactPage } from '@/lib/sanityAdapter';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Book a private viewing',
  description:
    'Reserve a private viewing at CLEAR Jewelry. WhatsApp for the fastest reply, or LINE @clearjewelry. Gaysorn Centre, Bangkok.',
  robots: { index: false, follow: false },
};

/**
 * /book — server wrapper. Reuses the contactPage singleton's QR images
 * (WhatsApp + optional LINE) so owners only upload the QR once and it
 * appears on both /book and /contact. Falls back to the /public asset
 * if the Studio field is empty.
 */
export default async function BookPage() {
  const cms = (await getContactPage()) as any;
  return (
    <BookClient
      waQrUrl={cms?.whatsappQr?.url ?? null}
      lineQrUrl={cms?.lineQr?.url ?? null}
    />
  );
}
