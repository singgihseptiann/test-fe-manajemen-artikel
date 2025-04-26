"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaginationProvider } from "@/context/pagination.context";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient(); // Pastikan queryClient hanya dibuat di sini
  return (
    <QueryClientProvider client={queryClient}>
      <PaginationProvider>{children}</PaginationProvider>
    </QueryClientProvider>
  );
}
