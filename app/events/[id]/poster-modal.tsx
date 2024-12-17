'use client'

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Maximize2 } from "lucide-react"
import { useState } from "react"

export default function PosterModal({ 
  posterImage, 
  title 
}: { 
  posterImage: string
  title: string 
}) {
  const [showPoster, setShowPoster] = useState(false)

  return (
    <>
      <button 
        onClick={() => setShowPoster(true)}
        className="flex items-center gap-1.5 md:gap-2 text-[#4267B2]"
      >
        <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span className="text-[10px] md:text-xs">View Full Size</span>
      </button>

      <AnimatePresence>
        {showPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPoster(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl w-full h-[80vh]"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={posterImage}
                alt={`${title} Poster`}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setShowPoster(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 