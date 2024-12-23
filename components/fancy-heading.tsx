"use client"

import { motion } from "framer-motion"

interface FancyHeadingProps {
  children: string
  className?: string
}

export function FancyHeading({ children, className }: FancyHeadingProps) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <motion.div
          className="absolute -left-4 top-1/2 h-1 w-12 -translate-y-1/2 bg-[#9bbb2d]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <h2 className="font-display text-4xl font-bold md:text-5xl">{children}</h2>
      </motion.div>
    </div>
  )
}

