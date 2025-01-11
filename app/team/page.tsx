'use client'

import { motion } from "framer-motion"
import { TeamSection } from "./components/TeamSection"
import { teamData } from "./data"

export default function TeamPage() {
  // Get just the current year's data
  const currentTeamData = teamData['2023-24']

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.07]" />
      
      {/* Content */}
      <div className="relative z-10 px-4 py-16 w-full">
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
