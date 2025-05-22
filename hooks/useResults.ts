import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface ExamResult {
  id: number;
  user: string;
  language: string;
  proficiency_level: string;
  exam_type: string;
  exam_score: number;
  created_at: string;
  updated_at: string;
  details:[{component:string,score:number}],
  image:string
}

export function useExamResult() {
  const {
    data,
    isLoading,
    error,
  } = useQuery<ExamResult[], Error>({
    queryKey: ["faq"],
    queryFn: async () => {
      const res = await api.get("/exam-results/");
      return res.data
    },
  });

  return {
    data,
    isLoading,
    error,
  };
}
