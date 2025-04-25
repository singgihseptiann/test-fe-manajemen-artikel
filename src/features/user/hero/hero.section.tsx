"use client";
import React from "react";
import Hero from "./components/hero";
import { Category } from "./components/category";
import ArticleSearchInput from "./components/search.articles";
import { categories } from "../../../data/category";
import MotionFadeIn from "@/components/fadein";

export default function HeroSection() {
  return (
    <Hero>
      <MotionFadeIn delay={1.5} direction="up">
        <div className="flex flex-col gap-2 rounded-2xl bg-blue-500 p-3 md:flex-row">
          {" "}
          <Category
            categories={categories}
            onChange={(value) => console.log(value)}
          />
          <ArticleSearchInput />
        </div>
      </MotionFadeIn>
    </Hero>
  );
}
