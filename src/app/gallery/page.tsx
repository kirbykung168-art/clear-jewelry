import GalleryClient from '@/components/GalleryClient';
import { getFullGallery } from '@/lib/sanityAdapter';

export const revalidate = 60;

/**
 * Gallery — Sanity-driven, with an editorial header that doubles as
 * a museum plaque. Volume / Atelier annotations frame the headline,
 * then the GalleryClient takes over with the salon centrepiece +
 * mosaic catalogue + lot numbers + hairline-frame hover.
 */
export default async function GalleryPage() {
  const { pieces, categories } = await getFullGallery();

  return (
    <>

      <div className="pt-28 lg:pt-36 bg-ivory" />
      <GalleryClient pieces={pieces} categories={categories} />
    </>
  );
}
