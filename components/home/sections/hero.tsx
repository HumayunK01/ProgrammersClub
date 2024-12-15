'use client'

import { motion } from "framer-motion"
import { ClientOnly } from "@/components/ui/client-only"
import { Typewriter } from "@/components/ui/typewriter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { MainCarousel } from "../carousel/main-carousel"
import { fadeInUp, staggerChildren } from "@/constants/animations"

export function HeroSection() {
  return (
    <section id="hero" className="container mx-auto px-[30px] md:px-[50px] overflow-hidden py-5 md:py-9 lg:py-9 mt-4 pt-16 md:pt-24 lg:pt-24">
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        <motion.div
          variants={fadeInUp}
          className="space-y-6 md:space-y-8 text-center"
        >
          <div className="space-y-4 md:space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-md">
              <span className="block lg:py-4 md:py-4 bg-gradient-to-r from-[#40C9CE] via-[#40C9CE] to-[#4267B2] text-transparent bg-clip-text">
                Programmers' Club
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl">
              Transforming Skills, Inspiring Innovation, and Creating Tomorrow's Trailblazers!
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Button 
              size="lg" 
              className="
                text-sm md:text-base 
                bg-[#4267B2] hover:bg-[#3b5998] 
                text-white 
                transition-all duration-300 
                shadow-md hover:shadow-lg 
                transform hover:-translate-y-0.5
                rounded-full
                min-w-[200px]
              " 
              asChild
            >
              <Link href="/team" className="flex items-center justify-center gap-2">
                Meet our team 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MainCarousel />
        </motion.div>
      </motion.div>
      <div className="flex justify-center mt-8 md:mt-12">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce text-muted-foreground" />
      </div>
    </section>
  )
} 