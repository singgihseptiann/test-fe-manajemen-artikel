import { StaticImageData } from "next/image";

export interface ArticleCardProps {
  id?: string;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  tags: { name: string; id: string }[]; // update ke kategori dengan name dan id
}

export interface DetailArticles {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  category?: {
    name: string;
  };
  user?: {
    username: string;
    role?: string;
  };
}

export interface DetailPageProps {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export interface DetailArticleProps {
  title: string;
  imageUrl: string | StaticImageData;
  date: string;
  content: string;
  tags: { name: string }[];
  createdBy?: string;
}
