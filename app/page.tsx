"use client"

import ContactForm from "@/components/contact-form"
import CoursesShowcase from "@/components/courses-showcase"
import Header from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Check, ExternalLink, Globe, Mail, MessageCircle, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "../i18n/config"

// Import the new component at the top of the file
import StudentResultsAlt from "@/components/student-results-alt"
import { Skeleton } from "@/components/ui/skeleton"
import { useContact } from "@/hooks/useContact"
import { useFAQs } from "@/hooks/useFAQs"

export default function Home() {
  const { t, i18n } = useTranslation()
  const [showContactForm, setShowContactForm] = useState(false)
  const contactFormRef = useRef<HTMLDivElement>(null)

  const scrollToContactForm = () => {
    setShowContactForm(true)
    setTimeout(() => {
      contactFormRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const {
    data: faqs,
    isLoading,
  } = useFAQs(i18n.language)

  const {
    data: contact,
  } = useContact()


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header phone={contact?.phone || ""} />

      {/* Hero Section */}
      <header className="bg-[#010088] text-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">

              <p className="text-3xl md:text-5xl font-bold">{t("hero.subtitle")}</p>
              <p className="text-3xl md:text-5xl font-bold">{t("hero.subtitle_name")}</p>
              <p className="text-lg opacity-80">{t("hero.description")}</p>
              <div className="flex flex-row gap-4">
                <Button className="bg-[#7635E9] hover:bg-[#6525D9]" onClick={scrollToContactForm}>
                  {t("hero.enrollButton")}
                </Button>
                <Link href={"#contact"}>
                  <Button variant="outline" className="text-white bg-transparent border-white hover:bg-white/10 hover:text-white">
                    {t("hero.contact")}
                  </Button></Link>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src={contact?.hero_banner || "/logo.webp"}
                alt="Students learning"
                width={500}
                height={400}
                className="rounded-lg shadow-lg bg-white/90"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("about.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">{t("about.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <BookOpen className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("about.qualityTitle")}</h3>
                <p>{t("about.qualityDesc")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <Globe className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("about.diversityTitle")}</h3>
                <p>{t("about.diversityDesc")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <Users className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("about.approachTitle")}</h3>
                <p>{t("about.approachDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("courses.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <CoursesShowcase onEnrollClick={scrollToContactForm} />
        </div>
      </section>

      {/* Teachers Section */}
      {/* <section id="teachers" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("teachers.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <TeacherCarousel />
        </div>
      </section> */}

      {/* Student Results Section */}
      <section id="results" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("results.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <StudentResultsAlt />
        </div>
      </section>

      {/* Telegram Bot Section */}
      <section id="telegram-bot" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold text-[#010088]">{t("telegramBot.title")}</h2>
              <p className="text-gray-600 text-lg">
                {t("telegramBot.description")}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7635E9]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#7635E9]" />
                  </div>
                  <span>{t("telegramBot.feature1")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7635E9]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#7635E9]" />
                  </div>
                  <span>{t("telegramBot.feature2")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7635E9]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#7635E9]" />
                  </div>
                  <span>{t("telegramBot.feature3")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7635E9]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#7635E9]" />
                  </div>
                  <span>{t("telegramBot.feature4")}</span>
                </div>
              </div>

              <Button className="bg-[#7635E9] hover:bg-[#6525D9]">
                <Link href="https://t.me/ZEIN_edtech_bot" target="_blank" className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  {t("telegramBot.openBot")}
                </Link>
              </Button>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-[348px] h-[680px] bg-black rounded-[40px] p-3 shadow-xl">
                {/* Inner Screen */}
                <div className="h-full w-full bg-white rounded-[36px] overflow-hidden flex flex-col">
                  {/* Bot Header */}
                  <div className="bg-[#1B63DB] text-white px-4 py-2 flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" fill="white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-[17px]">ZEIN.UZ Bot</span>
                        <span className="text-[13px] text-white/70">bot</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 bg-[#F1F2F6] p-3 space-y-3 overflow-y-auto">
                    {/* User Message */}
                    <div className="flex justify-end ">
                      <div className="flex items-start gap-2 max-w-[85%] group">
                        <div className="bg-white px-3 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-sm">
                          <p className="text-[14.5px] text-[#232323] font-normal">/start</p>
                        </div>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-start">
                      <div className="flex items-end gap-2 max-w-[85%] group">
                        <div className="bg-white px-3 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-sm">
                          <p className="text-[14.5px] text-[#232323] font-normal leading-[1.4] whitespace-pre-line">Welcome to ZEIN.UZ bot!
                            Please select a language:

                            ZEIN.UZ botiga xush kelibsiz!
                            Iltimos, tilni tanlang:

                            Добро пожаловать в бот ZEIN.UZ!
                            Пожалуйста, выберите язык:</p>
                        </div>
                      </div>
                    </div>

                    {/* Bot Buttons */}
                    <div className="flex flex-col items-start gap-1">
                      <button className="bg-white w-auto px-4 py-[6px] rounded-md hover:bg-[#F8F9FA] transition-colors text-[14.5px] text-[#232323] font-normal shadow-sm">
                        🇺🇿 O'zbek
                      </button>
                      <button className="bg-white w-auto px-4 py-[6px] rounded-md hover:bg-[#F8F9FA] transition-colors text-[14.5px] text-[#232323] font-normal shadow-sm">
                        🇷🇺 Русский
                      </button>
                      <button className="bg-white w-auto px-4 py-[6px] rounded-md hover:bg-[#F8F9FA] transition-colors text-[14.5px] text-[#232323] font-normal shadow-sm">
                        🇬🇧 English
                      </button>
                    </div>
                  </div>

                  {/* Bottom Input Area */}
                  <div className="bg-white border-t border-gray-100 p-2">
                    <div className="bg-[#F1F2F6] rounded-[22px] px-4 py-2.5 text-[14.5px] text-gray-400">
                      Message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div ref={contactFormRef}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("contactForm.title")}</h2>
              <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("faq.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                  <AccordionItem key={index} value={`loading-${index}`}>
                    <AccordionTrigger>
                      <Skeleton className="h-5 w-48" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <Skeleton className="h-20 w-full" />
                    </AccordionContent>
                  </AccordionItem>
                ))
                : faqs?.map((faq) => (
                  <AccordionItem key={faq.id} value={String(faq.id)}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#010088] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 border-none text-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <Phone className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("contact.phone")}</h3>
                <a href={`tel:${contact?.phone || ""}`} className="hover:underline">{contact?.phone || ""}</a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <Mail className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("contact.email")}</h3>
                <p>{contact?.email || ""}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <MessageCircle className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("contact.telegram")}</h3>
                <Link href={contact?.telegram || ""} className="flex items-center gap-2 hover:underline">
                  {contact?.telegram || ""} <ExternalLink size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">{t("contact.admissionTitle")}</h3>
            <p className="max-w-2xl mx-auto mb-8">{t("contact.admissionDesc")}</p>
            <Button className="bg-[#7635E9] hover:bg-[#6525D9]" onClick={scrollToContactForm}>
              {t("contact.registerButton")}
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#010088] font-bold mb-4 md:mb-0">{t("footer.socialMedia")}</p>
            <div className="flex gap-4">
              <Link
                href={contact?.instagram || ""}
                className="flex items-center gap-2 text-[#010088] hover:text-[#7635E9]"
              >
                Instagram <ExternalLink size={16} />
              </Link>
              <Link
                href={contact?.telegram || ""}
                className="flex items-center gap-2 text-[#010088] hover:text-[#7635E9]"
              >
                Telegram <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/logo.webp" alt="ZEIN Logo" width={40} height={40} className="rounded-full bg-white p-1" />
              <span className="font-bold">ZEIN EDTECH</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ZEIN EDTECH MCHJ. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
