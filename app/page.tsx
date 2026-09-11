import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import { ProjectResources } from "@/components/project-resources";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { HeroSection } from "@/components/hero-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionReveal } from "@/components/section-reveal";
import { ServicesGrid } from "@/components/services-grid";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ProcessSection } from "@/components/process-section";
import { PartnersSection } from "@/components/partners-section";
import { SectionDivider } from "@/components/section-divider";
import { FAQSection } from "@/components/faq-section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export const metadata = pageMetadata(
  "Paysagiste au Maroc : jardins et espaces verts",
  "Depuis Salé, Green Expert conçoit, aménage et entretient jardins et espaces verts au Maroc. Découvrez nos services et préparez votre demande de devis.",
  "/",
);

const approachItems = [
  {
    number: "01",
    title: "Le bon projet pour le bon lieu",
    description:
      "Nous étudions le sol, l’exposition, l’eau disponible et vos usages avant de dessiner.",
  },
  {
    number: "02",
    title: "Une vision, un interlocuteur",
    description:
      "Plans, terrassement, plantation, irrigation et éclairage restent coordonnés de bout en bout.",
  },
  {
    number: "03",
    title: "Une beauté qui se maintient",
    description:
      "Nos choix végétaux et nos solutions d’entretien protègent votre jardin saison après saison.",
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#17251e] text-white">
      <NavigationMenu />

      <main id="main-content">
        <HeroSection />

        <SectionDivider variant="dark-to-light" />
        <section
          id="approche"
          aria-labelledby="approach-heading"
          className="bg-[#fafaf5] py-20 text-[#17251e] md:py-28"
        >
          <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#62791b]">
                Notre approche
              </p>
              <h2
                id="approach-heading"
                className="mt-5 max-w-xl font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl"
              >
                Un extérieur conçu comme un écosystème.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#17251e]/65 md:text-lg md:leading-8">
                Un jardin réussi ne se résume pas à une belle image. Il doit être
                agréable à vivre, adapté à son environnement et simple à entretenir.
              </p>
              <Link
                href="/notre-processus"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#4f6413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62791b]/50"
              >
                Découvrir notre méthode
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </SectionReveal>

            <div className="border-t border-[#17251e]/15">
              {approachItems.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-4 border-b border-[#17251e]/15 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
                >
                  <span className="font-serif text-2xl italic text-[#62791b]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-xl leading-7 text-[#17251e]/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider variant="light-to-dark" />
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-[#17251e] py-20 md:py-28"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <SectionReveal>
              <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.75fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6df6b]">
                    Nos services
                  </p>
                  <h2
                    id="services-heading"
                    className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl"
                  >
                    Création et entretien de vos espaces verts.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-white/60 lg:justify-self-end">
                  Une équipe coordonnée pour passer de l’idée au jardin livré,
                  puis préserver sa qualité au fil des saisons.
                </p>
              </div>
              <ServicesGrid />
            </SectionReveal>
          </div>
        </section>

        <SectionDivider variant="dark-to-light" />
        <ProcessSection />
        <PartnersSection />
        <ProjectResources />
        <FAQSection />
        <SectionDivider variant="light-to-dark" />

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative overflow-hidden bg-[#17251e] py-20 md:py-28"
        >
          <div
            aria-hidden="true"
            className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-[#9bbb2d]/10 blur-3xl"
          />
          <div className="container relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6df6b]">
                Votre projet
              </p>
              <h2
                id="contact-heading"
                className="mt-5 max-w-xl font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl"
              >
                Parlons de votre terrain.
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-white/65">
                Décrivez-nous le lieu, vos envies et vos contraintes. Nous vous
                recontacterons pour préciser vos besoins et préparer un devis.
              </p>

              <address className="mt-9 space-y-4 not-italic text-sm text-white/70">
                <a
                  href="tel:+212661967903"
                  className="flex w-fit items-center gap-3 rounded-sm transition hover:text-[#c6df6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]/60"
                >
                  <Phone className="h-4 w-4 text-[#c6df6b]" />
                  +212 661 967 903
                </a>
                <a
                  href="mailto:contact@greenexpert.ma"
                  className="flex w-fit items-center gap-3 rounded-sm transition hover:text-[#c6df6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]/60"
                >
                  <Mail className="h-4 w-4 text-[#c6df6b]" />
                  contact@greenexpert.ma
                </a>
                <p className="flex max-w-sm items-start gap-3 leading-6">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c6df6b]" />
                  Résidence Assafae 05, Imm 41, Appt 12, Al Quods, Laayayda,
                  Salé
                </p>
                <a
                  href="https://wa.me/212661967903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-5 font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]"
                >
                  <WhatsAppIcon className="h-5 w-5 text-[#c6df6b]" />
                  Nous écrire sur WhatsApp
                </a>
              </address>

              <p className="mt-9 border-l border-[#c6df6b]/50 pl-4 text-sm leading-6 text-white/50">
                Particuliers, entreprises et institutions partout au Maroc.
              </p>
            </SectionReveal>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
