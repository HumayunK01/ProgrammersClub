'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/components/ui/motion-div"

const motionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function TeamSection() {
  return (
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
            {...motionProps}
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
                className="mt-6 sm:mt-8 bg-[#4267B2] hover:bg-[#3b5998] text-white shadow-md hover:shadow-lg transition-all duration-300 font-medium px-8 py-2 rounded-full min-w-[200px]"
                asChild
              >
                <Link href="/team" className="flex items-center justify-center gap-2">
                  Meet our team
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
