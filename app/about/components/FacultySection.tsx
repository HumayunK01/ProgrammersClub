'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { committeeMembers } from "../data/faculty"

export const FacultySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-10"
    >
      {/* Decorative Faculty Header */}
      <div className="relative flex flex-col items-center mb-10">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#4267b2]/5 to-[#40E0D0]/5 rounded-full blur-xl" />
        
        {/* Title with Icon */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#4267b2] to-[#40E0D0] rounded-xl flex items-center justify-center transform -rotate-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4267b2] to-[#40E0D0] bg-clip-text text-transparent">
            Our Faculty
          </h2>
        </div>

        {/* Decorative Line */}
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#4267b2]/20 to-transparent" />
        
        {/* Decorative Dots */}
        <div className="flex gap-1 mt-2">
          <div className="w-1 h-1 rounded-full bg-[#4267b2]/40" />
          <div className="w-1 h-1 rounded-full bg-[#4267b2]/40" />
          <div className="w-1 h-1 rounded-full bg-[#4267b2]/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {committeeMembers.map((member, index) => (
          <FacultyCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

const FacultyCard = ({ member, index }: { member: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="bg-white/95 rounded-xl shadow-sm hover:bg-gradient-to-br hover:from-[#4267b2]/5 hover:to-white/90 transition-all duration-300 border border-gray-100 hover:border-[#4267b2]/20 group relative overflow-hidden"
    >
      {/* Decorative Corner Gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4267b2]/10 to-transparent rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#4267b2]/10 to-transparent rounded-tr-[100px]" />
      
      <div className="flex flex-col sm:flex-row items-center p-6 sm:p-8 relative">
        {/* Role Badge */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-3 py-1 bg-[#4267b2]/10 rounded-full z-10">
          <p className="text-xs font-medium text-[#4267b2]">{member.role}</p>
        </div>

        {/* Image Section */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mb-4 sm:mb-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4267b2]/20 to-[#40E0D0]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="rounded-xl object-cover relative ring-2 ring-white/50 group-hover:ring-[#4267b2]/30 transition-all duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="sm:ml-6 text-center sm:text-left flex-1">
          <div className="space-y-1 mb-4">
            <h3 className="font-bold text-xl sm:text-2xl text-[#4267b2]">
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm">{member.department}</p>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
              <div className="w-8 h-8 rounded-full bg-[#4267b2]/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4267b2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <p className="text-sm">{member.qualification}</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
              <div className="w-8 h-8 rounded-full bg-[#4267b2]/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4267b2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <a href={`mailto:${member.email}`} className="text-sm hover:text-[#4267b2] transition-colors">
                {member.email}
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-sm border-t border-gray-100 pt-4">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
} 