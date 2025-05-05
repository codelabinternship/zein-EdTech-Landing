"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Award } from "lucide-react"

interface Student {
  name: string
  course: string
  level: string
  score: number
  examType: string
  image: string
  achievements?: string[]
}

export default function StudentResultsAlt() {
  const { t } = useTranslation()

  const students: Student[] = [
    {
      name: "Aziza Karimova",
      course: t("courses.english"),
      level: "C1",
      score: 7.5,
      examType: "IELTS",
      image: "/placeholder.svg?height=100&width=100",
      achievements: ["Reading: 8.0", "Listening: 7.5", "Writing: 7.0", "Speaking: 7.5"],
    },
    {
      name: "Bobur Aliyev",
      course: t("courses.turkish"),
      level: "B2",
      score: 95,
      examType: "TÖMER",
      image: "/placeholder.svg?height=100&width=100",
      achievements: ["Grammar: 98", "Vocabulary: 92", "Listening: 95"],
    },
    {
      name: "Dilnoza Umarova",
      course: t("courses.russian"),
      level: "C2",
      score: 97,
      examType: "TORFL",
      image: "/placeholder.svg?height=100&width=100",
      achievements: ["Reading: 98", "Grammar: 97", "Vocabulary: 96"],
    },
    {
      name: "Farrukh Toshpulatov",
      course: t("courses.arabic"),
      level: "B1",
      score: 92,
      examType: "ALPT",
      image: "/placeholder.svg?height=100&width=100",
      achievements: ["Reading: 90", "Writing: 94", "Speaking: 92"],
    },
    {
      name: "Gulnora Rakhimova",
      course: t("courses.korean"),
      level: "A2",
      score: 4.5,
      examType: "TOPIK",
      image: "/placeholder.svg?height=100&width=100",
      achievements: ["Listening: 4.0", "Reading: 5.0", "Writing: 4.5"],
    },
    {
      name: "Humoyun Saidov",
      course: t("courses.english"),
      level: "B2",
      score: 93,
      examType: "TOEFL",
      image: "/placeholder.svg?height=100&width=100",
      achievements: ["Reading: 25/30", "Listening: 28/30", "Speaking: 22/30", "Writing: 24/30"],
    },
  ]

  // Sort students by score (highest first)
  const topStudents = [...students].sort((a, b) => b.score - a.score)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topStudents.map((student, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-[#7635E9] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-lg">{student.name}</CardTitle>
              </div>
              {index < 3 && (
                <Trophy
                  className={`h-6 w-6 ${
                    index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-amber-700"
                  }`}
                />
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Student image - HORIZONTAL LAYOUT */}
              <div className="w-full md:w-1/2 h-56 md:h-auto relative rounded-lg overflow-hidden">
                <Image
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Student details */}
              <div className="w-full md:w-1/2">
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline">{student.course}</Badge>
                    <Badge variant="outline">
                      {t("results.level")}: {student.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#7635E9]" />
                    <Badge className="bg-[#7635E9]">
                      {student.examType}: {student.score}
                    </Badge>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">{t("results.achievements")}:</h4>
                  <div className="space-y-1">
                    {student.achievements?.map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Star className="h-3 w-3 text-[#7635E9] mr-2" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
