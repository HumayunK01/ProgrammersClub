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
      className="relative mt-8 lg:mt-0 w-full max-w-full"
    >
      {/* Decorative elements */}
      <div className="absolute -inset-6 bg-gradient-to-r from-[#40C9CE]/20 to-[#4267B2]/20 rounded-2xl blur-xl" />
      <motion.div 
        className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#40C9CE]/50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#4267B2]/50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

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
                  quality={100}
                  className="w-full h-auto aspect-[5/4] object-cover rounded-lg transition-transform duration-300"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
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