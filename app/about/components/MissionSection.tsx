'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export const MissionSection = () => {
  const missionHighlights = [
    {
      title: "Learning-First Approach",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4267b2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      )
    },
    {
      title: "Innovation Focus",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4267b2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    },
    {
      title: "Community Building",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4267b2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
        </svg>
      )
    },
    {
      title: "Skill Enhancement",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4267b2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    }
  ]

  return (
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
          <path fill="currentColor" d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
        </svg>
      </div>
      <div className="absolute left-4 bottom-4 w-24 h-24 opacity-[0.07] transform -rotate-12 sm:opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#40E0D0]">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 bg-transparent">
        <Image 
          src="/assets/images/target.png"
          alt="Mission Icon"
          width={100}
          height={100}
          className="w-10 h-10 object-contain mb-4"
        />
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#4267b2]">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
          The Programmers Club is dedicated to fostering a vibrant community of tech enthusiasts
          and future innovators. We believe in hands-on learning, peer collaboration, and
          creating opportunities for students to grow their technical skills.
        </p>
        
        {/* Mission Highlights */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {missionHighlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-8 h-8 rounded-full bg-[#4267b2]/10 flex items-center justify-center flex-shrink-0">
                {highlight.icon}
              </div>
              <span>{highlight.title}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 