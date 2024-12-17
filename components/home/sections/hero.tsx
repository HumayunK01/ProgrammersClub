'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { MainCarousel } from "../carousel/main-carousel"

export function HeroSection() {
  return (
    <section id="hero" className="relative container mx-auto px-[30px] md:px-[50px] overflow-hidden py-5 md:py-9 lg:py-9 mt-4 pt-16 md:pt-24 lg:pt-24">
      {/* Animated background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#40C9CE]/5 rounded-full mix-blend-multiply filter blur-xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4267B2]/5 rounded-full mix-blend-multiply filter blur-xl animate-float-slow-reverse" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left relative"
        >
          <div className="space-y-4 md:space-y-5">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold relative z-10">
                <span className="block lg:py-4 md:py-4 bg-gradient-to-r from-[#40C9CE] via-[#40C9CE] to-[#4267B2] text-transparent bg-clip-text">
                  Programmers' Club
                </span>
              </h1>
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-[#40C9CE]/10 to-[#4267B2]/10 rounded-lg blur-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Transforming Skills, Inspiring Innovation, and Creating Tomorrow's Trailblazers!
            </p>
          </div>

          <motion.div 
            className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="
                text-sm md:text-base 
                bg-[#4267B2] hover:bg-[#3b5998] 
                text-white 
                transition-all duration-300 
                shadow-lg hover:shadow-xl 
                rounded-full
                min-w-[200px]
                group
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
          </motion.div>
        </motion.div>
        
        <MainCarousel />
      </div>

      <motion.div 
        className="flex justify-center mt-8 md:mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  )
} 