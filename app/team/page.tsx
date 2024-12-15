'use client'

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"

export default function TeamPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.07]" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 -left-20 w-[100px] h-[100px] bg-[#7091E6]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-24 w-[400px] h-[400px] bg-[#3D52A0]/25 rounded-full blur-3xl" />
      <div className="absolute top-2/3 left-1/4 w-72 h-72 bg-[#7091E6]/15 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#3D52A0]/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#7091E6]/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <div className="container mx-auto px-[30px] md:px-[50px] py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Our Team
              </h1>
              
              {/* We'll add team members content sections here */}
              
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
