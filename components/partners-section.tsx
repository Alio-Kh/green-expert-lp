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
  {
    name: "CCM",
    logo: "/partners/Centre_Cinematographique_Marocain.png",
    alt: "Logo du Centre Cinématographique Marocain",
  },
  {
    name: "FM6 Education",
    logo: "/partners/fm6education.png",
    alt: "Logo de la Fondation Mohammed VI de promotion des œuvres sociales de l'education-formation",
  },
  {
    name: "Al Masaood",
    logo: "/partners/al_masaood.jpg",
    alt: "Logo de Al Masaood",
  },
  {
    name: "Fondation Mohammed V",
    logo: "/partners/Fondation_mohammed_v_pour_la_solidarite_logo.png",
    alt: "Logo de la Fondation Mohammed V pour la solidarité",
  },
  {
    name: "Arrondissement Bettana",
    logo: "/partners/ARRONDISSEMENT_BETTANA.jpg",
    alt: "Logo de l'Arrondissement Bettana",
  },
  {
    name: "Protection Civile",
    logo: "/partners/Logo_de_la_Protection_Civile_Marocaine.png",
    alt: "Logo de la Protection Civile Marocaine",
  },
  {
    name: "ENS Martil",
    logo: "/partners/LOGO_ENS_MARTIL.png",
    alt: "Logo de l'École Normale Supérieure Martil",
  },
  {
    name: "Ville d'Agadir",
    logo: "/partners/Logo_de_la_Ville_d'Agadir.png",
    alt: "Logo de la Ville d'Agadir",
  },
  {
    name: "ONDA",
    logo: "/partners/logo-onda.jpg",
    alt: "Logo de l'Office National des Aéroports",
  },
  {
    name: "SABIC",
    logo: "/partners/Saudi-Basic-Industries-Logo.png",
    alt: "Logo de Saudi Basic Industries (SABIC)",
  },
  {
    name: "HCP",
    logo: "/partners/HCP.png",
    alt: "Logo du Haut Commissariat au Plan",
  },
  {
    name: "Ministère de l'Education",
    logo: "/partners/Men_2021.png",
    alt: "Logo du Ministère de l'Education Nationale du Préscolaire et du Sport",
  },
  {
    name: "Chef du Gouvernement",
    logo: "/partners/Chef-du-Gouvernement.png",
    alt: "Logo du Chef du Gouvernement du Royaume du Maroc",
  },
  {
    name: "ANEP",
    logo: "/partners/ANEP.png",
    alt: "Logo de l'Agence Nationale des Equipements Publics",
  },
  // {
  //   name: "FAR",
  //   logo: "/partners/FAR.png",
  //   alt: "Logo des Forces Armées Royales",
  // },
  {
    name: "GIZ",
    logo: "/partners/giz.png",
    alt: "Logo de la Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
  },
  {
    name: "FNM",
    logo: "/partners/FNM.png",
    alt: "Logo de La Fondation Nationale des Musées",
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

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
