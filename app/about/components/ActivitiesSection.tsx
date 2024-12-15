'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export const ActivitiesSection = () => {
  return (
    <div className="space-y-6">
      {/* Events & Workshops Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm hover:bg-gradient-to-br hover:from-[#4267b2]/5 hover:to-white/90 transition-all duration-300 border border-gray-100 hover:border-[#4267b2]/20 group relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 w-32 h-32 opacity-[0.07] transform rotate-12 translate-x-8 -translate-y-8 sm:opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#4267b2]">
            <path fill="currentColor" d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zM7 10h10v2H7zm0 4h7v2H7z"/>
          </svg>
        </div>
        <div className="absolute left-4 bottom-4 w-24 h-24 opacity-[0.07] transform -rotate-12 sm:opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#40E0D0]">
            <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
        </div>
        <Image 
          src="/assets/images/partypopper.png"
          alt="Events Icon"
          width={100}
          height={100}
          className="w-10 h-10 object-contain mb-4"
        />
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#4267b2]">Events & Workshops</h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Regular technical workshops, coding competitions, and industry talks to enhance
          practical skills and knowledge.
        </p>
      </motion.div>

      {/* Community Projects Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/90 rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm hover:bg-gradient-to-br hover:from-[#4267b2]/5 hover:to-white/90 transition-all duration-300 border border-gray-100 hover:border-[#4267b2]/20 group relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 w-32 h-32 opacity-[0.07] transform rotate-12 translate-x-8 -translate-y-8 sm:opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#4267b2]">
            <path fill="currentColor" d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H3v2h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2v-2H8v-5a2 2 0 0 0-2-2 2 2 0 0 0 2-2V5h2V3H8m8 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5h-2V3h2z"/>
          </svg>
        </div>
        <div className="absolute left-4 bottom-4 w-24 h-24 opacity-[0.07] transform -rotate-12 sm:opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#40E0D0]">
            <path fill="currentColor" d="M12.89 3l1.96.4L11.11 21l-1.96-.4L12.89 3m6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83L19.59 12M1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83L1.58 12z"/>
          </svg>
        </div>
        <Image 
          src="/assets/images/hammerwrench.png"
          alt="Community Projects Icon"
          width={100}
          height={100}
          className="w-10 h-10 object-contain mb-4"
        />
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#4267b2]">Community Projects</h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Collaborative projects that solve real-world problems while providing hands-on
          experience to our members.
        </p>
      </motion.div>
    </div>
  )
} 