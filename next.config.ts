import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // La page vivait sous /eventbridge : on garde les liens déjà partagés.
  async redirects() {
    return [
      { source: "/eventbridge", destination: "/", permanent: true },
      // Domaine nu → www (adresse canonique), comme le faisait Netlify.
      {
        source: "/:path*",
        has: [{ type: "host", value: "agendata.fr" }],
        destination: "https://www.agendata.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
