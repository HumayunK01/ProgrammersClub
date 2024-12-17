'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { committeeMembers } from "../data/faculty"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const FacultySection = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {/* Faculty Title Section */}
      <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-[#40E0D0]/10 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-[#40E0D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-[#4267b2]">Our Faculty</h2>
      </motion.div>

      {/* Faculty Cards Grid */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {committeeMembers.map((member, index) => (
          <FacultyCard key={member.name} member={member} index={index} />
        ))}
      </motion.div>
    </motion.div>
  )
}

// Separate Card Component
interface FacultyCardProps {
  member: {
    name: string;
    role: string;
    department: string;
    qualification: string;
    email: string;
    description: string;
    image: string;
  };
  index: number;
}

const FacultyCard = ({ member, index }: FacultyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-sm relative overflow-hidden group"
    >
      <div className="p-4 sm:p-6 relative">
        {/* Role Badge */}
        <div className="mb-3 relative z-10">
          <span className="inline-block px-3 sm:px-4 py-1 bg-[#4267b2]/10 text-[#4267b2] rounded-full text-xs sm:text-sm font-medium">
            {member.role}
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
            <Image
              src={member.image}
              alt="Faculty member"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 relative z-10 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 bg-gradient-to-r from-[#4267b2] to-[#40E0D0] bg-clip-text text-transparent">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
              {member.department}
            </p>

            {/* Info Items */}
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              <InfoItem icon="qualification" text={member.qualification} />
              <InfoItem icon="email" text={member.email} isEmail />
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-4 -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 bg-blue-50/50 h-8 border-t border-blue-100/50" />
      </div>
    </motion.div>
  );
};

// Info Item Component
interface InfoItemProps {
  icon: 'qualification' | 'email';
  text: string;
  isEmail?: boolean;
}

const InfoItem = ({ icon, text, isEmail = false }: InfoItemProps) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 group/item hover:translate-x-1 transition-transform duration-300 justify-center sm:justify-start">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4267b2]/10 flex items-center justify-center flex-shrink-0">
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4267b2]" viewBox="0 0 24 24" fill="none">
          {icon === "qualification" ? (
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </div>
      {isEmail ? (
        <a href={`mailto:${text}`} className="text-gray-600 text-sm hover:text-[#4267b2] transition-colors break-all">
          {text}
        </a>
      ) : (
        <span className="text-gray-600 text-sm">{text}</span>
      )}
    </div>
  );
}; 