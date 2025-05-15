"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useExamResult } from "@/hooks/useResults"
import { Star, Trophy } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"



export default function StudentResults() {
  const { t } = useTranslation()
const {data:results}=useExamResult()


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results?.map((result, index) => (
        <Card key={result.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                  src="/placeholder.svg?height=100&width=100"
                  alt={result.user}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Score badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-bold">{result.user}</h3>
                  <Badge className="bg-[#7635E9]">
                    {result.exam_type}: {result.exam_score}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Student details */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <Badge variant="outline" className="mr-2">
                    {t("results.language")}: {result.language}
                  </Badge>
                  <Badge variant="outline">
                    {t("results.level")}: {result.proficiency_level}
                  </Badge>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">{t("results.achievements")}:</h4>
                <div className="space-y-1">
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 text-[#7635E9] mr-2" />
                    <span>{t("results.reading")}: {result.reading_score}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 text-[#7635E9] mr-2" />
                    <span>{t("results.grammar")}: {result.grammar_score}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 text-[#7635E9] mr-2" />
                    <span>{t("results.vocabulary")}: {result.vocabulary_score}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 text-[#7635E9] mr-2" />
                    <span>{t("results.listening")}: {result.listening_score}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 text-[#7635E9] mr-2" />
                    <span>{t("results.speaking")}: {result.speaking_score}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 text-[#7635E9] mr-2" />
                    <span>{t("results.writing")}: {result.writing_score}</span>
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
