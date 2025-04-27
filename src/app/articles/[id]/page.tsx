import { notFound } from "next/navigation";
import DetailArticle from "@/features/user/detail-articles/components/detail.articles";
import imgArticles from "@/assets/user/articles/image.jpg";
import { fetchArticleById } from "@/hooks/useDetailArticles";
import { fetchArticlesBySameCategory } from "@/hooks/useRelatedArticles";
import { formatDate } from "@/utils/dateUtils";
import RelatedArticles from "@/features/user/detail-articles/components/related.articles";
import Container from "@/components/container";

export default async function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  try {
    const article = await fetchArticleById(id);

    if (!article) {
      return notFound();
    }

    const relatedArticles = article.category?.name
      ? await fetchArticlesBySameCategory(article.category.name, article.id)
      : [];

    return (
      <Container>
        <div className="mt-20"></div>
        <DetailArticle
          title={article.title}
          imageUrl={article.imageUrl || imgArticles}
          date={formatDate(article.createdAt)}
          content={article.content}
          tags={article.category ? [{ name: article.category.name }] : []}
        />

        <RelatedArticles
          articles={relatedArticles}
          categoryName={article.category?.name || ""}
        />
      </Container>
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
