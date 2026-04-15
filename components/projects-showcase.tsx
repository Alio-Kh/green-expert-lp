"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects-data";

export function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((current) =>
          current === projects.length - 1 ? 0 : current + 1
        );
      }, 5000);
    }
  }, [isPaused]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
    resetTimer();
  }, [resetTimer]);

  const previous = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
    resetTimer();
  }, [resetTimer]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      resetTimer();
    },
    [currentIndex, resetTimer]
  );

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      previous();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -500) {
      next();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 500) {
      previous();
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const current = projects[currentIndex];

  return (
    <div
      className="mt-16"
      role="region"
      aria-roledescription="carousel"
      aria-label="Nos réalisations"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="relative mx-auto aspect-video w-full max-w-screen-xl cursor-grab overflow-hidden rounded-3xl active:cursor-grabbing md:aspect-[16/9] lg:aspect-[2/1] xl:aspect-[21/9]"
          >
            <Image
              src={current.heroImage}
              alt={`Projet ${current.title} - ${current.shortDescription}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              className="pointer-events-none object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 md:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6"
              >
                <div className="max-w-prose">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em] text-[#9bbb2d]">
                    <span>{current.category}</span>
                    <span className="inline-flex items-center gap-1.5 text-white/60">
                      <MapPin className="h-3 w-3" />
                      {current.location}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl lg:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">
                    {current.shortDescription}
                  </p>
                </div>

                {/* CTA button */}
                <Link
                  href={`/projets/${current.slug}`}
                  className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#9bbb2d] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#9bbb2d]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8bab1d] md:self-end"
                >
                  <span>Voir le projet</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 left-4 z-10 h-8 w-8 rounded-full border-white/10 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 md:left-4 md:top-1/2 md:-translate-y-1/2 md:h-12 md:w-12"
          onClick={previous}
          aria-label="Projet précédent"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 z-10 h-8 w-8 rounded-full border-white/10 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 md:right-4 md:top-1/2 md:-translate-y-1/2 md:h-12 md:w-12"
          onClick={next}
          aria-label="Projet suivant"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
      </div>

      <div className="mt-4 flex justify-center gap-2 md:mt-6" role="tablist">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Aller au projet ${project.title}`}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-[#9bbb2d]"
                : "bg-white/20 hover:bg-white/40"
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
