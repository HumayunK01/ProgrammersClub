'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const valueCards = [
  {
    title: "Innovation",
    description: "Encouraging creative solutions and new ideas",
    icon: "/assets/images/brain.png"
  },
  {
    title: "Collaboration",
    description: "Working together to achieve greater results",
    icon: "/assets/images/collab.png"
  },
  {
    title: "Growth",
    description: "Continuous learning and skill development",
    icon: "/assets/images/growth.png"
  }
]

export const ValuesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 rounded-xl p-8 shadow-sm hover:bg-gradient-to-br hover:from-[#4267b2]/5 hover:to-white/90 transition-all duration-300 border border-gray-100 hover:border-[#4267b2]/20 group relative overflow-hidden mb-5"
    >
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-40 h-40 opacity-[0.07] transform rotate-12 translate-x-8 -translate-y-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#4267b2]">
          <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
        </svg>
      </div>
      <div className="absolute left-4 bottom-4 w-32 h-32 opacity-[0.07] transform -rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#40E0D0]">
          <path fill="currentColor" d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/>
        </svg>
      </div>

      {/* Section Header */}
      <Image 
        src="/assets/images/sparkles.png"
        alt="Values Icon"
        width={100}
        height={100}
        className="w-10 h-10 object-contain mb-4 mx-auto"
      />
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#4267b2]">Our Values</h2>

      {/* Value Cards Grid */}
      <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full">
        {valueCards.map((card, index) => (
          <motion.div 
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 bg-white/95 rounded-xl shadow-sm hover:bg-gradient-to-br hover:from-[#4267b2]/5 hover:to-white/90 transition-all duration-300 border border-gray-100 hover:border-[#4267b2]/20 group relative overflow-hidden"
          >
            <Image 
              src={card.icon}
              alt={`${card.title} Icon`}
              width={100}
              height={100}
              className="w-10 h-10 object-contain mb-3 mx-auto"
            />
            <h4 className="text-lg sm:text-xl font-bold mb-2 text-[#4267b2]">{card.title}</h4>
            <p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 