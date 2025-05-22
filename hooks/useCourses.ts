import api from "@/lib/axios"
import { useQuery, useQueryClient } from "@tanstack/react-query"

// Define the Course and CourseLevel types
export interface Course {
  id: number
  name_uz: string
  name_ru: string
  levels: CourseLevel[]
}

export interface CourseLevel {
  id: number
  course: number
  title_uz: string
  title_ru: string
  level: string
  duration_months: string
  price: number
  features_uz: string[]
  features_ru: string[]
}

// 1. Fetch Courses
const fetchCourses = async (): Promise<Course[]> => {
  const res = await api.get("/courses/")
  return res.data
}

export function useCourses() {
  const queryClient = useQueryClient()

  // Fetching
  const {
    data: courses,
    isLoading,
    error,
    refetch,
  } = useQuery<Course[], Error>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  })

  return {
    courses,
    isLoading,
    error,
    refetch,
    invalidateCourses: () => queryClient.invalidateQueries({ queryKey: ["courses"] })
  }
}
