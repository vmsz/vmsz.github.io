import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* configs for github pages */
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
