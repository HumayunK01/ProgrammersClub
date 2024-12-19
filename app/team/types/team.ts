export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  section: string
  rollNumber: string
  email: string
  year: string
  branch: string
  quote: string
  linkedin: string
  instagram: string
}

export interface TeamSection {
  title: string
  members: TeamMember[]
}