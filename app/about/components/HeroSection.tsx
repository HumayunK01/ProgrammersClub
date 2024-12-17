'use client'

import { motion } from "framer-motion"

export const HeroSection = () => {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40C9CE] via-[#40C9CE] to-[#4267B2]">
          About Us
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
          The GFG student chapter of MHSSCOE where we innovate, learn and create constantly to empower our student community!
        </p>
        <div className="flex justify-center">
        </div>
      </motion.div>
    </div>
  )
}