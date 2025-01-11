'use client'

import { 
  Mail, 
  GraduationCap, 
  BookOpen, 
  Quote, 
  Hash, 
  Star, 
  LinkedinIcon,
  InstagramIcon
} from 'lucide-react'
import { teamData } from "../data"
import { motion } from 'framer-motion'
import Image from 'next/image'

// Add type for params
type Props = {
  params: {
    id: string
  }
}

// Change from useParams() to receiving params as props
export default function TeamMemberPage({ params }: Props) {
  const { id } = params
  
  // Find member and their section
  const member = Object.values(teamData)
    .flatMap(yearSections => yearSections.flatMap(section => 
      section.members.map(member => ({
        ...member,
        academicYear: section.academicYear
      }))
    ))
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
      icon: LinkedinIcon,
      url: member.linkedin,
      label: 'LinkedIn Profile',
    },
    {
      id: 'instagram',
      icon: InstagramIcon,
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
          {/* Card - Reduced padding */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden border-2 border/80">
            <div className="flex flex-col md:flex-row">
              {/* Left Section - Reduced padding */}
              <div className="w-full md:w-1/3 bg-transparent backdrop-blur-md p-4 sm:p-6 flex flex-col justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border/80">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden
                    shadow-[0_0_20px_rgba(0,0,0,0.1)]
                    ring-4 ring-white/50 ring-offset-2 ring-offset-white/10"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    quality={100}
                    priority
                    className="object-cover w-full h-full md:hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <h2 className="text-gray-800 text-lg sm:text-xl font-medium">
                    {member.name}
                  </h2>
                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    {isHead ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        bg-gradient-to-r from-blue-500 to-blue-600 
                        text-white shadow-sm 
                        ring-1 ring-blue-500/20"
                      >
                        Head
                      </span>
                    ) : isCoordinator ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        bg-gradient-to-r from-blue-400 to-blue-500 
                        text-white shadow-sm 
                        ring-1 ring-blue-400/20"
                      >
                        Coordinator
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        bg-gradient-to-r from-blue-50 to-blue-100 
                        text-blue-600 shadow-sm 
                        ring-1 ring-blue-200/60"
                      >
                        Member
                      </span>
                    )}
                  </div>
                  
                  {/* Social Links - Reduced spacing */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-2 sm:gap-3 mt-4"
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
                          className="p-2 sm:p-2.5 rounded-lg border-2 border/80 hover:border-gray-400 transition-colors duration-300"
                        >
                          <Icon 
                            className="w-5 h-5 text-gray-600 stroke-[1.5px]" 
                            aria-hidden="true"
                          />
                        </motion.a>
                      ) : (
                        <motion.div
                          key={id}
                          aria-label={label}
                          className="p-2 sm:p-2.5 rounded-lg border-2 border/80 opacity-40 cursor-not-allowed"
                        >
                          <Icon 
                            className="w-5 h-5 text-gray-600 stroke-[1.5px]" 
                            aria-hidden="true"
                          />
                        </motion.div>
                      )
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Right Section - Reduced padding and spacing */}
              <div className="w-full md:w-2/3 p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Team Section */}
                <motion.div 
                  className="group bg-transparent backdrop-blur-md rounded-xl p-3 sm:p-4 border-2 border/80"
                >
                  <p className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    Team
                  </p>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">{member.section}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Info cards - Reduced padding */}
                  <motion.div 
                    className="group bg-transparent backdrop-blur-md rounded-xl p-3 sm:p-4 border-2 border/80"
                  >
                    <p className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <Hash className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      Roll Number
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{member.rollNumber}</p>
                  </motion.div>

                  <motion.div 
                    className="group bg-transparent backdrop-blur-md rounded-xl p-3 sm:p-4 border-2 border/80"
                  >
                    <p className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      College Email
                    </p>
                    <p className="text-gray-700 font-medium truncate text-sm sm:text-base">{member.email}</p>
                  </motion.div>

                  <motion.div 
                    className="group bg-transparent backdrop-blur-md rounded-xl p-3 sm:p-4 border-2 border/80"
                  >
                    <p className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      Year
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{member.year}</p>
                  </motion.div>

                  <motion.div 
                    className="group bg-transparent backdrop-blur-md rounded-xl p-3 sm:p-4 border-2 border/80"
                  >
                    <p className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-1">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      Branch
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{member.branch}</p>
                  </motion.div>
                </div>

                {/* Quote - Reduced padding */}
                <motion.div 
                  className="group bg-transparent backdrop-blur-md rounded-xl p-3 sm:p-4 border-2 border/80"
                >
                  <p className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 mb-3">
                    <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    Quote
                  </p>
                  <blockquote className="relative">
                    <span className="absolute top-0 left-0 text-4xl text-blue-600/20 -translate-x-2 -translate-y-2">
                      "
                    </span>
                    <p className="text-gray-700 font-medium italic text-sm sm:text-base pl-4">
                      {member.quote}
                    </p>
                    <span className="absolute bottom-0 right-0 text-4xl text-blue-600/20 translate-x-2">
                      "
                    </span>
                  </blockquote>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-transparent backdrop-blur-md p-3 sm:p-4 border-t-2 border/80">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <span className="text-gray-600 text-xs sm:text-sm font-medium text-center sm:text-left">
                  Want to update or add details?
                </span>
                <a 
                  href="https://forms.gle/yfLUFsadrfe9qkW7A"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center 
                    px-4 py-2 text-xs sm:text-sm font-medium 
                    text-blue-600 bg-transparent backdrop-blur-md 
                    border-2 border-blue-600/80 hover:border-blue-600 
                    rounded-lg transition-colors duration-300 
                    hover:bg-blue-600 hover:text-white 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Edit Details
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 