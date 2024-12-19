'use client'
import { useState } from 'react'
import Image from 'next/image'

interface EventGalleryProps {
  eventId: string
  eventTitle: string
  images: string[]
}

export default function EventGallery({ eventId, eventTitle, images }: EventGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="mt-6 lg:mt-8 bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <Image 
              src="/assets/images/partypopper.png"
              alt="Gallery Icon" 
              width={100}
              height={100}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>
          <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#4267B2] to-[#40E0D0] bg-clip-text text-transparent">
            Event Gallery
          </h2>
        </div>
      </div>
      {images?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-[200px] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(`/gallery/${eventId}/${image}`)}
            >
              <Image
                src={`/gallery/${eventId}/${image}`}
                alt={`${eventTitle} Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 20vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx0cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/2wBDAR0XFx0cHR8cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                quality={75}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Click to preview
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 text-gray-500">
          No images available
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-22 right-0 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 