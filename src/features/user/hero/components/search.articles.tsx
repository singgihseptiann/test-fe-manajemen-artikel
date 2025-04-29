"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FC, useEffect } from "react";
import { usePagination } from "@/context/pagination.context";
import useSearchInput from "../hooks/useSearchInput";

interface ArticleSearchInputProps {
  onSearch: (value: string) => void;
}

const ArticleSearchInput: FC<ArticleSearchInputProps> = ({ onSearch }) => {
  const { search, setSearch } = usePagination();

  const { inputValue, setInputValue } = useSearchInput(onSearch);

  useEffect(() => {
    setInputValue(search);
  }, [search, setInputValue]);

  return (
    <div className="relative w-full">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        type="search"
        placeholder="Search Articles"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-none bg-white pl-10 text-gray-400 shadow-none ring-0 outline-none focus:border-none focus:shadow-none focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

export default ArticleSearchInput;
