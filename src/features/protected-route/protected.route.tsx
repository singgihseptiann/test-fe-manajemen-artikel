// components/ProtectedRoute.tsx

"use client";

import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user_token");

    if (!token) {
      router.push("/"); // Redirect kalau ga ada token
    } else {
      setIsAuthenticated(true); // Kalau ada token, boleh akses
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <p className="items center flex h-screen justify-center text-center text-2xl text-red-500">
        anda belum login
      </p>
    );
  }

  return <>{children}</>;
}
