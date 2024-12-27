"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, TreePine, Shovel, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Design Paysager",
    description:
      "Création de plans personnalisés qui allient esthétique et fonctionnalité",
  },
  {
    icon: Droplets,
    title: "Systèmes d'Irrigation",
    description: "Solutions d'arrosage intelligentes et économes en eau",
  },
  {
    icon: Sun,
    title: "Éclairage Extérieur",
    description: "Mise en valeur nocturne de votre espace vert",
  },
  {
    icon: TreePine,
    title: "Plantation",
    description:
      "Sélection et installation d'espèces adaptées à votre environnement",
  },
  {
    icon: Shovel,
    title: "Terrassement",
    description: "Préparation et modelage du terrain pour vos aménagements",
  },
  {
    icon: Shield,
    title: "Maintenance",
    description: "Entretien régulier pour préserver la beauté de votre jardin",
  },
];

export function ServicesGrid() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="group relative h-full overflow-hidden border-white/10 bg-white/5 transition-colors hover:bg-white/10">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-full bg-[#9bbb2d]/10 p-3 text-[#9bbb2d]">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#9bbb2d] mb-4">
                {service.title}
              </h3>
              <p className="mt-2 text-white/70">{service.description}</p>
            </CardContent>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#9bbb2d]/0 via-[#9bbb2d]/0 to-[#9bbb2d]/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
