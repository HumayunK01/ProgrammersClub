'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Users, Target, TrendingUp } from "lucide-react"

export const HeroSection = () => {
  const [counts, setCounts] = useState({ members: 0, events: 0, growth: 0 })

  useEffect(() => {
    // Animate counts over 2 seconds
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounts({
        members: Math.floor(progress * 30),
        events: Math.floor(progress * 17),
        growth: Math.floor(progress * 100),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [])

  const stats = [
    { number: `${counts.members}+`, label: 'Active Members', icon: Users },
    { number: `${counts.events}+`, label: 'Events Hosted', icon: Target },
    { number: `${counts.growth}%`, label: 'Learning Growth', icon: TrendingUp },
  ]

  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden py-12 sm:py-16 
      bg-[#FAFBFF] rounded-2xl border border-gray-100 shadow-sm"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-20 right-[20%] w-40 h-40 rotate-[25deg]">
          <div className="w-full h-full border-[16px] border-[#4267B2]/5 rounded-3xl" />
        </div>

        <div className="absolute bottom-20 left-[15%] w-32 h-32 rotate-[-15deg]">
          <div className="w-full h-full border-[12px] border-[#40C9CE]/5 rounded-3xl" />
        </div>

        {/* Subtle dots */}
        <div className="absolute top-1/4 left-[10%] w-24 h-24">
          <div className="w-3 h-3 bg-[#4267B2]/10 rounded-full" />
        </div>
        
        <div className="absolute bottom-1/3 right-[25%] w-24 h-24">
          <div className="w-2 h-2 bg-[#40C9CE]/10 rounded-full" />
        </div>

        {/* Light gradient overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#E8F0FF]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#F5FBFF]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center"
        >
          {/* Welcome badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium 
              bg-white shadow-sm border border-gray-100 text-[#40C9CE]"
            >
              Welcome to GFG MHSSCOE
            </span>
          </motion.div>

          {/* Description */}
          <p className="mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg
            leading-relaxed text-gray-600 font-light"
          >
            The GFG student chapter of MHSSCOE where we innovate, learn and create constantly 
            to empower our student community!
          </p>

          {/* Stats grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-100
                  shadow-sm hover:shadow-md transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 mb-3 text-[#40C9CE]" strokeWidth={1.5} />
                <dt className="text-2xl sm:text-3xl font-medium text-black">
                  {stat.number}
                </dt>
                <dd className="text-sm text-black font-normal mt-1">
                  {stat.label}
                </dd>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}