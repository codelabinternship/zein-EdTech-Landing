"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Award, BookOpen, Check, ChevronRight, Clock, Users } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface CourseProps {
  onEnrollClick: () => void
}

export default function CoursesShowcase({ onEnrollClick }: CourseProps) {
  const { t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState("russian")

  const languages = [
    { id: "russian", name: t("courses.russian"), icon: "🇷🇺", color: "bg-red-100" },
    { id: "english", name: t("courses.english"), icon: "🇬🇧", color: "bg-blue-100" },
    { id: "turkish", name: t("courses.turkish"), icon: "🇹🇷", color: "bg-red-100" },
    { id: "arabic", name: t("courses.arabic"), icon: "🇸🇦", color: "bg-green-100" },
    { id: "korean", name: t("courses.korean"), icon: "🇰🇷", color: "bg-blue-100" },
  ]

  const courseData = {
    basic: {
      title: t("courses.basicCourse"),
      duration: "1-3",
      level: "A1-A2",
      price: "250.000",
      features: [
        "Individual approach",
        "Learning materials included",
        "Weekly progress tests",
        "Certificate upon completion",
      ],
    },
    standard: {
      title: t("courses.standardCourse"),
      duration: "3-6",
      level: "B1-B2",
      price: "500.000",
      features: [
        "Individual approach",
        "Learning materials included",
        "Weekly progress tests",
        "Certificate upon completion",
        "Speaking club access",
        "Online resources",
      ],
    },
    advanced: {
      title: t("courses.advancedCourse"),
      duration: "6-12",
      level: "C1-C2",
      price: "1.000.000",
      features: [
        "Individual approach",
        "Learning materials included",
        "Weekly progress tests",
        "Certificate upon completion",
        "Speaking club access",
        "Online resources",
        "Native speaker sessions",
        "Exam preparation",
      ],
    },
  }

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

  // Get the current language flag
  const getCurrentLanguageFlag = () => {
    const lang = languages.find((l) => l.id === selectedLanguage)
    return lang ? lang.icon : "🌐"
  }

  return (
    <div className="w-full">
      {/* Language Selection */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setSelectedLanguage(lang.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${selectedLanguage === lang.id ? "bg-[#7635E9] text-white shadow-md" : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <span>{lang.icon}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Basic Course */}
        <motion.div
          key={`${selectedLanguage}-basic`}
          variants={itemVariants}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-5 relative flex flex-col justify-between h-full">
            {/* Flag in corner */}
            <div>
              <div className="absolute top-3 right-3 text-2xl">{getCurrentLanguageFlag()}</div>

              <h3 className="text-xl font-bold text-[#010088] mb-2">{courseData.basic.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-[#7635E9]">{courseData.basic.level}</Badge>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>
                    {courseData.basic.duration} {t("courses.months")}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {courseData.basic.features.map((feature, index) => (
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
                <p className="text-xl font-bold text-[#010088]">{courseData.basic.price} сум</p>
              </div>
              <Button onClick={onEnrollClick} className="bg-[#7635E9] hover:bg-[#6525D9] flex items-center gap-1">
                {t("courses.enrollButton")}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Standard Course */}
        <motion.div
          key={`${selectedLanguage}-standard`}
          variants={itemVariants}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
        >


          <div className="p-5 relative flex flex-col justify-between h-full">
            {/* Flag in corner */}
            <div>
              <div className="absolute top-3 right-3 text-2xl">{getCurrentLanguageFlag()}</div>

              <h3 className="text-xl font-bold text-[#010088] mb-2">{courseData.standard.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-[#7635E9]">{courseData.standard.level}</Badge>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>
                    {courseData.standard.duration} {t("courses.months")}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {courseData.standard.features.map((feature, index) => (
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
                <p className="text-xl font-bold text-[#010088]">{courseData.standard.price} сум</p>
              </div>
              <Button onClick={onEnrollClick} className="bg-[#7635E9] hover:bg-[#6525D9] flex items-center gap-1">
                {t("courses.enrollButton")}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Advanced Course */}
        <motion.div
          key={`${selectedLanguage}-advanced`}
          variants={itemVariants}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-5 relative flex flex-col justify-between h-full">
            {/* Flag in corner */}
            <div>
              <div className="absolute top-3 right-3 text-2xl">{getCurrentLanguageFlag()}</div>

              <h3 className="text-xl font-bold text-[#010088] mb-2">{courseData.advanced.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-[#7635E9]">{courseData.advanced.level}</Badge>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>
                    {courseData.advanced.duration} {t("courses.months")}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {courseData.advanced.features.map((feature, index) => (
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
                <p className="text-xl font-bold text-[#010088]">{courseData.advanced.price} сум</p>
              </div>
              <Button onClick={onEnrollClick} className="bg-[#7635E9] hover:bg-[#6525D9] flex items-center gap-1">
                {t("courses.enrollButton")}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
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
