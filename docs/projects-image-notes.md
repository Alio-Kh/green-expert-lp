# Le Jardin des Quatre Palmiers

Provisional project name. Location, delivery date, client, surface and construction status have not been confirmed. Only visible design features are described. `provisional: true` displays the disclosure, disables indexing and excludes the project from the sitemap. The old unverified projects remain hidden.

## Assets

All selected images are in `public/images/projects/quatre-palmiers/`:
- `vue-ensemble.webp`: generated overview.
- `detail-fontaine.webp`: generated closer view.
- `plan-original.jpg`, `perspective-originale.jpg`, `vue-originale.png`: supplied original drawings. The duplicate clipboard overview was omitted.

Generated with the built-in Imagegen tool, then encoded to WebP with Sharp. These are architectural interpretations, not evidence of completed construction or exact technical reconstruction. Fountain and lamp details may differ from the drawings.

## Prompt set

Overview: create a single wide 3:2 architectural landscape visualization based strictly on the supplied reference. Preserve the circular island, red and white curb, four fan palms, four curved purple flower beds, lawn, gray inner circular walkway and radial connections, central pale stone Moroccan scalloped fountain with turquoise water, and black lighting. Elevated three-quarter overview, natural daylight, irregular fronds, subtly uneven lawn, weathered stone and realistic water. Neutral paved surroundings; no buildings, people, vehicles, text or collage.

Detail: use the generated overview as the identity reference for the same project. Single wide 3:2 closer eye-level oblique view of the central fountain and turquoise water, palm trunk toward left edge, flower beds and palms behind, curved lawn and narrow gray paths. Match fountain, materials and planting; red and white curb glimpsed in background. Soft natural daylight, weathered stone, imperfect foliage, subtle ripples; no cinematic grading, excessive saturation, buildings, people or text.

## Client review

Confirm the project name and location; confirm whether this is an unbuilt study or completed work; approve the generated interpretations before using them as portfolio imagery. Add verified details in `lib/projects-data.ts`.

## Revision 2

The user rejected the close-up as overly generated. It is no longer referenced by the project gallery. The approved first overview remains the hero and style reference.

Built-in Imagegen produced five new files, all saved in the project asset directory:
- `facade-v2.webp`: enhanced supplied front view.
- `perspective-v2.webp`: enhanced supplied oblique view.
- `vue-laterale-v2.webp`: additional matching side view.
- `vue-haute-v2.webp`: additional matching high view.
- `essai-realiste-v2.webp`: separate photographic-style trial, retained for comparison and not included in the website gallery.

The four matching views are included in the detail gallery; the homepage uses the approved overview and two enhanced supplied angles. Exact generation prompts and reference paths are recorded in `projects-image-prompts-v2.json`. All remain generated interpretations; small fountain and lighting differences persist between views.

## Second project: Les Jardins du Patio

Provisional residential courtyard project at `/projets/jardins-du-patio`. Name and location remain unconfirmed. No area, dates or completion claims were inferred from the supplied plans.

Selected three complementary daylight views from the twelve supplied images, omitting repeated perspectives and underexposed night renders. Enhanced with built-in Imagegen; exact prompts and source mapping in `patio-image-prompts.json`. Assets saved in `public/images/projects/jardins-du-patio/`: `vue-ensemble.webp`, `piscine-jardin.webp`, `ilots-palmiers.webp`, and unchanged `plan-original.png`. Generative enhancement can introduce minor differences; the original plan remains the reference for design verification.

Homepage now shows one card per published project, with further views on each detail page.

## Additional Four Palms views

Added `promenade-v3.webp` and `massif-v3.webp` to the Four Palms gallery, saved in `public/images/projects/quatre-palmiers/`. Generated with built-in Imagegen using the approved overview as reference. Exact prompts in `palmiers-extra-image-prompts.json`.

## Corrected additional-image request

User clarified that additional views belong to Les Jardins du Patio. Removed `promenade-v3.webp` and `massif-v3.webp` from the Four Palms gallery (files retained). Enhanced three supplied Patio views using the existing Patio pool image as the style reference. Saved `terrasse-piscine.webp`, `vue-aerienne.webp`, and `terrasse-fleurie.webp` in `public/images/projects/jardins-du-patio/` and added them to its gallery. Built-in Imagegen prompts and exact references: `patio-extra-image-prompts.json`.

## Third project: Les Allées de Palmiers

Provisional name and unconfirmed location. Describes visible perimeter planting, access paths and lighting only; no client, year, dimensions or completed-work claims.

Selected three supplied daytime views and one street-level night view. Omitted the very dark aerial view dominated by the roof. Enhanced through built-in Imagegen, retaining the original viewpoints and restrained architectural rendering style. Exact prompts and source paths: `allees-image-prompts.json`.

Final WebP assets in `public/images/projects/allees-de-palmiers/`: `vue-angle.webp`, `allee-plantee.webp`, `entree-paysagere.webp`, `ambiance-nocturne.webp`. Used on `/projets/allees-de-palmiers` and the homepage carousel. As with the other projects, generated enhancement can introduce minor differences from the source design.

## Fourth project: Villa aux Jardins Fleuris

Provisional project name and unconfirmed location. Describes only visible garden elements; no client, area, dates or completion status invented.

All four supplied perspectives enhanced using built-in Imagegen. Prompt set and original source paths: `villa-image-prompts.json`. Final images saved under `public/images/projects/villa-jardins-fleuris/`: `jardin-piscine.webp`, `vue-entree.webp`, `jardin-accueil.webp`, `facade-jardin.webp`. Used on `/projets/villa-jardins-fleuris` and its homepage carousel card. Visualizations remain interpretations and can contain small differences from source details.

## Fifth project: Le Jardin des Feuillages

Provisional name and unconfirmed location. Content describes visible courtyard elements only, with no client, dimensions, dates or delivery claims.

Selected four complementary views from the six supplied: house/pool, planting palette, pool/cascade, and wall planters. Omitted two similar planting angles. Enhanced through built-in Imagegen, using conservative clarity, exposure and material refinement. Exact prompt set and source mapping: `feuillages-image-prompts.json`.

Saved assets in `public/images/projects/jardin-des-feuillages/`: `maison-piscine.webp`, `palette-vegetale.webp`, `piscine-cascade.webp`, `jardin-mural.webp`. Added to `/projets/jardin-des-feuillages` and the homepage carousel. Generated enhancements can introduce minor differences from original design details.

## Sixth project: La Promenade Fleurie

Provisional name and unconfirmed location. Copy describes visible planting, paths, seating and lighting; no client, dimensions, dates or construction claims.

Selected four complementary views from seven supplied: palm-lined walkway, flowerbeds and seating, overhead composition, and street-level night view. Omitted repetitive aerial angles and the distant dark night overview. Enhanced with built-in Imagegen, requesting conservative clarity and exposure improvements while preserving the architectural rendering style, layout and neutral model surroundings. Exact prompts and source mapping: `promenade-image-prompts.json`.

Final WebP assets under `public/images/projects/promenade-fleurie/`: `promenade-palmiers.webp`, `massifs-et-bancs.webp`, `vue-aerienne.webp`, `ambiance-nocturne.webp`. Used on `/projets/promenade-fleurie` and its homepage carousel card. Generated enhancement can introduce minor differences from the original design.

### Gallery expansion — 2026-11-13

At the user’s request, reviewed all seven original images again and expanded the gallery to use all seven. Retained the existing four edits and added conservative built-in Imagegen enhancements of the three previously omitted views. The new images retain neutral model surroundings, the architectural rendering style, and the original scene compositions. The night overview has brighter shadow detail without changing it to daytime. Outputs were visually compared with the supplied views and the existing gallery references.

| Source order | View | Final asset |
| --- | --- | --- |
| 1 | Eye-level palm walkway | `promenade-palmiers.webp` (retained) |
| 2 | Broadside panorama with parking | `panorama-stationnement.webp` (added) |
| 3 | Diagonal site perspective | `perspective-diagonale.webp` (added) |
| 4 | Seating and flowerbeds | `massifs-et-bancs.webp` (retained) |
| 5 | Elevated nighttime overview | `vue-ensemble-nocturne.webp` (added) |
| 6 | Overhead composition | `vue-aerienne.webp` (retained) |
| 7 | Eye-level night view | `ambiance-nocturne.webp` (retained) |

New assets are 1672 × 941 WebP at quality 90 under the same project image directory. Exact prompts, reference roles, source paths and output mappings: `docs/promenade-extra-image-prompts.json`. Existing cover and homepage carousel entry retained. Name and location remain provisional.

## Seventh project: Le Jardin des Floraisons

Provisional name and unconfirmed location. Description limited to visible garden features; no client, dimensions, dates or construction status inferred.

Enhanced all four supplied views through built-in Imagegen, preserving the original architectural rendering style. The flowering garden with stepping stones is the cover; three aerial views show the plot layout, pool planting and entrance garden. Exact prompts and original source references: `floraisons-image-prompts.json`.

Saved WebP assets in `public/images/projects/jardin-des-floraisons/`: `jardin-fleuri.webp`, `vue-ensemble.webp`, `piscine-et-plantations.webp`, `jardin-accueil.webp`. Used on `/projets/jardin-des-floraisons` and the homepage carousel. Generative enhancement may introduce minor differences; original supplied renders remain the design reference.

## Eighth project: Le Patio des Galets

All five supplied real photographs were edited with built-in Imagegen. Requested subtle camera-angle improvements, corrected verticals, clearer framing and natural detail/exposure enhancement while retaining the existing garden. The walkway photograph replaces the original woman with a fictional adult man seen from behind, per the user’s preference. Exact prompts and source mapping: `patio-galets-image-prompts.json`.

Assets saved under `public/images/projects/patio-des-galets/`: `allee-minerale.webp`, `cour-interieure.webp`, `promenade-patio.webp`, `massif-angle.webp`, `bordure-vegetale.webp`. The walkway remains portrait; four other images are landscape. The gallery supports portrait framing. These generative angle edits can reconstruct details, so originals remain the reference.

Added `/projets/patio-des-galets` and its homepage carousel card. The project uses a photographic-retouching disclosure rather than the default rendering disclosure and a garden category instead of an unverified study/completion status. Name and location remain provisional; no client, measurements or dates inferred.

## Ninth project: Les Terrasses du Jeu

Selected four complementary views from seven supplied photographs: the blue play structure facing the sea, its side view with slides and rope net, the red climbing modules, and an elevated site overview. Omitted a repetitive overview, a tight building-dominated view, and the active installation photograph with workers.

Built-in Imagegen improved framing, perspective, light and clarity, removed construction debris and temporary clutter, tidied sand and paving, refreshed existing salmon walls and refined peripheral planting. The user explicitly authorized improvement of surroundings. Each edit used its source plus a second supplied site view for context. Prompts and references: `terrasses-jeu-image-prompts.json`.

Saved under `public/images/projects/terrasses-du-jeu/`: `jeux-face-mer.webp`, `vue-ensemble.webp`, `bateau-et-toboggans.webp`, `parcours-rouge.webp`. Added `/projets/terrasses-du-jeu` and its homepage carousel card. Name and location remain provisional. Website disclosure explicitly identifies the images as AI-retouched presentation views with embellished surroundings, not documentation of actual site condition. Generative reconstruction may change small details; original photos remain the reference. No completion, safety certification, dates, dimensions or client claims added.

## Les Jardins d’Ocre — 2026-11-13

Added the provisional project `/projets/jardins-ocre` with 14 photographic edits selected from 16 supplied photographs. The gallery combines architectural garden views, planting details, preparation and working-team scenes. Sources 11 and 13 were omitted as near-duplicates. Existing architecture, planting composition and work stages were retained as reference constraints; AI retouching and reconstructed details are disclosed on the project page. Location remains unconfirmed.

Individual selection notes: `docs/jardins-ocre-image-review.md`. Exact prompts: `docs/jardins-ocre-image-prompts.json`. Generated output mapping and the corrected source-10 revision: `docs/jardins-ocre-image-outputs.json`. Web assets: `public/images/projects/jardins-ocre/`.

Validation: TypeScript check passed; local project and homepage responses succeeded; all 14 WebP filenames appear in the project response, the provisional page has noindex, and the homepage includes its project link. Browser page content was inspected. Development server remains available on port 3000.

### Les Terrasses du Jeu — original photographs restored, 2026-11-13

The user rejected the generated images as unrealistic and requested fully real imagery. This revision supersedes the earlier AI-retouched presentation set. Reviewed all seven supplied photographs and restored all seven to the project gallery using new `*-original.webp` filenames, including the installation photograph. Updated the hero, thumbnail, captions, image note and metadata. Original site conditions, people, lighting, camera angles and surroundings are preserved. No AI image editing or photographic retouching was used for this revision.

Lossless WebP encoding only; decoded RGBA buffers for every saved asset were compared with the original PNG and matched exactly. Source/output mappings are recorded in `docs/terrasses-jeu-original-photos.json`. Earlier generated assets remain on disk for history but are no longer referenced by this project.

### Les Jardins d’Ocre — uniforms and worksite cleanup, 2026-11-13

Replaced the two requested gallery photos with versioned photographic edits: `gestes-de-plantation-uniformes-v2.webp` and `entretien-jardin-uniforme-v2.webp`. The four-person planting scene uses matching blue work jackets/trousers, reflective back stripes, Green Expert back branding and closed work boots. Loose bags were removed and hose/tools organized while retaining the active planting scene. The single gardener’s blue uniform, shoes and back branding were refreshed, with restrained clarity improvements. The actual `public/logo-wide.png` was supplied as a brand reference. Outputs were visually reviewed for worker count, poses, footwear, clothing, branding and consistency of the setting. These remain disclosed retouched photographs, not untouched originals. Previous assets retained.

Built-in Imagegen prompts, inputs and generated output paths: `docs/jardins-ocre-uniform-prompts.json`. Final assets: `public/images/projects/jardins-ocre/`.

### Les Jardins d’Ocre — remaining requested workers, 2026-11-13

Applied matching blue Green Expert workwear and closed work boots to the three further supplied images: two distant terrace workers in the silver foliage view, the three-person team scene, and the lone worker beside the flower border. Used the approved single-gardener edit as uniform reference and `public/logo-wide.png` as branding reference. Retained the workers’ poses and scene framing; logos appear according to visible garment surfaces. Light cleanup of loose unused work materials in the team scene. All three outputs reviewed visually and saved as versioned WebP assets; previous images retained. Exact prompts and source/output mappings: `docs/jardins-ocre-uniform-extra-prompts.json`. Updated gallery references in `lib/projects-data.ts`; TypeScript check and local page/image requests passed.
