import type { NextConfig } from "next";

const isExport = process.env.CAPACITOR_BUILD === 'true';

const nextConfig: NextConfig = {
  ...(isExport ? { output: 'export', trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '*.ngrok-free.app',
    '*.ngrok-free.dev',
    '*.ngrok.io',
    '*.ngrok.app',
    'localhost:3000',
    '127.0.0.1:3000',
    'quirk-pushy-capably.ngrok-free.dev',
  ],
};

export default nextConfig;


