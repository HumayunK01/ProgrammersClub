'use client'

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { MotionDiv } from "@/components/ui/motion-div"
import { motion } from "framer-motion"

export function MainCarousel() {
  const SLIDE_DURATION = 3000; // 3 seconds

  return (
    <MotionDiv 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mt-8 lg:mt-0 w-full max-w-full shadow-lg rounded-2xl"
    >
      {/* Main Carousel */}
      <Carousel
        className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
        plugins={[
          Autoplay({
            delay: SLIDE_DURATION,
            stopOnInteraction: false,
          })
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#40C9CE]/10 to-[#4267B2]/10 rounded-2xl pointer-events-none" />
        <CarouselContent>
          {[
            "/assets/carousel/event1.png",
            "/assets/carousel/event2.png",
            "/assets/carousel/event3.png",
            "/assets/carousel/event4.png",
            "/assets/carousel/event5.png",
            "/assets/carousel/event6.png",
          ].map((imagePath, index) => (
            <CarouselItem key={index} className="relative group">
              <motion.div 
                className="p-1.5 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={imagePath}
                  alt={`Event ${index + 1}`}
                  width={1200}
                  height={900}
                  quality={85}
                  priority={index === 0}
                  loading={index <= 1 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto aspect-[5/4] object-cover rounded-lg transition-transform duration-300"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Top-left accent */}
        <svg className="absolute top-0 left-0 w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect x="0" y="0" width="16" height="4" fill="#40C9CE" />
          <rect x="0" y="0" width="4" height="16" fill="#40C9CE" />
        </svg>
        {/* Bottom-right accent */}
        <svg className="absolute bottom-0 right-0 w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect x="16" y="28" width="16" height="4" fill="#4267B2" />
          <rect x="28" y="16" width="4" height="16" fill="#4267B2" />
        </svg>
      </Carousel>

      {/* Progress indicator */}
      <motion.div 
        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-full max-w-[250px] bg-[#4267B2]/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="h-full w-1/3 bg-gradient-to-r from-[#40C9CE] to-[#4267B2] rounded-full"
          animate={{ x: ["0%", "200%"] }}
          transition={{ 
            duration: SLIDE_DURATION / 1000, // Convert to seconds
            repeat: Infinity, 
            ease: "linear"
          }}
        />
      </motion.div>
    </MotionDiv>
  )
} 