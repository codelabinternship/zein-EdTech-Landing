"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const languages = [
  { code: "ru", name: "Русский", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "uz", name: "O'zbek", flag: "https://flagcdn.com/w40/uz.png" },
]

export default function Header({ phone }: { phone: string }) {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const lang = languages.find((l) => l.code === i18n.language) || languages[0]
    setCurrentLanguage(lang)
  }, [i18n.language])

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
    const lang = languages.find((l) => l.code === code) || languages[0]
    setCurrentLanguage(lang)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.webp" alt="ZEIN Logo" width={60} height={60} className="rounded-full bg-white p-1" />
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#about" className="text-gray-700 hover:text-[#7635E9]">
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-700 hover:text-[#7635E9]">
                  {t("header.courses")}
                </Link>
              </li>
              <li>
                <Link href="#telegram-bot" className="text-gray-700 hover:text-[#7635E9]">
                  {t("header.telegramBot")}
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-gray-700 hover:text-[#7635E9]">
                  {t("header.results")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Language selector and phone */}
          <div className="flex items-center space-x-4">
            <a href="tel:+998712050772" className="hidden md:flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2" />
              {phone}
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 px-2">
                  <Image className="rounded-sm" src={currentLanguage.flag} alt={currentLanguage.code} width={24} height={16} />
                  <span className="hidden md:inline">{currentLanguage.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="cursor-pointer"
                  >
                    <Image className="rounded-sm" src={lang.flag} alt={lang.code} width={24} height={16} />
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about"
                  className="block text-gray-700 hover:text-[#7635E9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="block text-gray-700 hover:text-[#7635E9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.courses")}
                </Link>
              </li>
              <li>
                <Link
                  href="#teachers"
                  className="block text-gray-700 hover:text-[#7635E9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.teachers")}
                </Link>
              </li>
              <li>
                <Link
                  href="#telegram-bot"
                  className="block text-gray-700 hover:text-[#7635E9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.telegramBot")}
                </Link>
              </li>
              <li>
                <Link
                  href="#results"
                  className="block text-gray-700 hover:text-[#7635E9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.results")}
                </Link>
              </li>
              <li>
                <a
                  href="tel:+998712050772"
                  className="flex items-center text-gray-700 hover:text-[#7635E9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +998 71 205 07 72
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
