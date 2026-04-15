import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Tag } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { projects, getProjectBySlug, type Project } from "@/lib/projects-data";
import { services } from "@/lib/services-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const canonical = `https://greenexpert.ma/projets/${project.slug}`;
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: canonical,
      type: "article",
      images: [{ url: project.heroImage, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.intro,
    image: project.heroImage,
    locationCreated: { "@type": "Place", name: project.location },
    dateCreated: project.year,
    creator: {
      "@type": "LandscapingBusiness",
      name: "Green Expert",
      url: "https://greenexpert.ma",
    },
    url: `https://greenexpert.ma/projets/${project.slug}`,
  };

  return (
    <div className="relative min-h-screen bg-[#1a2821] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationMenu />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-28 md:pt-32">
        <nav
          aria-label="Fil d'Ariane"
          className="flex items-center gap-2 text-sm text-white/60"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Accueil
          </Link>
          <span className="text-white/30">/</span>
          <Link
            href="/#projets"
            className="transition-colors hover:text-white"
          >
            Projets
          </Link>
          <span className="text-white/30">/</span>
          <span className="text-white/90">{project.title}</span>
        </nav>
      </div>

      {/* Layout-specific content */}
      {project.layout === "magazine" && <MagazineLayout project={project} />}
      {project.layout === "feature" && <FeatureLayout project={project} />}
      {project.layout === "gallery-first" && (
        <GalleryFirstLayout project={project} />
      )}

      {/* Featured services (shared across all layouts) */}
      <FeaturedServices project={project} />

      {/* Other projects (shared) */}
      <OtherProjects current={project.slug} all={otherProjects} />

      <Footer />
      <ScrollToTop />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT 1: MAGAZINE — full-bleed hero, two-column intro, specs strip,
// large gallery grid, optional testimonial.
// ─────────────────────────────────────────────────────────────────────────────
function MagazineLayout({ project }: { project: Project }) {
  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative mt-8 h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2821] via-[#1a2821]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <ProjectMeta project={project} />
              <h1 className="mt-4 font-serif text-5xl font-light leading-tight md:text-7xl lg:text-8xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column intro */}
      <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#9bbb2d]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                  Le projet
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light md:text-4xl">
                {project.shortDescription}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-[#1a2821]/75">
              {project.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <SpecsStrip specs={project.specs} variant="dark" />

      {/* Challenge & solution */}
      {(project.challenge || project.solution) && (
        <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {project.challenge && (
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                    Le défi
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-light md:text-3xl">
                    Un terrain singulier
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#1a2821]/70">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.solution && (
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                    Notre réponse
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-light md:text-3xl">
                    Une approche sur-mesure
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#1a2821]/70">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Highlights chips */}
      <HighlightsRow highlights={project.highlights} variant="dark" />

      {/* Gallery — magazine-style varied grid */}
      <section className="bg-[#1a2821] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionLabel variant="dark">Galerie</SectionLabel>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.gallery.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0
                    ? "md:col-span-2 md:row-span-2 aspect-[16/10]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.testimonial && <TestimonialBlock t={project.testimonial} />}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT 2: FEATURE — split hero (text + image), inline specs row,
// challenge/solution side-by-side, asymmetric gallery (1 large + smalls).
// ─────────────────────────────────────────────────────────────────────────────
function FeatureLayout({ project }: { project: Project }) {
  return (
    <>
      {/* Split hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <ProjectMeta project={project} />
              <h1 className="mt-6 font-serif text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                {project.intro}
              </p>

              {/* Inline specs */}
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4">
                {project.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={i !== 0 ? "sm:border-l sm:border-white/10 sm:pl-6" : ""}
                  >
                    <div className="font-serif text-2xl font-light text-[#9bbb2d]">
                      {spec.value}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & solution stacked cards */}
      {(project.challenge || project.solution) && (
        <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {project.challenge && (
                <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
                  <div className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                    Le défi
                  </div>
                  <p className="mt-4 leading-relaxed text-[#1a2821]/75">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="rounded-3xl bg-[#1a2821] p-8 text-white shadow-sm md:p-10">
                  <div className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                    Notre réponse
                  </div>
                  <p className="mt-4 leading-relaxed text-white/80">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Highlights inline */}
            <div className="mt-12">
              <HighlightsRow
                highlights={project.highlights}
                variant="light"
                inline
              />
            </div>
          </div>
        </section>
      )}

      {/* Asymmetric gallery: 1 large + small grid */}
      <section className="bg-[#1a2821] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionLabel variant="dark">Galerie</SectionLabel>
          <div className="mt-12 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="grid gap-4">
              {project.gallery.slice(1, 3).map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT 3: GALLERY-FIRST — leads with gallery strip, then narrative,
// then specs + story, ends with testimonial.
// ─────────────────────────────────────────────────────────────────────────────
function GalleryFirstLayout({ project }: { project: Project }) {
  return (
    <>
      {/* Title + meta */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <ProjectMeta project={project} centered />
          <h1 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Gallery strip — full bleed first row */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Big hero image */}
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Smaller gallery grid below */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.slice(1).map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story narrative on cream */}
      <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionLabel variant="light">L&apos;histoire</SectionLabel>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#1a2821]/80">
            <p className="font-serif text-2xl font-light italic text-[#1a2821] md:text-3xl">
              {project.intro}
            </p>
            {project.story && <p>{project.story}</p>}
          </div>
        </div>
      </section>

      {/* Specs and highlights combined */}
      <section className="bg-[#fafaf5] pb-20 text-[#1a2821] md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <SectionLabel variant="light">Caractéristiques</SectionLabel>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {project.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-2xl border border-[#1a2821]/5 bg-white p-5"
                  >
                    <div className="font-serif text-3xl font-light text-[#9bbb2d]">
                      {spec.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-[#1a2821]/50">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel variant="light">Points forts</SectionLabel>
              <ul className="mt-8 space-y-3">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-[#1a2821]/5 bg-white p-4"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#9bbb2d]" />
                    <span className="text-[#1a2821]/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {project.testimonial && <TestimonialBlock t={project.testimonial} />}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function ProjectMeta({
  project,
  centered = false,
}: {
  project: Project;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.25em] text-white/60 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="inline-flex items-center gap-2">
        <Tag className="h-3.5 w-3.5 text-[#9bbb2d]" />
        {project.category}
      </span>
      <span className="inline-flex items-center gap-2">
        <MapPin className="h-3.5 w-3.5 text-[#9bbb2d]" />
        {project.location}
      </span>
      <span className="inline-flex items-center gap-2">
        <Calendar className="h-3.5 w-3.5 text-[#9bbb2d]" />
        {project.year}
      </span>
    </div>
  );
}

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "light" | "dark";
}) {
  const accent = "bg-[#9bbb2d]";
  const text = variant === "light" ? "text-[#9bbb2d]" : "text-[#9bbb2d]";
  return (
    <div className="inline-flex items-center gap-3">
      <div className={`h-px w-8 ${accent}`} />
      <span
        className={`text-xs font-medium uppercase tracking-[0.3em] ${text}`}
      >
        {children}
      </span>
    </div>
  );
}

function SpecsStrip({
  specs,
  variant,
}: {
  specs: ProjectSpecLite[];
  variant: "dark" | "light";
}) {
  const bg = variant === "dark" ? "bg-[#1a2821]" : "bg-[#fafaf5]";
  const text = variant === "dark" ? "text-white" : "text-[#1a2821]";
  const subText = variant === "dark" ? "text-white/50" : "text-[#1a2821]/50";
  const border = variant === "dark" ? "border-white/10" : "border-[#1a2821]/10";

  return (
    <section className={`${bg} ${text} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`text-center ${
                i !== 0 ? `md:border-l ${border}` : ""
              }`}
            >
              <div className="font-serif text-3xl font-light text-[#9bbb2d] md:text-4xl">
                {spec.value}
              </div>
              <div
                className={`mt-1 text-[10px] uppercase tracking-wider md:text-xs ${subText}`}
              >
                {spec.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectSpecLite = { label: string; value: string };

function HighlightsRow({
  highlights,
  variant,
  inline = false,
}: {
  highlights: string[];
  variant: "dark" | "light";
  inline?: boolean;
}) {
  const cardBg =
    variant === "dark"
      ? "border-white/[0.08] bg-white/[0.03]"
      : "border-[#1a2821]/5 bg-white";
  const text = variant === "dark" ? "text-white/80" : "text-[#1a2821]/80";
  const wrapperBg = inline ? "" : variant === "dark" ? "bg-[#1a2821]" : "bg-[#fafaf5]";
  const wrapperPad = inline ? "" : "py-16 md:py-20";

  return (
    <section className={`${wrapperBg} ${wrapperPad}`}>
      <div className={inline ? "" : "container mx-auto px-4"}>
        <SectionLabel variant={variant}>Points forts</SectionLabel>
        <div className="mt-6 flex flex-wrap gap-3">
          {highlights.map((h) => (
            <span
              key={h}
              className={`rounded-full border px-4 py-2 text-sm ${cardBg} ${text}`}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialBlock({
  t,
}: {
  t: { quote: string; author: string; role: string };
}) {
  return (
    <section className="bg-[#1a2821] py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <div className="font-serif text-5xl text-[#9bbb2d]">&ldquo;</div>
        <blockquote className="mt-2 font-serif text-2xl font-light italic leading-relaxed text-white md:text-3xl">
          {t.quote}
        </blockquote>
        <div className="mt-8">
          <div className="font-medium text-white">{t.author}</div>
          <div className="mt-1 text-sm text-white/50">{t.role}</div>
        </div>
      </div>
    </section>
  );
}

function FeaturedServices({ project }: { project: Project }) {
  const used = services.filter((s) =>
    project.featuredServices.includes(s.slug)
  );
  if (used.length === 0) return null;

  return (
    <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <SectionLabel variant="light">Services mobilisés</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl font-light md:text-4xl">
            Les expertises au service de ce projet
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {used.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-[#1a2821]/5 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9bbb2d]/40 hover:shadow-lg"
              >
                <div className="shrink-0 rounded-xl bg-[#9bbb2d]/15 p-3 text-[#9bbb2d]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1a2821] group-hover:text-[#9bbb2d]">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#1a2821]/60">
                    {s.shortDescription}
                  </p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#1a2821]/30 transition-all group-hover:translate-x-1 group-hover:text-[#9bbb2d]" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OtherProjects({
  current,
  all,
}: {
  current: string;
  all: Project[];
}) {
  if (all.length === 0) return null;

  return (
    <section className="bg-[#1a2821] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel variant="dark">Autres projets</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl font-light md:text-4xl">
              Continuer la <span className="italic text-[#9bbb2d]">visite</span>
            </h2>
          </div>
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-[#9bbb2d]"
          >
            Tous les projets
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {all
            .filter((p) => p.slug !== current)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/projets/${p.slug}`}
                className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2821] via-[#1a2821]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#9bbb2d]">
                    {p.category} • {p.location}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-light md:text-3xl">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
