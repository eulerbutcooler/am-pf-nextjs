import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    dynamicIO: true,
  },
  images: {
    remotePatterns: [new URL("https://assets.hardcover.app/**")],
  },
};

export default nextConfig;
