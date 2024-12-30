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

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#1a2821] text-white">
      <NavigationMenu />
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="bg-[#1a2821] py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-light md:text-5xl">
                Notre Expertise en{" "}
                <span className="text-[#9bbb2d]">Design Paysager</span>
              </h2>
              <p className="mt-6 text-white/70">
                De la conception initiale à l&apos;entretien régulier, nous
                créons des espaces verts qui reflètent votre vision tout en
                respectant l&apos;environnement.
              </p>
            </div>
            <ServicesGrid />
          </SectionReveal>
        </div>
      </section>

      <ProcessSection />
      {/* <GardeningTips /> */}

      {/* Projects Section */}
      <section id="projets" className="bg-[#1a2821] py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-light md:text-5xl">
                Nos Réalisations{" "}
                <span className="text-[#9bbb2d]">Exceptionnelles</span>
              </h2>
              <p className="mt-6 text-white/70">
                Découvrez comment nous transformons les espaces ordinaires en
                jardins extraordinaires.
              </p>
            </div>
            <ProjectsShowcase />
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="bg-[#1a2821] py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-light md:text-5xl">
                Ce Que Disent{" "}
                <span className="text-[#9bbb2d]">Nos Clients</span>
              </h2>
              <p className="mt-6 text-white/70">
                Découvrez les témoignages de nos clients satisfaits qui nous
                font confiance pour leurs projets d&apos;aménagement paysager.
              </p>
            </div>
          </SectionReveal>
          <TestimonialSlider />
        </div>
      </section> */}

      <PartnersSection />

      {/* Contact Section */}
      <section id="contact" className="bg-[#1a2821] py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-light md:text-5xl">
                Commencez Votre <span className="text-[#9bbb2d]">Projet</span>
              </h2>
              <p className="mt-6 text-white/70">
                Prenez contact avec nous pour donner vie à votre vision
                d&apos;un espace vert parfait.
              </p>
            </div>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
