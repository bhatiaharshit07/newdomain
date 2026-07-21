import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/articles",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
