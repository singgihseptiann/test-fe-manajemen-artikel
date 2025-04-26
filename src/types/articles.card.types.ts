export interface ArticleCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  tags: { name: string; id: string }[]; // update ke kategori dengan name dan id
}
