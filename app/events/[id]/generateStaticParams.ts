import { eventsData } from "@/constants/events-data"

export function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }))
} 