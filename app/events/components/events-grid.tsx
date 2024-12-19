'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Event } from "@/constants/events-data"
import { useState, useEffect } from 'react'

export function EventsGrid({ events }: { events: Event[] }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getFirstParagraph = (description: string) => {
    const paragraphs = description.split('\n\n')
    const firstParagraph = paragraphs.find(p => 
      p.trim() && 
      !p.trim().startsWith('#') && 
      !p.trim().startsWith('🎯') && 
      !p.trim().startsWith('📌')
    )
    return firstParagraph?.trim() || description.split('\n')[0]
  }

  if (!isMounted) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div 
            key={index}
            className="h-[450px] bg-gray-100 rounded-xl animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
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
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative h-48">
                    {event.tags.includes('Upcoming') && (
                      <div className="absolute top-2 right-2 z-20">
                        <Badge 
                          className="bg-cyan-400 text-white border-none px-3 py-1"
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
                      priority={index < 4}
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
                      {getFirstParagraph(event.description)}
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
    </motion.div>
  )
} 