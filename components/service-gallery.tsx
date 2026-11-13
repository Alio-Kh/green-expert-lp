"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { ServiceGalleryData } from "@/lib/service-galleries";

export function ServiceGallery({ gallery }: { gallery: ServiceGalleryData }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const activeImage = activeIndex === null ? null : gallery.images[activeIndex];

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function move(direction: number) {
    setActiveIndex((index) => index === null ? null : (index + direction + gallery.images.length) % gallery.images.length);
  }

  return (
    <section id="service-gallery" aria-labelledby="service-gallery-heading" className="bg-[#1a2821] pb-20 pt-8 text-white md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">Le service en images</p>
          <h2 id="service-gallery-heading" className="mt-5 font-serif text-3xl font-light md:text-5xl">{gallery.heading}</h2>
          <p className="mt-5 text-base leading-7 text-white/70">{gallery.introduction}</p>
        </div>

        <div className={`mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 ${gallery.images.length === 3 ? "lg:grid-cols-3" : ""}`}>
          {gallery.images.map((image, index) => (
            <figure key={image.src} className="min-w-0">
              <button
                type="button"
                aria-label={`Agrandir : ${image.caption}`}
                aria-haspopup="dialog"
                onClick={() => setActiveIndex(index)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1a2821]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={gallery.images.length === 3 ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" : "(max-width: 767px) 100vw, 50vw"}
                  style={{ objectPosition: image.objectPosition ?? "center" }}
                  className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 right-4 rounded-full bg-[#1a2821]/80 p-3 text-white"><Expand aria-hidden="true" className="h-4 w-4" /></span>
              </button>
              <figcaption className="mt-5">
                <h3 className="font-serif text-xl md:text-2xl">{image.caption}</h3>
                {image.projectSlug ? (
                  <Link href={`/projets/${image.projectSlug}`} className="mt-2 inline-flex items-center gap-1.5 rounded text-sm text-[#b8d555] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9bbb2d]">
                    {image.sourceLabel}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                ) : <p className="mt-2 text-sm text-[#b8d555]">{image.sourceLabel}</p>}
                <p className="mt-2 text-xs leading-5 text-white/60">{image.imageNote}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-label="Galerie du service"
        aria-describedby={activeImage ? "service-image-caption" : undefined}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-2xl border border-white/20 bg-[#142019] p-4 text-white shadow-2xl backdrop:bg-black/85 sm:p-6"
      >
        {activeImage && (
          <>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm text-white/70" aria-live="polite">{(activeIndex ?? 0) + 1} / {gallery.images.length}</p>
              <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Fermer la galerie" className="rounded-full p-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#9bbb2d]"><X aria-hidden="true" className="h-5 w-5" /></button>
            </div>
            <div className="relative h-[55dvh] sm:h-[65dvh]">
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 1200px) 100vw, 1152px" className="object-contain" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <button type="button" onClick={() => move(-1)} aria-label="Image précédente" className="shrink-0 rounded-full border border-white/20 p-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#9bbb2d]"><ChevronLeft aria-hidden="true" className="h-5 w-5" /></button>
              <div id="service-image-caption" className="text-center" aria-live="polite">
                <p className="font-serif text-lg">{activeImage.caption}</p>
                <p className="mt-1 text-xs leading-5 text-white/65">{activeImage.sourceLabel} · {activeImage.imageNote}</p>
              </div>
              <button type="button" onClick={() => move(1)} aria-label="Image suivante" className="shrink-0 rounded-full border border-white/20 p-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#9bbb2d]"><ChevronRight aria-hidden="true" className="h-5 w-5" /></button>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
