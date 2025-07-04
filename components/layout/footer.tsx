'use client'

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react'

const SOCIALS = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/programmers.club/",
    hoverColor: "hover:bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500",
    label: "Instagram"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/programmersclubmhssce/",
    hoverColor: "hover:bg-[#0077b5]",
    label: "LinkedIn"
  },
]

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Our Team', path: '/team' },
  { name: 'Magazines', path: '/magazines' },
]

const CONTACTS = [
  {
    icon: Mail,
    href: 'mailto:programmersclub@mhssce.ac.in',
    text: 'programmersclub@mhssce.ac.in',
    label: 'Email',
    external: false,
  },
  {
    icon: MapPin,
    href: 'https://www.google.com/maps/dir//M.H.+Saboo+Siddik+College+of+Engineering+8,+Shepherd+Rd+Police+Colony,+Nagpada,+Byculla+Mumbai,+Maharashtra+400008/@18.9681438,72.8308653,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3be7ce40ffcfcacd:0x5d71ff22760f8e77',
    text: 'M.H. Saboo Siddik College of Engineering, Mumbai - 400008',
    label: 'Location',
    external: true,
  },
]

export function Footer() {
  return (
    <footer className="relative bg-[#1e2f4d] min-h-[400px]">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-10 w-32 h-32 bg-[#4267B2] rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-10 w-32 h-32 bg-[#7091E6] rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-[#4267B2] rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-10 sm:py-16">
          {/* Logo and Description */}
          <div className="flex flex-col items-center sm:items-start space-y-6">
            <Link href="/" className="inline-block group" aria-label="Home">
              <Image
                src="/assets/images/logo.png"
                alt="Programmer's Club Logo"
                width={200}
                height={200}
                className="object-contain transform transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
            <p className="text-sm md:text-base text-gray-300/90 leading-relaxed text-center sm:text-left max-w-md">
              Transforming Skills, Inspiring Innovation, and Creating Tomorrow's Trailblazers.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              {SOCIALS.map(({ icon: Icon, href, hoverColor, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`bg-[#2a4270]/50 p-2.5 rounded-full ${hoverColor} group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 hover:ring-2 hover:ring-[#4267B2]/20 hover:rotate-6`}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-200 flex items-center gap-3 justify-center sm:justify-start mb-8">
              <span className="w-8 h-0.5 bg-[#4267B2]/70 hidden sm:block"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className="text-sm md:text-base text-gray-400 transition-all duration-300 flex items-center gap-2 group justify-center sm:justify-start hover:text-white relative overflow-hidden"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4267B2]/50 group-hover:w-2.5 transition-all duration-300"></span>
                    <span className="relative">
                      {name}
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-200 flex items-center gap-3 justify-center sm:justify-start mb-8">
              <span className="w-8 h-0.5 bg-[#4267B2]/70 hidden sm:block"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              {CONTACTS.map(({ icon: Icon, href, text, label, external }) => (
                <li key={label} className={label === 'Location' ? 'flex justify-center sm:justify-start' : ''}>
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className={`text-sm md:text-base text-gray-400 hover:text-gray-200 transition-all duration-300 flex items-center gap-2 group justify-center sm:justify-start ${label === 'Location' ? 'items-start max-w-[250px]' : ''} ${label === 'Email' ? 'hover:translate-x-1' : ''}`}
                  >
                    <Icon className={`w-4 h-4 md:w-5 md:h-5 text-[#4267B2] ${label === 'Location' ? 'mt-1 flex-shrink-0' : ''} group-hover:scale-110 ${label === 'Email' ? 'group-hover:rotate-12' : ''} transition-all duration-300`} />
                    <span className={label === 'Location' ? 'text-center sm:text-left' : ''}>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700/50 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-gray-400">
            <p className="flex items-center gap-2 text-xs sm:text-sm">
              © {new Date().getFullYear()} 
              <span className="text-[#4267B2] font-medium">Programmer's Club</span>
              All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm">
              Developed By:
              <a href="https://devhumayun.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4267B2] font-medium hover:text-[#5b7bc2] transition-colors"
              >
                Humayun Khan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}