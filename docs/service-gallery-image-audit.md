# Service image audit — 2026-11-13

## Scope and delivered selection

Inspected all 64 active project-gallery assets, the existing field-work and service images, and 78 source images under `Images/`. The unpublished legacy example projects were excluded. The current project collection contains both photographs and architectural visualizations; these are labelled separately in the service galleries.

| Service | Gallery images | Sources | Coverage |
| --- | ---: | --- | --- |
| Design paysager | 4 | Quatre Palmiers, Jardins du Patio, Villa aux Jardins Fleuris, Jardin des Floraisons | Three design visualizations and one supplied plan |
| Systèmes d’irrigation | 4 | Four user uploads | Sprinkler illustrations; no verified attribution to a Greenexpert project |
| Éclairage extérieur | 3 | Allées de Palmiers, Promenade Fleurie, Patio des Galets | Two night visualizations and one retouched daytime photo showing a spotlight |
| Plantation | 4 | Jardins d’Ocre, field-work / Projet 2, Patio des Galets, Jardin des Feuillages | Planting actions, planted border, and a planting design visualization |
| Terrassement | 2 | Jardins d’Ocre, field-work / Projet 2 | Partial: planting-bed preparation only |
| Entretien paysager | 4 | Jardins d’Ocre, field-work / Projet 2 | Gardening, mowing, palm care, and maintained topiary |

There are 21 gallery placements, 20 distinct image files overall. Each gallery contains distinct images. The soil-working / planting photograph appears in both Plantation and Terrassement because both actions are visible; it is not counted twice within either gallery. Hero images reuse the first gallery image and are not extra distinct images.

The field-work source collection corresponds to `Images/projet 2/`. It does not have a current published project page, so its captions describe the setting as “Espaces verts d’un équipement collectif” without inventing a client, location, or project link. Other project links use the existing provisional names.

## Outstanding images requested

- **Terrassement:** below the requested 3–5 images. Request 3–5 actual photographs of excavation / earthmoving, grading or levelling, drainage installation, and prepared ground, ideally from at least two projects. The two integrated photographs show manual soil and bed preparation, not these larger works. Do not present the existing generic excavator image or completed playground views as evidence of Greenexpert earthworks.
- **Éclairage extérieur:** numerically covered, but the repository lacks a varied photographic record of completed lighting at night. Real night photos from different projects would replace the design studies if a photography-only gallery is preferred.
- **Irrigation:** the four supplied photographs cover the visual need. Their project identities are unknown and they are clearly labelled illustrations. Photos of actual Greenexpert networks, drip lines, valves and controllers would support a project-specific gallery.

## Uploaded irrigation assets

Only WebP encoding and EXIF orientation were applied; no generative edits, crops, or content removal.

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

## Implementation and verification

- Added responsive galleries near the top of all six service pages, with descriptive alt text, visible captions, source/project links and image-type disclosures.
- Added a native dialog for full, uncropped image viewing, previous/next controls and keyboard navigation.
- Updated service heroes to use the selected gallery images and included gallery assets in the service sitemap entries.
- TypeScript and production build passed. The build ran in an isolated temporary copy using the existing dependencies; no production deployment was performed.
- Verified that all gallery image files exist and decode, and that each gallery has distinct sources and nonempty alt text, captions and provenance.
- All six local service routes and all 20 distinct gallery image URLs returned HTTP 200. Rendered figure counts match the table above; the sitemap contains every selected image.
- Browser-reviewed the desktop planting and lighting galleries and mobile planting and irrigation layouts (390px). Verified opening the full portrait image, next-image controls, arrow-key navigation and Escape dismissal. The temporary browser approval timeout resolved on retry.
- Desktop preview: `/Users/ali-khyatti/.codex/visualizations/2026/11/13/01a1d60a-f5d2-7a02-9f62-f0653d3766c3/service-gallery-preview.png`.
