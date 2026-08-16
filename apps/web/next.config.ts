import type { NextConfig } from "next";

const isExport = process.env.CAPACITOR_BUILD === 'true';

const nextConfig: NextConfig = {
  ...(isExport ? { output: 'export', trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;


