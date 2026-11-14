import Image from "next/image";
import { EditorialGallery, type EditorialImage } from "@/components/editorial-gallery";
import { Reveal } from "@/components/reveal";
import { galleryAlt, type Project } from "@/lib/projects-data";

// Plans and hand drawings are shown whole rather than cropped.
const isDrawing = (src: string) => /(plan|original)/.test(src.slice(src.lastIndexOf("/")));

export function ProjectStudy({ project }: { project: Project }) {
  const [cover, ...views] = project.gallery;
  const images: EditorialImage[] = views.map((image) => ({
    src: image.src,
    alt: galleryAlt(project, image),
    title: image.alt,
    tall: image.shape === "tall",
    contain: isDrawing(image.src),
  }));

  return (
    <>
      <header className="container mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 md:pb-14 md:pt-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[#c6df6b]">{project.presentationLabel ?? "Étude paysagère"}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.05] md:text-7xl">{project.title}</h1>
        <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <p className="max-w-xl text-lg leading-8 text-white/70">{project.shortDescription}</p>
          <p className="text-sm text-white/60">{project.location}</p>
        </div>
      </header>

      <figure className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative aspect-[4/3] max-h-[78vh] w-full overflow-hidden rounded-2xl bg-white/5 sm:aspect-[16/9]">
          <Image
            src={project.heroImage}
            alt={galleryAlt(project, cover)}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1232px"
            className="animate-settle object-cover"
          />
        </div>
        <figcaption className="max-w-4xl py-4 text-xs leading-6 text-white/60">{project.imageNote ?? "Visualisation générée à partir des documents fournis. Nom proposé et informations à confirmer ; ces images ne constituent pas des photographies de chantier."}</figcaption>
      </figure>

      <section className="mt-10 bg-[#fafaf5] py-16 text-[#17251e] md:py-24">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">{project.studyHeading ?? "L’équilibre, autour de l’eau."}</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-lg leading-8 text-[#17251e]/75">{project.intro}</p>
            <dl className="mt-10 grid gap-6 border-t border-[#17251e]/15 pt-6 sm:grid-cols-3">
              {project.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs text-[#17251e]/60">{spec.label}</dt>
                  <dd className="mt-2 font-serif text-xl">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {images.length > 0 && (
        <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28" aria-labelledby="views-heading">
          <Reveal className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c6df6b]">Regards sur le projet</p>
              <h2 id="views-heading" className="mt-4 font-serif text-3xl font-light leading-tight md:text-5xl">De la ligne à la matière.</h2>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70 md:justify-end">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#c6df6b]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-12 md:mt-16">
            <EditorialGallery images={images} label={`Galerie du projet ${project.title}`} startNumber={2} />
          </div>
        </section>
      )}
    </>
  );
}
