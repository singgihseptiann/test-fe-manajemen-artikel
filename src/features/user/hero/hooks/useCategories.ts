import { useQuery } from "@tanstack/react-query";
import api from "@/service/service";

export const useCategories = (search?: string) => {
  return useQuery({
    queryKey: ["categories", search],
    queryFn: () => api.get("categories", { search }),
  });
};
