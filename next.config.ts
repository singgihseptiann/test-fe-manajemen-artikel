import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com", "placehold.co", "picsum.photos"],
  },
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
