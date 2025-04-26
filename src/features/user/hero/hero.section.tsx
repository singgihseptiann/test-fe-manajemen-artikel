"use client";
import React from "react";
import Hero from "./components/hero";
import { Category } from "./components/category";
import ArticleSearchInput from "./components/search.articles";

import MotionFadeIn from "@/components/fadein";
import { useCategories } from "./hooks/useCategories";

export default function HeroSection() {
  const [search, setSearch] = React.useState("");
  const { data: response, isLoading, isError } = useCategories(search);
  const categories = response?.data ?? [];

  return (
    <Hero>
      <MotionFadeIn delay={1.5} direction="up">
        <div className="flex flex-col gap-2 rounded-2xl bg-blue-500 p-3 md:flex-row">
          {" "}
          <Category
            categories={categories.map((cat: any) => ({
              name: cat.name,
              label: cat.name,
            }))}
            onChange={(value) => console.log(value)}
          />
          <ArticleSearchInput onSearch={(keyword) => setSearch(keyword)} />
        </div>
      </MotionFadeIn>
    </Hero>
  );
}
