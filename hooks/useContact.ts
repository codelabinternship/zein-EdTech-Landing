import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface Contact {
  id: number;
  phone: string;
  email: string;
  hero_banner: string | null;
  telegram: string;
  instagram: string;
}

export function useContact() {
  const {
    data,
    isLoading,
    error,
  } = useQuery<Contact, Error>({
    queryKey: ["contact"],
    queryFn: async () => {
      const res = await api.get("/contacts/");
      return res.data;
    },
  });

  return {
    data,
    isLoading,
    error,
  };
}
