import { track } from '@vercel/analytics/react'

// Event view tracking
export const trackEventView = (eventId: string, eventTitle: string) => {
  track('event_view', {
    eventId,
    eventTitle,
    timestamp: new Date().toISOString()
  })
}

// Event filter tracking
export const trackEventFilter = (filterType: string) => {
  track('event_filter', {
    filterType,
    timestamp: new Date().toISOString()
  })
}

// Event registration tracking
export const trackEventRegistration = (eventId: string, eventTitle: string) => {
  track('event_registration_click', {
    eventId,
    eventTitle,
    timestamp: new Date().toISOString()
  })
} 