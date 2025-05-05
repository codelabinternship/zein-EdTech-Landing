"use client"

import ContactForm from "@/components/contact-form"
import CoursesShowcase from "@/components/courses-showcase"
import Header from "@/components/header"
import TeacherCarousel from "@/components/teacher-carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ExternalLink, Globe, Mail, MessageCircle, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "../i18n/config"

// Import the new component at the top of the file
import StudentResultsAlt from "@/components/student-results-alt"

export default function Home() {
  const { t } = useTranslation()
  const [showContactForm, setShowContactForm] = useState(false)
  const contactFormRef = useRef<HTMLDivElement>(null)

  const scrollToContactForm = () => {
    setShowContactForm(true)
    setTimeout(() => {
      contactFormRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <header className="bg-[#010088] text-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <Image src="/logo.png" alt="ZEIN Logo" width={80} height={80} className="rounded-full bg-white p-2" />
                <h1 className="text-3xl md:text-5xl font-bold">{t("hero.title")}</h1>
              </div>
              <p className="text-xl md:text-2xl">{t("hero.subtitle")}</p>
              <p className="text-lg opacity-80">{t("hero.description")}</p>
              <div className="flex flex-row gap-4">
                <Button className="bg-[#7635E9] hover:bg-[#6525D9]" onClick={scrollToContactForm}>
                  {t("hero.enrollButton")}
                </Button>
                <Button variant="outline" className="text-white bg-transparent border-white hover:bg-white/10 hover:text-white">
                  {t("hero.learnMoreButton")}
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/hero-image.png"
                alt="Students learning"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
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
      <section id="teachers" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("teachers.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <TeacherCarousel />
        </div>
      </section>

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
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("telegramBot.title")}</h2>
              <div className="w-20 h-1 bg-[#7635E9] mb-6"></div>
              <p className="text-xl mb-4">{t("telegramBot.subtitle")}</p>
              <p className="mb-6">{t("telegramBot.description")}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#7635E9] hover:bg-[#6525D9]">
                  <Link href="https://t.me/ZEIN_edtech_bot" target="_blank" className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    {t("telegramBot.openBot")}
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href="/telegram-bot" className="flex items-center gap-2">
                    {t("telegramBot.learnMore")}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="bg-[#010088] text-white p-3 rounded-t-lg flex items-center gap-2">
                  <MessageCircle size={20} />
                  <span className="font-medium">ZEIN.UZ Bot</span>
                </div>
                <div className="p-4 border border-t-0 rounded-b-lg">
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">/start</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Welcome to ZEIN.UZ bot! Please select a language:
                          <br />
                          ZEIN.UZ botiga xush kelibsiz! Iltimos, tilni tanlang:
                          <br />
                          Добро пожаловать в бот ZEIN.UZ! Пожалуйста, выберите язык:
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="grid grid-cols-3 gap-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          🇺🇿 O'zbek
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          🇷🇺 Русский
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          🇬🇧 English
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button className="bg-[#7635E9] hover:bg-[#6525D9] w-full">
                      <Link
                        href="https://t.me/ZEIN_edtech_bot"
                        target="_blank"
                        className="flex items-center justify-center gap-2"
                      >
                        {t("telegramBot.tryBot")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div ref={contactFormRef}>
        {showContactForm && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#010088] mb-4">{t("contactForm.title")}</h2>
                <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
              </div>
              <ContactForm />
            </div>
          </section>
        )}
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
              <AccordionItem value="item-1">
                <AccordionTrigger>{t("faq.question1")}</AccordionTrigger>
                <AccordionContent>{t("faq.answer1")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>{t("faq.question2")}</AccordionTrigger>
                <AccordionContent>{t("faq.answer2")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>{t("faq.question3")}</AccordionTrigger>
                <AccordionContent>{t("faq.answer3")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>{t("faq.question4")}</AccordionTrigger>
                <AccordionContent>{t("faq.answer4")}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#010088] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-none text-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <Phone className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("contact.phone")}</h3>
                <p>+998712050772</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <Mail className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("contact.email")}</h3>
                <p>zeinedtech@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <MessageCircle className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("contact.telegram")}</h3>
                <Link href="https://t.me/ZEIN_edtech" className="flex items-center gap-2 hover:underline">
                  @ZEIN_edtech <ExternalLink size={16} />
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
                href="https://instagram.com/Yosh__avlod"
                className="flex items-center gap-2 text-[#010088] hover:text-[#7635E9]"
              >
                Instagram <ExternalLink size={16} />
              </Link>
              <Link
                href="https://t.me/ZEIN_edtech"
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
              <Image src="/logo.png" alt="ZEIN Logo" width={40} height={40} className="rounded-full bg-white p-1" />
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
