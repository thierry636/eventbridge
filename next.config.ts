import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // La page vivait sous /eventbridge : on garde les liens déjà partagés.
  async redirects() {
    return [{ source: "/eventbridge", destination: "/", permanent: true }];
  },
};

export default nextConfig;
