import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Performance & optimization
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Image optimization
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },

  // Security headers are configured in vercel.json

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: "Template App",
  },
};

export default nextConfig;
