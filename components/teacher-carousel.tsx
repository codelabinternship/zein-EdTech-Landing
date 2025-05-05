"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Teacher {
  name: string
  language: string
  experience: string
  image: string
}

export default function TeacherCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const teachers: Teacher[] = [
    {
      name: "Mohinur",
      language: t("courses.turkish"),
      experience: "1 " + t("teachers.experience"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Feruza",
      language: t("courses.english"),
      experience: "2 " + t("teachers.experience"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Madina",
      language: t("courses.russian"),
      experience: "2 " + t("teachers.experience"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Diyora",
      language: t("courses.korean"),
      experience: "2 " + t("teachers.experience"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Abdulloh",
      language: t("courses.arabic"),
      experience: "2 " + t("teachers.experience"),
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const visibleTeachers = 3 // Number of teachers visible at once on desktop
  const maxIndex = teachers.length - visibleTeachers

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (carouselRef.current) {
      const translateX = (currentIndex * -100) / visibleTeachers
      carouselRef.current.style.transform = `translateX(${translateX}%)`
    }
  }, [currentIndex])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md"
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out px-10"
        style={{ width: `${(teachers.length / visibleTeachers) * 100}%` }}
      >
        {teachers.map((teacher, index) => (
          <div key={index} className="px-4" style={{ width: `${100 / teachers.length}%` }}>
            <Card className="overflow-hidden h-full">
              <div className="h-64 relative">
                <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{teacher.name}</CardTitle>
                <CardDescription>{teacher.language}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{teacher.experience}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Mobile dots navigation */}
      <div className="flex justify-center mt-4 md:hidden">
        {Array.from({ length: teachers.length }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? "bg-[#7635E9]" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
