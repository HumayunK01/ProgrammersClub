'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HackathonAlert() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(100)
  const DISPLAY_DURATION = 8000 // 8 seconds total display time

  useEffect(() => {
    if (!isVisible) return

    // Start the countdown
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, 100 - (elapsed / DISPLAY_DURATION) * 100)
      
      if (elapsed >= DISPLAY_DURATION) {
        setIsVisible(false)
        clearInterval(timer)
      } else {
        setProgress(remaining)
      }
    }, 10)

    return () => clearInterval(timer)
  }, [isVisible])

  if (!isVisible) return null

  // Calculate the progress for each side
  const totalLength = 800 // Arbitrary total length
  const currentLength = (progress / 100) * totalLength
  const top = Math.min(200, currentLength)
  const right = Math.max(0, Math.min(200, currentLength - 200))
  const bottom = Math.max(0, Math.min(200, currentLength - 400))
  const left = Math.max(0, Math.min(200, currentLength - 600))

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4"
      >
        <div className="relative w-full max-w-3xl mx-4">
          <motion.div 
            className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.02]" />
            
            {/* Glassmorphism Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md" />

            {/* Progress Border - Top */}
            <div className="absolute top-0 left-0 h-[2px] bg-white/20"
              style={{ width: `${top}%`, transition: 'width 10ms linear' }} 
            />
            
            {/* Progress Border - Right */}
            <div className="absolute top-0 right-0 w-[2px] bg-white/20"
              style={{ height: `${right}%`, transition: 'height 10ms linear' }} 
            />
            
            {/* Progress Border - Bottom */}
            <div className="absolute bottom-0 right-0 h-[2px] bg-white/20"
              style={{ width: `${bottom}%`, transition: 'width 10ms linear' }} 
            />
            
            {/* Progress Border - Left */}
            <div className="absolute bottom-0 left-0 w-[2px] bg-white/20"
              style={{ height: `${left}%`, transition: 'height 10ms linear' }} 
            />

            {/* Content Container with Glass Effect */}
            <div className="relative backdrop-blur-sm bg-gradient-to-r from-gray-900/50 to-gray-900/30">
              <Link href="/events/err_404_6_0" className="block">
                <div className="relative px-4 py-3 sm:px-6 sm:py-4">
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-white/90">
                      ERR_404 6.0 is Coming! 🚀
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1 max-w-2xl mx-auto">
                      Join us for a 48-hour International Hackathon. Register now to secure your spot!
                    </p>
                  </div>
                </div>
              </Link>

              {/* Close Button */}
              <motion.button 
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 rounded-full 
                  bg-white/10 border border-white/10 backdrop-blur-sm
                  hover:bg-white/20 hover:border-white/20 
                  transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close notification"
              >
                <X size={14} className="text-white/70 hover:text-white sm:w-4 sm:h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 