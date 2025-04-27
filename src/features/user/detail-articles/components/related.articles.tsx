import ArticlesCard from "@/features/user/articles/components/articles.card";
import { formatDate } from "@/utils/dateUtils";
import imgArticles from "@/assets/user/articles/image.jpg";
interface RelatedArticlesProps {
  articles: any[];
  categoryName: string;
}

export default function RelatedArticles({
  articles,
  categoryName,
}: RelatedArticlesProps) {
  if (articles.length === 0) {
    return (
      <div className="mt-10 w-full max-w-6xl">
        <p className="text-center text-gray-500">
          No other articles in this category
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">Other Articles</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <ArticlesCard
            key={article.id}
            id={article.id}
            imageUrl={article.imageUrl || imgArticles}
            date={formatDate(article.createdAt)}
            title={article.title}
            description={article.content}
            tags={article.category ? [article.category] : []}
          />
        ))}
      </div>
    </div>
  );
}
