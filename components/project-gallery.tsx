"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/lib/projects-data";

type Variant = "mosaic" | "asymmetric" | "hero-grid";

interface ProjectGalleryProps {
  images: GalleryImage[];
  variant: Variant;
}

export function ProjectGallery({ images, variant }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i + 1) % images.length
      ),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      {variant === "mosaic" && <MosaicGrid images={images} onOpen={setOpenIndex} />}
      {variant === "asymmetric" && (
        <AsymmetricGrid images={images} onOpen={setOpenIndex} />
      )}
      {variant === "hero-grid" && (
        <HeroGrid images={images} onOpen={setOpenIndex} />
      )}

      <Lightbox
        images={images}
        openIndex={openIndex}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}

// ── Tile ────────────────────────────────────────────────────────────────────

function Tile({
  image,
  onClick,
  className = "",
  sizes,
  priority = false,
}: {
  image: GalleryImage;
  onClick: () => void;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Agrandir : ${image.alt}`}
      className={`group absolute inset-0 block h-full w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1a2821] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {/* Hover overlay with caption + zoom hint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a2821]/70 via-[#1a2821]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="text-left text-sm text-white/90">{image.alt}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
          <ZoomIn className="h-4 w-4 text-white" />
        </span>
      </div>
    </button>
  );
}

// ── Grids ───────────────────────────────────────────────────────────────────

function MosaicGrid({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (i: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`relative ${
            i === 0
              ? "aspect-[16/10] md:col-span-2 md:row-span-2"
              : "aspect-square"
          }`}
        >
          <Tile
            image={img}
            onClick={() => onOpen(i)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}

function AsymmetricGrid({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (i: number) => void;
}) {
  const [first, ...rest] = images;
  const side = rest.slice(0, 2);
  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="relative aspect-[4/3]">
        <Tile
          image={first}
          onClick={() => onOpen(0)}
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>
      <div className="grid gap-4">
        {side.map((img, i) => (
          <div key={img.src} className="relative aspect-[4/3]">
            <Tile
              image={img}
              onClick={() => onOpen(i + 1)}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroGrid({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (i: number) => void;
}) {
  const [first, ...rest] = images;
  return (
    <>
      <div className="relative aspect-[21/9]">
        <Tile
          image={first}
          onClick={() => onOpen(0)}
          sizes="100vw"
          priority
        />
      </div>
      {rest.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((img, i) => (
            <div key={img.src} className="relative aspect-[4/3]">
              <Tile
                image={img}
                onClick={() => onOpen(i + 1)}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// ── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  openIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: GalleryImage[];
  openIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const image = openIndex !== null ? images[openIndex] : null;

  return (
    <AnimatePresence>
      {image && openIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b130f]/95 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d] md:right-6 md:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d] md:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d] md:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {/* Image + caption */}
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center gap-4 md:max-w-[88vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[72vh] w-[min(1200px,90vw)] overflow-hidden rounded-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1200px) 90vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex w-full items-center justify-between gap-4 text-sm text-white/70">
              <span className="line-clamp-2">{image.alt}</span>
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-white/50">
                {openIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
