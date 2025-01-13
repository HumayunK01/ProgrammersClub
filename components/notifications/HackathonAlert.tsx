'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function HackathonAlert() {
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (pathname !== '/') return null

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 w-[calc(100%-1rem)] sm:w-full max-w-[95vw] sm:max-w-md"
        >
          <Link href="/events/err_404_6_0">
            <motion.div 
              className="relative backdrop-blur-lg bg-white/80 text-black p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg 
                border border-white/20 hover:bg-white/90 transition-all duration-300"
            >
              <div className="absolute -top-1.5 -left-1.5">
                <span className="flex h-3 w-3 sm:h-4 sm:w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-red-500"></span>
                </span>
              </div>
              <div className="pr-7 sm:pr-8">
                <h3 className="font-semibold text-[14px] sm:text-[15px] flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  ERR_404 6.0 Hackathon 🚀
                  <span className="bg-blue-100 text-blue-800 text-[10px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </h3>
                <p className="text-gray-600 mt-0.5 sm:mt-1 text-[12px] sm:text-[13px]">
                  Get ready for 24 hours of coding, innovation, and excitement. 
                  <span className="text-blue-600 font-medium ml-1 group-hover:underline">
                    Click to learn more →
                  </span>
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  setIsVisible(false)
                }}
                className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 text-gray-400 hover:text-gray-600
                  transition-colors duration-300 rounded-full p-1"
                aria-label="Close notification"
              >
                <X size={14} className="sm:w-4 sm:h-4" />
              </button>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 