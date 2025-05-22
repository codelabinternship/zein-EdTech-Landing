"use client"

import { ThemeProvider } from "@/components/theme-provider"
import i18n from "@/i18n/config"
import { QueryProvider } from "@/providers/query-provider"
import type React from "react"
import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import "./globals.css"
import SEO from "./seo"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add framer-motion to the project
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <QueryProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SEO />
          {children}
        </ThemeProvider>
      </QueryProvider>
    </I18nextProvider>
  )
}
