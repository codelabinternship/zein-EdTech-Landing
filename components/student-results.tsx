"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star } from "lucide-react"

interface Student {
  name: string
  course: string
  level: string
  score: number
  examType: string
  image: string
  achievements?: string[]
}

export default function StudentResults() {
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
          <CardContent className="p-0">
            <div className="relative">
              {/* Position indicator */}
              <div className="absolute top-3 left-3 z-10 bg-[#7635E9] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Trophy for top 3 */}
              {index < 3 && (
                <div className="absolute top-3 right-3 z-10">
                  <Trophy
                    className={`h-6 w-6 ${
                      index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-amber-700"
                    }`}
                  />
                </div>
              )}

              {/* Student image - ADJUSTED HEIGHT AND OBJECT-FIT */}
              <div className="w-full h-64 relative">
                <Image
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Score badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-bold">{student.name}</h3>
                  <Badge className="bg-[#7635E9]">
                    {student.examType}: {student.score}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Student details */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <Badge variant="outline" className="mr-2">
                    {student.course}
                  </Badge>
                  <Badge variant="outline">
                    {t("results.level")}: {student.level}
                  </Badge>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">{t("results.achievements")}:</h4>
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
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
