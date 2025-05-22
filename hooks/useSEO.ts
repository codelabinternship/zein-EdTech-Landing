import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string | null;
}

export function useSEO() {
  const {
    data,
    isLoading,
    error,
  } = useQuery<SEO, Error>({
    queryKey: ["seo"],
    queryFn: async () => {
      const res = await api.get("/seo/");
      return res.data;
    },
  });

  return {
    data,
    isLoading,
    error,
  };
}
