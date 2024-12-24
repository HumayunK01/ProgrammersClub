import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import { HackathonAlert } from "@/components/notifications/HackathonAlert"
import { BackToTop } from '@/components/BackToTop'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://programmersclub.vercel.app'),
  title: "Programmers Club MHSSCE",
  description: "Join us to enhance your tech skills, participate in hackathons, workshops, and coding competitions, and collaborate on exciting projects. Let's innovate together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body>
        <HackathonAlert />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
