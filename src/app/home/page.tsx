import ArticlesListSection from "@/features/user/articles/articles.list.section";
import HeroSection from "@/features/user/hero/hero.section";
import React from "react";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <HeroSection />
      <ArticlesListSection />
    </div>
  );
}
