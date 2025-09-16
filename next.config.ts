import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tmstanker.girishandco.com",
        pathname: "/public/Admin/uploads/**",
      },
    ],
  },
};

export default nextConfig;
