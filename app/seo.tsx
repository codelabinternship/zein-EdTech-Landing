"use client"

import { useSEO } from "@/hooks/useSEO"
import { useEffect } from "react"

export default function SEO() {
  const { data: seo, isLoading } = useSEO()

  useEffect(() => {
    if (!seo || isLoading) return

    // Update metadata
    document.title = seo.metaTitle

    // Update meta tags
    updateMetaTag("description", seo.metaDescription)
    updateMetaTag("keywords", seo.keywords)

    // Update Open Graph tags
    updateMetaTag("og:title", seo.metaTitle)
    updateMetaTag("og:description", seo.metaDescription)
    if (seo.ogImage) {
      updateMetaTag("og:image", seo.ogImage)
    }

    // Update Twitter tags
    updateMetaTag("twitter:title", seo.metaTitle)
    updateMetaTag("twitter:description", seo.metaDescription)
    if (seo.ogImage) {
      updateMetaTag("twitter:image", seo.ogImage)
    }
  }, [seo, isLoading])

  return null
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)

  if (!element) {
    element = document.createElement("meta")
    if (name.startsWith("og:")) {
      element.setAttribute("property", name)
    } else {
      element.setAttribute("name", name)
    }
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}
