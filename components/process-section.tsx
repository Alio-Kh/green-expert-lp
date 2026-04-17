"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    title: "Nous Concevons",
    description: "Création de plans personnalisés pour votre espace",
    alt: "Concepteur paysagiste dessinant un plan d'aménagement de jardin",
    image:
      "https://fal.media/files/elephant/n01RzRRMoP4XMul-Z2F45_dfadc490f38e4afc805c05e7b4c31722.jpg",
  },
  {
    title: "Nous Réalisons",
    description: "Réalisation experte de votre projet",
    alt: "Équipe Green Expert réalisant l'aménagement d'un jardin sur le terrain",
    image:
      "https://fal.media/files/monkey/FOqVfEbr1qRTNDx9riBoZ_144ade400e9345fba693354af8d34da9.jpg",
  },
  {
    title: "Nous Entretenons",
    description: "Entretien régulier pour une beauté durable",
    alt: "Jardinier entretenant un jardin luxuriant pour préserver sa beauté",
    image:
      "https://fal.media/files/monkey/kihJVAdwxDsrh5Lb0d8GY_a0a835e0cb9f44688e4ed005201fdc63.jpg",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-[#fafaf5] py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-[#9bbb2d]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9bbb2d]">
              Notre Processus
            </span>
            <div className="h-px w-8 bg-[#9bbb2d]" />
          </div>
          <h2 className="font-serif text-4xl font-light text-[#1a2821] md:text-5xl lg:text-6xl">
            Comment Nous{" "}
            <span className="italic text-[#9bbb2d]">Travaillons</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              className="group text-center"
              data-step={index + 1}
            >
              {/* Image card */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-black/5">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Step number — floats below image centre */}
                <motion.div
                  className="absolute -bottom-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#9bbb2d] font-serif text-xl font-semibold text-white shadow-xl shadow-[#9bbb2d]/30 ring-4 ring-[#fafaf5]"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.25 + 0.7,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="mt-12 font-serif text-2xl font-semibold text-[#1a2821] md:text-3xl">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-[#1a2821]/65">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA — link to the dedicated process page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-20 text-center"
        >
          <Link
            href="/notre-processus"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-[#1a2821]/10 bg-white px-8 py-4 text-sm font-medium text-[#1a2821] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9bbb2d] hover:bg-[#9bbb2d] hover:text-white hover:shadow-lg hover:shadow-[#9bbb2d]/30"
          >
            <span>Découvrir notre processus en détail</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
