import { getContactPage } from '@/lib/sanityAdapter';
import ContactClient from './ContactClient';

export const revalidate = 60;

/**
 * /contact — server wrapper. Fetches the Sanity `contactPage` singleton
 * (headline, subhead, WhatsApp QR image, optional LINE QR image) and
 * hands it to the ContactClient. The client component renders Sanity
 * values when present, falling back to in-source COPY (t()) or the
 * /public/images/contact QR. This means the owner can edit copy + swap
 * the QR through Studio without a redeploy.
 */
export default async function ContactPage() {
  const cms = (await getContactPage()) as any;
  return (
    <ContactClient
      waQrUrl={cms?.whatsappQr?.url ?? null}
      lineQrUrl={cms?.lineQr?.url ?? null}
      cms={cms ? { headline: cms.headline, subhead: cms.subhead } : null}
    />
  );
}
