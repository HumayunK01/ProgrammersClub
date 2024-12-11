'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ChevronDown, Menu, HomeIcon, Calendar, Users, BookOpen, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Autoplay from "embla-carousel-autoplay"
import { MotionDiv } from "@/components/ui/motion-div"
import { useState } from 'react'

function CarouselSection() {
  return (
    <MotionDiv 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mt-8 lg:mt-0 w-full max-w-full overflow-hidden cursor-grab"
    >
      <Carousel
        className="w-full max-w-xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          })
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {[
            "/assets/carousel/event1.png",
            "/assets/carousel/event2.png",
            "/assets/carousel/event3.jpg"
          ].map((imagePath, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Image
                  src={imagePath}
                  alt={`Event ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto aspect-[5/4] object-cover rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </MotionDiv>
  )
}

function EventsCarousel({ events }) {
  // State management for carousel
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Touch handling states
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 75 // Minimum distance for swipe detection
    const swipeDistance = touchStart - touchEnd

    if (swipeDistance > SWIPE_THRESHOLD) {
      nextSlide() // Swipe left
    }
    if (swipeDistance < -SWIPE_THRESHOLD) {
      prevSlide() // Swipe right
    }
  }

  // Navigation handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[470px] md:h-[430px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Card Stack */}
      <div className="relative h-full">
        {events.map((event, index) => {
          // Calculate card positioning values
          const position = (index - currentIndex + events.length) % events.length
          const offset = position * 40 // Vertical stacking offset
          const scale = 1 - (position * 0.1) // Progressive scale reduction
          const opacity = 1 - (position * 0.3) // Progressive opacity reduction

          return (
            <div
              key={index}
              className={`absolute left-0 right-0 transition-all duration-500 ease-in-out`}
              style={{
                transform: `translateY(${offset}px) scale(${scale})`,
                opacity: opacity > 0 ? opacity : 0,
                zIndex: events.length - position,
                pointerEvents: position === 0 ? 'auto' : 'none',
              }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {event.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </div>
          )
        })}
      </div>

      {/* Navigation Controls - Hidden on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="
          hidden md:flex
          absolute left-[-30px] md:left-[-60px] 
          top-1/2 -translate-y-1/2 
          bg-white/80 hover:bg-[#4267B2] 
          text-[#4267B2] hover:text-white
          shadow-md hover:shadow-lg 
          transition-all duration-300
          rounded-full
        "
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="
          hidden md:flex
          absolute right-[-30px] md:right-[-60px] 
          top-1/2 -translate-y-1/2 
          bg-white/80 hover:bg-[#4267B2] 
          text-[#4267B2] hover:text-white
          shadow-md hover:shadow-lg 
          transition-all duration-300
          rounded-full
        "
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full border-b bg-white/70 backdrop-blur-md z-[50]">
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
                href="/events" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Events
              </Link>
              <Link href="/team" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Our Team
              </Link>
              <Link href="/magazines" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Magazines
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
                  <SheetClose asChild>
                    <Link href="/magazines" className="text-lg font-medium hover:text-primary flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <BookOpen className="w-5 h-5" />
                      Magazines
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

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="pt-16 min-h-screen bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20 relative overflow-hidden">
        {/* Decorative balls */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7091E6]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3D52A0]/30 rounded-full blur-3xl" />
        
        {/* Rest of your content sections */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section id="hero" className="container mx-auto px-[30px] md:px-[50px] overflow-hidden py-9 md:py-14 lg:py-16 mt-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <MotionDiv 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6 md:space-y-8 text-center"
              >
                <div className="space-y-4 md:space-y-5">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-md bg-gradient-to-r from-[#5fc2c9] to-[#3D52A0] text-transparent bg-clip-text">
                    <span className="block lg:py-4 md:py-4">Programmers' Club</span> 
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
              </MotionDiv>
              <CarouselSection />
            </div>
            <div className="flex justify-center mt-8 md:mt-12">
              <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce text-muted-foreground" />
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-8">
            <MotionDiv 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="container mx-auto px-[30px] md:px-[50px] overflow-hidden"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 py-2">
                {[
                  { title: "Innovation", icon: "/assets/images/rocket.png",
                    description: "Fueling creativity and transforming ideas into reality, we embrace bold thinking, explore new possibilities, and pioneer solutions that shape the future of technology."
                  },
                  { title: "Collaboration", icon: "/assets/images/handshake.png",
                    description: "The Programmer's Club unites passionate individuals, encouraging teamwork, knowledge sharing, and collective problem-solving to achieve greater milestones together"
                   },
                  { title: "Excellence", icon: "/assets/images/trophy.png",
                    description: "Driven by a commitment to push boundaries, refine skills, and set new standards, we aim to achieve outstanding results and inspire innovation in every pursuit."
                   },
                ].map((value, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative group perspective-1000"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-lg transform -skew-y-3 md:group-hover:skew-y-0 transition-transform duration-300" />
                    <div className="relative bg-background border border-primary/20 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg transform transition-transform duration-300 md:group-hover:translate-y-2">
                      {typeof value.icon === 'string' && value.icon.startsWith('/') ? (
                        <Image 
                          src={value.icon} 
                          alt={value.title} 
                          width={48} 
                          height={48} 
                          className="mb-2 sm:mb-4"
                        />
                      ) : (
                        <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{value.icon}</div>
                      )}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
              <div className="mt-12 md:mt-16 text-center">
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  The Programmer&apos;s Club at Saboo Siddik College of Engineering fosters tech skills through hackathons, workshops, and networking, creating a collaborative community. (Since 2016)
                </p>
                <Button 
                  className="
                    mt-6 md:mt-8 
                    bg-[#4267B2] hover:bg-[#3b5998] 
                    text-white 
                    shadow-md hover:shadow-lg 
                    transform hover:-translate-y-0.5 
                    transition-all duration-300 
                    font-medium 
                    px-8 py-2 
                    rounded-full
                    min-w-[200px]
                  " 
                  size="lg" 
                  asChild
                >
                  <Link href="/about" className="flex items-center justify-center gap-2">
                    Learn More About Us
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </Button>
              </div>
            </MotionDiv>
          </section>

          {/* Recent Events Section */}
          <section id="events" className="py-10 md:py-16">
            <MotionDiv 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="container mx-auto px-[30px] md:px-[50px] overflow-hidden"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Events</h2>
              <EventsCarousel 
                events={[
                  {
                    title: "AI Workshop",
                    date: "May 15, 2023",
                    description: "Explore the latest advancements in Artificial Intelligence and Machine Learning.",
                    image: "/placeholder.svg?text=AI+Workshop",
                    tags: ["AI", "Workshop", "Tech"]
                  },
                  {
                    title: "Hackathon 2023",
                    date: "June 1-3, 2023",
                    description: "48-hour coding challenge to solve real-world problems with innovative solutions.",
                    image: "/placeholder.svg?text=Hackathon",
                    tags: ["Hackathon", "Coding", "Innovation"]
                  },
                  {
                    title: "Tech Talk: Future of Web",
                    date: "July 10, 2023",
                    description: "Industry experts discuss emerging web technologies and their impact on the future.",
                    image: "/placeholder.svg?text=Tech+Talk",
                    tags: ["Web", "Future", "Technology"]
                  }
                ]} 
              />
              <div className="mt-6 md:mt-12 text-center">
                <Button 
                  size="lg" 
                  className="
                    bg-[#4267B2] hover:bg-[#3b5998]
                    text-white
                    shadow-md hover:shadow-lg 
                    transition-all duration-300 
                    font-medium 
                    px-8 py-2 
                    rounded-full
                    min-w-[200px]
                  "
                  asChild
                >
                  <Link href="/events" className="flex items-center justify-center gap-2">
                    View All Events
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </Button>
              </div>
            </MotionDiv>
          </section>
        </div>
      </main>
    </>
  )
}

