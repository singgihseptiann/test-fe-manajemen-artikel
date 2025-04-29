"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/service/service";
import { usePagination } from "@/context/pagination.context";
import { useEffect, useState } from "react";

export const useCategories = (search?: string) => {
  return useQuery({
    queryKey: ["categories", search],
    queryFn: () => api.get("categories", { search }),
  });
};

export const useCategoryLogic = () => {
  const { search, setCategory, category } = usePagination();
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    setIsSearchActive(!!search);
  }, [search]);

  return { isSearchActive, setIsSearchActive, setCategory, category };
};