# CLEAR JEWELRY · Owner guide

Everything you can change on the website yourself — no developer required.

The website reads its content from **Sanity Studio**. You open Studio in your browser, edit something, click **Publish**, and the live site updates within about a minute.

---

## How to open Studio

1. Go to **https://clear-jewelry.vercel.app/studio**
2. Sign in with the email that owns the Sanity project (kirbykung168@gmail.com).
3. You'll see a left-hand panel called **Content** with all the editable areas.

If you ever lose your way, click the CLEAR JEWELRY logo at the top to return to the Content list.

---

## Changing the hero image

The hero is the first photograph on the homepage.

1. In Studio, click **Homepage**.
2. Scroll to the **Hero image — desktop** field.
3. Click the image to replace it. Choose a new file from your computer.
4. After it uploads, click the image *again* and drag the crosshair to the part of the photograph you want centered (the **hotspot**). The site crops around that point on different screen sizes.
5. **Important:** fill in **Hero image — alt text** with a short description of what's in the picture (for screen readers).
6. Optional: upload a different image to **Hero image — mobile** if the desktop crop doesn't work well on phones. Leave it empty to use the same image on both.
7. Click **Publish** at the bottom-right. The live site updates within ~60 seconds.

---

## Adding a new gallery piece

1. Click **Gallery pieces** in the left panel.
2. Click **+ Create** at the top.
3. Upload the photograph in the **Photograph** field, then click it again to set the hotspot.
4. Fill in:
   - **Alt text** — what the picture shows
   - **Display name** — the piece name (shown on hover and in the lightbox)
   - **Description** — a short editorial caption (the stone, the setting, the metal)
   - **Categories** — pick one or more from the list (Rings, Necklaces, Sapphires, etc.)
   - **Feature on homepage?** — toggle on if this is one of your strongest pieces
5. Click **Publish**.

The new piece automatically appears in the Gallery page. If you flagged it as "Feature on homepage", it's eligible for the homepage wall (see next section).

---

## Managing the homepage featured pieces

The homepage shows a 12-tile wall of your strongest work. You control which pieces appear and the order.

1. Click **Homepage featured pieces** in the left panel.
2. The **Featured pieces** field shows the currently featured pieces in order.
3. To add a piece: click **+ Add item** at the bottom. Search for the piece by name, click it.
4. To remove a piece: hover over it, click the three-dots menu, choose **Remove**.
5. To reorder: drag the handle on the left of each piece up or down.
6. **8–12 pieces** is recommended. If you put fewer than 8, the system fills the remaining spots from pieces flagged "Feature on homepage". If you put more than 12, only the first 12 show.
7. Click **Publish**.

---

## Editing homepage text (headline, intro, CTAs)

1. Click **Homepage**.
2. Scroll through the fields — everything is labelled with where it appears on the site.
3. Edit any of the text. **Publish** to save.

---

## Adding a new category

1. Click **Categories** in the left panel.
2. Click **+ Create**.
3. Fill in **Category name** (e.g. "Bracelets", "Engagement", "Bridal").
4. **URL slug** auto-fills — leave it.
5. Optional: set a **Tab order** number (lower = appears earlier in the tab strip).
6. **Publish**.

The new tab appears immediately on the Gallery page. To assign existing pieces to it, open each piece and add the new category to its **Categories** field.

---

## Updating contact details

1. Click **Site settings**.
2. Edit phone, LINE, WhatsApp, address, hours.
3. **Publish**.

These show up everywhere on the site: footer, contact page, social-share previews.

---

## Updating the About / Information pages

1. Click **About page** or **Information page** in the left panel.
2. Each section (Maison title, Philosophy, Bespoke steps, etc.) is editable.
3. **Publish**.

---

## What you cannot change yourself

These are intentional brand identity locks. Email your developer if you need them changed:

- The favicon (small icon in browser tabs)
- The logotype glyph in the navigation
- The fonts (Cormorant Garamond + Jost)
- Page layouts and animations

---

## If something looks broken

1. Wait 90 seconds — the site rebuilds in the background after each publish.
2. Hard-refresh your browser (Ctrl+Shift+R / Cmd+Shift+R).
3. Open Studio and check that the document is **Published** (not just **Draft**). A green check next to the document name = published.

Still broken? Email kirbykung168@gmail.com.

---

## Studio URL

**https://clear-jewelry.vercel.app/studio**

Bookmark it. Sign in with kirbykung168@gmail.com (or invite other editors from **Manage members** in Studio settings).

---

## Editing in two languages (EN / TH)

The live site is **English and Thai only**. The language toggle in the
top-right of the site is an EN ⇄ TH switch.

Every text field in Studio still has three inputs (en, th, zh) but the
website only reads en and th. The zh fields are preserved from earlier
translation work — they aren't deleted — but they don't appear on the
live site. If you want to bring Chinese back later, the developer can
re-enable it in one commit.

| Field | English (en) | ภาษาไทย (th) | 中文 (zh) |
|---|---|---|---|
| Required | yes | optional | not rendered on site |

The English value is the authoritative source. Leave the Thai blank to
fall back to English. The site never breaks on an empty translation.

To translate something, type the Thai version next to the English one
and **Publish**. The change is live in ~60 seconds.

> Tip: leave brand-specific words (CLEAR, 1993, the address "Gaysorn
> Centre, 3rd Floor") in their original spelling. Numbers, phone, email
> and URLs don't need translating.

---

## Editing UI labels (buttons, nav, footer copy)

Every short piece of text on the chrome — nav items, button labels, eyebrows, footer copy, booking-form labels, lightbox controls, the loading screen — lives in a single Sanity document called **UI Labels**.

1. In Studio, open **UI Labels**.
2. You'll see a long list of rows, one per label. Each row shows:
   - **Key** — internal identifier (don't change unless a developer asks you to).
   - **Where this appears** — a one-line description so you can find the right one.
   - **Translation** — the EN and TH values side-by-side.
3. Search the list (top of the array editor in Sanity) by key (e.g. type "nav.home") or by description (e.g. "Top navigation").
4. Edit the EN or TH value and **Publish**.
5. Within ~60 seconds the live site picks up the new label.

If a translation is left blank, the live site falls back to the built-in default — the site can never break on an empty label. To restore a default, delete the value (or the whole row); the developer's hard-coded fallback takes over.

> Tip: the order of rows in the list doesn't affect the site. Drag them around for your own convenience.

---

## Connecting the booking form

The /book form already submits successfully without any setup — entries are saved to Vercel server logs even if nothing else is configured. To get bookings into a Google Sheet **and** a notification to your admin LINE Group, complete A + B below.

### A · /book is contact-only now

The in-page booking form was removed in June 2026. /book is now two contact panels (WhatsApp primary, LINE secondary) — no Apps Script, no `/api/book`, no Sheets/LINE-token env vars to manage.


## How the booking flow works (post-setup)

1. Visitor fills /book → submits → immediately sees the editorial confirmation block ("Thank you, [Name]…"). Their experience never depends on the backend.
2. The site appends a row to your Google Sheet **and** pushes a card to the **Clear Jewelry Bookings** LINE Group within ~2 seconds. Either failure is non-fatal — Sheets is the canonical record, LINE is the live notification.
3. Admins in the group see the notification with name, contact, date, time, and message.
4. Reply directly via LINE/WhatsApp from there. Mark the row in the Sheet when handled.


## Mobile overflow self-test

After any visual change that touches hero text, big numerals, or display-size headings, run:

```bash
npm i -D playwright
node scripts/audit-mobile-overflow.mjs
```

The script walks every public route in a 390×844 iPhone-class Playwright session and fails if any element renders past the right edge or if the document scrollWidth exceeds 390px. Pass `BASE=http://localhost:3000` to check a local dev server instead of production.


## Editable copy in Sanity Studio

Every short piece of UI text is editable in **Studio → UI Labels**:

- **Navigation**: `nav.*` keys
- **Footer**: `foot.*`
- **Hero / brand body**: `her.*`
- **Home page sections**: `home.*`
- **Gallery page**: `gal.*` + `lb.*` (lightbox aria-labels)
- **About page**: `about.*`
- **Information page**: `inf.*` (4 sections) + `info.directions.*` (Directions card + map links)
- **Book page**: `book.page.*` (eyebrow / title / promise line) + `wa.primary.*` (WhatsApp panel) + `line.secondary.*` (LINE panel)
- **Contact page**: `con.*` + the same `wa.primary.*` / `line.secondary.*` keys (shared with /book)
- **404 page**: `nf.*` (eyebrow / title / body / 3 link CTAs)
- **Aria / accessibility**: `aria.*`

### Adding new editable strings (developer)

When you add new visible text in code, add a row to the in-source `COPY`
dict in `src/lib/i18n.ts`, then push the dict to Sanity so the owner
can edit it:

```bash
export SANITY_AUTH_TOKEN="sk..."     # editor-level token from sanity.io/manage
node scripts/migrate-ui-labels.mjs
```

The script is idempotent — it diffs `i18n.ts` against the Sanity
`uiLabels` document and upserts any new keys. Existing owner edits are
preserved. Run it whenever you ship new copy.

### A note on pinned keys

A small `PINNED` set in `src/components/LanguageProvider.tsx` forces a
handful of strings to ignore Sanity overrides and always render from
the in-source COPY (currently `wa.name`, `con.title.l1`, `con.title.l2`).
These were pinned because Sanity carried stale values ("Fifa · Clear
Jewelry", "Three quiet ways") from a previous brand pass. After you
re-run the migration script, the Sanity values match the code — you
can safely empty the `PINNED` set if you want full Studio control over
those keys too.


## Where each piece of copy / image lives in Studio

Studio is at `clear-jewelry.sanity.studio`. Sign in with your editor account.

### Page heroes & long-form copy → page singletons

| Page | Studio document | Editable fields |
|------|-----------------|-----------------|
| /  (Home)  | Homepage              | Hero image (desktop + mobile), hero alt, hero eyebrow / title / italic / lede, CTAs, signature title + body, story title + body + image, closing title + body |
| /about     | About page            | Maison title + body, philosophy title + body, optional atelier portrait + alt, the 4 bespoke-process steps |
| /info      | Info page             | Page title, description, the 4 information sections (eyebrow + title + body each) |
| /contact   | Contact page          | Headline, subhead, contact channels (WhatsApp + LINE), Google Maps embed URL, WhatsApp QR image, optional LINE QR image |
| Header / Footer | Site settings    | Tagline, opening hours, transit note, address, navigation links, footer note, social share image (og:image), trust signals |

### Small chrome strings (buttons, eyebrows, aria-labels, modal labels) → UI Labels

All short strings — navigation labels, button text, footer atelier/hours/contact labels,
booking eyebrows, lightbox aria-labels, Directions section labels, 404 page copy — live
in the **UI Labels** singleton. Search by key (e.g. `wa.primary.cta`, `info.directions.title`,
`nf.body`), edit the EN + TH values, publish. Site picks up changes on the next page
load (60s revalidation window).

## Replacing images

Every owner-facing image is a Sanity asset reference. To swap one:

1. Open Studio → the relevant document.
2. Click the image field (Hero image, WhatsApp QR, etc).
3. Upload your new file (PNG / JPG / WEBP, no size limit).
4. Click Publish.
5. The live site reflects the change within 60 seconds.

| Image | Studio document | Field name |
|-------|-----------------|------------|
| Homepage hero (desktop) | Homepage | Hero image |
| Homepage hero (mobile)  | Homepage | Hero image — mobile (optional) |
| Story photo (homepage)  | Homepage | Story image |
| About atelier portrait  | About page | Optional atelier portrait |
| WhatsApp QR (Contact + Book) | Contact page | WhatsApp QR image |
| LINE QR (Contact + Book, optional) | Contact page | LINE QR image (optional) — leave empty to auto-generate from the LINE URL |
| Social share image (og:image) | Site settings | Social share image |
| Gallery pieces (each piece) | Gallery (each Piece document) | Image |

Anything not in this list (the marquise glyph used in the wordmark, ornamental gold
hairlines, the SVG icons in the close buttons, the auto-generated LINE QR) is rendered
in code as live SVG or generated on the fly — there is no upload slot for them; ask
the developer if you want them changed.

### Adding new editable images later (developer)

Add an `image` field to the appropriate document schema in `src/sanity/schemas/<doc>.ts`.
Extend the GROQ query in `src/lib/sanityQueries.ts` to select the asset URL. Refactor
the consuming component to read from the Sanity URL with the existing /public/ path as
fallback. Run `node scripts/migrate-ui-labels.mjs` if you've also added new labels.


## Managing the gallery

The Gallery is fully owner-editable through Sanity Studio — add new pieces, delete old ones,
reorder, feature on the homepage, all without touching code or a developer.

### Adding a new gallery piece

1. Open Sanity Studio (sign in with your editor account).
2. Click **Gallery pieces** in the sidebar.
3. Click the **+ Create** button at the top of the list.
4. Fill the fields:
   - **Name** — title in EN + TH (e.g. "Royal Sapphire Floral Choker" / "สร้อยคอดอกไม้ไพลินรอยัล")
   - **Description** — one or two sentences describing the piece, EN + TH
   - **Alt text** — a short literal description for screen readers (e.g. "Sapphire-and-diamond choker on black velvet")
   - **Image** — drag a file in or click **Upload**. Recommended ≥1600px wide for retina sharpness. JPG or PNG, no size limit.
   - **Aspect** — square / portrait / wide (pick the natural shape of the photograph; controls how the tile is cropped on the gallery wall)
   - **Categories** — pick one or more from the dropdown (Rings, Necklaces, Earrings, Rubies, Sapphires, Diamonds, Sets, Bridal). Add a new category first via the **Categories** sidebar entry if you need one.
   - **Order** (optional) — a sort number, lower comes first. Leave empty to keep the existing order.
   - **Featured on homepage** — toggle on if you want this piece to appear in the home page preview wall.
5. Click **Publish** at the bottom of the page.
6. Within 60 seconds, the new tile appears on **/gallery** on the live site. If it's set to featured, it also appears on **/**.

### Deleting a gallery piece

1. Open Sanity Studio → **Gallery pieces**.
2. Click the piece you want to remove.
3. Click the **⋮** menu in the top-right of the document.
4. Select **Delete document** and confirm.
5. Within 60 seconds the tile disappears from /gallery. Lightbox / preload won't try to load it — it cleanly drops from the layout.

### Reordering gallery pieces

Either: drag pieces in the Studio list to reorder (if drag-orderable is enabled),
**or** open a piece and edit the **Order** field (lower number = earlier on the wall).
Multiple pieces with the same order number fall back to creation date.

### Featuring / unfeaturing on the homepage

1. Open the piece in Studio.
2. Toggle the **Featured on homepage** switch.
3. Publish.
4. Within 60s the homepage preview wall reflects the change.

### Verified end-to-end (June 2026)

The create / feature-toggle / reorder / delete loop was smoke-tested via the Sanity
API with the editor token: a test piece was created (count went 26 → 27), the hero flag
was toggled true/false, the order field was patched 9999 → 5 and read back, and the
piece + its asset were deleted (count returned to 26). All four operations clean,
no orphaned references, no broken layout.
