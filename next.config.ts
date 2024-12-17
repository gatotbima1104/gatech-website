import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    
    formats: ["image/webp"],
    // domains: ["randomuser.me"], // Add the external domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "*.contentful.com", // For other Contentful domains
      },
    ],
  },
};

export default nextConfig;
