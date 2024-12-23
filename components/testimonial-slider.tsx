"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Directrice",
    company: "Espaces Verts SARL",
    content: "Un grand merci pour votre professionnalisme. Votre expertise et votre créativité ont transformé notre espace extérieur en un véritable paradis. Le résultat dépasse toutes nos attentes.",
    image: "https://fal.media/files/elephant/bQCSUY4UBK24qNPXZnz4__ff82bd8b2b7b4f7baf60587fa532fa5f.jpg",
  },
  {
    id: 2,
    name: "Alexandre Laurent",
    role: "Propriétaire",
    company: "Résidence Les Jardins",
    content: "Travailler avec votre équipe a été un véritable plaisir. Votre réactivité, vos conseils pertinents et la qualité de votre travail sont remarquables. Je vous recommande vivement.",
    image: "https://fal.media/files/monkey/uwsMRs7e_7_WXw5Z45lxz_c09106df40264347994f05baddbddc7e.jpg",
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Gérante",
    company: "Hôtel Le Royal",
    content: "Je tenais à vous exprimer notre satisfaction concernant l'aménagement paysager. Notre hôtel a gagné en prestige grâce à vos créations. Un travail d'exception !",
    image: "https://fal.media/files/penguin/5pHdM85w8DfGr4ZRZf31d_8dd1691bed454eaab4d399c4e71efccb.jpg",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full"
            >
              <Card className="mx-auto max-w-4xl border-none bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#9bbb2d] shadow-lg">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={`Portrait de ${testimonials[currentIndex].name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="mb-4 text-lg font-light italic text-white/90">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div>
                      <h4 className="font-serif text-xl font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-white/70">
                        {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

