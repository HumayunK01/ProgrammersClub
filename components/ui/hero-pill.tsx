import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroPillProps {
  href: string
  label: string
  announcement?: string
  className?: string
  isExternal?: boolean
}

export function HeroPill({ 
  href, 
  label, 
  announcement = "📣 Announcement",
  className,
  isExternal = false,
}: HeroPillProps) {
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        "group flex w-auto max-w-[90vw] sm:max-w-none items-center gap-1.5 sm:gap-2",
        "rounded-full bg-primary/20 ring-1 ring-accent",
        "px-1.5 sm:px-2 py-0.5 sm:py-1",
        "whitespace-nowrap overflow-hidden text-ellipsis",
        "hover:bg-primary/25 hover:ring-accent/80 transition-all duration-300",
        "active:scale-95",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={cn(
        "shrink-0 w-fit rounded-full bg-accent",
        "px-1.5 sm:px-2 py-0.5",
        "text-[10px] sm:text-xs font-medium text-primary",
        "text-center transition-colors duration-300",
        "group-hover:bg-accent/90"
      )}>
        {announcement}
      </div>
      <p className={cn(
        "text-[10px] sm:text-xs font-medium text-primary",
        "overflow-hidden text-ellipsis",
        "transition-colors duration-300"
      )}>
        {label}
      </p>
      <motion.svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "shrink-0 ml-0.5 sm:ml-1",
          "sm:w-3 sm:h-3",
          "transition-transform duration-300",
          "group-hover:translate-x-0.5"
        )}
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="currentColor"
          className="text-primary"
        />
      </motion.svg>
    </motion.a>
  )
} 