import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.r10s.jp",
        pathname: "/mariko-s/**",
      },
    ],
  },
};

export default nextConfig;
