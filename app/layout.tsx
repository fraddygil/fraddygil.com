import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const siteUrl = "https://fraddygil.com"
const siteName = "Fraddy Gil — Backend Developer & DevOps Engineer"
const siteDescription =
  "Fraddy Gil is a backend developer and DevOps engineer specializing in Python, C#, Java, Azure and Linux. Explore his interactive terminal-style portfolio, experience and skills."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  generator: "Mossit",
  applicationName: "Fraddy Gil Portfolio",
  keywords: [
    "Fraddy Gil",
    "Backend Developer",
    "DevOps Engineer",
    "Python",
    "C#",
    "Java",
    "Azure",
    "Linux",
    "Portfolio",
  ],
  authors: [{ name: "Fraddy Gil", url: siteUrl }],
  creator: "Fraddy Gil",
  publisher: "Fraddy Gil",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fraddy Gil Portfolio",
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fraddy Gil — Backend Developer & DevOps Engineer terminal portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@fraddygil",
    images: [
      {
        url: "/og-image.png",
        alt: "Fraddy Gil — Backend Developer & DevOps Engineer terminal portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
