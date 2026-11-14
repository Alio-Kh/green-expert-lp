"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { galleryAlt, projects } from "@/lib/projects-data";

const slides = projects.filter((project) => project.published);
const count = String(slides.length).padStart(2, "0");
const controlClass =
  "rounded-full border border-white/25 p-3 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6df6b]";

export function ProjectsShowcase() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [fading, setFading] = useState(false);
  const reduced = useReducedMotion();
  const autoplay = !paused && !reduced && slides.length > 1;
  const running = autoplay && inView && !hovered && !focused && !fading;

  // The carousel only advances while it is actually on screen.
  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  function go(index: number) {
    const element = track.current;
    if (!element) return;
    const next = (index + slides.length) % slides.length;
    const left = (element.children[next] as HTMLElement).offsetLeft;
    if (reduced) return element.scrollTo({ left, behavior: "instant" });
    if (Math.abs(next - active) <= 1) return element.scrollTo({ left, behavior: "smooth" });
    // Going from the last project back to the first: fade rather than rewind through every slide.
    setFading(true);
    setTimeout(() => {
      element.scrollTo({ left, behavior: "instant" });
      setFading(false);
    }, 300);
  }

  function syncActive() {
    const element = track.current;
    if (!element) return;
    let nearest = 0;
    for (let i = 1; i < slides.length; i++) {
      const distance = Math.abs((element.children[i] as HTMLElement).offsetLeft - element.scrollLeft);
      if (distance < Math.abs((element.children[nearest] as HTMLElement).offsetLeft - element.scrollLeft)) nearest = i;
    }
    setActive(nearest);
  }

  if (!slides.length) return null;
  return (
    <section ref={section} id="projets" aria-labelledby="projects-heading" className="overflow-hidden bg-[#17251e] py-20 text-white md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6df6b]">Carnet de projets / {count}</p>
            <h2 id="projects-heading" className="mt-5 font-serif text-4xl font-light leading-tight md:text-6xl">Des idées qui prennent <span className="italic text-[#c6df6b]">racine.</span></h2>
          </div>
          <p className="max-w-sm leading-7 text-white/65 md:justify-self-end">Du premier dessin à l’intention paysagère, explorez les détails qui donnent son caractère à un jardin.</p>
        </div>

        <div
          role="region"
          aria-roledescription="carrousel"
          aria-label="Les vues de nos projets"
          className="mt-10 md:mt-12"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") { event.preventDefault(); go(active + 1); }
            if (event.key === "ArrowLeft") { event.preventDefault(); go(active - 1); }
          }}
        >
          <div
            ref={track}
            onScroll={syncActive}
            className={`relative flex snap-x snap-mandatory gap-4 overflow-x-auto transition-opacity duration-300 [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden ${fading ? "opacity-0" : "opacity-100"}`}
          >
            {slides.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projets/${project.slug}`}
                aria-label={`${project.title} — ${project.category}. Voir le projet.`}
                className={`group relative block h-[clamp(20rem,58vh,35rem)] w-[86%] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#203129] transition-opacity duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c6df6b] sm:w-[70%] lg:w-[60%] ${index === active ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
              >
                <Image
                  src={project.gallery[0].src}
                  alt={galleryAlt(project, project.gallery[0])}
                  fill
                  sizes="(max-width: 639px) 86vw, (max-width: 1023px) 70vw, 740px"
                  className={`object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03] ${index === active ? "scale-100" : "scale-[1.04]"}`}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101a14]/90 via-[#101a14]/15 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#17251e]/80 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white backdrop-blur-sm sm:left-6 sm:top-6">
                  {project.presentationLabel ?? "Étude paysagère"}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-8">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#c6df6b]">{project.category}</p>
                    <h3 className="mt-2 font-serif text-2xl font-light leading-tight sm:text-4xl">{project.title}</h3>
                    <p className="mt-3 hidden max-w-md text-sm leading-6 text-white/75 sm:line-clamp-2">{project.shortDescription}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="h-11 w-11 shrink-0 rounded-full border border-white/30 p-2.5 transition-colors duration-300 group-hover:border-[#c6df6b] group-hover:bg-[#c6df6b] group-hover:text-[#17251e]" />
                </div>
              </Link>
            ))}
            {/* Lets the last project scroll to the start of the track. */}
            <div aria-hidden="true" className="w-[14%] shrink-0 sm:w-[30%] lg:w-[40%]" />
          </div>

          <div className="mt-6 flex items-center gap-5 sm:gap-8">
            <p className="shrink-0 text-xs tabular-nums tracking-[0.2em] text-white/60" aria-live={autoplay ? "off" : "polite"}>
              <span className="text-[#c6df6b]">{String(active + 1).padStart(2, "0")}</span> / {count}
            </p>
            <div aria-hidden="true" className="h-px flex-1 overflow-hidden bg-white/15">
              {autoplay ? (
                <div
                  key={active}
                  className="animate-carousel-progress h-full origin-left bg-[#c6df6b]"
                  style={{ animationPlayState: running ? "running" : "paused" }}
                  onAnimationEnd={() => go(active + 1)}
                />
              ) : (
                <div
                  className="h-full origin-left bg-[#c6df6b] transition-transform duration-500"
                  style={{ transform: `scaleX(${(active + 1) / slides.length})` }}
                />
              )}
            </div>
            <div className="flex shrink-0 gap-2">
              {!reduced && (
                <button type="button" aria-label={paused ? "Activer le défilement automatique" : "Mettre le défilement en pause"} aria-pressed={paused} onClick={() => setPaused(!paused)} className={controlClass}>
                  {paused ? <Play aria-hidden="true" size={16} /> : <Pause aria-hidden="true" size={16} />}
                </button>
              )}
              <button type="button" aria-label="Projet précédent" onClick={() => go(active - 1)} className={controlClass}><ArrowLeft aria-hidden="true" size={16} /></button>
              <button type="button" aria-label="Projet suivant" onClick={() => go(active + 1)} className={controlClass}><ArrowRight aria-hidden="true" size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
