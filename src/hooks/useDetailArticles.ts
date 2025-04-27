import { DetailArticles } from "@/types/articles";

export async function fetchArticleById(id: string): Promise<DetailArticles | null> {
  const res = await fetch(
    `https://test-fe.mysellerpintar.com/api/articles/${id}`,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!res.ok) {
    return res.status === 404
      ? null
      : Promise.reject(`Failed to fetch article: ${res.status}`);
  }

  return res.json();
}
