import React from "react";

import Link from "next/link";
import logoIpsum from "@/assets/user/logo/logo2.png";
import Image from "next/image";
import { RegisterForm } from "./components/register";
export default function UserRegister() {
  return (
    <div>
      <div className="w-full rounded-lg bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <Image src={logoIpsum} alt="Logo" className="mx-auto h-auto w-32" />
        </div>

        {/* Login Form */}
        <RegisterForm />
      </div>
    </div>
  );
}
