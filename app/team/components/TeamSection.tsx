'use client'

import { motion } from 'framer-motion'
import { TeamCard } from './TeamCard'
import { TeamSection as TeamSectionType } from '../types/team'
import Link from 'next/link'

interface TeamSectionProps {
  section: TeamSectionType
  onMemberClick?: (memberId: string) => void
}

export function TeamSection({ section, onMemberClick }: TeamSectionProps) {
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
      <h2 className="text-xl md:text-2xl font-semibold 
        mb-4 md:mb-8 
        px-4 md:px-24 lg:px-24
        relative after:absolute after:bottom-0 
        after:left-4 after:right-[calc(100%-12rem)] md:after:right-[calc(100%-24rem)]
        after:h-[2px] after:bg-gradient-to-r after:from-[#7091E6] after:to-transparent 
        after:md:left-24 after:lg:left-24 
        pb-2
        bg-gradient-to-r from-[#7091E6]/5 to-transparent
        inline-block rounded-lg 
        py-1 md:py-2">
        {section.title}
      </h2>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto px-4"
      >
        {section.members.map((member, index) => (
          <motion.div 
            key={member.id} 
            variants={item}
            className={
              section.members.length === 2 
                ? index === 0 
                  ? 'lg:col-start-2 xl:col-start-2' 
                  : 'lg:col-start-3 xl:col-start-3'
                : '' // For other cases: use default grid positioning
            }
          >
            <Link
              href={`/team/${member.id}`}
              onClick={() => onMemberClick?.(member.id)}
              className="..."
            >
              <TeamCard member={member} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
} 