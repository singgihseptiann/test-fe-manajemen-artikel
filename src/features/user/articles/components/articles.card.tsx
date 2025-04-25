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

import { ArticleCardProps } from "@/types/articles.card.types";
import Tag from "@/components/tag";

export default function ArticlesCard({
  imageUrl,
  date,
  title,
  description,
  tags,
}: ArticleCardProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <Image src={imageUrl} alt="Card Image" width={300} height={200} />
        <CardDescription>{date}</CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex gap-2">
          {tags.map((category, index) => (
            <Tag key={index} label={category.name} />
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
