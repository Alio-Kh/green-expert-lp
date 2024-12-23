"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface AnimatedCardProps {
  image: string
  title: string
  description: string
}

export function AnimatedCard({ image, title, description }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[400px] w-full cursor-pointer rounded-xl"
    >
      <motion.div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative h-full w-full rounded-xl bg-white shadow-xl"
      >
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 rounded-xl bg-black/40" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <motion.h3
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-2xl font-bold"
          >
            {title}
          </motion.h3>
          <motion.p
            style={{
              transform: "translateZ(25px)",
            }}
            className="mt-2 text-gray-200"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

