'use client'

import { motion } from "framer-motion"
import { FacultySection } from "./components/FacultySection"
import { MissionSection } from "./components/MissionSection"
import { ActivitiesSection } from "./components/ActivitiesSection"
import { ValuesSection } from "./components/ValuesSection"
import { HeroSection } from "./components/HeroSection"

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-6">
        <motion.div className="w-full space-y-16">
          <HeroSection />
          <FacultySection />
          <div className="grid md:grid-cols-2 gap-6">
            <MissionSection />
            <ActivitiesSection />
          </div>
          <ValuesSection />
        </motion.div>
      </div>
    </div>
  )
}