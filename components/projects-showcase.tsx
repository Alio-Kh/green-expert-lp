"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Villa Méditerranéenne",
    description: "Un jardin luxuriant inspiré des côtes méditerranéennes",
    image:
      "https://fal.media/files/rabbit/VV2ti7c12ADTfKn8zs7p2_68e66fa918864a4facb8510cfc401fa9.jpg",
    stats: ["500m²", "3 mois", "Design exclusif"],
  },
  {
    title: "Oasis Urbaine",
    description: "Un havre de paix au cœur de la ville",
    image:
      "https://fal.media/files/penguin/oDferWZMirf76z6a_EYZG_a75d40eee1c84a488813cba28fbe1b77.jpg",
    stats: ["300m²", "2 mois", "Irrigation intelligente"],
  },
  {
    title: "Jardin Zen",
    description: "Un espace de tranquillité et de méditation",
    image:
      "https://fal.media/files/kangaroo/ENyEfffIBlh4aZ1RB7w8G_b9a74c7115594336a6d403e5ef9827ce.jpg",
    stats: ["200m²", "1.5 mois", "Éclairage LED"],
  },
];

export function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-16">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video w-full overflow-hidden rounded-3xl md:aspect-[16/9] lg:aspect-[2/1] xl:aspect-[21/9] max-w-screen-xl mx-auto"
          >
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-prose"
              >
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl">
                  {projects[currentIndex].title}
                </h3>
                <p className="mt-2 text-sm text-white/70 md:text-base lg:text-lg">
                  {projects[currentIndex].description}
                </p>
                <div className="mt-4 flex gap-4 md:gap-6 lg:gap-8">
                  {projects[currentIndex].stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs font-medium text-[#9bbb2d] md:text-sm">
                        {stat}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 left-4 z-10 h-8 w-8 rounded-full border-white/10 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 md:top-1/2 md:-translate-y-1/2 md:h-12 md:w-12"
          onClick={previous}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 z-10 h-8 w-8 rounded-full border-white/10 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 md:top-1/2 md:-translate-y-1/2 md:h-12 md:w-12"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
      </div>

      <div className="mt-4 flex justify-center gap-2 md:mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-[#9bbb2d]"
                : "bg-white/20 hover:bg-white/40"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
