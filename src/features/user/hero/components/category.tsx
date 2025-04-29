"use client";

import { CategoryProps } from "@/types/hero.types";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePagination } from "@/context/pagination.context";

export const Category: FC<CategoryProps> = ({ categories, defaultValue }) => {
  const { setCategory } = usePagination();

  return (
    <Select
      onValueChange={(value) => setCategory(value)}
      defaultValue={defaultValue}
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
