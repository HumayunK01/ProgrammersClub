interface BackgroundProps {
  children: React.ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layer with gradient */}
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
        {/* Orbs/circles - varied sizes and positions */}
        <div className="absolute top-1/4 -left-20 w-[100px] h-[100px] bg-[#7091E6]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-24 w-[400px] h-[400px] bg-[#3D52A0]/25 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/4 w-72 h-72 bg-[#7091E6]/15 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#3D52A0]/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#7091E6]/20 rounded-full blur-3xl" />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
