"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryProps } from "@/types/hero.types";
import { FC } from "react";

export const Category: FC<CategoryProps> = ({
  categories,
  onChange,
  defaultValue,
}) => {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-full bg-white md:w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem
            key={category.value}
            className="text-black"
            value={category.value}
          >
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
