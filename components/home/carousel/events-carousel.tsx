'use client'

import { motion, PanInfo } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from "next/link"
import ReactMarkdown from 'react-markdown'

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnailImage: string;
  posterImage: string;
  tags: string[];
}

export function EventsCarousel({ events }: { events: Event[] }) {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const nextSlide = () => {
    if (currentIndex < events.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const dragDistance = info.offset.x
    const swipeThreshold = 50

    if (dragDistance > swipeThreshold && currentIndex > 0) {
      prevSlide()
    } else if (dragDistance < -swipeThreshold && currentIndex < events.length - 1) {
      nextSlide()
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="relative w-full max-w-4xl mx-auto h-[430px] bg-gray-100 animate-pulse rounded-lg" />
  }

  return (
    <div className="relative w-full mx-auto">
      {/* Desktop Navigation Controls */}
      <div className="absolute right-4 top-[-50px] hidden md:flex gap-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/80 hover:bg-[#4267B2] text-[#4267B2] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/80 hover:bg-[#4267B2] text-[#4267B2] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
          onClick={nextSlide}
          disabled={currentIndex === events.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden overflow-hidden relative">
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <motion.div 
              key={index} 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className={`min-w-full px-2 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
              <Link href={`/events/${event.id}`}>
                <Card className={`group overflow-hidden transition-all duration-300 relative rounded-xl border 
                  ${event.tags.includes('Upcoming') 
                    ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-gradient-to-bl from-cyan-200/40 via-cyan-100/30 to-cyan-50/20' 
                    : 'border-gray-100 bg-white'} 
                  hover:border-[#4267B2]/20 hover:bg-gradient-to-br hover:from-[#4267B2]/5 hover:to-white/90 h-[450px] cursor-pointer`}>
                  <div className={`relative flex flex-col h-full ${event.tags.includes('Upcoming') 
                    ? 'bg-gradient-to-bl from-cyan-200/30 via-cyan-100/20 to-cyan-50/10' 
                    : ''}`}>
                    {/* Image Container */}
                    <div className="relative h-48">
                      {event.tags.includes('Upcoming') && (
                        <div className="absolute top-2 right-2 z-20">
                          <Badge 
                            className="bg-gradient-to-bl from-cyan-400 via-cyan-300 to-cyan-200 text-white border-none px-3 py-1"
                          >
                            Upcoming
                          </Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 group-hover:opacity-0 transition-opacity z-10" />
                      <Image
                        src={event.thumbnailImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    
                    <CardHeader className="relative">
                      <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-[#4267B2] transition-colors">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">
                        {event.date}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <div className="text-gray-600 text-sm line-clamp-4">
                        <ReactMarkdown 
                          components={{
                            strong: ({children}) => <span className="font-bold">{children}</span>
                          }}
                        >
                          {event.description}
                        </ReactMarkdown>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-2 mt-auto">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="bg-[#4267B2]/10 hover:bg-[#4267B2]/20 text-[#4267B2] border-none transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {events.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 bg-[#4267B2]' 
                  : 'w-1.5 bg-[#4267B2]/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="min-w-[25%] px-2"
            >
              <Link href={`/events/${event.id}`}>
                <Card className={`group overflow-hidden transition-all duration-300 relative rounded-xl border 
                  ${event.tags.includes('Upcoming') 
                    ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-gradient-to-bl from-cyan-200/40 via-cyan-100/30 to-cyan-50/20' 
                    : 'border-gray-100 bg-white'} 
                  hover:border-[#4267B2]/20 hover:bg-gradient-to-br hover:from-[#4267B2]/5 hover:to-white/90 h-[450px] cursor-pointer`}>
                  <div className={`relative flex flex-col h-full ${event.tags.includes('Upcoming') 
                    ? 'bg-gradient-to-bl from-cyan-200/30 via-cyan-100/20 to-cyan-50/10' 
                    : ''}`}>
                    {/* Image Container */}
                    <div className="relative h-48">
                      {event.tags.includes('Upcoming') && (
                        <div className="absolute top-2 right-2 z-20">
                          <Badge 
                            className="bg-gradient-to-bl from-cyan-400 via-cyan-300 to-cyan-200 text-white border-none px-3 py-1"
                          >
                            Upcoming
                          </Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 group-hover:opacity-0 transition-opacity z-10" />
                      <Image
                        src={event.thumbnailImage}
                        alt={`${event.title} Poster`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <CardHeader className="relative">
                      <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-[#4267B2] transition-colors">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">
                        {event.date}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <div className="text-gray-600 text-sm line-clamp-4">
                        <ReactMarkdown 
                          components={{
                            strong: ({children}) => <span className="font-bold">{children}</span>
                          }}
                        >
                          {event.description}
                        </ReactMarkdown>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-2 mt-auto">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="bg-[#4267B2]/10 hover:bg-[#4267B2]/20 text-[#4267B2] border-none transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 