import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    title: "Plantation soignée",
    description:
      "Préparation du sol, implantation précise et gestes adaptés à chaque végétal.",
    alt: "Équipe Green Expert réalisant la plantation d’un massif fleuri",
    image: "/images/field-work/planting-team-clean-uniform.webp",
    objectPosition: "center 48%",
  },
  {
    title: "Entretien maîtrisé",
    description:
      "Une intervention régulière pour conserver des pelouses nettes et vigoureuses.",
    alt: "Jardinier Green Expert assurant la tonte d’une pelouse",
    image: "/images/field-work/lawn-care-clean-uniform.webp",
    objectPosition: "center 48%",
  },
  {
    title: "Taille spécialisée",
    description:
      "Des interventions expertes pour préserver la santé, la forme et la sécurité des arbres.",
    alt: "Jardinier Green Expert réalisant la taille d’un palmier",
    image: "/images/field-work/palm-pruning-clean-uniform.webp",
    objectPosition: "center 46%",
  },
];

export function ProcessSection() {
  return (
    <section
      id="processus"
      aria-labelledby="process-heading"
      className="overflow-hidden bg-[#fafaf5] py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-[#9bbb2d]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#62791b]">
              Notre équipe sur le terrain
            </span>
            <div className="h-px w-8 bg-[#9bbb2d]" />
          </div>
          <h2
            id="process-heading"
            className="font-serif text-4xl font-light text-[#17251e] md:text-5xl lg:text-6xl"
          >
            Le geste juste, au bon moment.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#17251e]/65">
            Nos équipes interviennent avec précision pour installer, entretenir
            et faire durer chaque espace paysager.
          </p>
        </div>

        {/* Steps */}
        <div
          className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8"
        >
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="group text-center"
              data-step={index + 1}
            >
              {/* Image card */}
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e8eadf] shadow-lg shadow-black/5">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 2rem), 31vw"
                    style={{ objectPosition: step.objectPosition }}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#17251e]/20 via-transparent to-transparent"
                  />
                </div>

                {/* Step number — floats below image centre */}
                <div
                  className="absolute -bottom-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#657d1d] font-serif text-xl font-semibold text-white shadow-xl shadow-[#657d1d]/25 ring-4 ring-[#fafaf5]"
                >
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-12 font-serif text-2xl font-semibold text-[#17251e] md:text-3xl">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs leading-7 text-[#17251e]/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA — link to the dedicated process page */}
        <div
          className="mt-20 text-center"
        >
          <Link
            href="/notre-processus"
            className="group inline-flex items-center gap-3 rounded-full border border-[#17251e]/15 bg-white px-8 py-4 text-sm font-semibold text-[#17251e] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#657d1d] hover:bg-[#657d1d] hover:text-white hover:shadow-lg hover:shadow-[#657d1d]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#657d1d]/50"
          >
            <span>Découvrir notre méthode</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
