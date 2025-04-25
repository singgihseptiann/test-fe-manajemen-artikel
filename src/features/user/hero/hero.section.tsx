"use client";
import React from "react";
import Hero from "./components/hero";
import { Category } from "./components/category";
import ArticleSearchInput from "./components/search.articles";
import { categories } from "../data/category";

export default function HeroSection() {
  return (
    <Hero>
      <div className="flex flex-col gap-2 rounded-2xl bg-blue-500 p-3 md:flex-row">
        <Category
          categories={categories}
          onChange={(value) => console.log(value)}
        />
        <ArticleSearchInput />
      </div>
    </Hero>
  );
}
