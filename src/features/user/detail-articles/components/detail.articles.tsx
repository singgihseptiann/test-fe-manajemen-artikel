import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DetailArticleProps } from "@/types/articles";

export default function DetailArticle({
  title,
  imageUrl,
  date,
  content,
  tags,
  createdBy,
}: DetailArticleProps) {
  return (
    <div className="mx-auto max-w-full space-y-5">
      <div className="flex justify-center gap-2">
        <div className="text-muted-foreground text-center text-sm">{date}</div>
        <div className="text-muted-foreground text-center text-sm">
          <span className="font-bold">•</span> created by {createdBy}
        </div>
      </div>

      <h1 className="mx-auto w-full text-center text-2xl font-bold md:w-96 lg:w-[1120px] lg:text-4xl">
        {title}
      </h1>

      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={400}
          className="w-full rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline">
            {tag.name}
          </Badge>
        ))}
      </div>

      <div className="prose prose-lg max-w-full overflow-hidden text-sm md:text-base">
        {content}
      </div>
    </div>
  );
}
