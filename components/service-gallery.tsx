import { EditorialGallery, type EditorialImage } from "@/components/editorial-gallery";
import { Reveal } from "@/components/reveal";
import type { ServiceGalleryData } from "@/lib/service-galleries";

interface ServiceGalleryProps {
  gallery: ServiceGalleryData;
  /** Image already shown as the page hero; it is not repeated in the gallery. */
  heroImage?: string;
}

export function ServiceGallery({ gallery, heroImage }: ServiceGalleryProps) {
  const shown = gallery.images.filter((image) => image.src !== heroImage);
  const images: EditorialImage[] = shown.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.caption,
    note: image.imageNote,
    link: image.projectSlug
      ? { href: `/projets/${image.projectSlug}`, label: image.sourceLabel }
      : undefined,
    tall: image.shape === "tall",
  }));

  return (
    <section id="service-gallery" aria-labelledby="service-gallery-heading" className="bg-[#1a2821] py-20 text-white md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">Le service en images</p>
            <h2 id="service-gallery-heading" className="mt-5 font-serif text-3xl font-light leading-tight md:text-5xl">{gallery.heading}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/70">{gallery.introduction}</p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <EditorialGallery
            images={images}
            label="Galerie du service"
            startNumber={gallery.images.length - shown.length + 1}
            titleAs="h3"
          />
        </div>
      </div>
    </section>
  );
}
