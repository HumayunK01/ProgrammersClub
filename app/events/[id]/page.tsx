import { notFound } from "next/navigation"
import { eventsData } from "@/constants/events-data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { galleryData } from "@/constants/gallery-data"
import EventGallery from "@/app/events/components/event-gallery"
import ReactMarkdown from 'react-markdown'
import EventSponsors from "@/app/events/components/event-sponsors"
import { Info, Globe, Calendar, MapPin, Users, Award, Clock, ExternalLink, User, DollarSign, Trophy } from 'lucide-react'

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
          {/* Decorative Background - Adjusted opacity and gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4267B2]/30 via-transparent to-[#40E0D0]/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.15]" />
          
          <Image
            src={event.thumbnailImage}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Content Overlay - Enhanced gradient for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  {event.title}
                </h1>
                {event.tags.includes('Hackathon') && event.officialWebsite && (
                  <a 
                    href={event.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out"
                    title="Visit Official Website"
                  >
                    <Globe 
                      className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:scale-110 transition-transform duration-300" 
                      strokeWidth={1.5}
                    />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {event.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/15 backdrop-blur-md text-white border-white/25 border px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs print-gradient shadow-sm"
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
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                <div className="w-9 h-9 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Info 
                    className="w-6 h-6 text-[#4267B2]" 
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Event Details
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { 
                    icon: Calendar,
                    label: "Event Date:", 
                    value: event.startDate 
                  },
                  { 
                    icon: DollarSign,
                    label: "Entry Fees:", 
                    value: `${event.entryFees}` 
                  },
                  { 
                    icon: Award,
                    label: "Certification:", 
                    value: event.certification.provided 
                      ? event.certification.type 
                      : "No Certification"
                  },
                  { 
                    icon: Users,
                    label: "Team Size:", 
                    value: event.teamSize 
                  },
                  ...(event.registrationLink?.isOpen ? [{
                    icon: Clock,
                    label: "Last Date to Register:", 
                    value: event.registrationEnd || "Not Specified"
                  }] : []),
                  { 
                    icon: ExternalLink,
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
                    icon: Trophy,
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
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 flex items-center justify-center">
                      <item.icon 
                        className="w-6 h-6 text-[#4267B2] group-hover:scale-110 transition-all duration-200" 
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1 border-b border-gray-100 pb-3">
                      <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
                      <div className="text-sm sm:text-base font-medium text-gray-900">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-9 h-9 flex items-center justify-center bg-blue-50 rounded-lg">
                  <MapPin 
                    className="w-6 h-6 text-[#4267B2]" 
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Venue
                </h2>
              </div>
              <div className="pl-8 border-l-2 border-gray-100">
                <p className="text-sm sm:text-base font-medium text-gray-900">{event.venue.name}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{event.venue.note}</p>
              </div>
            </div>

            {/* Incharges Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-9 h-9 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Users 
                    className="w-6 h-6 text-[#4267B2]" 
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Incharges
                </h2>
              </div>
              <div className="space-y-3">
                {event.incharges.map((incharge, index) => (
                  <div key={index} className="flex items-center gap-3 group pl-8">
                    <User 
                      className="w-5 h-5 text-gray-400" 
                      strokeWidth={1.5}
                    />
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