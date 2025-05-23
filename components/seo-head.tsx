"use client"

import { useSEO } from "@/hooks/useSEO"
import Head from "next/head"

export default function SEOHead() {
  const { data: seo, isLoading } = useSEO()

  if (isLoading || !seo) {
    return null
  }

  return (
    <Head>
      <title>{seo.metaTitle||"zeinedtech.uz"}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="keywords" content={seo.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.metaTitle} />
      <meta property="og:description" content={seo.metaDescription} />
      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.metaTitle} />
      <meta name="twitter:description" content={seo.metaDescription} />
      {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}
    </Head>
  )
}
