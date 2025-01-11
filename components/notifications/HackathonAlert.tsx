'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function HackathonAlert() {
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  if (pathname !== '/') return null
  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] max-h-[95vh] sm:max-h-[90vh] max-w-[90vw] sm:max-w-5xl mx-auto rounded-lg sm:rounded-xl overflow-hidden"
        >
          <div className="relative w-full h-full">
            <Image
              src="/assets/poster/delay.png"
              alt="ERR_404 6.0 Poster"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1024px"
              priority
              quality={100}
            />
            <motion.button 
              onClick={() => setIsVisible(false)}
              className="absolute top-8 sm:top-1 right-0 sm:right-4 p-2 rounded-full 
                bg-black/50 hover:bg-black/70 
                transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close notification"
            >
              <X size={24} className="text-white" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 