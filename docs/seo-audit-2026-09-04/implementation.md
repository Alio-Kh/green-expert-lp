# SEO fixes implemented — 4 September 2026

**Deployed and verified on 11 September 2026** at https://www.greenexpert.ma, commit `ba1d67148bc0c62777f13e2efc013b90dfb0405d`. The production build, 14 content-page checks and 37 image-response checks passed. The earlier `review.md` and `evidence.json` describe the pre-fix site; `image-incident-2026-09-11.json` records the live image failure and repair.

## Changes ready to release

- All page canonicals, sitemap URLs, social URLs and business identifiers use `https://www.greenexpert.ma`, matching the existing production redirect.
- Shared metadata provides distinct titles and descriptions, one brand suffix, `fr_MA` social locale and a correctly sized social cover. Missing pages return 404 without inheriting the homepage canonical.
- Shared structured data uses `HomeAndConstructionBusiness`, with service providers referencing one business identifier. JSON-LD serialization escapes HTML-sensitive characters.
- Desktop and mobile navigation reach the homepage sections from detail pages; obsolete project-section destinations are removed from the rendered site.
- The hero uses a responsive local image instead of the 13 MB autoplay video. Content no longer needs entrance animations to become visible. Process imagery uses local files instead of the failing remote image sources.
- Six service pages now explain scope, quote factors, preparation and service-specific questions. Unsupported fixed response times, savings figures and guarantees were removed or qualified by the agreed project scope.
- New pages address three different visitor needs: `/paysagiste-rabat`, `/amenagement-espaces-verts`, and `/conseils/amenagement-espaces-verts`. Homepage cards, service links and the footer make them discoverable. The regional page describes the actual Salé base and Rabat service area.
- The sitemap contains 11 indexable content pages and absolute image URLs.

## Unverified projects

The user confirmed that Villa Méditerranéenne, Oasis Urbaine and Jardin Zen, their testimonials and figures are not verified. All three remain `published: false`, excluded from the sitemap, with `noindex, follow`. Their URLs render an unavailable notice and useful service/contact links; the unverified case-study content is not rendered. Legacy draft data remains in `lib/projects-data.ts` for later editorial work.

Do not switch these entries to published until the client work, permissions, images, quotations and measurements are verified. Production now serves these exclusions. Search results can retain old information until Google processes the changed pages.

## Account configuration still needed

1. Completed on 11 September: deployed through the existing GitHub/Vercel workflow and verified production pages, images, robots and sitemap. The apex-to-www redirect remains in place.
2. In the business's Search Console property, verify ownership if needed. For HTML-tag verification of a URL-prefix property, set `GOOGLE_SITE_VERIFICATION` to the tag's content value before rebuilding. Domain-property verification uses DNS instead. Submit `https://www.greenexpert.ma/sitemap.xml` and inspect the homepage, new Rabat page and one service page. Check the Google-selected canonical and indexing status; sitemap inclusion alone does not confirm indexing.
3. Review the existing Google Business Profile with its owner: actual address or service-area configuration, Rabat/Salé coverage, phone, website, services and genuine work photos. Request reviews only from actual customers. No profile or external directory was edited during this task.
4. Optional analytics: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the existing GA4 web stream's `G-…` value before rebuilding. Empty values keep the integration disabled. This does not create or configure a Google account.

The GA4 integration uses automatic pageviews. Keep Enhanced Measurement's browser-history page changes enabled for Next.js navigation and avoid adding a second manual pageview implementation. Confirm page transitions in the account after activation. [Google's pageview documentation](https://developers.google.com/analytics/devguides/collection/ga4/views).

Custom events are `contact_whatsapp_click`, `contact_phone_click`, `contact_email_click`, and `generate_lead` after a successful form response. Contact events contain the page path, a URL without its query string, and the form method where applicable; they do not include form field values. GA4's automatic pageviews collect their standard metadata separately. A contact click or accepted form is not proof of a qualified lead. Review actual enquiries alongside organic landing pages and Search Console queries.

## Validation completed

- Production build, TypeScript validation and ESLint passed in an isolated copy; the existing development server was left intact.
- `npm run check:seo -- http://localhost:3001` passed across 14 content URLs: 11 indexable and 3 intentionally excluded. It checks metadata, canonical URLs, headings, JSON-LD presence and business type, image references, visible server content, internal paths/fragments, sitemap, robots and three missing-route 404s.
- Desktop contact navigation from the Rabat page and mobile-menu Contact from the plantation page both reached `/#contact`. The mobile menu closed correctly.
- Homepage and new editorial layouts were visually inspected. The browser viewport override reported 582 CSS pixels when asked for 390; this validates the mobile breakpoint behavior, not an exact 390-pixel device rendering. The override was reset.
- The 750-pixel hero image returned HTTP 200 as WebP, 69,890 bytes. This is one image measurement, not a new overall PageSpeed score. Repeat a public mobile performance audit after deployment.
- Contact-event logic passed isolated checks for the four event names, omission of query data, and safe disabled/server behavior. No form submission, email or analytics event was sent.

The SEO check command requires Python 3.8+ and selects a working standard XML library; it falls back to macOS Python when the local Homebrew XML extension is incompatible. Google Search Console inspection, Rich Results Test and real analytics delivery still require account checks. No ranking position or ranking timetable is promised.
