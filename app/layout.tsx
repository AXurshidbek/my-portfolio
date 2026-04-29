import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Xurshidbek Abdubannobov - Creative Technologist",
  description: "Inventing tomorrow's web, one line of code at a time.",
  keywords: ["developer", "portfolio", "full-stack", "creative technologist"],
  authors: [{ name: "Xurshidbek Abdubannobov" }],
  icons: {
    icon: "/LOGO.svg",
  },
  openGraph: {
    title: "Xurshidbek Abdubannobov - Creative Technologist",
    description: "Inventing tomorrow's web, one line of code at a time.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  generator: 'senotron'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
