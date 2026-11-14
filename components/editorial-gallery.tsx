"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Expand } from "lucide-react";
import { Lightbox } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";

export type EditorialImage = {
  src: string;
  alt: string;
  title: string;
  note?: string;
  link?: { href: string; label: string };
  /** Portrait source: gets a portrait frame instead of being cropped to landscape. */
  tall?: boolean;
  /** Plans and drawings: shown whole on a paper background, never cropped. */
  contain?: boolean;
};

interface EditorialGalleryProps {
  images: EditorialImage[];
  label: string;
  /** Number shown on the first image (the page hero may already be "01"). */
  startNumber?: number;
  titleAs?: "h3" | "p";
}

type Slot = "lead" | "wide" | "narrow" | "half" | "solo";

const slotLayout: Record<Slot, { column: string; sizes: string }> = {
  lead: { column: "md:col-span-12", sizes: "(max-width: 1280px) 100vw, 1232px" },
  wide: { column: "md:col-span-7", sizes: "(max-width: 767px) 100vw, (max-width: 1280px) 58vw, 720px" },
  narrow: { column: "md:col-span-5", sizes: "(max-width: 767px) 100vw, (max-width: 1280px) 42vw, 510px" },
  half: { column: "md:col-span-5", sizes: "(max-width: 767px) 100vw, (max-width: 1280px) 42vw, 510px" },
  solo: { column: "md:col-span-12", sizes: "(max-width: 767px) 100vw, (max-width: 1280px) 58vw, 720px" },
};

function frame(image: EditorialImage, slot: Slot) {
  if (image.tall) return "aspect-[3/4]";
  if (slot === "lead") return "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]";
  return "aspect-[4/3]";
}

// A landscape image always leads; the others follow in asymmetric pairs,
// and a leftover image sits beside its caption.
function arrange(images: EditorialImage[]) {
  const order = images.map((_, index) => index);
  const lead = images.findIndex((image) => !image.tall);
  if (lead > 0) order.unshift(...order.splice(lead, 1));

  const placed: { index: number; slot: Slot; offset: string }[] = [{ index: order[0], slot: "lead", offset: "" }];
  for (let i = 1, row = 0; i < order.length; i += 2, row++) {
    const [a, b] = [order[i], order[i + 1]];
    if (b === undefined) {
      placed.push({ index: a, slot: "solo", offset: "" });
    } else if (images[a].tall && images[b].tall) {
      placed.push({ index: a, slot: "half", offset: "md:col-start-2" }, { index: b, slot: "half", offset: "md:mt-20" });
    } else {
      const wideFirst = images[a].tall ? false : images[b].tall ? true : row % 2 === 0;
      placed.push(
        { index: a, slot: wideFirst ? "wide" : "narrow", offset: wideFirst ? "" : "md:mt-24" },
        { index: b, slot: wideFirst ? "narrow" : "wide", offset: wideFirst ? "md:mt-24" : "" },
      );
    }
  }
  return placed;
}

export function EditorialGallery({ images, label, startNumber = 1, titleAs = "p" }: EditorialGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Title = titleAs;
  if (!images.length) return null;

  function open(event: MouseEvent, index: number) {
    // Modified clicks keep the default behaviour: open the image file itself.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setOpenIndex(index);
  }

  return (
    <>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-20 lg:gap-x-12">
        {arrange(images).map(({ index, slot, offset }, position) => {
          const image = images[index];
          const solo = slot === "solo";
          return (
            <Reveal
              as="figure"
              key={image.src}
              className={`min-w-0 ${slotLayout[slot].column} ${offset} ${solo ? "md:grid md:grid-cols-12 md:items-center md:gap-x-8 lg:gap-x-12" : ""}`}
            >
              <a
                href={image.src}
                onClick={(event) => open(event, index)}
                aria-label={`Agrandir l’image : ${image.title}`}
                className={`group relative block overflow-hidden rounded-xl ${image.contain ? "bg-[#f3f1e6]" : "bg-white/5"} ${frame(image, slot)} ${solo ? (image.tall ? "md:col-span-5" : "md:col-span-7") : ""} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9bbb2d]`}
              >
                <span className="reveal-media absolute inset-0 block">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={slotLayout[slot].sizes}
                    className={image.contain
                      ? "object-contain p-3 sm:p-5"
                      : "object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"}
                  />
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-[#17251e]/80 p-2.5 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand aria-hidden="true" className="h-4 w-4" />
                </span>
              </a>
              <figcaption className={`flex gap-4 ${solo ? "mt-5 md:col-span-4 md:mt-0" : "mt-5"}`}>
                <span aria-hidden="true" className="pt-1 font-serif text-sm tabular-nums text-[#9bbb2d]">
                  {String(position + startNumber).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <Title className={`font-serif leading-snug ${solo ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>{image.title}</Title>
                  {image.link && (
                    <Link href={image.link.href} className="mt-2 inline-flex items-center gap-1.5 rounded text-sm text-[#b8d555] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9bbb2d]">
                      {image.link.label}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  {image.note && <p className="mt-2 text-xs leading-5 text-white/60">{image.note}</p>}
                </div>
              </figcaption>
            </Reveal>
          );
        })}
      </div>

      <Lightbox images={images} index={openIndex} onIndexChange={setOpenIndex} label={label} />
    </>
  );
}
