"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const partners = [
  { name: "EcoSolutions", logo: "https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908358/Green%20Expert/tfeqeph6cvdce6nbpsaz.png" },
  { name: "GreenTech", logo: "https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908358/Green%20Expert/tfeqeph6cvdce6nbpsaz.png" },
  { name: "BioInnovate", logo: "https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908358/Green%20Expert/tfeqeph6cvdce6nbpsaz.png" },
  { name: "NaturePro", logo: "https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908358/Green%20Expert/tfeqeph6cvdce6nbpsaz.png" },
  { name: "EarthCare", logo: "https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908358/Green%20Expert/tfeqeph6cvdce6nbpsaz.png" },
  { name: "SustainGrow", logo: "https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908358/Green%20Expert/tfeqeph6cvdce6nbpsaz.png" },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-white py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-[#1a2821] md:text-5xl">
            Ils Nous Font Confiance
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#1a2821]/70">
            Découvrez les entreprises et institutions qui nous ont choisis pour transformer leurs espaces verts en véritables chefs-d'œuvre.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="relative aspect-square w-full max-w-[100px] transition-transform duration-300 hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

