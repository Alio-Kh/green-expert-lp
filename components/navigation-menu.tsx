"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavigationMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
              onClick={() =>
                document
                  .getElementById(item)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item}
            </motion.button>
          ))}
          <Button className="rounded-full bg-white px-6 text-[#1a2821] hover:bg-white/90">
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
                    document
                      .getElementById(item)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
              <Button className="mt-2 rounded-full bg-white px-6 text-[#1a2821] hover:bg-white/90">
                Demander un devis
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
