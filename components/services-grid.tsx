"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as unknown as number[],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div key={service.slug} variants={cardVariants}>
            <Link
              href={`/services/${service.slug}`}
              aria-label={`En savoir plus sur ${service.title}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 transition-all duration-500 hover:border-[#9bbb2d]/40 hover:from-[#9bbb2d]/[0.05] hover:to-white/[0.02] focus:outline-none focus:ring-2 focus:ring-[#9bbb2d]/50"
            >
              {/* Gradient glow on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-[#9bbb2d]/0 via-[#9bbb2d]/0 to-[#9bbb2d]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-[#9bbb2d]/10 group-hover:via-transparent group-hover:to-transparent" />

              {/* Number badge */}
              <div className="absolute right-6 top-6 font-serif text-xs font-light tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-[#9bbb2d]">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="relative mb-6 inline-flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-[#9bbb2d]/20 blur-xl transition-all duration-500 group-hover:bg-[#9bbb2d]/40 group-hover:blur-2xl" />
                <div className="relative rounded-2xl border border-[#9bbb2d]/20 bg-[#9bbb2d]/10 p-4 text-[#9bbb2d] transition-all duration-300 group-hover:border-[#9bbb2d]/40 group-hover:bg-[#9bbb2d]/20">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white transition-colors duration-300">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {service.shortDescription}
              </p>

              {/* Arrow reveal on hover — pinned to bottom so all cards align */}
              <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-medium uppercase tracking-[0.2em] text-[#9bbb2d] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span>En savoir plus</span>
                <ArrowUpRight
                  className="h-4 w-4 -translate-x-2 transition-transform duration-300 group-hover:translate-x-0"
                  strokeWidth={2}
                />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#9bbb2d] to-transparent transition-all duration-500 group-hover:w-full" />
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
