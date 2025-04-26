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
  };
}

export interface DetailPageProps {
  params: {
    id: string;
  };
}