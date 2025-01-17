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
  const [searchQuery, setSearchQuery] = useState("")

  const handleFilterChange = (value: string) => {
    setFilter(value)
    trackEventFilter(value)
  }

  // Updated filter logic to handle both type filtering and search
  const filteredEvents = eventsData
    .filter(event => {
      const matchesFilter = filter === "All" || event.type === filter || event.type.includes(filter)
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
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
          <div className="container mx-auto px-[30px] md:px-[50px] py-16 md:py-16">
            {/* Search and Filter Container */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-between gap-3 mb-8 items-stretch sm:items-center w-full bg-white/70 backdrop-blur-md p-2.5 rounded-lg shadow-sm border border-slate-100/80"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search Input */}
              <div className="w-full sm:w-2/3 relative">
                <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events..."
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-3.5 rounded-lg
                            border border-slate-100
                            bg-white/90
                            text-slate-600 text-[14px] sm:text-[15px] tracking-[-0.1px]
                            placeholder:text-slate-400 
                            placeholder:font-normal
                            placeholder:tracking-[-0.1px]
                            placeholder:text-[14px] sm:placeholder:text-[15px]
                            focus:outline-none focus:ring-0
                            focus:border-slate-200
                            focus:bg-white
                            transition-all duration-200"
                />
              </div>

              {/* Filter Section */}
              <div className="flex items-stretch w-full sm:w-1/3">
                <div className="relative w-full">
                  <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <select
                    value={filter}
                    onChange={(e) => handleFilterChange(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-8 sm:pr-10 py-3 sm:py-3.5 rounded-lg
                              border border-slate-100
                              bg-white/90
                              text-slate-600 text-[14px] sm:text-[15px] tracking-[-0.1px] font-normal
                              appearance-none cursor-pointer
                              bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4%206.5l4%204%204-4%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] 
                              bg-[length:16px] bg-[right_12px_center] sm:bg-[right_16px_center] bg-no-repeat
                              focus:outline-none focus:ring-0
                              focus:border-slate-200
                              focus:bg-white
                              transition-all duration-200"
                    aria-label="Filter events by type"
                  >
                    <option value="All">All Events</option>
                    <option value="Hackathon">Hackathons</option>
                    <option value="Workshop">Workshops</option>
                  </select>
                </div>
              </div>
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