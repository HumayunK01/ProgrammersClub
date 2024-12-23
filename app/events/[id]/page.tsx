import { notFound } from "next/navigation"
import { eventsData } from "@/constants/events-data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { galleryData } from "@/constants/gallery-data"
import EventGallery from "@/app/events/components/event-gallery"
import ReactMarkdown from 'react-markdown'
import EventSponsors from "@/app/events/components/event-sponsors"

export default function EventPage({ params }: { params: { id: string } }) {
  const event = eventsData.find(e => e.id === params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Hero Banner */}
        <div className="relative h-[150px] sm:h-[200px] md:h-[300px] rounded-xl overflow-hidden mb-4 print-gradient">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4267B2]/20 via-transparent to-[#40E0D0]/20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.1]" />
          
          <Image
            src={event.thumbnailImage}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
            <div className="max-w-4xl">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {event.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/10 backdrop-blur-md text-white border-white/20 border px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs print-gradient"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Event Sponsors - Moved directly below thumbnail */}
        {event.sponsors && event.sponsors.length > 0 && (
          <EventSponsors 
            sponsors={event.sponsors}
          />
        )}
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Description Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image 
                    src="/assets/images/about.png"
                    alt="About Icon" 
                    width={100}
                    height={100}
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#4267B2] to-[#40E0D0] bg-clip-text text-transparent">
                  About Event
                </h2>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                <ReactMarkdown components={{
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-600 last:mb-0">
                      {children}
                    </p>
                  ),
                  strong: ({children}) => <strong className="font-bold">{children}</strong>
                }}>{event.description}</ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Event Details Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <Image 
                    src="/assets/images/link.png"
                    alt="Event Details Icon" 
                    width={100}
                    height={100}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#4267B2] to-[#40E0D0] bg-clip-text text-transparent">
                  Event Details
                </h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { 
                    icon: "/assets/images/calender.png",
                    label: "Event Date:", 
                    value: event.startDate 
                  },
                  { 
                    icon: "/assets/images/moneybag.png",
                    label: "Entry Fees:", 
                    value: `${event.entryFees}` 
                  },
                  { 
                    icon: "/assets/images/certificate.png",
                    label: "Certification:", 
                    value: event.certification.provided 
                      ? event.certification.type || "Participation Certificates Provided"
                      : "No Certification"
                  },
                  { 
                    icon: "/assets/images/handshake.png",
                    label: "Team Size:", 
                    value: event.teamSize || "Individual / Team of 2-3"
                  },
                  ...(event.registrationLink?.isOpen ? [{
                    icon: "/assets/images/clock.png",
                    label: "Last Date to Register:", 
                    value: event.registrationEnd || "Not Specified"
                  }] : []),
                  { 
                    icon: "/assets/images/link.png",
                    label: "Registration:", 
                    value: event.registrationLink?.isOpen ? (
                      <a 
                        href={event.registrationLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4267B2] hover:underline"
                      >
                        Click to Register
                      </a>
                    ) : (
                      <span className="text-red-600">Applications Closed</span>
                    )
                  },
                  {
                    icon: "/assets/images/trophy.png",
                    label: "Event Status:",
                    value: (() => {
                      // Parse the event date string properly
                      const eventDate = new Date(event.startDate.replace(/\s+/g, ' '));
                      const today = new Date();
                      
                      // Set both dates to midnight for accurate day comparison
                      const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
                      const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                      
                      // Calculate the day after the event
                      const dayAfterEvent = new Date(eventDay);
                      dayAfterEvent.setDate(dayAfterEvent.getDate() + 1);
                      
                      const isLive = todayDay >= eventDay && todayDay <= dayAfterEvent;
                      const isUpcoming = eventDay > todayDay;
                      
                      return (
                        <div className="space-y-1">
                          <span className={isUpcoming || isLive ? "text-green-600" : "text-red-600"}>
                            {isLive ? "Live" : isUpcoming ? "Upcoming" : "Ended"}
                          </span>
                          <p className="text-xs text-gray-500">
                            {(() => {
                              const diffTime = Math.abs(eventDay.getTime() - todayDay.getTime());
                              const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                              
                              if (isLive) {
                                return todayDay.getTime() === eventDay.getTime() ? 
                                  "Today" : "Last day";
                              }
                              return isUpcoming 
                                ? `${diffDays} day${diffDays !== 1 ? 's' : ''} to go`
                                : `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
                            })()}
                          </p>
                        </div>
                      );
                    })()
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#4267B2]/10 flex items-center justify-center text-[#4267B2] group-hover:scale-110 transition-transform">
                      <Image 
                        src={item.icon}
                        alt={`${item.label} Icon`} 
                        width={100}
                        height={100}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
                      <div className="text-sm sm:text-base font-medium text-gray-900">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <Image 
                    src="/assets/images/pin.png"
                    alt="Venue Icon" 
                    width={100}
                    height={100}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#4267B2] to-[#40E0D0] bg-clip-text text-transparent">
                  Venue
                </h3>
              </div>
              <div className="flex items-start gap-2 sm:gap-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#4267B2]/10 flex items-center justify-center text-[#4267B2] group-hover:scale-110 transition-transform">
                  <Image 
                    src="/assets/images/map.png"
                    alt="Map Icon" 
                    width={100}
                    height={100}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{event.venue.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{event.venue.note}</p>
                </div>
              </div>
            </div>

            {/* Incharges Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <Image 
                    src="/assets/images/incharge.png"
                    alt="Incharges Icon" 
                    width={100}
                    height={100}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#4267B2] to-[#40E0D0] bg-clip-text text-transparent">
                  Incharges
                </h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {event.incharges.map((incharge, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#4267B2]/10 flex items-center justify-center text-[#4267B2] group-hover:scale-110 transition-transform">
                      <Image 
                        src="/assets/images/person.png"
                        alt="Person Icon" 
                        width={100}
                        height={100}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-gray-900">{incharge.name}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Print Button */}
            {/* <div className="flex justify-end mb-4 print:hidden">
            <PrintButton />
            </div> */}
          </div>
        </div>

        {/* Event Gallery - Only show if images exist */}
        {galleryData[event.id] && galleryData[event.id].length > 0 && (
          <EventGallery 
            eventId={event.id}
            eventTitle={event.title}
            images={galleryData[event.id]}
          />
        )}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }))
} 