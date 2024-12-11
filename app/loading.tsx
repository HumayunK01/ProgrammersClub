import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="animate-spin">
        <Image
          src="/favicon.ico"
          alt="Loading..."
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
    </div>
  )
}
