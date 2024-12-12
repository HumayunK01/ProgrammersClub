'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ChevronDown, Menu, HomeIcon, Calendar, Users, Info, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Autoplay from "embla-carousel-autoplay"
import { MotionDiv } from "@/components/ui/motion-div"
import { useState, useEffect } from 'react'
import { Typewriter } from "@/components/ui/typewriter"
import { ClientOnly } from "@/components/ui/client-only"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react'

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

// Add these animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

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
            "/assets/carousel/event3.png"
          ].map((imagePath, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Image
                  src={imagePath}
                  alt={`Event ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto aspect-[5/4] object-cover rounded-xl"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </MotionDiv>
  )
}

function EventsCarousel({ events }: { events: Event[] }) {
  // Move state declarations after useEffect
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    // Delay setting mounted to ensure client-side hydration is complete
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])

  // Show a placeholder or loading state while mounting
  if (!mounted) {
    return (
      <div className="relative w-full max-w-4xl mx-auto h-[470px] md:h-[430px] bg-gray-100 animate-pulse rounded-lg">
        {/* Optional loading indicator */}
      </div>
    )
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
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
            <motion.div
              key={index}
              className={`absolute left-0 right-0`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: opacity > 0 ? opacity : 0,
                scale: scale,
                y: offset,
                zIndex: events.length - position
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              style={{
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
            </motion.div>
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

export default function Home(): JSX.Element {
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
      {/* Navigation */}
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

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="pt-16 min-h-screen bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="animated-background">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        
        {/* Noise Texture */}
        <div className="noise"></div>

        {/* Rest of your content sections */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section id="hero" className="container mx-auto px-[30px] md:px-[50px] overflow-hidden py-5 md:py-9 lg:py-9 mt-4">
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <motion.div
                variants={fadeInUp}
                className="space-y-6 md:space-y-8 text-center"
              >
                <div className="space-y-4 md:space-y-5">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-md font-mono">
                    <span className="block lg:py-4 md:py-4">
                      <ClientOnly>
                        <Typewriter 
                          text="Programmers' Club" 
                          className="bg-gradient-to-r from-[#40C9CE] via-[#40C9CE] to-[#4267B2] text-transparent bg-clip-text"
                        />
                      </ClientOnly>
                    </span>
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
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CarouselSection />
              </motion.div>
            </motion.div>
            <div className="flex justify-center mt-8 md:mt-12">
              <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce text-muted-foreground" />
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-8">
            <motion.div 
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group perspective-1000 h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-lg transform -skew-y-3 md:group-hover:skew-y-0 transition-transform duration-300" />
                    <div className="relative bg-background border border-primary/20 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg transform transition-transform duration-300 md:group-hover:translate-y-2 h-full flex flex-col">
                      <div className="flex-shrink-0">
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
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground flex-grow">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 md:mt-16 text-center">
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  The Programmer's Club at Saboo Siddik College of Engineering fosters tech skills through hackathons, workshops, and networking, creating a collaborative community. (Since 2016)
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
            </motion.div>
          </section>

          {/* Recent Events Section */}
          <section id="events" className="py-10 md:py-16">
            <motion.div 
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
                    title: "DSA Workshop",
                    date: "September 23-25, 2024",
                    description: " Mastery over key DSA concepts that are crucial for technical interviews and competitive programming.",
                    image: "/assets/events/event1.png",
                    tags: ["DSA", "Workshop", "Tech"]
                  },
                  {
                    title: "CodeFeast 3.0",
                    date: "September 27, 2024",
                    description: "An intriguing coding competition for the enthusiastic engineers, 5 intense problems in just 75 minutes!.",
                    image: "/assets/events/event2.png",
                    tags: ["Contest", "Coding"]
                  },
                  {
                    title: "Felicitation Program",
                    date: "August 5, 2024",
                    description: "Celebrating the achievements of our outstanding club members and recognizing their dedication.",
                    image: "/assets/events/event3.png",
                    tags: ["Ceremony", "Celebration"]
                  },
                  {
                    title: "Err_404 5.0",
                    date: "March 18-19, 2024",
                    description: "With a prize pool of 2,50,000, multiple goodies, for coders to showcase their talent.",
                    image: "/assets/events/event4.png",
                    tags: ["Hackathon", "Coding"]
                  }
                ]} 
              />
              <div className="mt-6 md:mt-8 text-center">
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
            </motion.div>
          </section>

          {/* Team Members Section */}
          <section id="team" className="py-8 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-[50px]">
              <div className="relative rounded-2xl overflow-hidden h-[600px] md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-10" />
                <Image
                  src="/assets/images/team-bg.png"
                  alt="Team Background"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full absolute"
                  priority
                />
                <MotionDiv 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative z-20 py-12 md:py-20 px-4 sm:px-8 md:px-12 h-full flex flex-col justify-center"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-white">
                    Team Members
                  </h2>
                  <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center">
                    <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                      The Programmers Club Committee is a dedicated team of students driving innovation and collaboration on campus. They organize events, workshops, and activities that enhance technical skills and foster a passion for programming, creating a dynamic platform for learning and growth.
                    </p>
                    <Button 
                      size="lg" 
                      className="
                        mt-6 sm:mt-8
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
                      <Link href="/team" className="flex items-center justify-center gap-2">
                        Meet our team
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </Button>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#1e2f4d] min-h-[400px]">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 -left-10 w-32 h-32 bg-[#4267B2] rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 -right-10 w-32 h-32 bg-[#7091E6] rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-10 sm:py-16">
            {/* Logo and Description */}
            <div className="flex flex-col items-center sm:items-start space-y-6">
              <Link href="/" className="inline-block group">
                <Image
                  src="/assets/images/logo.png"
                  alt="Programmer's Club Logo"
                  width={200}
                  height={200}
                  className="object-contain transform transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-sm md:text-base text-gray-300/90 leading-relaxed text-center sm:text-left max-w-md">
                Transforming Skills, Inspiring Innovation, and Creating Tomorrow's Trailblazers.
              </p>
              <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/programmers.club/" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/programmersclubmhssce/" },
                ].map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href} 
                    target="_blank"
                    className="bg-[#2a4270]/50 p-2.5 rounded-full hover:bg-[#4267B2] group transition-all duration-300
                      transform hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-200 flex items-center gap-3 
                justify-center sm:justify-start mb-8">
                <span className="w-8 h-0.5 bg-[#4267B2]/70 hidden sm:block"></span>
                Quick Links
              </h3>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Events', 'Our Team'].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-sm md:text-base text-gray-400 hover:text-gray-200 transition-all duration-300 
                        flex items-center gap-2 group justify-center sm:justify-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4267B2]/50 group-hover:w-2.5 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-200 flex items-center gap-3 
                justify-center sm:justify-start mb-8">
                <span className="w-8 h-0.5 bg-[#4267B2]/70 hidden sm:block"></span>
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="mailto:contact@programmersclub.com"
                    className="text-sm md:text-base text-gray-400 hover:text-gray-200 transition-all duration-300 
                      flex items-center gap-2 group justify-center sm:justify-start"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#4267B2] group-hover:scale-110 transition-transform duration-300" />
                    programmersclub@mhssce.ac.in
                  </Link>
                </li>
                <li className="flex justify-center sm:justify-start">
                  <Link 
                    href="https://maps.google.com"
                    target="_blank"
                    className="text-sm md:text-base text-gray-400 hover:text-gray-200 transition-all duration-300 
                      flex items-start gap-2 group max-w-[250px]"
                  >
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#4267B2] mt-1 flex-shrink-0 group-hover:scale-110 
                      transition-transform duration-300" />
                    <span className="text-center sm:text-left">
                      M.H. Saboo Siddik College of Engineering, Mumbai - 400008
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 py-4 sm:py-6">
            <div className="text-center text-xs sm:text-sm text-gray-400">
              <p className="flex items-center justify-center gap-2 flex-wrap px-4">
                © {new Date().getFullYear()} 
                <span className="text-[#4267B2] font-medium">Programmer's Club</span>
                All rights reserved.
              </p>
              <p className="flex items-center justify-center gap-2 flex-wrap px-4 py-2">
                Developed By
                <a href="https://devhumayun.vercel.app/" target="_blank">
                <span className="text-[#4267B2] font-medium">Humayun Khan</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

