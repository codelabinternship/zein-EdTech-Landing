import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  order: number;
  created_at?: string;
}

export function useFAQs(language: string) {
  const {
    data,
    isLoading,
    error,
  } = useQuery<FAQ[], Error>({
    queryKey: ["faqs", language],
    queryFn: async () => {
      const res = await api.get(`/faqs/?lang=${language}`);
      return res.data;
    },
  });

  return {
    data,
    isLoading,
    error,
  };
}
