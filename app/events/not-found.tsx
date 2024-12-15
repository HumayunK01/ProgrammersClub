'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-[#4267b2] mb-4">
          Event Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/events"
            className="px-6 py-2 bg-[#4267b2] text-white rounded-full hover:bg-[#365899] transition-colors"
          >
            All Events
          </Link>
          <Link
            href="/"
            className="px-6 py-2 border border-[#4267b2] text-[#4267b2] rounded-full hover:bg-[#4267b2]/5 transition-colors"
          >
            Go home
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 