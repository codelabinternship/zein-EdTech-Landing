"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useClientRequests } from "@/hooks/useClientRequest"
import { AlertCircle, CheckCircle } from "lucide-react"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const UZBEK_COUNTRY_CODE = "998"
const UZBEK_COUNTRY_PREFIX = `+${UZBEK_COUNTRY_CODE}`

const formatUzbekPhone = (value: string) => {
  const digitsOnly = value.replace(/\D/g, "")

  if (!digitsOnly) {
    return ""
  }

  let localDigits: string
  if (digitsOnly.startsWith(UZBEK_COUNTRY_CODE)) {
    localDigits = digitsOnly.slice(UZBEK_COUNTRY_CODE.length)
  } else if (digitsOnly.startsWith("8")) {
    localDigits = digitsOnly.slice(1)
  } else {
    localDigits = digitsOnly
  }

  const limitedLocalDigits = localDigits.slice(0, 9)
  const segments = [
    limitedLocalDigits.slice(0, 2),
    limitedLocalDigits.slice(2, 5),
    limitedLocalDigits.slice(5, 7),
    limitedLocalDigits.slice(7, 9),
  ].filter(Boolean)

  if (segments.length === 0) {
    return `${UZBEK_COUNTRY_PREFIX} `
  }

  return `${UZBEK_COUNTRY_PREFIX} ${segments.join(" ")}`
}

export default function ContactForm() {
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const { addRequest,isLoading } = useClientRequests()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setSubmitStatus("idle")
    try {
      await addRequest({ name, phone_number:phone }) // only fields needed
      setSubmitStatus("success")
      setName("")
      setPhone("")
    } catch (error) {
      setSubmitStatus("error")
    }

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const isSubmitting = isLoading

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{t("contactForm.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" && (
          <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
            <CheckCircle className="h-4 w-4 mr-2" />
            <AlertDescription>{t("contactForm.success")}</AlertDescription>
          </Alert>
        )}

        {submitStatus === "error" && (
          <Alert className="mb-4 bg-red-50 text-red-800 border-red-200">
            <AlertCircle className="h-4 w-4 mr-2" />
            <AlertDescription>{t("contactForm.error")}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("contactForm.name")}</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t("contactForm.phone")}</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                const { value } = e.target
                if (!value) {
                  setPhone("")
                  return
                }
                setPhone(formatUzbekPhone(value))
              }}
              onFocus={() => {
                setPhone((current) => (current ? current : `${UZBEK_COUNTRY_PREFIX} `))
              }}
              onBlur={() => {
                setPhone((current) => {
                  if (!current) {
                    return current
                  }

                  const digitsOnly = current.replace(/\D/g, "")
                  return digitsOnly.length > UZBEK_COUNTRY_CODE.length ? current : ""
                })
              }}
              required
              placeholder="+998 XX XXX XX XX"
            />
          </div>

          <Button type="submit" className="w-full bg-[#7635E9] hover:bg-[#6525D9]" disabled={isSubmitting}>
            {isSubmitting ? "..." : t("contactForm.submit")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
