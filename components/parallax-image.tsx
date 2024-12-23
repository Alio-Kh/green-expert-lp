"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
}

export function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <div ref={ref} className="relative aspect-square overflow-hidden rounded-3xl">
      <motion.div style={{ y }} className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}

