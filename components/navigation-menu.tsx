"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const WHATSAPP_NUMBER = "212661967903";
const WHATSAPP_MESSAGE =
  "Bonjour, je souhaite demander un devis pour un projet d'aménagement paysager.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "approche", label: "Approche" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function NavigationMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const menuRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Native modal dialogs contain focus and make the background inert.
  useEffect(() => {
    const menu = menuRef.current;
    const menuButton = menuButtonRef.current;
    if (!menu || !isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    menu.showModal();
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      menu.close();
      document.body.style.overflow = previousOverflow;
      if (!desktop.matches) menuButton?.focus({ preventScroll: true });
    };
  }, [isMobileMenuOpen]);

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
        initial={false}
        animate={{ y: 0 }}
        aria-label="Menu principal"
        className={cn(
          "fixed top-0 z-50 w-full border-b border-white/10 bg-[#17251e]/90 backdrop-blur-xl transition-all duration-300",
          isScrolled && "shadow-lg shadow-black/20"
        )}
      >
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]/60"
            aria-label="Green Expert, accueil"
          >
            <Image
              src="/logo-wide.png"
              alt="Green Expert"
              width={206}
              height={40}
              className="h-9 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={cn(
                  "relative py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]/60",
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-[#9bbb2d] transition-transform duration-300",
                    activeSection === item.id ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demander un devis via WhatsApp"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#17251e] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c6df6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17251e]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Demander un devis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
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

      <dialog
        ref={menuRef}
        id="mobile-menu"
        aria-label="Navigation mobile"
        onCancel={() => setIsMobileMenuOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsMobileMenuOpen(false);
        }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-[100dvh] max-h-none w-full max-w-sm border-l border-white/10 bg-[#17251e] p-0 text-white shadow-2xl backdrop:bg-black/60"
      >
        <div className="flex min-h-full flex-col px-6 py-6">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mb-6 flex min-h-12 items-center gap-2 self-end rounded-full px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]"
          >
            Fermer le menu <X aria-hidden="true" className="h-5 w-5" />
          </button>
          <nav aria-label="Liens du menu mobile" className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={cn(
                  "flex min-h-12 items-center rounded-xl px-4 text-lg uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]",
                  activeSection === item.id ? "bg-[#9bbb2d]/10 text-[#c6df6b]" : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Demander un devis via WhatsApp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#a8c83f] px-6 py-3 font-semibold text-[#17251e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Demander un devis
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6df6b]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Nous écrire sur WhatsApp
          </a>
        </div>
      </dialog>
    </>
  );
}
