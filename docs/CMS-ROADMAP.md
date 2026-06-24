# CMS & Backend Roadmap

Roadmap for evolving CIEL VERT from the current static-data scaffold
(structure & design only, content hard-coded in `src/data/*.ts`) into a
site backed by a real CMS and working forms.

## Current state (the seam already built for this)

The site was designed with a CMS migration seam in mind: pages never touch
`src/data/*.ts` directly — they go through accessor functions in
`src/lib/getProduct.ts`, `getArticle.ts`, `getLibraryEntry.ts`
(`getAllProducts`, `getProductBySlug`, `getAllArticles`, `getArticleBySlug`,
`getRelatedArticles`, `getAllLibraryEntries`). Swapping the *implementation*
of those functions to query a CMS instead of an in-memory array is the whole
migration — no page/component code needs to change. `src/data/types.ts` is
already a clean content model (`Product`, `Sector`, `Testimonial`,
`BlogArticle`, `LibraryEntry`, `CaseStudy`, `NewsItem`) that maps directly
onto CMS collections/schemas.

Forms (`QuoteRequestForm`, `QuickContactForm`, `ContactForm`) are stubbed
with `preventDefault()` + local state and a `// TODO: wire to backend` —
that's the other half of "backend."

## Phase 0 — Pick the CMS architecture

Given the stack (Next.js App Router, TypeScript, self-hosted on Coolify via
the existing `Dockerfile`), the strongest fit is **Payload CMS**, self-hosted,
embedded in the same Next.js app (`@payloadcms/next`):

- TypeScript-native collection schemas — maps 1:1 onto `types.ts`.
- Built-in field-level localization (fr/ar) — replaces the "AR = copy of FR"
  placeholder with real per-field translations, without touching
  `messages/*.json` (which stays UI-string-only).
- Built-in media library with S3-compatible storage adapter — solves the
  "empty `public/` folder, no real images" gap.
- Ships its own admin UI at `/admin`, generated from the schema — no
  separate admin app to build.
- One container, one Coolify deployment — fits the existing `Dockerfile`
  instead of adding a second service to operate.

Alternatives considered: Strapi/Directus (separate service, REST/GraphQL,
more ops overhead) or Sanity (hosted, great localization, but introduces an
external SaaS dependency for an otherwise fully self-hosted stack). Payload
wins here on "one deployable, TS-native, self-hosted."

## Phase 1 — Infrastructure

- Add a Postgres service in Coolify (one-click) for Payload's database.
- Add S3-compatible object storage for uploads — either Coolify-hosted
  MinIO, or an external bucket (R2/B2) if you'd rather not run storage
  yourself.
- Extend `Dockerfile`/Coolify env vars: `DATABASE_URI`, `PAYLOAD_SECRET`,
  S3 credentials.
- Decide whether `next build` needs a `payload migrate` step in CI before
  `next build` runs (typically yes) — adjust the `Dockerfile`'s `builder`
  stage accordingly.

## Phase 2 — Content modeling

Define Payload collections mirroring `src/data/types.ts`:

- `Products` (with a `division` select field: `professionnel` |
  `grand-public`, localized `name`/`shortDescription`/`description`/etc.)
- `Sectors`, `Testimonials`, `BlogArticles`, `LibraryEntries`,
  `CaseStudies`, `NewsItems`
- A `Media` collection for images and PDF spec sheets, replacing the
  placeholder path strings in `images`/`coverImage`/`pdfSpecSheetUrl`/`fileUrl`.

## Phase 3 — Data layer migration

- Rewrite `getProduct.ts`/`getArticle.ts`/`getLibraryEntry.ts` to call
  Payload's Local API (`payload.find(...)`) instead of filtering the
  `productsPro`/`productsGrandPublic`/`blogArticles` arrays — same exported
  function signatures, so `page.tsx` files are untouched.
- Write a one-time seed script that reads the current `src/data/*.ts`
  placeholder content and inserts it into Payload, so the site doesn't go
  blank during cutover.
- Once migrated, `src/data/*.ts` can be deleted (or kept only as the seed
  source).

## Phase 4 — Forms backend

- Add `QuoteSubmissions`/`ContactSubmissions` collections (or a
  lighter-weight API route if you don't want them admin-visible).
- Add `src/app/api/quote/route.ts` and `src/app/api/contact/route.ts`
  (`POST` handlers), and point `QuoteRequestForm`/`QuickContactForm`/
  `ContactForm`'s `handleSubmit` at them instead of the local-state stub.
- Wire an email notification (Resend/Postmark) and/or a WhatsApp/Slack
  webhook on submission.

## Phase 5 — Admin & auth

- Payload's built-in auth covers `/admin` login and roles (admin vs
  editor).
- Add IP allowlisting or basic auth at the reverse-proxy layer in front of
  `/admin` for defense in depth, since this is a public-facing Coolify
  deployment.

## Phase 6 — Real content & images

- Replace the placeholder colored/text divs (`ProductCard`, `Hero`,
  `ArticleCard`, `CaseStudyCard`, etc.) with real `<Image>` usage once
  actual photography is uploaded through the media library.
- Do the real Arabic translation pass now that Payload's localization gives
  per-field fr/ar values instead of a blanket FR copy.

## Phase 7 — SEO & rendering strategy

- Since content can now change without a redeploy, switch
  `generateStaticParams`-based pages to ISR (`revalidate`) instead of pure
  SSG, or trigger on-demand revalidation from a Payload webhook on publish.
- Generate `sitemap.xml`/`robots.txt` from live Payload data instead of
  static arrays.

## Suggested order of attack

1. Phase 0–1 (infra decision + Postgres/S3 on Coolify) — unblocks
   everything else.
2. Phase 2–3 (schema + data layer swap) — biggest single change, but
   isolated thanks to the existing `lib/get*` seam.
3. Phase 4 (forms) — independent of 2–3, can run in parallel.
4. Phase 5 (admin hardening) — quick, do right after Payload is live.
5. Phase 6–7 (real content/images, ISR/SEO) — ongoing content work, not a
   one-time migration.
