import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "fal.media"], // Added both Cloudinary and fal.media domains
  },
};

export default nextConfig;
