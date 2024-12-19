import { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Magazines | Programmers' Club MHSSCE",
  description: "Explore our collection of technical magazines and publications.",
}

export default function MagazinesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.07]" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
} 