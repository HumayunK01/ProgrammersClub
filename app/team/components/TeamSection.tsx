'use client'

import { motion } from 'framer-motion'
import { TeamCard } from './TeamCard'
import { TeamSection as TeamSectionType } from '../types/team'

interface TeamSectionProps {
  section: TeamSectionType
}

export function TeamSection({ section }: TeamSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-gray-700 text-3xl font-bold mb-8 text-center italic">
        {section.title}
      </h2>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto px-4"
      >
        {section.members.map((member) => (
          <motion.div key={member.id} variants={item}>
            <TeamCard member={member} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
} 