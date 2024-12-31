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

// Add a type for academic years | '2024-25'
export type AcademicYear = '2019-20' | '2023-24' | '2024-25'