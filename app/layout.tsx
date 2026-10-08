import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Himanshu Parashar | DevOps Engineer",
  description:
    "DevOps Engineer focused on cloud infrastructure, Kubernetes, CI/CD, Terraform, automation and reliable cloud-native systems.",
  keywords: [
    "Himanshu Parashar",
    "DevOps Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "CI/CD",
    "Cloud Infrastructure",
  ],
  authors: [{ name: "Himanshu Parashar" }],
  openGraph: {
    title: "Himanshu Parashar | DevOps Engineer",
    description:
      "Cloud, Kubernetes, CI/CD and infrastructure automation portfolio.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
