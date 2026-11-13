"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { projects } from "@/lib/projects-data";

const visibleProjects = projects.filter((p) => p.published);
const slides = visibleProjects.map((project) => ({
  project,
  image: project.gallery[0],
  label: project.category,
}));

export function ProjectsShowcase() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduced = useReducedMotion();
  const stopped = paused || hovered || focused || !!reduced;

  function go(index: number) {
    const el = track.current;
    if (!el) return;
    const next = (index + slides.length) % slides.length;
    const card = el.children[next] as HTMLElement;
    el.scrollTo({ left: card.offsetLeft, behavior: reduced ? "instant" : "smooth" });
  }

  useEffect(() => {
    if (stopped || slides.length < 2) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      const el = track.current;
      if (!el) return;
      const card = el.children[(active + 1) % slides.length] as HTMLElement;
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }, 5500);
    return () => clearInterval(timer);
  }, [active, stopped]);

  if (!slides.length) return null;
  return (
    <section id="projets" aria-labelledby="projects-heading" className="overflow-hidden bg-[#17251e] py-20 text-white md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6df6b]">Carnet de projets / {String(visibleProjects.length).padStart(2, "0")}</p>
            <h2 id="projects-heading" className="mt-5 font-serif text-4xl font-light leading-tight md:text-6xl">Des idées qui prennent <span className="italic text-[#c6df6b]">racine.</span></h2>
          </div>
          <p className="max-w-sm leading-7 text-white/65 md:justify-self-end">Du premier dessin à l’intention paysagère, explorez les détails qui donnent son caractère à un jardin.</p>
        </div>
        <div role="region" aria-roledescription="carrousel" aria-label="Les vues de nos projets" className="mt-12"
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}>
          <div ref={track} className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={() => {
              const el = track.current;
              if (!el) return;
              const width = (el.children[0] as HTMLElement).offsetWidth + 20;
              setActive(Math.min(slides.length - 1, Math.round(el.scrollLeft / width)));
            }}>
            {slides.map(({project, image, label}) => (
              <Link key={image.src} href={`/projets/${project.slug}`} aria-label={`${project.title} — ${label}. Voir le projet.`}
                className="group block w-[88%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/15 bg-[#203129] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c6df6b] md:w-[72%]">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 88vw, 900px" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#17251e]/85 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">{image.alt.includes("Dessin original") ? "Dessin original" : "Visualisation"}</span>
                </div>
                <div className="flex items-center justify-between gap-4 p-5 sm:p-7">
                  <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#c6df6b]">{label}</p><h3 className="mt-2 font-serif text-2xl sm:text-3xl">{project.title}</h3></div>
                  <ArrowUpRight aria-hidden="true" className="h-10 w-10 shrink-0 rounded-full border border-white/25 p-2 transition-colors group-hover:bg-[#c6df6b] group-hover:text-[#17251e]" />
                </div>
              </Link>
            ))}
            <div aria-hidden="true" className="w-[12%] shrink-0 md:w-[28%]" />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/15 pt-5">
            <p className="text-xs text-white/60"><span className="text-[#c6df6b]">{String(active + 1).padStart(2, "0")}</span> / {String(slides.length).padStart(2, "0")} <span className="ml-3 hidden sm:inline">Des lieux, des intentions</span></p>
            <div className="flex gap-2">
              <button type="button" aria-label={paused ? "Activer le défilement automatique" : "Mettre le défilement en pause"} aria-pressed={paused} onClick={() => setPaused(!paused)} className="rounded-full border border-white/25 p-3 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#c6df6b]">{paused || reduced ? <Play size={16}/> : <Pause size={16}/>}</button>
              <button type="button" aria-label="Vue précédente" onClick={() => go(active - 1)} className="rounded-full border border-white/25 p-3 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#c6df6b]"><ArrowLeft size={16}/></button>
              <button type="button" aria-label="Vue suivante" onClick={() => go(active + 1)} className="rounded-full border border-white/25 p-3 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#c6df6b]"><ArrowRight size={16}/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
