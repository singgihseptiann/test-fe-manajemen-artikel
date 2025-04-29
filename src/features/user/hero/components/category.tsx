"use client";

import { CategoryProps } from "@/types/hero.types";
import { FC, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePagination } from "@/context/pagination.context";
import { useCategoryLogic } from "../hooks/useCategories";

export const Category: FC<CategoryProps> = ({ categories, defaultValue }) => {
  const { category, setCategory, isSearchActive } = useCategoryLogic();

  return (
    <Select
      onValueChange={(value) => setCategory(value)}
      value={isSearchActive ? "" : category || defaultValue}
    >
      <SelectTrigger className="w-full cursor-pointer bg-white text-black md:w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem
            className="cursor-pointer text-black"
            key={category.name}
            value={category.name}
          >
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
