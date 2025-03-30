'use client'
import { cn } from '@/lib/utils'
import { useMotionValue, animate, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import useMeasure from 'react-use-measure'
import Image from 'next/image'

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    let controls
    const size = direction === 'horizontal' ? width : height
    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from)
        },
      })
    }

    return controls?.stop
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ])

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true)
          setCurrentDuration(durationOnHover)
        },
        onHoverEnd: () => {
          setIsTransitioning(true)
          setCurrentDuration(duration)
        },
      }
    : {}

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

interface EventSponsorsProps {
  sponsors: {
    name: string
    logo: string
    website?: string
  }[]
}

export default function EventSponsors({ sponsors }: EventSponsorsProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4">
      <InfiniteSlider 
        gap={24}
        duration={40}
        durationOnHover={80}
        reverse
        className="w-full"
      >
        {sponsors.map((sponsor, index) => (
          <a
            key={`${sponsor.name}-${index}`}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-auto sm:h-[50px] md:h-[60px] lg:h-[70px] relative group flex items-center justify-center"
          >
            <div className="relative w-full h-full min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px]">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain filter group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
              />
            </div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-lg" />
          </a>
        ))}
      </InfiniteSlider>
    </div>
  )
} 