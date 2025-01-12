"use client"

import { eventsData } from "@/constants/events-data"
import { EventsGrid } from "./components/events-grid"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { trackPageView, trackEventFilter } from '@/utils/analytics'

export default function EventsPage() {
  useEffect(() => {
    trackPageView('events_list')
  }, [])

  const [filter, setFilter] = useState("All")

  const handleFilterChange = (value: string) => {
    setFilter(value)
    trackEventFilter(value)
  }

  // Updated filter logic to handle both Hackathon and Workshop types
  const filteredEvents = filter === "All" 
    ? eventsData 
    : eventsData.filter(event => {
        // Check if event type matches filter exactly or contains the filter word
        return event.type === filter || event.type.includes(filter)
      })

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.07]" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 -left-20 w-[100px] h-[100px] bg-[#7091E6]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-24 w-[400px] h-[400px] bg-[#3D52A0]/25 rounded-full blur-3xl" />
      <div className="absolute top-2/3 left-1/4 w-72 h-72 bg-[#7091E6]/15 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#3D52A0]/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#7091E6]/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <main>
          <div className="container mx-auto px-[30px] md:px-[50px] py-16 md:py-24">
            {/* Filter Dropdown Container with Tip */}
            <motion.div 
              className="flex justify-end mb-8 items-center gap-3 group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-sm text-gray-400 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Filter by type
              </motion.span>
              <select
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full sm:w-48 px-4 py-2.5 rounded-lg 
                          border border-gray-200 
                          bg-white/80 backdrop-blur-sm 
                          text-gray-600 text-sm font-medium
                          shadow-sm
                          appearance-none cursor-pointer
                          bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M7%207l3-3%203%203m0%206l-3%203-3-3%22%2F%3E%3C%2Fsvg%3E')] 
                          bg-[length:20px] bg-[right_12px_center] bg-no-repeat
                          hover:border-[#7091E6] hover:bg-white
                          focus:outline-none focus:ring-2 
                          focus:ring-[#7091E6]/30 focus:border-[#7091E6]
                          transition-all duration-200"
                aria-label="Filter events by type"
              >
                <option value="All">All Events</option>
                <option value="Hackathon">Hackathons</option>
                <option value="Workshop">Workshops</option>
              </select>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <EventsGrid events={filteredEvents} />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}