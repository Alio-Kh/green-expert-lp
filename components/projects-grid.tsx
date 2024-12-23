"use client"

import { motion } from "framer-motion"
import { AnimatedCard } from "./animated-card"

const projects = [
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Jardin Zen Contemporain",
    description: "Un espace de tranquillité avec des éléments modernes et naturels",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Terrasse Méditerranéenne",
    description: "Une oasis urbaine inspirée des jardins méditerranéens",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Parc Écologique",
    description: "Un projet durable intégrant la biodiversité locale",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Jardin d'Entreprise",
    description: "Un espace vert professionnel pour le bien-être au travail",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Villa Luxueuse",
    description: "Aménagement complet d'un jardin de prestige",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Espace Public",
    description: "Création d'un parc urbain moderne et accessible",
  },
]

export function ProjectsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <AnimatedCard {...project} />
        </motion.div>
      ))}
    </div>
  )
}

