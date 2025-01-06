'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export function AboutSection() {
  const router = useRouter()

  return (
    <section id="about" className="py-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-[30px] md:px-[50px] overflow-hidden"
      >
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-10 h-10 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-lg flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3D52A0] to-[#7091E6] inline-block text-transparent bg-clip-text">
            About Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 py-2">
          {[
            { 
              title: "Innovation", 
              icon: "/assets/images/rocket.png",
              description: "Fueling creativity and transforming ideas into reality, we embrace bold thinking, explore new possibilities, and pioneer solutions that shape the future of technology."
            },
            { 
              title: "Collaboration", 
              icon: "/assets/images/handshake.png",
              description: "The Programmer's Club unites passionate individuals, encouraging teamwork, knowledge sharing, and collective problem-solving to achieve greater milestones together"
            },
            { 
              title: "Excellence", 
              icon: "/assets/images/trophy.png",
              description: "Driven by a commitment to push boundaries, refine skills, and set new standards, we aim to achieve outstanding results and inspire innovation in every pursuit."
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group perspective-1000 h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-xl transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
              <div className="relative bg-background border border-primary/10 p-6 sm:p-8 rounded-xl shadow-lg transform transition-all duration-300 group-hover:translate-y-1 group-hover:shadow-xl h-full flex flex-col">
                <div className="flex-shrink-0 mb-5">
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={40} 
                    height={40} 
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#4267B2]">
                  {value.title}
                </h3>
                <p className="text-base text-muted-foreground/90 flex-grow leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            The Programmer's Club at Saboo Siddik College of Engineering fosters tech skills through hackathons, workshops, and networking, creating a collaborative community. (Since 2016)
          </p>
          <Button 
            className="
              mt-6 md:mt-8 
              bg-[#4267B2] hover:bg-[#3b5998] 
              text-white 
              shadow-md hover:shadow-lg 
              transition-all duration-300 
              font-medium 
              px-8 py-2 
              rounded-full
              min-w-[200px]
            " 
            size="lg" 
            onClick={() => router.push('/about')}
          >
            Learn More About Us
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
