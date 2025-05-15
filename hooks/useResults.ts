import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface ExamResult {
  id: number;
  user: string;
  language: string;
  proficiency_level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  exam_type: 'TOEFL' | 'IELTS' | 'TORFL' | 'TOPIK' | 'TOMER' | 'ALPT';
  exam_score: string;
  reading_score: string;
  grammar_score: string;
  vocabulary_score: string;
  listening_score: string;
  speaking_score: string;
  writing_score: string;
  created_at: string;
  updated_at: string;
}

export function useExamResult() {
  const {
    data,
    isLoading,
    error,
  } = useQuery<ExamResult[], Error>({
    queryKey: ["faq"],
    queryFn: async () => {
      const res = await api.get("/results/");
      return res.data
    },
  });

  return {
    data,
    isLoading,
    error,
  };
}
