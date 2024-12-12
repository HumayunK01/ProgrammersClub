import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Programmers' Club MHSSCE",
  description: "Join us to enhance your tech skills, participate in hackathons, workshops, and coding competitions, and collaborate on exciting projects. Let's innovate together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
