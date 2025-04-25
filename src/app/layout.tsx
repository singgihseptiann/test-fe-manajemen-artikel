// root layout (rootLayout.tsx)
import React from "react";
// Pastikan ini adalah client-side wrapper
import { Geist, Geist_Mono } from "next/font/google";
import UserLayout from "@/layout/user/user.layout";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <UserLayout>{children}</UserLayout>
        </Providers>
      </body>
    </html>
  );
}
