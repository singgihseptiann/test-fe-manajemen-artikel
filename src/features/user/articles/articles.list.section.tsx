"use client";
import React from "react";
import ArticlesCard from "./components/articles.card";
import Container from "@/components/container";
import imgArticles from "@/assets/user/articles/image.jpg";
import { useArticles } from "./hooks/useArticles";
import PaginationControls from "@/components/pagination.controls";
import { usePagination } from "@/context/pagination.context";
import ArticlesCardSkeleton from "./components/articles.card.skeleton";
import MotionFadeIn from "@/components/fadein";

export default function ArticlesListSection() {
  const { page, setPage, limit } = usePagination();
  const { data: response, isLoading, isError } = useArticles();

  const articles = response?.data ?? [];
  const totalCount = response?.total ?? 0;
  const totalPages = Math.ceil(totalCount / limit);

  if (isLoading) {
    return (
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <ArticlesCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    );
  }

  if (isError) return <p>Failed to fetch articles</p>;
  if (!articles.length) return <p>No articles available</p>;

  return (
    <Container>
      <div className="flex px-6">
        showing: {articles.length} of {totalCount}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {articles.map((article: any, index: number) => (
          <MotionFadeIn direction="left" key={article.id} delay={index * 1}>
            <ArticlesCard
              imageUrl={article.imageUrl || imgArticles}
              date={new Date(article.createdAt).toLocaleDateString()}
              title={article.title}
              description={article.content}
              tags={article.category ? [article.category] : []}
            />
          </MotionFadeIn>
        ))}
      </div>

      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Container>
  );
}
