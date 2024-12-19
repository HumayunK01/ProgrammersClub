'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { teamData } from "../data/team"
import { Mail, GraduationCap, BookOpen, Quote, Hash, Crown, Star, Linkedin, Instagram, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TeamMemberPage() {
  const { id } = useParams()
  
  const member = teamData.flatMap(section => section.members)
    .find(member => member.id === id)

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 text-lg">Member not found</div>
      </div>
    )
  }

  const isHead = member.position.toLowerCase() === 'head'
  const isCoordinator = member.position.toLowerCase() === 'coordinator'

  const socialLinks = [
    {
      id: 'linkedin',
      icon: Linkedin,
      url: member.linkedin,
      label: 'LinkedIn Profile',
    },
    {
      id: 'instagram',
      icon: Instagram,
      url: member.instagram,
      label: 'Instagram Profile',
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20 pt-14">
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 top-20 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.07]" />
      
      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-4xl"
        >
          {/* Card */}
          <div className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden border-2 border/80">
            <div className="flex flex-col md:flex-row">
              {/* Left Section - Image and Social Links */}
              <div className="w-full md:w-1/3 bg-transparent backdrop-blur-md p-4 sm:p-6 flex flex-col justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg border-2 border-white overflow-hidden shadow-lg"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full md:hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                <div className="mt-4 sm:mt-6 text-center">
                  <h2 className="text-gray-800 text-xl sm:text-2xl font-medium">
                    {member.name}
                  </h2>
                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    {isHead ? (
                      <Crown className="w-4 h-4 text-yellow-400" />
                    ) : isCoordinator ? (
                      <Trophy className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <Star className="w-4 h-4 text-gray" />
                    )}
                    <p className="text-gray italic text-sm sm:text-base">
                      {member.position}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6"
                  >
                    {socialLinks.map(({ id, icon: Icon, url, label }) => (
                      url ? (
                        <motion.a
                          key={id}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 sm:p-2.5 rounded-lg border-2 border hover:border-gray-400"
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-colors duration-300" />
                        </motion.a>
                      ) : (
                        <motion.div
                          key={id}
                          aria-label={label}
                          className="p-2 sm:p-2.5 rounded-lg border-2 border opacity-40 cursor-not-allowed"
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-colors duration-300" />
                        </motion.div>
                      )
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Right Section - Details */}
              <div className="w-full md:w-2/3 p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Team Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group bg-transparent backdrop-blur-md rounded-lg p-4 border-2 border/80 hover:border/90 transition-colors duration-300"
                >
                  <p className="text-gray-700 text-sm font-medium flex items-center gap-1.5 mb-1">
                    <Star className="w-4 h-4" />
                    Team
                  </p>
                  <p className="text-gray-700 font-medium">{member.section}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Roll Number */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="group bg-transparent backdrop-blur-md rounded-lg p-3 sm:p-4 border-2 border/80 hover:border/90 transition-colors duration-300"
                  >
                    <p className="text-gray-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <Hash className="w-3 h-3 sm:w-4 sm:h-4" />
                      Roll Number
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{member.rollNumber}</p>
                  </motion.div>

                  {/* Email */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="group bg-transparent backdrop-blur-md rounded-lg p-3 sm:p-4 border-2 border/80 hover:border/90 transition-colors duration-300"
                  >
                    <p className="text-gray-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                      College Email
                    </p>
                    <p className="text-gray-700 font-medium truncate text-sm sm:text-base">{member.email}</p>
                  </motion.div>

                  {/* Year */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="group bg-transparent backdrop-blur-md rounded-lg p-3 sm:p-4 border-2 border/80 hover:border/90 transition-colors duration-300"
                  >
                    <p className="text-gray-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                      Year
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{member.year}</p>
                  </motion.div>

                  {/* Branch */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="group bg-transparent backdrop-blur-md rounded-lg p-3 sm:p-4 border-2 border/80 hover:border/90 transition-colors duration-300"
                  >
                    <p className="text-gray-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                      Branch
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{member.branch}</p>
                  </motion.div>
                </div>

                {/* Quote */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="group bg-transparent backdrop-blur-md rounded-lg p-3 sm:p-4 border-2 border/80 hover:border/90 transition-colors duration-300"
                >
                  <p className="text-gray-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-2">
                    <Quote className="w-3 h-3 sm:w-4 sm:h-4" />
                    Quote
                  </p>
                  <p className="text-gray-700 font-medium italic text-sm sm:text-base">
                    "{member.quote}"
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-transparent backdrop-blur-md p-3 sm:p-4 border-t-2 border/80">
              <p className="text-gray-600 text-xs sm:text-sm text-center font-medium">
                This card is non-transferable and property of Programmers' Club
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 