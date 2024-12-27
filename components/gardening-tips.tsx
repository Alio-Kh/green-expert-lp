"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const tips = [
  {
    title: "Préparation du Sol et Drainage",
    description: "Guide complet sur la préparation optimale de votre terrain",
    image:
      "https://fal.media/files/koala/SNlnGNGCBAN8Niq3MCCiw_e5289361787b470fb5babca9f7a35cde.jpg",
    link: "/conseils/preparation-sol",
  },
  {
    title: "Choix des Plantes Adaptées",
    description: "Sélection des meilleures plantes pour le climat marocain",
    image:
      "https://fal.media/files/kangaroo/3nHhmrCWM-q4vbS7kNpGI_79afd7719ffc414aa61c381b609bdcfa.jpg",
    link: "/conseils/plantes-maroc",
  },
  {
    title: "Systèmes d'Irrigation Efficaces",
    description: "Solutions modernes pour l'arrosage de votre jardin",
    image:
      "https://fal.media/files/monkey/FrLq4VY9iD2sm5B_WSUkf_71f231294f42438a879a6846b8503cd5.jpg",
    link: "/conseils/irrigation",
  },
  {
    title: "Jardinage Écologique",
    description: "Techniques respectueuses de l'environnement",
    image:
      "https://fal.media/files/kangaroo/5NaC8_M_TTUkAxvHxQOqZ_12bc320498a24ecfbfcb1ed276d5245d.jpg",
    link: "/conseils/eco-jardinage",
  },
];

export function GardeningTips() {
  return (
    <section className="bg-white py-32 text-[#1a2821]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-light md:text-5xl">
              Conseils de Jardinage
            </h2>
            <p className="mt-6 text-[#1a2821]/70">
              Le jardinage est une activité enrichissante qui vous permet de
              rester en contact avec la nature. Découvrez nos conseils pour
              créer et entretenir votre jardin de rêve.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                variant="default"
                className="rounded-full bg-[#9bbb2d] px-6 hover:bg-[#8bab1d]"
              >
                Nous Contacter
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-[#1a2821] text-[#1a2821] hover:bg-[#1a2821] hover:text-white"
              >
                Voir Tous les Conseils
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl">{tip.title}</h3>
                <Button
                  variant="link"
                  className="mt-2 p-0 text-[#9bbb2d] hover:text-[#8bab1d]"
                >
                  LIRE LA SUITE
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
