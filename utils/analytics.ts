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
export const trackEventFilter = (filter: string) => {
  console.log(`Event filter used: ${filter}`)
}

// Event registration tracking
export const trackEventRegistration = (eventId: string, eventTitle: string) => {
  track('event_registration_click', {
    eventId,
    eventTitle,
    timestamp: new Date().toISOString()
  })
}

// New functions
export const trackPageView = (pageName: string) => {
  console.log(`Page view: ${pageName}`)
} 