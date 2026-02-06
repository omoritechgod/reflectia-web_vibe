import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Reflectia - Find Your Inner Balance",
  description:
    "Build character, track your daily insights, and receive personalized AI nudges to become your best self. Features AI-powered reflection, push notifications, and conversational AI.",
  keywords:
    "reflection, feedback, personal growth, self-improvement, anonymous feedback, AI nudges, push notifications, conversational AI, journaling",
  authors: [{ name: "Reflectia" }],
  openGraph: {
    title: "Reflectia - Find Your Inner Balance",
    description:
      "Build character, track your daily insights, and receive personalized AI nudges to become your best self",
    type: "website",
  },
  icons: {
    icon: "/favicon-colored.png",
    apple: "/favicon-colored.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4DD0C1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
