'use client'

import { motion } from "framer-motion"

export default function MagazinesPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40C9CE] via-[#40C9CE] to-[#4267B2]">
            Our Magazines
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Coming Soon...
          </p>
        </motion.div>
      </div>
    </div>
  )
} 