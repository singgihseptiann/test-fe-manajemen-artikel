"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface DetailArticleProps {
  title: string;
  imageUrl: string;
  date: string;
  content: string;
  tags: { name: string }[];
}

export default function DetailArticle({
  title,
  imageUrl,
  date,
  content,
  tags,
}: DetailArticleProps) {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="mb-6">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={400}
          className="w-full rounded-lg object-cover"
        />
      </div>

      <div className="mb-4 text-sm text-muted-foreground">{date}</div>

      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline">
            {tag.name}
          </Badge>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        {content}
      </div>
    </div>
  );
}
