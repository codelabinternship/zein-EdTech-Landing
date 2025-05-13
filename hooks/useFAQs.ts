import api from "@/lib/axios";
import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";


export interface FAQ {
  id: number
  question: string
  answer: string
  order: number;
  created_at?:string
}

const fetchFAQs = async (): Promise<FAQ[]> => {
  const res = await api.get("/faq/")
  return res.data
}

export function useFAQs() {
  const queryClient = useQueryClient()
  // Fetching
  const {
    data,
    isLoading,
    error,
  } = useQuery<FAQ[], Error>({
    queryKey: ["faq"],
    queryFn: fetchFAQs,
  })
  return {
    data,
    isLoading,
    error,
  }
}

