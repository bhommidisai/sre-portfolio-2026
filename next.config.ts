import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix for S3/CloudFront root hosting
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;