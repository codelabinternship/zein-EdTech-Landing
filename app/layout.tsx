import type React from "react"
import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
         <meta name="google-site-verification" content="eUJyGjZpPbGoAnABZtokjQLdCNPJfWbSwtUYNDmXoHs" />
         <meta name="yandex-verification" content="79c50c53d0062032" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'
