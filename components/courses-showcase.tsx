"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useCourses } from "@/hooks/useCourses"
import { motion } from "framer-motion"
import { Award, BookOpen, Check, ChevronRight, Clock, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

interface CourseProps {
  onEnrollClick: () => void
}

export default function CoursesShowcase({ onEnrollClick }: CourseProps) {
  const { t, i18n } = useTranslation()
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)
  const { courses, isLoading } = useCourses()

  // Set first course as default when courses are loaded
  useEffect(() => {
    if (courses && courses.length > 0 && !selectedCourseId) {
      setSelectedCourseId(courses[0].id)
    }
  }, [courses])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const getLocalizedName = (course: any) => {
    return i18n.language === 'ru' ? course.name_ru : course.name_uz
  }

  const getLocalizedTitle = (level: any) => {
    return i18n.language === 'ru' ? level.title_ru : level.title_uz
  }

  const getLocalizedFeatures = (level: any) => {
    return i18n.language === 'ru' ? level.features_ru : level.features_uz
  }

  const selectedCourse = courses?.find(course => course.id === selectedCourseId)

  const LoadingSkeleton = () => (
    <>
      {/* Course Selection Skeleton */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-10 w-32 rounded-full" />
        ))}
      </div>

      {/* Course Levels Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/4 mb-4" />
            <div className="space-y-2 mb-6">
              {[1, 2, 3, 4].map((j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        ))}
      </div>
    </>
  )

  if (isLoading) {
    return (
      <div className="w-full">
        <LoadingSkeleton />
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Course Selection */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {courses?.map((course) => (
          <button
            key={course.id}
            onClick={() => setSelectedCourseId(course.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${selectedCourseId === course.id ? "bg-[#7635E9] text-white shadow-md" : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <span>{getLocalizedName(course)}</span>
          </button>
        ))}
      </div>

      {/* Course Levels */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {selectedCourse?.levels.map((level) => (
          <motion.div
            key={level.id}
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="p-5 relative flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-[#010088] mb-2">
                  {getLocalizedTitle(level)}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-[#7635E9]">{level.level}</Badge>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>
                      {level.duration_months} {t("courses.months")}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {getLocalizedFeatures(level).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{t("courses.from")}</p>
                  <p className="text-xl font-bold text-[#010088]">
                    {Number(level.price).toLocaleString()} сум
                  </p>
                </div>
                <Button
                  onClick={onEnrollClick}
                  className="bg-[#7635E9] hover:bg-[#6525D9] flex items-center gap-1"
                >
                  {t("courses.enrollButton")}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Course Benefits */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-[#010088]">{t("courses.benefits")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#7635E9]/10 flex items-center justify-center mb-4">
              <Award className="text-[#7635E9] h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">{t("courses.certifiedTeachers")}</h4>
            <p className="text-gray-600 text-sm">{t("courses.certifiedTeachersDesc")}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#7635E9]/10 flex items-center justify-center mb-4">
              <BookOpen className="text-[#7635E9] h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">{t("courses.modernMaterials")}</h4>
            <p className="text-gray-600 text-sm">{t("courses.modernMaterialsDesc")}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#7635E9]/10 flex items-center justify-center mb-4">
              <Clock className="text-[#7635E9] h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">{t("courses.flexibleSchedule")}</h4>
            <p className="text-gray-600 text-sm">{t("courses.flexibleScheduleDesc")}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#7635E9]/10 flex items-center justify-center mb-4">
              <Users className="text-[#7635E9] h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">{t("courses.smallGroups")}</h4>
            <p className="text-gray-600 text-sm">{t("courses.smallGroupsDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
