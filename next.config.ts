import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sre-portfolio-2026', // Add this
  assetPrefix: '/sre-portfolio-2026', // Add this
  images: {
    unoptimized: true,
  },
};

export default nextConfig;