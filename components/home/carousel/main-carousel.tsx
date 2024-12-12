'use client'

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { MotionDiv } from "@/components/ui/motion-div"

export function MainCarousel() {
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