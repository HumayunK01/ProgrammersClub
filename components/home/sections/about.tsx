'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-[30px] md:px-[50px] overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
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
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group perspective-1000 h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-lg transform -skew-y-3 md:group-hover:skew-y-0 transition-transform duration-300" />
              <div className="relative bg-background border border-primary/20 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg transform transition-transform duration-300 md:group-hover:translate-y-2 h-full flex flex-col">
                <div className="flex-shrink-0">
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={48} 
                    height={48} 
                    className="mb-2 sm:mb-4"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground flex-grow">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The Programmer's Club at Saboo Siddik College of Engineering fosters tech skills through hackathons, workshops, and networking, creating a collaborative community. (Since 2016)
          </p>
          <Button 
            className="
              mt-6 md:mt-8 
              bg-[#4267B2] hover:bg-[#3b5998] 
              text-white 
              shadow-md hover:shadow-lg 
              transform hover:-translate-y-0.5 
              transition-all duration-300 
              font-medium 
              px-8 py-2 
              rounded-full
              min-w-[200px]
            " 
            size="lg" 
            asChild
          >
            <Link href="/about" className="flex items-center justify-center gap-2">
              Learn More About Us
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
