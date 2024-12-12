'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { HomeIcon, Calendar, Users, Info, X, Menu } from 'lucide-react'

export function Navbar() {
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
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[50] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/40 backdrop-blur-xl' 
          : 'bg-transparent backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-[30px] md:px-[50px]">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo.png"
              alt="Programmer's Club Logo"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-[#3D52A0] hover:text-[#7091E6] transition-colors duration-200 flex items-center gap-2"
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              About Us
            </Link>
            <Link 
              href="/events" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Events
            </Link>
            <Link 
              href="/team" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Our Team
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <SheetClose asChild>
                  <Link href="/" className="text-lg font-medium hover:text-primary flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <HomeIcon className="w-5 h-5" />
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="text-lg font-medium hover:text-primary flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <Info className="w-5 h-5" />
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/events" className="text-lg font-medium hover:text-primary flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <Calendar className="w-5 h-5" />
                    Events
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/team" className="text-lg font-medium hover:text-primary flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <Users className="w-5 h-5" />
                    Our Team
                  </Link>
                </SheetClose>
              </nav>
              <SheetClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
} 