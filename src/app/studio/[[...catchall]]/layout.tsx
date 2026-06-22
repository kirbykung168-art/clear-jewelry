import { metadata } from 'next-sanity/studio';
export { metadata };
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

/**
 * Bare layout for the Sanity Studio catch-all. Studio renders its
 * own full-page chrome (header, panes, navigation), so we deliberately
 * skip the site's Header + Footer here.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
