"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ArticleSearchInput = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        type="search"
        placeholder="Search Articles"
        className="border-none bg-white pl-10 text-gray-400 shadow-none ring-0 outline-none focus:border-none focus:shadow-none focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

export default ArticleSearchInput;
