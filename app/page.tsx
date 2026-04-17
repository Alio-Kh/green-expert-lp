import type { Metadata } from "next";
import { NavigationMenu } from "@/components/navigation-menu";
import { HeroSection } from "@/components/hero-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionReveal } from "@/components/section-reveal";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { ServicesGrid } from "@/components/services-grid";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ProcessSection } from "@/components/process-section";
import { PartnersSection } from "@/components/partners-section";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title:
    "Paysagiste au Maroc | Conception, Réalisation & Entretien de Jardins",
  description:
    "Green Expert accompagne particuliers et entreprises au Maroc pour concevoir, réaliser et entretenir des jardins durables: design paysager, irrigation, plantations et entretien.",
  alternates: {
    canonical: "https://greenexpert.ma/",
  },
  openGraph: {
    title:
      "Paysagiste au Maroc | Conception, Réalisation & Entretien de Jardins",
    description:
      "Expert en aménagement paysager: création de jardins, systèmes d'irrigation et entretien d'espaces verts.",
  },
};

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#1a2821] text-white">
      <NavigationMenu />
      <main id="main-content">
      <HeroSection />

      {/* Services Section */}
      <section id="services" aria-labelledby="services-heading" className="bg-[#1a2821] py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#9bbb2d]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                  Nos Services
                </span>
                <div className="h-px w-8 bg-[#9bbb2d]" />
              </div>
              <h2
                id="services-heading"
                className="font-serif text-4xl font-light md:text-5xl lg:text-6xl"
              >
                Notre Expertise en{" "}
                <span className="italic text-[#9bbb2d]">Design Paysager</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-white/70">
                De la conception initiale à l&apos;entretien régulier, nous
                créons des espaces verts qui reflètent votre vision tout en
                respectant l&apos;environnement.
              </p>
            </div>
            <ServicesGrid />
          </SectionReveal>
        </div>
      </section>

      <SectionDivider variant="dark-to-light" />
      <ProcessSection />
      <SectionDivider variant="light-to-dark" />

      {/* Projects Section */}
      <section id="projets" aria-labelledby="projects-heading" className="bg-[#1a2821] py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#9bbb2d]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                  Nos Projets
                </span>
                <div className="h-px w-8 bg-[#9bbb2d]" />
              </div>
              <h2
                id="projects-heading"
                className="font-serif text-4xl font-light md:text-5xl lg:text-6xl"
              >
                Nos Réalisations{" "}
                <span className="italic text-[#9bbb2d]">Exceptionnelles</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-white/70">
                Découvrez comment nous transformons les espaces ordinaires en
                jardins extraordinaires.
              </p>
            </div>
            <ProjectsShowcase />
          </SectionReveal>
        </div>
      </section>

      <SectionDivider variant="dark-to-light" />
      <PartnersSection />
      <SectionDivider variant="light-to-dark" />

      {/* Contact Section */}
      <section id="contact" aria-labelledby="contact-heading" className="bg-[#1a2821] py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#9bbb2d]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
                  Contact
                </span>
                <div className="h-px w-8 bg-[#9bbb2d]" />
              </div>
              <h2
                id="contact-heading"
                className="font-serif text-4xl font-light md:text-5xl lg:text-6xl"
              >
                Commencez Votre <span className="italic text-[#9bbb2d]">Projet</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-white/70">
                Prenez contact avec nous pour donner vie à votre vision
                d&apos;un espace vert parfait.
              </p>
            </div>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
