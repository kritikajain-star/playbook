import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // REQUIRED for static export + IIS deployment
  reactStrictMode: true,
};

export default nextConfig;