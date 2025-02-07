'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { HomeIcon, Calendar, Users, Info, X, Menu, BookOpen } from 'lucide-react' //BookOpen
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import * as React from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { 
      href: "/", 
      icon: <HomeIcon size={15} strokeWidth={2} />, 
      label: "Home" 
    },
    { 
      href: "/about", 
      icon: <Info size={15} strokeWidth={2} />, 
      label: "About Us" 
    },
    { 
      href: "/events", 
      icon: <Calendar size={15} strokeWidth={2} />, 
      label: "Events" 
    },
    { 
      href: "/team", 
      icon: <Users size={15} strokeWidth={2} />, 
      label: "Our Team" 
    },
    { 
      href: "/magazines", 
      icon: <BookOpen size={15} strokeWidth={2} />, 
      label: "Magazines" 
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[50] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-lg shadow-sm border-b border-white/40 supports-[backdrop-filter]:bg-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-[30px] md:px-[50px]">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
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
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`
                  group
                  flex items-center gap-2
                  text-[15px] font-medium 
                  transition-colors duration-300
                  relative
                  ${isActive(item.href) 
                    ? 'text-[#4267B2]' 
                    : 'text-black hover:text-[#4267B2]'
                  }
                `}
              >
                <div className={`
                  transition-colors duration-300
                  ${isActive(item.href) 
                    ? 'text-[#4267B2]' 
                    : 'text-black group-hover:text-[#4267B2]'
                  }
                `}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden h-9 w-9 hover:bg-blue-50"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full border-0 bg-gradient-to-br from-white via-blue-50/90 to-blue-100/80 backdrop-blur-lg [&>div>[data-radix-collection-item]]:hidden [&>[data-radix-dialog-close]]:hidden [&>[data-radix-collection-item]]:hidden [&>button[type=button]]:hidden [&>button]:first:hidden"
            >
              <SheetClose className="!block absolute right-7 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </SheetClose>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center h-full space-y-6"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.3
                    }}
                  >
                    <SheetClose asChild>
                      <Link 
                        href={item.href}
                        className={`
                          group
                          flex items-center gap-3 
                          py-2 px-4
                          rounded-lg 
                          text-lg font-medium 
                          transition-all duration-300
                          relative
                          ${isActive(item.href) 
                            ? 'text-[#4267B2] bg-blue-50/50' 
                            : 'text-black hover:text-[#4267B2] hover:bg-blue-50/30'
                          }
                        `}
                      >
                        {isActive(item.href) && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 w-1 h-1 rounded-full bg-[#4267B2]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <div className={`
                          transition-colors duration-300
                          ${isActive(item.href) 
                            ? 'text-[#4267B2]' 
                            : 'text-black group-hover:text-[#4267B2]'
                          }
                        `}>
                          {React.cloneElement(item.icon as React.ReactElement, {
                            size: 18,
                            strokeWidth: 2
                          })}
                        </div>
                        {item.label}
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