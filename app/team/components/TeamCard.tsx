'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TeamMember } from '@/app/team/types/team'
import { Crown, Trophy, Star } from 'lucide-react'

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  const getPositionIcon = () => {
    const position = member.position.toLowerCase()
    if (position.includes('head')) {
      return <Crown className="text-amber-400 w-3 h-3 md:w-4 md:h-4" />
    }
    if (position.includes('coordinator')) {
      return <Trophy className="text-amber-400 w-3 h-3 md:w-4 md:h-4" />
    }
    return <Star className="text-gray-400 w-3 h-3 md:w-4 md:h-4" />
  }

  return (
    <Link href={`/team/${member.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden duration-300 group"
      >
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 md:group-hover:scale-105"
          />
        </div>
        <div className="text-center py-2 md:py-3 bg-white/70 backdrop-blur-sm border-t border-white/20">
          <h3 className="text-black text-sm md:text-lg mb-1 md:mb-2 px-2 md:px-4 overflow-hidden text-ellipsis whitespace-nowrap font-medium">
            {member.name}
          </h3>
          <div className="flex items-center justify-center gap-1 md:gap-1.5">
            {getPositionIcon()}
            <p className="text-gray-500 italic text-xs md:text-base">
              {member.position}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
} 