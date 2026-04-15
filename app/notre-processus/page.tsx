import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { processPhases, processGuarantees } from "@/lib/process-data";

export const metadata: Metadata = {
  title: "Notre Processus | Conception, Réalisation & Entretien de Jardins",
  description:
    "Découvrez la méthode Green Expert en 3 étapes : conception sur-mesure, réalisation experte et entretien durable. Un processus transparent du devis à l'entretien.",
  alternates: { canonical: "https://greenexpert.ma/notre-processus" },
  openGraph: {
    title: "Notre Processus — Green Expert",
    description:
      "Méthode éprouvée en 3 étapes pour concevoir, réaliser et entretenir votre jardin au Maroc.",
    url: "https://greenexpert.ma/notre-processus",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment Green Expert conçoit, réalise et entretient votre jardin",
  description:
    "Processus en 3 étapes : conception, réalisation et entretien d'espaces verts au Maroc.",
  step: processPhases.map((phase, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: phase.title,
    text: phase.longDescription,
    url: `https://greenexpert.ma/notre-processus#${phase.slug}`,
  })),
};

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-[#1a2821] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationMenu />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background with subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(155,187,45,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,187,45,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

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
            <span className="text-white/90">Notre Processus</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-[#9bbb2d]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                Notre Processus
              </span>
            </div>
            <h1 className="font-serif text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
              Une méthode{" "}
              <span className="italic text-[#9bbb2d]">transparente</span>,<br />
              du premier plan au dernier geste.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              Depuis plus de vingt ans, nous appliquons un processus en trois
              temps pour garantir la réussite de chaque projet : concevoir,
              réaliser, entretenir. Voici comment nous travaillons à vos côtés.
            </p>
          </div>

          {/* Phase navigator */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {processPhases.map((phase) => (
              <Link
                key={phase.slug}
                href={`#${phase.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#9bbb2d]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#9bbb2d]">
                  <span>Étape {phase.step}</span>
                  <div className="h-px flex-1 bg-[#9bbb2d]/20" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-light">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {phase.shortDescription}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
                  <Clock className="h-3.5 w-3.5" />
                  {phase.duration}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Phase sections — alternating backgrounds */}
      {processPhases.map((phase, index) => {
        const isLight = index % 2 === 0;
        const imageOnRight = index % 2 === 1;
        return (
          <section
            key={phase.slug}
            id={phase.slug}
            className={`scroll-mt-24 py-20 md:py-28 ${
              isLight ? "bg-[#fafaf5] text-[#1a2821]" : "bg-[#1a2821] text-white"
            }`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center ${
                  imageOnRight ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-black/10">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#9bbb2d] font-serif text-xl font-semibold text-white shadow-lg">
                    {phase.step}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-6 inline-flex items-center gap-3">
                    <div
                      className={`h-px w-8 ${
                        isLight ? "bg-[#9bbb2d]" : "bg-[#9bbb2d]"
                      }`}
                    />
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                      Étape {phase.step}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-light md:text-5xl">
                    {phase.title}
                  </h2>
                  <p
                    className={`mt-6 text-lg leading-relaxed ${
                      isLight ? "text-[#1a2821]/70" : "text-white/70"
                    }`}
                  >
                    {phase.longDescription}
                  </p>

                  <div
                    className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium ${
                      isLight
                        ? "border-[#1a2821]/10 bg-white text-[#1a2821]/70"
                        : "border-white/10 bg-white/[0.03] text-white/70"
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5 text-[#9bbb2d]" />
                    <span>Durée : {phase.duration}</span>
                  </div>

                  {/* Sub-phases */}
                  <div className="mt-10 space-y-6">
                    {phase.phases.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <div key={sub.title} className="flex gap-4">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                              isLight
                                ? "bg-[#9bbb2d]/15"
                                : "bg-[#9bbb2d]/15"
                            } text-[#9bbb2d]`}
                          >
                            <SubIcon className="h-5 w-5" strokeWidth={1.75} />
                          </div>
                          <div>
                            <h4 className="font-semibold">{sub.title}</h4>
                            <p
                              className={`mt-1 text-sm ${
                                isLight
                                  ? "text-[#1a2821]/65"
                                  : "text-white/60"
                              }`}
                            >
                              {sub.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Deliverables */}
                  <div
                    className={`mt-10 rounded-2xl border p-6 ${
                      isLight
                        ? "border-[#1a2821]/5 bg-white"
                        : "border-white/[0.08] bg-white/[0.03]"
                    }`}
                  >
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#9bbb2d]">
                      Ce que vous recevez
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#9bbb2d]"
                            strokeWidth={3}
                          />
                          <span
                            className={`text-sm ${
                              isLight ? "text-[#1a2821]/80" : "text-white/75"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Guarantees */}
      <section className="bg-[#1a2821] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-[#9bbb2d]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                Nos Engagements
              </span>
              <div className="h-px w-8 bg-[#9bbb2d]" />
            </div>
            <h2 className="font-serif text-3xl font-light md:text-5xl">
              Ce qui ne change{" "}
              <span className="italic text-[#9bbb2d]">jamais</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/65">
              Quelle que soit la taille du projet, nos engagements envers vous
              restent les mêmes.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processGuarantees.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-[#9bbb2d]/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#9bbb2d]/15 text-[#9bbb2d]">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-sm text-white/60">{g.description}</p>
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
              Démarrons votre{" "}
              <span className="italic text-[#9bbb2d]">projet</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/70">
              Prenez rendez-vous pour une première visite gratuite. Nous
              étudions votre terrain et vous proposons une vision sur-mesure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#9bbb2d] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-[#9bbb2d]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8bab1d]"
              >
                <span>Prendre rendez-vous</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
