import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig:NextConfig = {
  output: isProd ? "export" : "standalone",
  trailingSlash: true,
  basePath: "/game-ui",
  assetPrefix: "/game-ui/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
