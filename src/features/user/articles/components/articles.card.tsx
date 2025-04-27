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
      {" "}
      {/* Using id as that's what the API expects */}
      <Card className="cursor-pointer border-0 shadow-none transition-shadow hover:shadow-md">
        <CardHeader>
          <Image
            src={imageUrl || "/default-image.jpg"}
            alt="Card Image"
            width={300}
            height={200}
          />
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
    </Link>
  );
}
