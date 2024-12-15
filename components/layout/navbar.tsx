'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { HomeIcon, Calendar, Users, Info, X, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

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

  const isActive = (path: string) => pathname === path

  const menuItems = [
    { href: "/", icon: <HomeIcon className="w-6 h-6" />, label: "Home" },
    { href: "/about", icon: <Info className="w-6 h-6" />, label: "About Us" },
    { href: "/events", icon: <Calendar className="w-6 h-6" />, label: "Events" },
    { href: "/team", icon: <Users className="w-6 h-6" />, label: "Our Team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[50] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/40 backdrop-blur-xl' 
          : 'bg-transparent'
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
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-[#4267B2] font-medium' : 'text-gray-600 hover:text-[#4267B2]'
              }`}
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            <Link 
              href="/about" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-[#4267B2] font-medium' : 'text-gray-600 hover:text-[#4267B2]'
              }`}
            >
              <Info className="w-4 h-4" />
              About Us
            </Link>
            <Link 
              href="/events" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/events') ? 'text-[#4267B2] font-medium' : 'text-gray-600 hover:text-[#4267B2]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Events
            </Link>
            <Link 
              href="/team" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/team') ? 'text-[#4267B2] font-medium' : 'text-gray-600 hover:text-[#4267B2]'
              }`}
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
            <SheetContent 
              side="right" 
              className="w-full border-0 bg-gradient-to-br from-white via-blue-50/90 to-blue-100/80 backdrop-blur-lg [&>div>[data-radix-collection-item]]:hidden [&>[data-radix-dialog-close]]:hidden [&>[data-radix-collection-item]]:hidden [&>button[type=button]]:first:hidden [&>button]:first:hidden [&>[data-radix-dialog-close]]:!hidden [&>button[type=button]]:hidden [&>button[type=button]]:first:hidden"
            >
              <SheetClose className="!block absolute right-7 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </SheetClose>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-full space-y-8"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <SheetClose asChild>
                      <Link 
                        href={item.href}
                        className={`relative text-xl font-medium flex items-center gap-3 py-3 px-6 rounded-lg transition-all duration-300 group ${
                          isActive(item.href) ? 'text-[#4267B2]' : 'text-gray-600'
                        }`}
                      >
                        {item.icon}
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#4267B2] group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </SheetClose>
                  </motion.div>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
} 