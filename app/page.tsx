'use client'

import { useState, useEffect } from 'react'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/sections/hero"
import { AboutSection } from "@/components/home/sections/about"
import { EventsSection } from "@/components/home/sections/events"
import { TeamSection } from "@/components/home/sections/team"
import { Background } from "@/components/layout/background"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Background>
          <div>
            <HeroSection />
            <AboutSection />
            <EventsSection />
            <TeamSection />
          </div>
        </Background>
      </main>
      <Footer />
    </>
  )
}

