"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
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
          <source
            src="https://res.cloudinary.com/ddpoq8ufw/video/upload/v1734908183/Green%20Expert/st0mle9ort9me9vgmktj.mp4"
            type="video/mp4"
          />
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
            Créons votre <span className="text-[#9bbb2d]">sanctuaire</span>{" "}
            naturel
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Transformez vos espaces extérieurs en havres de paix où la nature
            s&apos;épanouit en harmonie avec vos rêves.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              className="group rounded-full bg-white px-6 text-[#1a2821] hover:bg-white/90"
              onClick={() =>
                document
                  .getElementById("projets")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Découvrir nos créations
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="group rounded-full border-2 border-white px-6 bg-transparent text-white hover:bg-white hover:text-[#1a2821] transition-colors"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
                Un mélange harmonieux de design contemporain et d&apos;éléments
                naturels
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
  );
}
