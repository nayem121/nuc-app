import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Youth Empowerment Center - Mobile App Development",
  description:
    "Discover innovative mobile applications by Youth Empowerment Center. Download our apps for Courier Services, logistics, Freight, postal services, and more from Google Play Store.",
  keywords: "mobile apps, android apps, logistics apps, postal service apps, Youth Empowerment Center, Google Play Store",
  authors: [{ name: "Youth Empowerment Center" }],
  creator: "Youth Empowerment Center",
  publisher: "Youth Empowerment Center",
  robots: "index, follow",
  openGraph: {
    title: "Youth Empowerment Center - Mobile App Development",
    description: "Discover innovative mobile applications by Youth Empowerment Center",
    type: "website",
    locale: "en_US",
  },
    generator: 'Youth Empowerment Center'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
