import { usePagination } from "@/context/pagination.context";
import api from "@/service/service";
import { useQuery } from "@tanstack/react-query";

export const useArticles = () => {
  const { page, limit, category, search } = usePagination();

  return useQuery({
    queryKey: ["articles", page, limit, category, search],
    queryFn: () =>
      api.get("articles", {
        page,
        limit,
        ...(category && { category }),
        ...(search && { title: search }),
      }),
  });
};
