import Image from "next/image";
import type { Project } from "@/lib/projects-data";

export function ProjectStudy({ project }: { project: Project }) {
  return (
    <>
      <header className="container mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 md:pt-16">
        <p className="text-xs uppercase tracking-[0.22em] text-[#c6df6b]">{project.presentationLabel ?? "Étude paysagère"}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-tight md:text-7xl">{project.title}</h1>
        <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <p className="max-w-xl text-lg leading-8 text-white/70">{project.shortDescription}</p>
          <p className="text-sm text-white/60">{project.location}</p>
        </div>
      </header>
      <figure className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl"><Image src={project.heroImage} alt={project.gallery[0].alt} fill priority sizes="(max-width: 1280px) 100vw, 1232px" className="object-cover" /></div>
        <figcaption className="py-4 text-xs leading-6 text-white/60">{project.imageNote ?? "Visualisation générée à partir des documents fournis. Nom proposé et informations à confirmer ; ces images ne constituent pas des photographies de chantier."}</figcaption>
      </figure>
      <section className="mt-10 bg-[#fafaf5] py-16 text-[#17251e] md:py-24">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <h2 className="font-serif text-3xl md:text-4xl">{project.studyHeading ?? "L’équilibre, autour de l’eau."}</h2>
          <div><p className="text-lg leading-8 text-[#17251e]/75">{project.intro}</p>
            <dl className="mt-8 grid gap-5 border-t border-[#17251e]/15 pt-6 sm:grid-cols-3">{project.specs.map(spec => <div key={spec.label}><dt className="text-xs text-[#17251e]/60">{spec.label}</dt><dd className="mt-2 font-serif text-xl">{spec.value}</dd></div>)}</dl>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24" aria-labelledby="views-heading">
        <p className="text-xs uppercase tracking-[0.22em] text-[#c6df6b]">Regards sur le projet</p>
        <h2 id="views-heading" className="mt-4 font-serif text-3xl md:text-5xl">De la ligne à la matière.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">{project.gallery.slice(1).map((img, i) => (
          <figure key={img.src} className={i === 0 ? "md:col-span-2" : img.shape === "tall" ? "md:row-span-2" : ""}>
            <a href={img.src} target="_blank" rel="noreferrer" className={`relative block ${img.shape === "tall" ? "aspect-[3/4]" : "aspect-[3/2]"} overflow-hidden rounded-xl bg-[#9cbb93] focus-visible:ring-2 focus-visible:ring-[#c6df6b]`} aria-label={`${img.alt} — ouvrir l’image`}>
              <Image src={img.src} alt={img.alt} fill sizes={i === 0 ? "(max-width: 1280px) 100vw, 1232px" : "(max-width: 768px) 100vw, 600px"} className={i === 0 ? "object-cover" : "object-contain"}/>
            </a>
            <figcaption className="mt-3 text-xs leading-6 text-white/60">{img.alt}</figcaption>
          </figure>
        ))}</div>
      </section>
    </>
  );
}
