"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/i18n/config"

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
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </I18nextProvider>
  )
}
