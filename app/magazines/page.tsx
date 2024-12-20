'use client'
export default function MagazinesPage() {
 return (
   <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#7091E6]/20 via-white to-[#3D52A0]/20">
     {/* Grid Pattern */}
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#7091E6_1px,transparent_1px),linear-gradient(to_bottom,#7091E6_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.07]" />
     
     {/* Animated background orbs */}
     <div className="absolute top-1/4 -left-20 w-[100px] h-[100px] bg-[#7091E6]/10 rounded-full blur-2xl animate-pulse" />
     <div className="absolute bottom-1/3 -right-24 w-[400px] h-[400px] bg-[#3D52A0]/15 rounded-full blur-2xl" />
     <div className="absolute top-2/3 left-1/4 w-72 h-72 bg-[#7091E6]/10 rounded-full blur-xl" />
     <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#3D52A0]/5 rounded-full blur-xl animate-pulse" />
     <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#7091E6]/10 rounded-full blur-2xl" />
      {/* Content */}
     <div className="relative z-10">
       <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#3D52A0]">Coming Soon</h1>
       </div>
     </div>
   </div>
 )  
}
