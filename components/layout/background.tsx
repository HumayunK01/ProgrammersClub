interface BackgroundProps {
  children: React.ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layer with gradient */}
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
        {/* Orbs/circles - varied sizes and positions */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#40C9CE]/5 rounded-full mix-blend-multiply filter blur-lg" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4267B2]/5 rounded-full mix-blend-multiply filter blur-lg" />
        </div>
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
