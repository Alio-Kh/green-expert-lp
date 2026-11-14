# Service image audit — 2026-11-13

## Scope and delivered selection

**Final service selection — 2026-11-14:** the table below reflects all follow-up requests. The dated sections record the earlier iteration and validation history, including statuses at that time. The Ministère project page is a separate uncommitted change and is excluded from this service update. Its two service captions retain the source name without a project link. The selected planting photo is copied unchanged to `public/images/services/plantation/ministere-massif-et-poteries.webp` so the service gallery does not depend on publishing that project. The rejected Patio des Galets night image is excluded from the commit.

**Final verification — 2026-11-14:** built an isolated copy of committed `main` plus the 19 selected service-update files, excluding all unrelated working-tree changes. `npm run build` passed compilation, lint, TypeScript checks and static page generation. The first sandboxed attempt could not resolve Google Fonts; the network-enabled retry succeeded. All 26 distinct assets decoded, all six heroes matched their first gallery image, and every retained project link resolved to a published project in the release data. Checked the generated production HTML for all six gallery counts and image references, every gallery image in the generated sitemap, and absence of the rejected Patio des Galets images and Plantation design rendering. The service-owned Ministère planting image is byte-identical to its source photograph.

Inspected all 64 active project-gallery assets, the existing field-work and service images, and 78 source images under `Images/`. The unpublished legacy example projects were excluded. The current project collection contains both photographs and architectural visualizations; these are labelled separately in the service galleries.

| Service | Gallery images | Sources | Coverage |
| --- | ---: | --- | --- |
| Design paysager | 6 | Quatre Palmiers, Jardins du Patio, Villa aux Jardins Fleuris, Jardin des Floraisons, Promenade Fleurie | Five design visualizations and one supplied plan; two views added at the user’s follow-up request |
| Systèmes d’irrigation | 5 | One AI-regenerated supplied photograph and four generated service illustrations | Sprinklers, drip irrigation, tree watering, zone valves and controller; no attribution to an actual Greenexpert project |
| Éclairage extérieur | 4 | Jardins d’Ocre, Jardins du Ministère, Allées de Palmiers, Promenade Fleurie | Two photo-based night lighting simulations from distinct projects, plus two existing design visualizations |
| Plantation | 5 | Jardins d’Ocre, field-work / Projet 2, Jardins du Ministère | Two planting actions, preparation of potted plants, planted bed with pots, and a flowered border; all photo-based |
| Terrassement | 5 | Three generated service illustrations; Jardins d’Ocre; field-work / Projet 2 | Excavation, levelling and drainage illustrations, plus two retouched planting-bed preparation photographs |
| Entretien paysager | 4 | Jardins d’Ocre, field-work / Projet 2 | Gardening, mowing, palm care, and maintained topiary |

There are 29 gallery placements, 26 distinct image files overall. Each gallery contains distinct images. The soil-working / planting photograph and the photograph of plants awaiting planting appear in both Plantation and Terrassement because they illustrate both services. The night promenade visualization appears in Design paysager and Éclairage extérieur. None of these images is counted twice within a gallery. Hero images reuse the first gallery image and are not extra distinct images.

The field-work source collection corresponds to `Images/projet 2/`. It does not have a current published project page, so its captions describe the setting as “Espaces verts d’un équipement collectif” without inventing a client, location, or project link. Other project links use the existing provisional names.

**Excluded project:** the user stated that Patio des Galets will be removed. Its night image was removed from Éclairage extérieur and its border photograph from Plantation. No service gallery now uses or links to this project. The project page and original assets are retained for the separate project-removal work.

## Outstanding images requested

- **Terrassement:** the user subsequently requested generated excavation, levelling and drainage images, bringing this gallery to five images. The three new images are explicitly labelled fictional AI-generated scenes. Actual project coverage remains limited to manual soil and bed preparation; 3–5 real photographs from at least two projects would still be needed for a gallery documenting Greenexpert earthworks.
- **Éclairage extérieur:** two realistic night simulations from different existing projects are retained, within the user’s requested two-to-three range, alongside two existing design studies. Patio des Galets was excluded at the user’s request. These simulations do not supply a photographic record of completed lighting; actual night photographs would still be needed for that purpose.
- **Irrigation:** at the user’s follow-up request, the four supplied sprinkler photographs were replaced by five more varied illustrations: one regenerated from a supplied photo and four generated scenes. Visual coverage now includes drip lines, tree watering, valves and a controller. Photos of actual Greenexpert installations would still be needed for a project-specific gallery.

## Uploaded irrigation assets

The initial four uploaded assets received only WebP encoding and EXIF orientation. They remain preserved but are no longer used in the service gallery after the regeneration follow-up below. The `arrosage-bordure.webp` file was the reference for the new generated sprinkler view; its original file was not modified.

| Uploaded filename | Website asset |
| --- | --- |
| codex-clipboard-af72b941-fe55-4300-9b25-66f2d31972b4.jpg | public/images/services/irrigation/arrosage-pas-japonais.webp |
| codex-clipboard-4e64ea51-20fe-442f-9c5a-55be66862e31.jpg | public/images/services/irrigation/arroseurs-pelouse.webp |
| codex-clipboard-fcbc117a-ae11-43a1-a187-7de2a1940875.jpg | public/images/services/irrigation/arrosage-sous-arbres.webp |
| codex-clipboard-b0abf58e-c4cb-44f6-a71c-2a39da86f720.jpg | public/images/services/irrigation/arrosage-bordure.webp |

The fifth upload, `codex-clipboard-bafcc1cd-6a2e-4f7a-8aff-5ba1e3281465.jpg`, was not used because it contains editorial text and Promesse de Fleurs branding. No branding or watermark was removed.

## Uniforms and image provenance

Reused the approved `jardins-ocre/entretien-jardin-uniforme-v2.webp` and `gestes-de-plantation-uniformes-v2.webp`. Created five versioned edits using the built-in image_gen tool: three field-work photographs (planting, mowing, palm care) and two existing night design visualizations. The uniform reference was the approved single-gardener photograph; the brand reference was `public/logo-wide.png`.

Reviewed outputs for blue jackets/trousers, reflective stripes, Green Expert back branding, number of people, poses and scene consistency. Logos are shown only where back surfaces are visible, and may be partly obscured; lettering on distant figures cannot be read at thumbnail size. The edits remain AI-retouched images, not untouched source photographs. The lighting edits remain design visualizations, not proof of completed installations. Previous assets were preserved, and the project pages were not changed.

Exact prompts, inputs, generated output paths, saved asset paths and review notes are in `docs/service-gallery-image-edits.json`. Gallery captions and asset references are in `lib/service-galleries.ts`.

### Additional Design paysager views — 2026-11-13

Added both views requested in the follow-up, retaining the existing four images. The uploaded residential courtyard visualization received the same blue-uniform treatment using built-in image_gen and was saved as `public/images/services/patio-vue-ensemble-uniformes-v2.webp`. The night promenade reuses the existing `public/images/services/promenade-nocturne-uniformes-v2.webp`, which matches the second supplied view with its prior uniform edits. Both have project links, descriptive captions and explicit visualization/retouch labels. The gallery introduction now covers day and night studies. Exact prompt and mapping: `docs/design-paysager-extra-image-edits.json`.

Follow-up validation: TypeScript passed; all six design images decode; the page returns HTTP 200 with six distinct gallery figures and both added image URLs return HTTP 200. Browser-verified the two added tiles and their lightbox positions (5/6 and 6/6), next navigation and close control. This follow-up is a local change and has not been pushed.

The user subsequently selected the courtyard view as the main Design paysager image. It now leads the six-image gallery and serves as the service hero, with the other five gallery entries retained.

### Generated Terrassement illustrations — 2026-11-13

At the user’s request, added three generated scenes for excavation, levelling and drainage, retaining the two existing preparation photographs. The user rejected the first staged-looking versions and then requested better angles and further enhancement. The selected v3 images use a wider three-quarter excavation view, a lower view across levelled soil, and a diagonal view along a drainage trench. All three depict empty work sites, so no worker-uniform edits are required. The excavation image leads the gallery and is also the service hero.

The files are under `public/images/services/terrassement/`. Their visible captions say “Image générée par IA · chantier fictif”, use “Illustration du service” as the source, and do not link to an actual project. Exact prompts, iteration status, input/output paths and review notes are recorded in `docs/terrassement-image-generation.json`. Earlier generated versions and source PNGs were preserved outside the website assets.

Follow-up validation: TypeScript and `git diff --check` passed. All five Terrassement images decode and are distinct; the page returns HTTP 200 with five figures, the three new assets return HTTP 200, and the sitemap includes them. Browser-reviewed the desktop gallery, the full excavation image, previous-image navigation through all three new images, close control, and the mobile drainage crop at 390px. The full-size excavation preview is saved at `/Users/ali-khyatti/.codex/visualizations/2026/11/13/01a1d60a-f5d2-7a02-9f62-f0653d3766c3/terrassement-preview.png`. This follow-up remains local and has not been pushed.

### Diversified irrigation illustrations — 2026-11-13

Replaced the four similar sprinkler images at the user’s request with five varied views: a wide sprinkler scene, a close-up dripper, an olive-tree watering basin, an open zone-valve box and a wall-mounted controller. The wider sprinkler scene was regenerated from the supplied curved-border photograph and now serves as the hero. The other scenes were newly generated. Targeted second versions refined the dripper size/tubing and added practical controller markings. No people appear in the new assets.

All five selected WebP files are saved under `public/images/services/irrigation/`, using versioned descriptive filenames. Visible captions distinguish the regenerated supplied-photo scene from the four fictional generated installations. No project identity or project link is invented. Full prompts, input/output paths, selected versions and review notes are in `docs/irrigation-image-generation.json`. Original uploads and generated PNGs were preserved.

Follow-up validation: TypeScript and `git diff --check` passed. All five images decode at 1536×1024 and have distinct paths, alt text, captions and provenance. The irrigation route returns HTTP 200 with five figures; all new image URLs return HTTP 200 and appear in the sitemap. The old hero is absent from the route. Browser-reviewed the desktop gallery, the full controller view and close control, and the mobile hero/gallery at 390px. Preview: `/Users/ali-khyatti/.codex/visualizations/2026/11/13/01a1d60a-f5d2-7a02-9f62-f0653d3766c3/irrigation-gallery-preview.png`. Changes remain local and unpushed.

### Project-based night lighting simulations — 2026-11-13

Removed `/images/projects/patio-des-galets/massif-angle.webp` from the lighting service gallery at the user’s request, preserving the original project asset and its project-page use. Added exactly three new views, each generated from an existing photograph of a different project: the Jardins d’Ocre façade, the Patio des Galets stepping-stone path, and the Jardins du Ministère walkway between yuccas and palms. Each retains its source architecture, garden arrangement and viewpoint, with proposed warm night lighting. The façade view is the new hero. The existing Allées de Palmiers and Promenade Fleurie design studies remain, for five gallery images total.

Subsequent exclusion: the user rejected the Patio des Galets night image because the project will be removed. The selected lighting gallery now contains the Jardins d’Ocre and Jardins du Ministère night simulations plus the two existing design studies, for four images total. The introduction and generation manifest were updated accordingly. The Patio des Galets image file is retained but is not referenced by any service gallery. Its separate Plantation image was also removed, leaving three distinct Plantation images. TypeScript and diff checks passed; both affected service routes returned HTTP 200 with the expected four/three figures and no references to the excluded project. The rejected night image is also absent from the sitemap.

The new images are labelled “Simulation nocturne par IA · éclairage proposé” and link to their respective source projects. They are not presented as photographs of installed lighting. The original photographs were already AI-retouched; this new step simulates night lighting. No people appear in the three selected views. Two other Jardins d’Ocre night outputs were generated before the user requested project diversity and were not integrated. Exact prompts, selection history and input/output mappings are in `docs/eclairage-image-generation.json`; the selected WebP assets are in `public/images/services/eclairage/`.

Follow-up validation: TypeScript and `git diff --check` passed. The gallery contains five distinct images, with the first three from three different projects. All assets decode; the service page, three new image URLs and three source-project routes return HTTP 200. The sitemap includes every new image, and the removed daytime image is absent from this service route. Browser-reviewed the hero, gallery crops and full patio image with its caption, including opening and closing the viewer. The initial navigation timed out but the page had loaded and was successfully inspected. Preview: `/Users/ali-khyatti/.codex/visualizations/2026/11/13/01a1d60a-f5d2-7a02-9f62-f0653d3766c3/eclairage-gallery-preview.png`. Changes remain local and unpushed.

### Additional realistic Plantation images — 2026-11-13

Added two existing project photographs at the user’s request: `jardins-ocre/preparation-plantations.webp`, showing potted plants arranged before planting, and `ministere-education-rabat/massif-et-poteries.webp`, showing a planted bed and terracotta pots. Both source images were visually inspected and reused unchanged, without further generation or editing. Their existing AI-retouched-photo provenance remains visible. Neither added image contains people. The gallery now contains five distinct images; the two planting actions and the design visualization are retained. The source projects are linked, the hero remains unchanged, and Patio des Galets remains excluded.

Validation: TypeScript and `git diff --check` passed. All five image files decode; the service route returns HTTP 200 with five figures and both added image URLs return HTTP 200. Browser-verified the two added tiles, their full-image views at positions 3/5 and 4/5, next-image navigation and close control. Preview: `/Users/ali-khyatti/.codex/visualizations/2026/11/13/01a1d60a-f5d2-7a02-9f62-f0653d3766c3/plantation-additions-preview.png`. This follow-up remains local and unpushed.

### Plantation design-render replacement — 2026-11-13

At the user’s request, removed the Jardin des Feuillages design rendering (`jardin-des-feuillages/palette-vegetale.webp`) from Plantation and added one realistic existing project photograph, `jardins-ocre/massif-rose.webp`, showing pink and white flowers mixed with shrubs and foliage. The replacement was visually inspected and reused without additional image generation or editing, retaining its “Photographie retouchée par IA” label. The gallery remains at five distinct images and now uses only photo-based assets. The original design image remains on its project page; Patio des Galets remains excluded from all service galleries.

Validation: TypeScript and diff checks passed. The Plantation route returns HTTP 200 with five figures, the new image returns HTTP 200, and the rejected rendering is absent from the rendered page. Browser-verified the replacement at position 5/5 and the close control. Preview: `/Users/ali-khyatti/.codex/visualizations/2026/11/13/01a1d60a-f5d2-7a02-9f62-f0653d3766c3/plantation-replacement-preview.png`. Changes remain local and unpushed.

## Initial implementation and verification

- Added responsive galleries near the top of all six service pages, with descriptive alt text, visible captions, source/project links and image-type disclosures.
- Added a native dialog for full, uncropped image viewing, previous/next controls and keyboard navigation.
- Updated service heroes to use the selected gallery images and included gallery assets in the service sitemap entries.
- TypeScript and production build passed. The build ran in an isolated temporary copy using the existing dependencies; no production deployment was performed.
- Verified that all gallery image files exist and decode, and that each gallery has distinct sources and nonempty alt text, captions and provenance.
- All six local service routes and all 20 distinct gallery image URLs returned HTTP 200. Rendered figure counts match the table above; the sitemap contains every selected image.
- Browser-reviewed the desktop planting and lighting galleries and mobile planting and irrigation layouts (390px). Verified opening the full portrait image, next-image controls, arrow-key navigation and Escape dismissal. The temporary browser approval timeout resolved on retry.
- Desktop preview: `/Users/ali-khyatti/.codex/visualizations/2026/11/13/01a1d60a-f5d2-7a02-9f62-f0653d3766c3/service-gallery-preview.png`.
