"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Oasis Royale",
    description: "Une fusion majestueuse entre tradition marocaine et modernité luxuriante",
    image: "/placeholder.svg?height=800&width=1200",
    stats: ["5000m²", "6 mois", "Design exclusif"],
  },
  {
    id: 2,
    title: "Poumon Vert Urbain",
    description: "Un havre de biodiversité au cœur de la cité",
    image: "/placeholder.svg?height=800&width=1200",
    stats: ["12000m²", "18 mois", "100% durable"],
  },
  {
    id: 3,
    title: "Mirage Verdoyant",
    description: "Un paradis tropical émergeant des dunes du désert",
    image: "/placeholder.svg?height=800&width=1200",
    stats: ["8000m²", "12 mois", "Irrigation intelligente"],
  },
  {
    id: 4,
    title: "Campus du Futur",
    description: "Métamorphose d'un espace académique en jardin de connaissance",
    image: "/placeholder.svg?height=800&width=1200",
    stats: ["15000m²", "24 mois", "Zones d'étude extérieures"],
  },
]

export function AnimatedProjectSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView && !isHovered) {
      controls.start("visible")
    } else {
      controls.stop()
    }
  }, [isInView, controls, isHovered])

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div 
      ref={containerRef} 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons */}
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 shadow-lg backdrop-blur-sm hover:bg-white"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 shadow-lg backdrop-blur-sm hover:bg-white"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}

      {/* Projects Container */}
      <div 
        ref={scrollContainerRef}
        className="hide-scrollbar overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <motion.div
          className="flex"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 0 },
            visible: {
              x: [0, -100 * (projects.length - 1)],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 20,
                  ease: "linear",
                },
              },
            },
          }}
          style={{ willChange: 'transform' }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="w-full flex-none px-4 md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="overflow-hidden rounded-xl bg-white shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex justify-between">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-semibold text-[#9bbb2d]">{stat}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

