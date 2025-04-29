import { createContext, useContext, useState } from "react";

interface PaginationContextType {
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  category: string;
  setCategory: (category: string) => void;
  search: string;
  setSearch: (search: string) => void;
}

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined,
);

export function PaginationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        limit,
        setLimit,
        category,
        setCategory,
        search,
        setSearch,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
}
