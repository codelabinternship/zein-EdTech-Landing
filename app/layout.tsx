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
           <title>
          ZEIN EDTECH | Til Kurslari – Ingliz, Rus, Arab, Turk, Koreys
          Tillarini Onlayn O‘rganing
        </title>
        <meta
          name="description"
          content="ZEIN EDTECH — 2013 yildan buyon til o‘rganishni qulay va samarali qiluvchi o‘quv markazi. Ingliz, Rus, Arab, Turk, Koreys tillari bo‘yicha online kurslar, tajribali o‘qituvchilar, moslashuvchan dars jadvali va sertifikat beriladi."
        />
        <meta
          name="keywords"
          content="ingliz tili kurslari, rus tili kurslari, turk tili kurslari, arab tili kurslari, koreys tili kurslari, online ingliz tili o‘rganish, onlayn rus tili saboqlari, koreyscha o‘rganish onlayn"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'
