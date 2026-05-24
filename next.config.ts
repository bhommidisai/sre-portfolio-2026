import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Required for static hosting
  images: {
    unoptimized: true,   // Required for GitHub Pages
  },
};

export default nextConfig;