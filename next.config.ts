import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Ignore type errors during production builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
