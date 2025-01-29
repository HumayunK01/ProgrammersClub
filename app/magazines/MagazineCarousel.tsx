'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'

export default function MagazineCarousel() {
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isLoading, setIsLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const magazines = useMemo(() => [
    {
      title: "Tech Pulse (2022-23)",
      image: "/assets/magazines/techpulse22-23.png",
      description: "Tech Pulse 2022-23 - Annual Technical Magazine by Programmers's Club",
      pdf: "/assets/magazines/techpulse22-23.pdf"
    },
    {
      title: "Tech Pulse (2020-21)",
      image: "/assets/magazines/techpulse20-21.png",
      description: "Tech Pulse 2020-21 - Annual Technical Magazine by Programmers's Club",
      pdf: "/assets/magazines/techpulse20-21.pdf"
    },
    {
      title: "Tech Pulse (2019-20)",
      image: "/assets/magazines/techpulse19-20.png",
      description: "Tech Pulse 2019-20 - Annual Technical Magazine by Programmers's Club",
      pdf: "/assets/magazines/techpulse19-20.pdf"
    },
    {
      title: "Tech Pulse (2021-22)",
      image: "/assets/magazines/techpulse21-22.png",
      description: "Tech Pulse 2021-22 - Annual Technical Magazine by Programmers's Club",
      pdf: "/assets/magazines/techpulse21-22.pdf"
    }
  ], [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === magazines.length - 1 ? 0 : prevIndex + 1
    )
  }, [magazines.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? magazines.length - 1 : prevIndex - 1
    )
  }, [magazines.length])

  useEffect(() => {
    setIsMounted(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide])

  const handleMagazineClick = (pdf: string) => {
    window.open(pdf, '_blank', 'noopener,noreferrer');
  }

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Navigation Arrows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full max-w-[1800px] mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute left-4 sm:left-8 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              rounded-full 
              flex items-center justify-center 
              bg-white/80 
              backdrop-blur-sm 
              shadow-lg
              border border-gray-200
              text-gray-800
              transition-all 
              duration-300
              hover:bg-white
              hover:scale-110
              hover:shadow-xl
              active:scale-90
              group
              pointer-events-auto
            "
            aria-label="Previous magazine"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 
                transition-all duration-300 
                group-hover:-translate-x-0.5 
                group-hover:text-blue-600
              " 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 sm:right-8 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              rounded-full 
              flex items-center justify-center 
              bg-white/80 
              backdrop-blur-sm 
              shadow-lg
              border border-gray-200
              text-gray-800
              transition-all 
              duration-300
              hover:bg-white
              hover:scale-110
              hover:shadow-xl
              active:scale-90
              group
              pointer-events-auto
            "
            aria-label="Next magazine"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 
                transition-all duration-300 
                group-hover:translate-x-0.5
                group-hover:text-blue-600
              " 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Magazine Display */}
      <div className="flex items-center justify-center min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px]">
        {magazines.map((magazine, index) => {
          const position = ((index - currentIndex + magazines.length) % magazines.length);
          const isVisible = position <= 2;
          const translateX = `${(position - 1) * (windowWidth >= 1024 ? 60 : 15)}%`;
          
          return (
            <div 
              key={index}
              className={`
                absolute
                transition-all
                duration-1000
                will-change-transform
                ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
              `}
              style={{
                transform: `translateX(${translateX}) scale(${position === 1 ? 1 : 0.85})`,
                zIndex: position === 1 ? 10 : 5,
                filter: position === 1 ? 'none' : 'brightness(0.7)',
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div 
                className={`
                  w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px]
                  aspect-[2/3] md:aspect-[3/4]
                  bg-white 
                  rounded-md md:rounded-lg
                  shadow-xl
                  overflow-hidden
                  relative
                  group
                  cursor-pointer 
                  transition-all
                  duration-500
                  ease-out
                  md:hover:shadow-2xl 
                  md:hover:scale-[1.03]
                  md:hover:-translate-y-1
                  md:active:scale-[0.97]
                  md:active:brightness-95
                `}
                onClick={() => handleMagazineClick(magazine.pdf)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${magazine.title} PDF`}
              >
                <div className="w-full h-full bg-gray-200">
                  <Image
                    src={magazine.image}
                    alt={magazine.title}
                    className={`
                      w-full h-full object-cover
                      transition-opacity duration-300
                      ${isLoading ? 'opacity-0' : 'opacity-100'}
                    `}
                    onLoad={() => setIsLoading(false)}
                    fill
                    sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 380px"
                    priority={position === 1}
                  />
                </div>
                
                {/* Overlay - hidden on mobile, shown on hover for desktop */}
                <div className={`
                  absolute inset-0 
                  bg-gradient-to-t from-black/80 to-transparent
                  flex flex-col justify-end
                  p-6
                  text-white
                  transition-all duration-500 ease-in-out
                  md:opacity-0 md:group-hover:opacity-100
                  hidden md:flex
                `}>
                  <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <h2 className="text-xl font-semibold mb-2 text-white">{magazine.title}</h2>
                    <p className="text-sm text-white/90">
                      {magazine.description}
                    </p>
                  </div>
                </div>

                {/* Mobile title - only shown on mobile */}
                <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-lg font-semibold text-white">{magazine.title}</h2>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
} 