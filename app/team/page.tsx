'use client'

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Background } from "@/components/layout/background"
import { motion } from "framer-motion"

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <Background>
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
        </Background>
      </main>
      <Footer />
    </>
  )
}
