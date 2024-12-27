"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "INPT",
    logo: "/partners/inpt.jpg",
    alt: "Logo de l'Institut National des Postes et Télécommunications",
  },
  {
    name: "Morocco Foodex",
    logo: "/partners/LOGO-MFX.png",
    alt: "Logo de Morocco Foodex",
  },
  {
    name: "MedOMed",
    logo: "/partners/medomed.jpg",
    alt: "Logo de MedOMed - École de jardinage bouragrag",
  },
  {
    name: "MENPS",
    logo: "/partners/menps.png",
    alt: "Logo du Ministère de l'Éducation Nationale, du Préscolaire et des Sports",
  },
];

export function PartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-light text-[#1a2821] md:text-5xl">
            Ils Nous Font <span className="text-[#9bbb2d]">Confiance</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#1a2821]/70">
            Découvrez les entreprises et institutions qui nous ont choisis pour
            transformer leurs espaces verts en véritables chefs-d&apos;œuvre.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-4">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6"
            >
              <div className="relative h-40 w-full max-w-[280px]">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
