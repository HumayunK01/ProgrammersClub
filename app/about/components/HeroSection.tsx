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
          <button className="bg-[#4267b2] text-white px-8 py-3 rounded-full hover:bg-[#365899] transition-colors flex items-center gap-2 text-lg group">
            Meet our team
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  )
}