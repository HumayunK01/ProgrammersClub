'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EventsCarousel } from "@/components/home/carousel/events-carousel"
import { eventsData } from "@/constants/events-data"

export function EventsSection() {
  return (
    <section id="events" className="py-10 md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-[30px] md:px-[50px] overflow-hidden"
      >
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-10 h-10 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-lg flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3D52A0] to-[#7091E6] inline-block text-transparent bg-clip-text">
            Recent Events
          </h2>
        </div>
        <EventsCarousel events={eventsData.slice(0, 5)} />
        <div className="mt-6 md:mt-8 text-center">
          <Button 
            size="lg" 
            className="
              bg-[#4267B2] hover:bg-[#3b5998]
              text-white
              shadow-md hover:shadow-lg 
              transition-all duration-300 
              font-medium 
              px-8 py-2 
              rounded-full
              min-w-[200px]
            "
            asChild
          >
            <Link href="/events" className="flex items-center justify-center gap-2">
              View All Events
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
