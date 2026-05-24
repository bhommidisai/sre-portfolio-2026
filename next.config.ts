import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // ADD THESE TWO LINES:
  basePath: '/sre-portfolio-2026',
  assetPrefix: '/sre-portfolio-2026',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;