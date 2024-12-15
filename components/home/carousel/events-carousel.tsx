'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

export function EventsCarousel({ events }: { events: Event[] }) {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % events.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.touches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide()
    if (touchStart - touchEnd < -75) prevSlide()
  }

  if (!mounted) {
    return <div className="relative w-full max-w-4xl mx-auto h-[470px] md:h-[430px] bg-gray-100 animate-pulse rounded-lg" />
  }

  return (
    <>
      {/* Mobile Stacked Version (hidden on desktop) */}
      <div className="md:hidden">
        <div 
          className="relative w-full max-w-4xl mx-auto h-[470px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Current stacked card implementation */}
          <div className="relative h-full">
            {events.map((event, index) => {
              const position = (index - currentIndex + events.length) % events.length
              const offset = position * 40
              const scale = 1 - (position * 0.1)
              const opacity = 1 - (position * 0.3)

              return (
                <motion.div
                  key={index}
                  className="absolute left-0 right-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: opacity > 0 ? opacity : 0,
                    scale: scale,
                    y: offset,
                    zIndex: events.length - position
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{
                    pointerEvents: position === 0 ? 'auto' : 'none',
                  }}
                >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Slider Version (hidden on mobile) */}
      <div className="hidden md:block relative w-full mx-auto h-[430px]">
        {/* Navigation Controls - Moved to top */}
        <div className="absolute right-4 top-[-50px] flex gap-2 z-10"> {/* New container for arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-[#4267B2] text-[#4267B2] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-[#4267B2] text-[#4267B2] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="overflow-visible relative h-full flex justify-start items-center">
          {events.map((event, index) => {
            const position = (index - currentIndex + events.length) % events.length
            const isActive = position === 0

            return (
              <motion.div
                key={index}
                className="absolute w-full left-0"
                initial={{ opacity: 0, x: -100 }}
                animate={{ 
                  opacity: position <= 4 ? 1 - (position * 0.05) : 0,
                  x: position * 310,
                  y: 0,
                  zIndex: events.length - position,
                  rotateY: 0,
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                style={{
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <Card className={`
                  overflow-hidden transition-all duration-300 hover:shadow-lg
                  ${isActive ? 'opacity-100' : ''}
                  transform-gpu w-[300px] h-[420px]
                `}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {event.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
} 