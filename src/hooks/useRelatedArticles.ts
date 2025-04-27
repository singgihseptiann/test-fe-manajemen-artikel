export async function fetchArticlesBySameCategory(
  categoryName: string,
  currentArticleId: string,
  limit: number = 3,
) {
  try {
    const res = await fetch(
      `https://test-fe.mysellerpintar.com/api/articles?limit=1000`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await res.json();

    const filteredArticles =
      data?.data?.filter((article: any) => {
        return (
          article.category?.name === categoryName &&
          article.id !== currentArticleId
        );
      }) || [];

    return filteredArticles.slice(0, limit);
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
}
