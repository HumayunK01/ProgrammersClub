'use client'
import Image from 'next/image'

interface EventSponsorsProps {
  sponsors: {
    name: string
    logo: string
    website?: string
  }[]
}

export default function EventSponsors({ sponsors }: EventSponsorsProps) {
  // Duplicate sponsors array 4 times for smoother infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors]

  return (
    <div className="bg-white/50 rounded-xl p-2 sm:p-3 mb-4">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee space-x-4 sm:space-x-6">
          {duplicatedSponsors.map((sponsor, index) => (
            <a
              key={`${sponsor.name}-${index}`}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] relative group"
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain filter hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 150px"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-lg" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
} 