"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const processSteps = [
  {
    title: "We Design",
    description: "Création de plans personnalisés pour votre espace",
    image: "https://fal.media/files/elephant/n01RzRRMoP4XMul-Z2F45_dfadc490f38e4afc805c05e7b4c31722.jpg",
  },
  {
    title: "We Install",
    description: "Réalisation experte de votre projet",
    image: "https://fal.media/files/monkey/FOqVfEbr1qRTNDx9riBoZ_144ade400e9345fba693354af8d34da9.jpg",
  },
  {
    title: "We Maintain",
    description: "Entretien régulier pour une beauté durable",
    image: "https://fal.media/files/monkey/kihJVAdwxDsrh5Lb0d8GY_a0a835e0cb9f44688e4ed005201fdc63.jpg",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-[#1a2821] py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-light md:text-5xl">
            Comment Nous{" "}
            <span className="text-[#9bbb2d]">Travaillons</span>
          </h2>
        </motion.div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-6 h-40 w-40">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#9bbb2d] opacity-20" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#9bbb2d]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-full top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-[#9bbb2d] to-transparent md:block" />
                )}
              </div>
              <h3 className="font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

