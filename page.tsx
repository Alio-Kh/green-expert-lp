"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { ChevronRight, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SectionReveal } from "@/components/section-reveal"
import { cn } from "@/lib/utils"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { ServicesGrid } from "@/components/services-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { ProcessSection } from "@/components/process-section"
import { GardeningTips } from "@/components/gardening-tips"
import { PartnersSection } from "@/components/partners-section"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toast } = useToast()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#1a2821] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 z-50 w-full border-b border-white/10 bg-[#1a2821]/80 backdrop-blur-md transition-all duration-300",
          isScrolled && "shadow-lg shadow-black/5"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
              alt="Green Expert Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {["accueil", "services", "projets", "contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: "smooth" })}
              >
                {item}
              </motion.button>
            ))}
            <Button
              className="rounded-full bg-white px-6 text-[#1a2821] hover:bg-white/90"
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-2 text-white/70 hover:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-0 top-full border-b border-white/10 bg-[#1a2821] pb-6 pt-2 shadow-lg md:hidden"
            >
              <div className="container flex flex-col gap-4 px-4">
                {["accueil", "services", "projets", "contact"].map((item) => (
                  <button
                    key={item}
                    className="text-left text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    onClick={() => {
                      document.getElementById(item)?.scrollIntoView({ behavior: "smooth" })
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item}
                  </button>
                ))}
                <Button
                  className="mt-2 rounded-full bg-white px-6 text-[#1a2821] hover:bg-white/90"
                >
                  Demander un devis
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative min-h-screen overflow-hidden bg-[#1a2821] pt-20"
      >
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="https://res.cloudinary.com/ddpoq8ufw/video/upload/v1734908183/Green%20Expert/st0mle9ort9me9vgmktj.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2821]/50 to-[#1a2821]" />
        </div>
        
        <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur-sm"
            >
              Experts en aménagement paysager
            </motion.div>
            <h1 className="font-serif text-5xl font-light leading-tight md:text-7xl">
              Créons votre{" "}
              <span className="text-[#9bbb2d]">sanctuaire</span> naturel
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Transformez vos espaces extérieurs en havres de paix où la nature s'épanouit en harmonie avec vos rêves.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                className="group rounded-full bg-white px-6 text-[#1a2821] hover:bg-white/90"
              >
                Découvrir nos créations
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="group rounded-full border-2 border-white px-6 text-white hover:bg-white hover:text-[#1a2821] transition-colors"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nos services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-square md:aspect-auto md:h-[600px]"
          >
            <Image
              src="https://fal.media/files/koala/xTgiePvt19lCysYjwBBVJ_430c7b23aac444738105dd8e1b14e643.jpg"
              alt="Featured project - Zen garden design"
              fill
              className="rounded-3xl object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                <div className="font-serif text-2xl">Jardin Zen Moderne</div>
                <p className="mt-2 text-white/70">
                  Un mélange harmonieux de design contemporain et d'éléments naturels
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm uppercase tracking-wider text-white/70">
              Scroll
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-16 w-[2px] bg-gradient-to-b from-white to-transparent"
            />
          </div>
        </motion.div>
      </section>

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
                De la conception initiale à l'entretien régulier, nous créons des espaces verts qui reflètent votre vision tout en respectant l'environnement.
              </p>
            </div>
            <ServicesGrid />
          </SectionReveal>
        </div>
      </section>

      <ProcessSection />
      <GardeningTips />

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
                Découvrez comment nous transformons les espaces ordinaires en jardins extraordinaires.
              </p>
            </div>
            <ProjectsShowcase />
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#1a2821] py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-light md:text-5xl">
                Ce Que Disent{" "}
                <span className="text-[#9bbb2d]">Nos Clients</span>
              </h2>
              <p className="mt-6 text-white/70">
                Découvrez les témoignages de nos clients satisfaits qui nous font confiance pour leurs projets d'aménagement paysager.
              </p>
            </div>
          </SectionReveal>
          <TestimonialSlider />
        </div>
      </section>
      
      <PartnersSection />

      {/* Contact Section */}
      <section id="contact" className="bg-[#1a2821] py-32">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-light md:text-5xl">
                Commencez Votre{" "}
                <span className="text-[#9bbb2d]">Projet</span>
              </h2>
              <p className="mt-6 text-white/70">
                Prenez contact avec nous pour donner vie à votre vision d'un espace vert parfait.
              </p>
            </div>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

