'use client'

import { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  className?: string
}

export function Typewriter({ text, className = '' }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, mounted])

  useEffect(() => {
    if (!mounted) return

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [mounted])

  // Return the full text on server-side or before mounting
  if (!mounted) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`inline-block w-[2px] h-[1em] bg-current ml-1 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
      />
    </span>
  )
} 