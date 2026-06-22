'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

/**
 * Sanity Studio catch-all route — REQUIRED for Studio's client-side
 * routing to survive a hard refresh, deep-link, or new-tab navigation.
 *
 * Without this, /studio renders the Studio shell correctly, but as soon
 * as the user clicks into a document type ('UI Labels', 'Contact page',
 * etc.) the URL becomes /studio/structure/<docId> — and Next.js, with
 * only /studio/page.tsx in place, has no route handler for sub-paths
 * and serves a 404. The user reported "when I try to update something
 * on Sanity the website comes back with a 404" — this was that bug.
 *
 * The [[...catchall]] optional-catch-all matches /studio AND every
 * /studio/* sub-path, rendering the same NextStudio shell. Studio's
 * own client router takes over once mounted.
 *
 * Reference: https://www.sanity.io/docs/embedded-studio
 */
export const dynamic = 'force-dynamic';

export default function StudioCatchAll() {
  return <NextStudio config={config} />;
}
