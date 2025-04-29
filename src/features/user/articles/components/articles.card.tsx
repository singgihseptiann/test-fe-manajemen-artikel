// components/ArticlesCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; // import Link
import { ArticleCardProps } from "@/types/articles";
import Tag from "@/components/tag";

// components/ArticlesCard.tsx
export default function ArticlesCard({
  id,
  imageUrl,
  date,
  title,
  description,
  tags,
}: ArticleCardProps) {
  return (
    <Link href={`/articles/${id}`}>
      <Card className="group cursor-pointer overflow-hidden rounded-md border-0 py-0 shadow-none transition-shadow hover:shadow-md">
        <div className="overflow-hidden rounded-md">
          <Image
            src={imageUrl || "/default-image.jpg"}
            alt="Card Image"
            width={300}
            height={200}
            className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <CardDescription className="text-muted-foreground mb-1 text-sm">
            {date}
          </CardDescription>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="mt-2 line-clamp-2 text-sm">
            {description}
          </CardDescription>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((category, index) => (
              <Tag key={index} label={category.name} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
