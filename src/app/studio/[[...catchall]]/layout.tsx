import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CLEAR Jewelry · Studio',
  robots: { index: false, follow: false },
};

/**
 * Bare layout for the embedded Sanity Studio routes. Studio renders its
 * own full-page chrome so we intentionally don't wrap children with the
 * site Header/Footer — the root layout already supplies <html>/<body>.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
