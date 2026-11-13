import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const WHATSAPP_URL = `https://wa.me/212661967903?text=${encodeURIComponent(
  "Bonjour, je souhaite demander un devis pour un projet d'aménagement paysager."
)}`;

const commitments = [
  "Conception sur mesure",
  "Réalisation intégrée",
  "Entretien durable",
];

const stats = [
  { value: "Salé", label: "notre base" },
  { value: "Sur mesure", label: "votre jardin" },
  { value: "6", label: "expertises intégrées" },
];

export function HeroSection() {
  return (

      <section
        id="accueil"
        aria-labelledby="hero-heading"
        className="relative isolate min-h-[100svh] overflow-hidden bg-[#17251e] pt-20 text-white"
      >
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <Image
            src="/images/services/design-paysager.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,25,20,0.88)_0%,rgba(18,31,24,0.67)_42%,rgba(15,25,20,0.94)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(12,22,17,0.72)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045] [background-image:linear-gradient(rgba(198,223,107,0.85)_1px,transparent_1px),linear-gradient(90deg,rgba(198,223,107,0.85)_1px,transparent_1px)] [background-size:80px_80px]"
        />

        <div className="container mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-4 pb-32 pt-12 sm:px-6 sm:pt-16 md:pb-36">
          <div
            className="mx-auto w-full max-w-5xl text-center"
          >
            <p
              className="inline-flex items-center gap-3 rounded-full border border-[#c6df6b]/30 bg-[#17251e]/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7ec88] backdrop-blur-md sm:px-5"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b4cf54] opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b4cf54]" />
              </span>
              Paysagiste au Maroc
            </p>

            <h1
              id="hero-heading"
              className="mx-auto mt-7 max-w-5xl font-serif text-4xl font-light leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Des jardins et espaces verts<br />
              <span className="italic text-[#b4cf54]">pensés pour vous</span>
            </h1>

            <p
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8"
            >
              Depuis Salé, Green Expert conçoit, aménage et entretient vos jardins
              à Rabat et au Maroc. Un projet adapté à votre terrain, à vos usages
              et au climat local.
            </p>

            <div
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demander un devis via WhatsApp"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#a8c83f] px-7 text-sm font-semibold text-[#17251e] shadow-[0_18px_55px_-24px_rgba(168,200,63,0.9)] transition hover:-translate-y-0.5 hover:bg-[#b6d74a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4e98a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17251e] sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Demander un devis
              </Link>
              <Link
                href="#services"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/35 bg-white/[0.07] px-7 text-sm font-medium text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#17251e] sm:w-auto"
              >
                Découvrir nos services
              </Link>
            </div>

            <ul
              className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/75 sm:text-sm"
            >
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#c6df6b]" strokeWidth={2.5} />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>

          <dl
            className="absolute inset-x-4 bottom-10 mx-auto grid max-w-3xl grid-cols-3 border-t border-white/15 sm:inset-x-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-2 pt-5 text-center sm:px-5 ${
                  index > 0 ? "border-l border-white/15" : ""
                }`}
              >
                <dt className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-white/70 sm:text-xs sm:tracking-[0.15em]">
                  {stat.label}
                </dt>
                <dd className="font-serif text-2xl text-[#c6df6b] sm:text-3xl md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Link
          href="#approche"
          aria-label="Découvrir notre approche"
          className="group absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 rounded-full p-2 text-white/55 transition hover:text-[#c6df6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]/70 md:block"
        >
          <span
            aria-hidden="true"
            className="block"
          >
            <ArrowDown className="h-4 w-4" />
          </span>
        </Link>
      </section>

  );
}
