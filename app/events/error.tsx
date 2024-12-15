'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-[#4267b2] mb-4">
          Event Loading Error!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't load the events. Please try again or check back later.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2 bg-[#4267b2] text-white rounded-full hover:bg-[#365899] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-2 border border-[#4267b2] text-[#4267b2] rounded-full hover:bg-[#4267b2]/5 transition-colors"
          >
            Go home
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
            <p className="text-sm font-mono text-gray-700">
              {error.message}
            </p>
            {error.stack && (
              <pre className="mt-2 text-xs text-gray-500 overflow-auto">
                {error.stack}
              </pre>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
} 