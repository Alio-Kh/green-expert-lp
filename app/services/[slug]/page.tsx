import { siteUrl, pageMetadata, BUSINESS_ID, jsonLd as serializeJsonLd } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { serviceDetails } from "@/lib/service-details";
import { services, getServiceBySlug } from "@/lib/services-data";
import { serviceGalleries } from "@/lib/service-galleries";
import { ServiceGallery } from "@/components/service-gallery";
import { Reveal } from "@/components/reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const cover = serviceGalleries[service.slug].images[0];
  return pageMetadata(service.metaTitle, service.metaDescription, `/services/${service.slug}`, { src: service.heroImage, alt: cover.alt });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const detail = serviceDetails[service.slug];
  const gallery = serviceGalleries[service.slug];
  const cover = gallery.images[0];
  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: "Maroc" },
    url: siteUrl(`/services/${service.slug}`),
    image: gallery.images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: siteUrl(image.src),
      name: image.caption,
      caption: image.alt,
      description: `${image.alt}. ${image.imageNote}.`,
      creditText: "Green Expert",
      creator: { "@id": BUSINESS_ID },
      copyrightNotice: "Green Expert",
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: siteUrl("/#services") },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: siteUrl(`/services/${service.slug}`),
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#1a2821] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <NavigationMenu />

      <main id="main-content">
      {/* Hero */}
      <section aria-labelledby="service-heading" className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/60 md:mb-14"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Accueil
            </Link>
            <span aria-hidden="true" className="text-white/30">/</span>
            <Link
              href="/#services"
              className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
            >
              Services
            </Link>
            <span aria-hidden="true" className="text-white/30">/</span>
            <span aria-current="page" className="text-white/90">{service.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                {service.title}
              </p>

              <h1 id="service-heading" className="mt-6 font-serif text-4xl font-light leading-[1.08] md:text-6xl xl:text-7xl">
                {service.heading}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
                {service.longDescription}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#9bbb2d] px-7 py-3.5 text-sm font-semibold text-[#17251e] transition-colors duration-300 hover:bg-[#b6d74a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
                >
                  Demander un devis
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="#service-gallery"
                  className="rounded text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-[#9bbb2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#1a2821]"
                >
                  Voir le service en images
                </a>
              </div>
            </div>

            <figure className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 lg:aspect-[5/4]">
                <Image
                  src={service.heroImage}
                  alt={cover.alt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 50vw, 600px"
                  style={{ objectPosition: service.heroImagePosition ?? "center" }}
                  className="animate-settle object-cover"
                />
              </div>
              <figcaption className="mt-4 flex gap-4">
                <span aria-hidden="true" className="font-serif text-sm tabular-nums text-[#9bbb2d]">01</span>
                <span className="text-sm leading-6 text-white/75">
                  {cover.caption}
                  <span className="block text-xs leading-5 text-white/60">{cover.imageNote}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <ServiceGallery gallery={gallery} heroImage={service.heroImage} />

      {/* Benefits section */}
      <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#9bbb2d]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#4f6413]">
                  Nos Engagements
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light md:text-5xl">
                Les points clés de{" "}
                <span className="italic text-[#4f6413]">notre prestation</span>
              </h2>
              <p className="mt-6 text-[#1a2821]/65">
                Chaque prestation est réalisée dans le respect de nos standards
                de qualité et de votre projet. Voici les bénéfices concrets que
                vous en tirez.
              </p>
            </Reveal>

            <ul className="border-t border-[#1a2821]/15">
              {service.benefits.map((benefit, index) => (
                <Reveal
                  as="li"
                  key={benefit}
                  delay={index * 70}
                  className="flex items-start gap-4 border-b border-[#1a2821]/15 py-5"
                >
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#4f6413]" strokeWidth={2.5} />
                  <span className="text-lg leading-7 text-[#1a2821]/85">{benefit}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach / Process */}
      <section className="bg-[#1a2821] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal className="text-center">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-[#9bbb2d]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                Notre Approche
              </span>
              <div className="h-px w-8 bg-[#9bbb2d]" />
            </div>
            <h2 className="font-serif text-3xl font-light md:text-5xl">
              Une méthode{" "}
              <span className="italic text-[#9bbb2d]">rigoureuse</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {service.approach.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 90}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8"
              >
                <div className="mb-4 font-serif text-5xl font-light text-[#9bbb2d]/40">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="service-details" className="bg-[#f6f5ec] py-20 text-[#17251e]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f6413]">Préparer votre projet</p>
          <h2 id="service-details" className="mt-4 font-serif text-3xl md:text-5xl">Le périmètre, le budget et les étapes.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              { title: "Définir la prestation", text: detail.scope },
              { title: "Comprendre le devis", text: detail.quoteFactors },
              { title: "Préparer notre échange", text: detail.preparation },
            ].map((item) => (
              <article key={item.title} className="border-t border-[#17251e]/20 pt-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#17251e]/80">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-[#17251e]/20">
            {detail.questions.map((item) => (
              <details key={item.question} className="border-b border-[#17251e]/20 py-5">
                <summary className="cursor-pointer text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f6413]">{item.question}</summary>
                <p className="mt-4 max-w-3xl leading-7 text-[#17251e]/80">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-7 text-[#17251e]/80">
            Basés à Salé, nous étudions votre projet à Rabat et au Maroc selon ses besoins et son emplacement.
            {" "}<Link className="font-semibold text-[#4f6413] underline underline-offset-4" href="/paysagiste-rabat">Découvrir notre accompagnement à Rabat et Salé</Link>.
          </p>
          <p className="mt-4 leading-7 text-[#17251e]/80">
            Vous préparez plusieurs travaux ? {" "}
            <Link className="font-semibold text-[#4f6413] underline underline-offset-4" href="/amenagement-espaces-verts">Voir notre approche de l’aménagement des espaces verts</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2821] pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border border-[#9bbb2d]/20 bg-gradient-to-br from-[#9bbb2d]/10 via-[#1a2821] to-[#1a2821] p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-light md:text-5xl">
              Prêt à démarrer votre{" "}
              <span className="italic text-[#9bbb2d]">projet</span> ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/70">
              Décrivez votre terrain et vos besoins pour préparer un devis
              personnalisé et convenir des prochaines étapes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#9bbb2d] px-8 py-4 text-sm font-semibold text-[#17251e] shadow-lg shadow-[#9bbb2d]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8bab1d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
              >
                <span>Demander un devis</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2821]"
              >
                Voir tous les services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#9bbb2d]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#4f6413]">
                  Autres Services
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Explorez nos{" "}
                <span className="italic text-[#4f6413]">expertises</span>
              </h2>
            </div>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded text-sm font-medium text-[#1a2821]/70 transition-colors hover:text-[#4f6413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf5]"
            >
              Voir tous les services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {otherServices.slice(0, 3).map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-[#1a2821]/5 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9bbb2d]/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9bbb2d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf5]"
                >
                  <div className="shrink-0 rounded-xl bg-[#9bbb2d]/15 p-3 text-[#4f6413]">
                    <OtherIcon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1a2821] group-hover:text-[#4f6413]">
                      {other.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#1a2821]/60">
                      {other.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#1a2821]/30 transition-all group-hover:translate-x-1 group-hover:text-[#4f6413]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
