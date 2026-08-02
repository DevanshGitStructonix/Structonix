import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "serbianbuildfund.com",
      },
      {
        protocol: "https",
        hostname: "www.steelwonders.in",
      },
      {
        protocol: "https",
        hostname: "khushipebinfrastructure.com",
      },
    ],
  },
};

export default nextConfig;
