"use client";

import { CategoryProps } from "@/types/hero.types";
import { FC } from "react";

export const Category: FC<CategoryProps> = ({
  categories,
  onChange,
  defaultValue,
}) => {
  return (
    <select
      onChange={(e) => onChange?.(e.target.value)}
      defaultValue={defaultValue}
      className="w-full rounded-md border border-gray-300 bg-white p-2 text-black md:w-[180px]"
    >
      <option value="">Select Category</option>
      {categories.map((category) => (
        <option key={category.name} value={category.name}>
          {category.label}
        </option>
      ))}
    </select>
  );
};
