'use client'

import { Button } from "./ui/button"
import { Printer } from "lucide-react"

export default function PrintButton() {
  return (
    <Button 
      onClick={() => window.print()}
      variant="outline"
      className="gap-2"
    >
      <Printer className="h-4 w-4" />
      Print Page
    </Button>
  )
} 