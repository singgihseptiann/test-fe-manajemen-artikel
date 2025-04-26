import DetailArticle from "@/features/user/detail-articles/components/detail.articles";
import { fetchArticleById } from "@/hooks/useDetailArticles";
import { DetailPageProps } from "@/types/articles";
import { formatDate } from "@/utils/dateUtils";
import { notFound } from "next/navigation";

export default async function ArticleDetailPage({ params }: DetailPageProps) {
  const { id } = params;

  try {
    const article = await fetchArticleById(id);

    if (!article) {
      return notFound();
    }

    return (
      <div className="flex h-screen items-center justify-center">
        <DetailArticle
          title={article.title}
          imageUrl={article.imageUrl || "/default-image.jpg"}
          date={formatDate(article.createdAt)}
          content={article.content}
          tags={article.category ? [{ name: article.category.name }] : []}
        />
      </div>
    );
  } catch (error) {
    console.error("Error rendering article:", error);
    return (
      <div className="p-8 text-center text-red-500">
        Error: Failed to load article. Please try again later.
      </div>
    );
  }
}
