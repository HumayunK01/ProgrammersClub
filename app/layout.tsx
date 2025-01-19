import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import { HackathonAlert } from "@/components/notifications/HackathonAlert"
import { BackToTop } from '@/components/BackToTop'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://programmersclub.vercel.app'),
  title: "Programmers' Club MHSSCE",
  description: "Join us to enhance your tech skills, participate in hackathons, workshops, and coding competitions, and collaborate on exciting projects. Let's innovate together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/assets/carousel/event1.png" 
          as="image"
        />
      </head>
      <body className={montserrat.className}>
        <HackathonAlert />
        {children}
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
