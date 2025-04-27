import { ProtectedRoute } from "@/features/protected-route/protected.route";
import ArticlesListSection from "@/features/user/articles/articles.list.section";
import HeroSection from "@/features/user/hero/hero.section";
import React from "react";

export default function ArticlesPage() {
  return (
    <ProtectedRoute>
      <div className="space-y-5">
        <HeroSection />
        <ArticlesListSection />
      </div>
    </ProtectedRoute>
  );
}
