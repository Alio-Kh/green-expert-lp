import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { services, getServiceBySlug } from "@/lib/services-data";

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
  if (!service) return {};

  const canonical = `https://greenexpert.ma/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "LandscapingBusiness",
      name: "Green Expert",
      url: "https://greenexpert.ma",
    },
    areaServed: { "@type": "Country", name: "Maroc" },
    url: `https://greenexpert.ma/services/${service.slug}`,
  };

  return (
    <div className="relative min-h-screen bg-[#1a2821] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationMenu />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2821]/80 via-[#1a2821]/85 to-[#1a2821]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex items-center gap-2 text-sm text-white/60"
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
              href="/#services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#9bbb2d]/30 bg-[#1a2821]/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#9bbb2d] backdrop-blur-sm">
              <Icon className="h-4 w-4" />
              <span>Nos Services</span>
            </div>

            <h1 className="font-serif text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="bg-[#fafaf5] py-20 text-[#1a2821] md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#9bbb2d]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                  Nos Engagements
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light md:text-5xl">
                Ce que nous vous{" "}
                <span className="italic text-[#9bbb2d]">garantissons</span>
              </h2>
              <p className="mt-6 text-[#1a2821]/65">
                Chaque prestation est réalisée dans le respect de nos standards
                de qualité et de votre projet. Voici les bénéfices concrets que
                vous en tirez.
              </p>
            </div>

            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4 rounded-xl border border-[#1a2821]/5 bg-white p-5 shadow-sm shadow-black/[0.02]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9bbb2d]/15 text-[#9bbb2d]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-[#1a2821]/85">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach / Process */}
      <section className="bg-[#1a2821] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
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
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {service.approach.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-colors hover:border-[#9bbb2d]/30"
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
              </div>
            ))}
          </div>
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
              Contactez-nous pour un devis gratuit et personnalisé. Nous vous
              répondons sous 24 heures.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#9bbb2d] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-[#9bbb2d]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8bab1d]"
              >
                <span>Demander un devis</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Retour à l&apos;accueil
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
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                  Autres Services
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Explorez nos{" "}
                <span className="italic text-[#9bbb2d]">expertises</span>
              </h2>
            </div>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1a2821]/70 transition-colors hover:text-[#9bbb2d]"
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
                  className="group flex items-start gap-4 rounded-2xl border border-[#1a2821]/5 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9bbb2d]/40 hover:shadow-lg"
                >
                  <div className="shrink-0 rounded-xl bg-[#9bbb2d]/15 p-3 text-[#9bbb2d]">
                    <OtherIcon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1a2821] group-hover:text-[#9bbb2d]">
                      {other.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#1a2821]/60">
                      {other.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#1a2821]/30 transition-all group-hover:translate-x-1 group-hover:text-[#9bbb2d]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
