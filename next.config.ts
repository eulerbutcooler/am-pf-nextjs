import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
  },
  images: {
    remotePatterns: [new URL("https://assets.hardcover.app/external_data/**")],
  },
};

export default nextConfig;
