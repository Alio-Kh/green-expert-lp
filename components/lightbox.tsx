"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
  title: string;
  note?: string;
  contain?: boolean;
};

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onIndexChange: (index: number | null) => void;
  label: string;
}

const controlClass =
  "rounded-full border border-white/20 p-3 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9bbb2d]";

export function Lightbox({ images, index, onIndexChange, label }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const isOpen = index !== null;
  const image = index === null ? null : images[index];

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
    if (index === null) return;
    onIndexChange((index + direction + images.length) % images.length);
  }

  return (
    <dialog
      ref={dialog}
      aria-label={label}
      onClose={() => onIndexChange(null)}
      onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        touchStart.current = null;
        if (Math.abs(distance) > 48) move(distance < 0 ? 1 : -1);
      }}
      className="lightbox m-0 h-dvh max-h-none w-screen max-w-none bg-[#0e1712]/[0.97] p-0 text-white backdrop:bg-black/60"
    >
      {image && index !== null && (
        <div className="flex h-full flex-col px-4 pb-5 pt-4 sm:px-8 sm:pb-7 sm:pt-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs tabular-nums tracking-[0.2em] text-white/60" aria-live="polite">
              <span className="text-[#c6df6b]">{String(index + 1).padStart(2, "0")}</span> / {String(images.length).padStart(2, "0")}
            </p>
            <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Fermer la galerie" className={controlClass}>
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <div key={image.src} className="lightbox-image relative mt-4 min-h-0 flex-1">
            <Image src={image.src} alt={image.alt} fill sizes="100vw" quality={90} className="object-contain" />
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button type="button" onClick={() => move(-1)} aria-label="Image précédente" className={`${controlClass} shrink-0`}>
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <div className="min-w-0 text-center" aria-live="polite">
              <p className="font-serif text-lg leading-snug sm:text-xl">{image.title}</p>
              {image.note && <p className="mt-1 text-xs leading-5 text-white/60">{image.note}</p>}
            </div>
            <button type="button" onClick={() => move(1)} aria-label="Image suivante" className={`${controlClass} shrink-0`}>
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
