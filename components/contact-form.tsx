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
              onChange={(e) => setPhone(e.target.value)}
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
