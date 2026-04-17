"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const WHATSAPP_NUMBER = "212661967903";
const WHATSAPP_MESSAGE =
  "Bonjour, je souhaite demander un devis pour un projet d'aménagement paysager.";

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export function NavigationMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#9bbb2d] focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        aria-label="Menu principal"
        className={cn(
          "fixed top-0 z-50 w-full border-b border-white/10 bg-[#1a2821]/90 backdrop-blur-xl transition-all duration-300",
          isScrolled && "shadow-lg shadow-black/20"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
              alt="Green Expert Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain brightness-125 saturate-125"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "relative text-sm uppercase tracking-wider transition-colors",
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-[#9bbb2d] transition-transform duration-300",
                    activeSection === item.id ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            ))}
            <Button
              className="rounded-full bg-white px-6 text-[#1a2821] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
              onClick={openWhatsApp}
              aria-label="Demander un devis via WhatsApp"
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-2 text-white/70 hover:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - rendered outside motion.nav so transform doesn't create a containing block for fixed children */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="button"
              tabIndex={-1}
              aria-label="Fermer le menu"
              className="fixed inset-0 top-20 z-40 bg-black/60 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-20 z-50 flex w-full max-w-sm flex-col border-l border-white/10 bg-[#1a2821] px-6 py-8 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    className={cn(
                      "flex min-h-[48px] items-center rounded-xl px-4 text-left text-lg uppercase tracking-wider transition-colors",
                      activeSection === item.id
                        ? "bg-[#9bbb2d]/10 text-[#9bbb2d]"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  className="w-full rounded-full bg-[#9bbb2d] px-6 py-3 text-white hover:bg-[#8bab1d]"
                  onClick={openWhatsApp}
                  aria-label="Demander un devis via WhatsApp"
                >
                  Demander un devis
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
