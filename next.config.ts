import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "placehold.co",
      "picsum.photos",
      "nkihbopqxauxphmaqvey.supabase.co", // ✅ tambahkan ini
    ],
  },
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
