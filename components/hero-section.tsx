"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Force play the video as soon as possible (fixes autoplay delays)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay may be blocked on some browsers - that's ok
      });
    };
    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
    }
    return () => {
      video.removeEventListener("loadeddata", playVideo);
    };
  }, []);

  const smoothScrollTo = (elementId: string, duration = 1400) => {
    const startY = window.pageYOffset;
    const target = document.getElementById(elementId);
    const targetY = target
      ? target.getBoundingClientRect().top + startY
      : startY + window.innerHeight;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      window.scrollTo({ top: targetY });
      return;
    }

    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(t);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as unknown as number[],
      },
    },
  };

  const stats = [
    { value: "20+", label: "Années d'expérience" },
    { value: "500+", label: "Projets réalisés" },
    { value: "4.9/5", label: "Satisfaction client" },
  ];

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-[#1a2821] pt-20"
    >
      {/* Video background with parallax */}
      <motion.div className="absolute inset-0 z-0" aria-hidden="true" style={{ y, opacity }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className="h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dfxjfturz/video/upload/v1757712280/Veo_3_Video_Generator_1_vxk5ga.mp4"
            type="video/mp4"
          />
        </video>
        {/* Strong cinematic gradient overlay — masks any branding in the first frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2821]/85 via-[#1a2821]/75 to-[#1a2821]/95" />
        {/* Radial vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,40,33,0.3)_0%,_rgba(26,40,33,0.85)_100%)]" />
      </motion.div>

      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(155,187,45,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,187,45,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content — flex layout keeps headline centred and stats at bottom */}
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] flex-col justify-between px-4 pb-28 pt-12 md:pt-20">
        {/* Spacer / top area (empty, keeps the headline vertically balanced) */}
        <div aria-hidden className="hidden md:block" />

        {/* Headline block */}
        <motion.div
          variants={containerVariants}
          initial={false}
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Premium badge with pulsing indicator */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#9bbb2d]/30 bg-[#1a2821]/70 px-5 py-2 text-sm text-white backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9bbb2d] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9bbb2d]" />
            </span>
            <span className="tracking-wide">
              Experts en aménagement paysager
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Créons votre{" "}
            <motion.span
              className="relative inline-block italic text-[#9bbb2d]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              sanctuaire
              <motion.span
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#9bbb2d] via-[#9bbb2d] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </motion.span>
            <br />
            naturel
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            Transformez vos espaces extérieurs en havres de paix où la nature
            s&apos;épanouit en harmonie avec vos rêves.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              className="group relative overflow-hidden rounded-full bg-[#9bbb2d] px-8 py-6 text-base text-white shadow-[0_10px_40px_-15px_rgba(155,187,45,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8bab1d] hover:shadow-[0_15px_50px_-10px_rgba(155,187,45,0.7)] active:scale-95"
              onClick={() => smoothScrollTo("projets", 1000)}
            >
              <span className="relative z-10">Découvrir nos créations</span>
              <ChevronRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              className="group rounded-full border-2 border-white/30 bg-white/5 px-8 py-6 text-base text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1a2821] active:scale-95"
              onClick={() => smoothScrollTo("services", 1000)}
            >
              Nos services
            </Button>
          </motion.div>

          {/* Rating row */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#9bbb2d] text-[#9bbb2d]"
                />
              ))}
            </div>
            <span className="tracking-wide">
              Noté 4.9/5 par nos clients au Maroc
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mx-auto w-full max-w-3xl"
        >
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i !== 0 ? "border-l border-white/10" : ""
                }`}
              >
                <div className="font-serif text-3xl font-light text-[#9bbb2d] md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/50 md:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator — properly centred, sits below the stats */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => smoothScrollTo("services", 1800)}
        aria-label="Défiler vers le bas"
        className="group absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <div className="relative h-10 w-6 rounded-full border border-white/30 transition-colors group-hover:border-[#9bbb2d]">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white/60 group-hover:bg-[#9bbb2d]"
          />
        </div>
      </motion.button>
    </section>
  );
}
