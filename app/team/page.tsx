'use client'

import { motion } from "framer-motion"
import { useRouter, useSearchParams } from 'next/navigation'
import { TeamSection } from "./components/TeamSection"
import { teamData } from "./data"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import type { AcademicYear } from "./types/team"

const academicYears: AcademicYear[] = ['2023-24']

export default function TeamPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedYear, setSelectedYear] = useState<AcademicYear>(
    (searchParams.get('year') as AcademicYear) || '2023-24'
  )
  const [isOpen, setIsOpen] = useState(false)

  const currentTeamData = teamData[selectedYear]

  const handleYearChange = (year: AcademicYear) => {
    setSelectedYear(year)
    setIsOpen(false)
    router.push(`/team?year=${year}`, { scroll: false })
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.year-selector')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.07]" />
      
      {/* Content */}
      <div className="relative z-10 px-4 py-16 w-full">
        {/* Year Selector Label and Dropdown */}
        <div className="flex justify-end mb-2 px-4 md:px-24 lg:px-24 items-center">
          <span className="text-gray-600 mr-2">Our Team</span>
          <div className="year-selector relative z-50 w-[140px] sm:w-[160px]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2 bg-white/70 
                backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm 
                hover:bg-white/80 transition-colors group"
            >
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                {selectedYear}
              </span>
              <ChevronDown 
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-200 
                  group-hover:text-gray-700 ${isOpen ? 'transform rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full right-0 mt-1 w-full bg-white rounded-lg 
                  border border-gray-200 shadow-lg overflow-hidden"
              >
                {academicYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`w-full px-3 sm:px-4 py-2 text-left text-sm sm:text-base
                      hover:bg-gray-50 transition-colors
                      ${selectedYear === year 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'text-gray-700'}`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {currentTeamData.map((section) => (
            <TeamSection key={section.title} section={section} />
          ))}
        </motion.div>
      </div>
    </main>
  )
}
