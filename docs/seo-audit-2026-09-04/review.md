# Green Expert SEO review — 4 September 2026

Follow-up fixes and validation are recorded in [implementation.md](implementation.md). This report preserves the pre-fix findings.

The site has a sound crawlable foundation and good measured homepage performance. The most important work is to prevent regressions in the pending redesign, align canonical signals, repair structured data and image delivery, and strengthen the evidence behind the service content. More metadata alone will not resolve these issues.

This review covers both the current workspace at `http://localhost:3000` and the deployed site at `https://www.greenexpert.ma`. They are materially different versions. Application files were not edited; only this report and its evidence file were added.

**Scope and evidence**

Completed 37 bounded HTTP checks: all 11 content routes in both environments, both robots files and sitemaps, three missing paths per environment, and five redirect probes. Inspected server-rendered metadata, headings, links, image attributes, and JSON-LD; checked local image file existence; reproduced the mobile navigation defect in the browser; checked Schema.org’s current vocabulary; and ran a public mobile PageSpeed audit. Detailed results are in [evidence.json](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/docs/seo-audit-2026-09-04/evidence.json>).

Search Console, Google Business Profile ownership, backlinks, actual leads, and verified customer records were unavailable. Indexable means technically eligible, not confirmed indexed. No ranking forecasts or traffic-loss estimates are implied.

**Measured homepage performance**

| Measure | Live mobile result |
|---|---:|
| Lighthouse performance | 95/100 |
| Lighthouse SEO checks | 100/100 |
| Accessibility | 97/100 |
| Best practices | 96/100 |
| First Contentful Paint | 1.2 s |
| Largest Contentful Paint | 2.4 s |
| Total Blocking Time | 70 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 4.2 s |
| Total transferred during test | 22,742 KiB |

This was one simulated mobile run, using Lighthouse 13.4.1, an emulated Moto G Power, and Slow 4G. PageSpeed reported **No Data** for real-user experience, so this does not establish a field Core Web Vitals pass. Total Blocking Time is a lab measure, not a measured INP. The 100 SEO score covers basic automated checks; structured-data validity remains a manual check in the report. [Public PageSpeed report](https://pagespeed.web.dev/analysis/https-www-greenexpert-ma/zaljt98j2g?form_factor=mobile).

**Prioritized findings**

P1 means resolve before releasing the pending version, or explicitly settle the content decision. P2 means a confirmed defect or important improvement to schedule next. P3 means polish with limited direct search impact.

| Priority | Finding | Live | Workspace |
|---|---|---|---|
| P1 | Navigation anchors fail on detail pages | Not reproduced | Confirmed on all 10 non-home content pages |
| P1, conditional | Projects will lose indexing eligibility | 3 indexable pages | All 3 set to noindex and removed from discovery |
| P2 | Canonical hostname conflicts with redirects | Confirmed | Same non-www URLs retained |
| P2 | Unrecognized business schema type | All 11 pages contain it | Persists on 6 services and 3 projects |
| P2 | Image delivery failure | Optimized image returns 502 | Same remote sources remain in process/projects |
| P2 | Relative sitemap image locations | Absolute URLs | 6 relative image URLs |
| P2 | Excessive video transfer and delayed hero rendering | Measured | Same video; animation dependency remains |
| P2 | Service pages lack decision detail and supporting evidence | Present | Largely unchanged |
| P2 | Search titles are verbose and sometimes repeat the brand | Present | Improved, but still present |
| P3 | Social metadata inconsistencies | Present | Present |

**1. Repair shared navigation before deployment**

The desktop and mobile menu use `href="#contact"`, `#services`, `#approche`, and `#accueil`. These IDs exist on the homepage but not on the six service pages, process page, or three project pages. In the mobile menu on the plantation page, selecting Contact left the browser at `/services/plantation#contact`; no contact element exists there. This directly obstructs visitors arriving from a service search.

Use homepage-qualified anchors such as `/#contact`, or make the navigation aware of the current route. Keep the skip link pointing at the current page’s `#main-content`. The service-page body CTA already correctly uses `/#contact`.

The project breadcrumb and “Tous les projets” links also point to `/#projets`, but the local homepage has no `projets` section. Restore the destination if projects remain public, or update those links when retiring the portfolio.

Evidence: [navigation-menu.tsx:103](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/components/navigation-menu.tsx:103>), mobile links at line 169; [project page:128](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/app/projets/[slug]/page.tsx:128>). Acceptance: each menu item reaches its actual destination from every page and from the mobile menu.

**2. Treat the project exclusion as a deliberate publishing decision**

The live villa, rooftop, and Zen garden pages return 200, allow indexing, and appear in the live sitemap. The local versions return 200 with `noindex, nofollow`; the local sitemap drops all three and the homepage stops linking to the project group. The projects still link to each other, but the group is disconnected from the homepage’s normal discovery path.

If these are genuine, approved case studies, this change would remove their search eligibility after recrawling. Retain indexing, restore links, and include them in the sitemap. If the stories, testimonials, or images are illustrative rather than documented client work, their exclusion may be correct. Do not restore indexing simply to increase the page count. `noindex` does not make a publicly accessible page private or change how its claims read to visitors.

Check Search Console impressions, backlinks, and leads for these three URLs before retiring real content. No evidence currently establishes how much traffic, if any, they receive.

Evidence: [project metadata:32](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/app/projets/[slug]/page.tsx:32>), [sitemap.ts](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/app/sitemap.ts>).

**3. Align the canonical hostname across the site**

Confirmed redirect: `https://greenexpert.ma/` → **308** → `https://www.greenexpert.ma/`. The same redirect applies to the sampled service URL. However, all 11 deployed pages declare non-www canonicals, and both sitemaps, robots sitemap declarations, Open Graph URLs, and business identifiers also use non-www.

This is conflicting canonical guidance, not proof of a penalty or duplicate indexing. The least disruptive alignment with current hosting is to use www consistently; alternatively, change hosting to make non-www the final destination. Use one shared site URL constant to prevent drift. HTTP and trailing-slash normalization otherwise worked in the probes; HTTP non-www currently takes two hops.

Evidence: [layout.tsx:20](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/app/layout.tsx:20>). Acceptance: every canonical and sitemap page URL returns its intended 200 response without a host redirect. Verify Google’s selected canonical in Search Console afterward. [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

**4. Replace the unrecognized structured-data type**

`LandscapingBusiness` is absent from the current Schema.org vocabulary, and its schema URL returns 404. It appears as the root business type on the deployed site and as service providers/project creators in the workspace. The local homepage already uses recognized `LocalBusiness` and `HomeAndConstructionBusiness` types, so that part is improved.

Use a supported business type consistently and connect providers/creators to the same stable business `@id`. All retrieved JSON-LD parsed as JSON; the defect concerns vocabulary and entity consistency, not syntax. Keep the real address, phone, logo, and verified social accounts consistent. Confirm the map coordinates and account ownership against the actual business before relying on them as identity evidence.

Evidence: [service provider:70](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/app/services/[slug]/page.tsx:70>), [project creator:78](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/app/projets/[slug]/page.tsx:78>). Validate the final markup with Schema.org Validator and Google’s Rich Results Test. A valid `Service` object alone does not guarantee a special Google result. [Supported business type](https://schema.org/HomeAndConstructionBusiness), [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business).

The FAQ remains useful content, but do not prioritize FAQ/HowTo markup for rich-result gains: Google deprecated FAQ rich results in May 2026 and HowTo rich results in 2023. Existing accurate markup need not be removed solely for that reason. [Google’s May 2026 update](https://developers.google.com/search/updates), [HowTo deprecation](https://developers.google.com/search/blog/2023/08/howto-faq-changes).

**5. Fix the confirmed image failure and remaining remote dependencies**

PageSpeed recorded HTTP **502** for the optimized fal.media image ending `n01RzRRMoP4XMul-Z2F45_dfadc490f38e4afc805c05e7b4c31722.jpg`, requested at width 750. A separate request to that exact image endpoint also returned 502. This source is used for process/design imagery, not an irrelevant background request.

The current service and homepage updates move several images into `public/images`, but `lib/process-data.ts` still uses three fal.media URLs and projects reuse those remote sources. Direct requests to the six unique fal.media sources failed DNS resolution in this environment; that does not prove a permanent global outage. The independently observed production 502 is sufficient to treat delivery reliability as a real defect.

Replace or migrate these assets to controlled, durable storage using approved originals, then test their Next image variants. Avoid presenting illustrative images as documentary project evidence. All referenced local image files checked in this audit existed; all parsed image tags had alt attributes. Empty alt attributes on decorative images and duplicate marquee logos are appropriate.

Evidence: [process-data.ts:35](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/lib/process-data.ts:35>), [projects-data.ts:52](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/lib/projects-data.ts:52>), [PageSpeed error details](https://pagespeed.web.dev/analysis/https-www-greenexpert-ma/zaljt98j2g?form_factor=mobile).

**6. Normalize sitemap image URLs before deployment**

The rendered local sitemap contains six entries such as `<image:loc>/images/services/irrigation.jpg</image:loc>`. Next.js serializes these strings without adding the hostname. The live version uses absolute remote URLs and does not have this particular defect.

Resolve each image against the selected site origin, for example with `new URL(s.heroImage, baseUrl).href`. This preserves existing absolute URLs too. Relative image locations undermine the image sitemap; they do not automatically make the main page URLs unindexable. [Source: sitemap.ts:26](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/app/sitemap.ts:26>), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

The local move away from setting every `lastmod` to the current generation date is sensible. Maintain real modification dates when available. Google ignores sitemap priority and change-frequency values; adjusting them is not a ranking lever.

**7. Reduce video cost and make essential text visible immediately**

The hero video is **13,054,990 bytes**, eight seconds long, at 1280×720. The mobile PageSpeed run recorded **22,742 KiB** total transfer, with **22,441.7 KiB** from Cloudinary, predominantly multiple requests for that same video. This is actual transfer observed in that run, not a claim that every session always transfers the same amount.

The measured LCP element was the **H1**, with an element render delay of **2,330 ms**. Do not assume the video poster was the measured bottleneck. Prioritize rendering the headline and CTA visibly in the initial state, then inspect animation, hydration, and font timing. Compress the decorative video substantially and consider an image-first mobile experience, loading video after critical content is ready or on request. `preload="metadata"` does not limit an autoplaying video to metadata.

The local hero poster is a roughly 716 KiB JPEG, served directly through the video’s `poster` attribute, so it bypasses Next image optimization. A lighter poster is worthwhile; preload it only if measurement identifies it as an important LCP resource, since unnecessary preloads compete for bandwidth.

Below the fold, the local approach, service cards, team content, partner heading, and contact introduction remain at opacity zero until intersection-triggered animation. Their text and links are present in server HTML, which is good; this is not a missing-content claim. However, JavaScript failures leave them visually hidden, and crawler rendering without scrolling can differ from the intended presentation. Default essential content to visible and layer motion on top. Confirm Google’s rendered screenshot via URL Inspection rather than assuming an indexing failure.

Evidence: [hero-section.tsx:107](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/components/hero-section.tsx:107>), [section-reveal.tsx:25](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/components/section-reveal.tsx:25>), [services-grid.tsx](</Users/ali-khyatti/Documents/Green Expert/green-expert-lp/components/services-grid.tsx>), [Google video performance guidance](https://web.dev/learn/performance/video-performance), [Google lazy-content guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading).

**8. Make service pages answer real purchasing questions**

The six local service pages contain approximately **307–325 words each including navigation, footer, and related-service text**. This is context, not a minimum-word-count failure. Each has distinct introductory copy, benefits, and three approach steps, but the short template leaves important customer decisions unexplained.

| Page | Useful material to add after business verification |
|---|---|
| Design paysager | What a design package includes, survey inputs, revision scope, 2D/3D examples, timing, and what drives the quote |
| Systèmes d’irrigation | Suitable systems by garden type, pressure/water requirements, installation scope, ongoing maintenance, and the baseline behind claimed savings |
| Éclairage extérieur | Lighting examples, included equipment and installation, maintenance, and how fixtures are chosen for the site |
| Plantation | Species suited to the actual service area, planting seasons, aftercare, and the duration/conditions of the recovery guarantee |
| Terrassement | Access and equipment constraints, spoil removal, drainage, what is included, and the inputs required to estimate cost |
| Entretien paysager | Visit frequency, seasonal task examples, inclusions/exclusions, service area, and contract options |

The irrigation page claims up to 50% water savings; planting promises a recovery guarantee; service CTAs promise a response within 24 hours; the irrigation description says maintenance is included. These need a documented basis and clear scope. The live homepage claims 500+ projects and a 4.9/5 rating, while the local homepage says 150+ projects and omits the rating. Reconcile these against real records rather than choosing the strongest-sounding number.

For local search, strengthen the verified Salé/Rabat-area business story, actual intervention areas, team expertise, and approved project evidence. Maintain a complete Google Business Profile with accurate category, hours, address/service-area settings, photos, website, and authentic reviews. No verified profile was available for this audit, so its absence is not asserted. Avoid creating near-identical city pages without distinct local evidence. [Google local ranking guidance](https://support.google.com/business/answer/7091?hl=en).

**9. Tighten titles and align visible headings with page purpose**

Every successful content route had a title, description, canonical, and one H1. Titles are distinct, but verbose: live service titles range from **89 to 102 characters**; local service titles range from **67 to 80**. The plantation title and two project titles repeat Green Expert because both the page data and the layout add the brand.

Remove duplicated branding and reduce secondary phrases. Keep one specific service topic and one concise brand suffix. Character counts are diagnostics, not hard Google limits; display width and relevance determine presentation. Service descriptions are already distinct and reasonably concise, so a wholesale rewrite is unnecessary.

The homepage’s aspirational H1 is supported by “Paysagiste au Maroc” nearby and a relevant title. It is not a technical failure. Still, consider making at least one prominent heading explicitly describe the landscaping offer and verified location, and make service headings such as “Plantation” more specific to the customer’s task. Choose wording from actual query and conversion evidence when available. [Google title guidance](https://developers.google.com/search/docs/appearance/title-link).

**10. Finish social metadata polish after the higher-impact work**

The local homepage uses `fr_MA` for Open Graph, while services, process, and projects use `fr_FR`. Normalize locale where appropriate. Service Open Graph images declare 1200×630 regardless of the source image; the checked design image is actually 1535×1024. Use truthful dimensions or dedicated social crops. The main `cover.png` is correctly 1200×630. These affect presentation and metadata consistency, not a guaranteed ranking change.

**What already works**

All 11 known routes returned HTTP 200 in both environments. Six tested missing URLs returned real HTTP 404 responses. Both robots files are accessible, allow normal page crawling, and disallow `/api/`. All successful pages have a single canonical and H1, distinct titles/descriptions, and French document language. Services are linked from the homepage and shared footer, with additional contextual links. Server HTML includes meaningful content and JSON-LD. Service hero images use responsive Next Image output and preload hints. No missing alt attributes were found in parsed image tags. The local homepage adds useful FAQs, clearer contact details, and a supported business type.

The default canonical also appears on 404 pages, but their actual 404 status is the important signal; this is cleanup rather than an indexing emergency. There is only one published language version, so missing hreflang is not presently a defect. Geo meta tags, keyword tags, schema quantity, and a blog created solely for frequency are not priorities.

**Execution order and verification**

1. Before deployment: fix menu destinations, settle project publishing intent, and make sitemap image locations absolute. Preserve the homepage’s useful improvements.
2. Align the hostname and all public identifiers; replace invalid business types; fix failed remote imagery. Verify final URLs and image responses, not just source configuration.
3. Optimize the video and headline rendering, then repeat a production mobile performance test on the homepage and a representative service page. Do not compare local development transfer sizes to production scores.
4. Expand the highest-value service pages using approved facts, real examples, scope, timing, and quote criteria; resolve conflicting claims and shorten duplicated titles.
5. In Search Console, inspect the homepage, one service, and one project; compare declared/selected canonicals, rendered content, index eligibility, and sitemap processing. Review query/page performance before deciding whether to remove or expand pages.
6. Measure qualified organic enquiries, successful form submissions, and WhatsApp/call clicks separately. No analytics implementation was found in the inspected application source; external tracking configuration was not audited. A click is not the same as a qualified lead.

Mobile navigation was reproduced in the in-app browser, but its requested viewport override did not match the reported CSS width; no comprehensive 390-pixel visual-layout pass is claimed. No production build or application test suite was run because this was a read-only SEO review and the existing preview served every audited route. Google’s Rich Results Test and Search Console remain follow-up validations; vocabulary checking is not a substitute for either.

**Follow-up: visibility for the searches in the user’s screenshots**

After the user supplied Google results for “aménagement des espaces verts” and “paysagiste rabat”, a direct Google search for `site:greenexpert.ma` returned the homepage, process page, terrassement, plantation, maintenance, Villa Méditerranéenne, and Jardin Zen among the visible results. This confirms Google surfaces multiple site pages, including a Rabat project. It does not establish that every URL is indexed, reveal the selected canonical, or measure positions for the two target queries. The earlier lack of Search Console access remains a limitation, but a site-wide absence from Google is now ruled out by direct observation.

The screenshots show two different needs. “Aménagement des espaces verts” produces a definition-oriented AI Overview and images in the visible portion, suggesting informational or mixed intent. “Paysagiste rabat” displays local providers and directories, indicating commercial local intent. The screenshot does not establish Green Expert’s exact rank or absence from all results.

For the Rabat query, the current national positioning (“Paysagiste au Maroc”), broad service templates, and limited visible local evidence are an actionable relevance gap. A public comparison found providers explicitly describing Rabat coverage, services, and intervention areas; for example, [El Gardinero](https://elgardinero.ma/) and [Jardins de Meriem](https://jardindemeriem.com/). This is a content comparison, not proof that wording alone explains their ranking or that they have stronger backlinks/reviews.

Prioritize one substantive Rabat–Salé service-area page if those are confirmed operating areas, linked from the homepage and relevant services. It should explain the real Salé base, Rabat intervention arrangements, project types, scope, quote process, and approved local work. Keep the actual business address accurate. Do not manufacture a Rabat office or repeat near-identical pages for neighborhoods. Strengthen the existing design/maintenance content for the commercial terms those services serve. Add a distinct full-service green-space development page only if it describes a real offer beyond design alone; use a helpful practical guide for the broader informational query when there is original expertise to contribute.

Google Business Profile verification and accurate service areas matter for Maps/local discovery, while the website’s organic results also need relevant content and credible external references. Profile status and backlink strength have not been verified. Search Console query/page reports should determine whether target queries have impressions, which page Google selects, and whether the limiting issue is visibility, position, or click-through rate. The Lighthouse 100/100 score does not answer those questions.

Technical repairs remain worthwhile, especially the hostname mismatch, but there is no evidence that schema fixes alone will secure high positions for these searches. No fixed ranking outcome or timetable is promised.
