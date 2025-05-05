"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

interface CourseProps {
  onEnrollClick: () => void
}

export default function AnimatedCourses({ onEnrollClick }: CourseProps) {
  const { t } = useTranslation()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedTab, setSelectedTab] = useState("russian")

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
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

  const languages = [
    { id: "russian", name: t("courses.russian") },
    { id: "english", name: t("courses.english") },
    { id: "turkish", name: t("courses.turkish") },
    { id: "arabic", name: t("courses.arabic") },
    { id: "korean", name: t("courses.korean") },
  ]

  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="w-full">
      <Tabs defaultValue="russian" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          {languages.map((lang) => (
            <TabsTrigger key={lang.id} value={lang.id} className="transition-all">
              {lang.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait">
          {languages.map((lang) => (
            <TabsContent key={lang.id} value={lang.id} className="mt-0">
              <motion.div
                key={lang.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{lang.name}</CardTitle>
                    <CardDescription>{t("courses.levels")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants}>
                      <motion.div
                        variants={itemVariants}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-bold mb-2">{t("courses.basicCourse")}</h4>
                        <p className="text-sm mb-4">
                          {t("courses.duration")}: 1-3 {t("courses.months")}
                        </p>
                        <p className="text-sm mb-4">{t("courses.level")}: A1-A2</p>
                        <p className="font-bold">{t("courses.from")} 250.000 сум</p>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-bold mb-2">{t("courses.standardCourse")}</h4>
                        <p className="text-sm mb-4">
                          {t("courses.duration")}: 3-6 {t("courses.months")}
                        </p>
                        <p className="text-sm mb-4">{t("courses.level")}: B1-B2</p>
                        <p className="font-bold">{t("courses.from")} 500.000 сум</p>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-bold mb-2">{t("courses.advancedCourse")}</h4>
                        <p className="text-sm mb-4">
                          {t("courses.duration")}: 6-12 {t("courses.months")}
                        </p>
                        <p className="text-sm mb-4">{t("courses.level")}: C1-C2</p>
                        <p className="font-bold">{t("courses.from")} 1.000.000 сум</p>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#7635E9] hover:bg-[#6525D9] w-full" onClick={onEnrollClick}>
                      {t("courses.enrollButton")}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}
