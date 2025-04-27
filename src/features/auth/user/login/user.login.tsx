"use client";
import React, { useEffect } from "react";
import { LoginForm } from "./components/login";
import Link from "next/link";
import logoIpsum from "@/assets/user/logo/logo2.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserLogin() {
  const router = useRouter();
  useEffect(() => {
    const userToken = localStorage.getItem("user_token");

    if (userToken) {
      router.push("/articles");
    }
  }, []);
  return (
    <div>
      <div className="w-full rounded-lg bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <Image src={logoIpsum} alt="Logo" className="mx-auto h-auto w-32" />
        </div>

        {/* Login Form */}
        <LoginForm />

        <div className="mt-6 text-center">
          <span>Don't have an account? </span>
          <Link href="/register" className="text-blue-500 underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
