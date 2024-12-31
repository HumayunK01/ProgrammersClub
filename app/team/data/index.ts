import { teamData2023_24 } from './2023-24/team'
import { teamData2024_25 } from './2024-25/team'
import { teamData2019_20 } from './2019-20/team'

// Define the type for a team member
type TeamMember = {
  id: string
  name: string
  position: string
  section: string
  rollNumber: string
  email: string
  year: string
  branch: string
  quote: string
  image: string
  linkedin?: string
  instagram?: string
}

// Define the type for a team section
type TeamSection = {
  title: string
  members: TeamMember[]
  academicYear: string
}

// Export the team data with proper typing, filtering out empty sections
export const teamData = {
  "2019-20": teamData2019_20.filter(section => section.members.length > 0),
  "2023-24": teamData2023_24.filter(section => section.members.length > 0),
  "2024-25": teamData2024_25.filter(section => section.members.length > 0)
} as const

// Export types for use in other files
export type { TeamMember, TeamSection }