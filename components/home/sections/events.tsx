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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Events</h2>
        <EventsCarousel events={eventsData} />
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
