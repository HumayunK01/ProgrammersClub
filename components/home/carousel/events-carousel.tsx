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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="relative w-full max-w-4xl mx-auto h-[470px] md:h-[430px] bg-gray-100 animate-pulse rounded-lg" />
  }

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.touches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide()
    if (touchStart - touchEnd < -75) prevSlide()
  }

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % events.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[470px] md:h-[430px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Card Stack */}
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

      {/* Navigation Controls */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#4267B2] text-[#4267B2] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#4267B2] text-[#4267B2] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
} 