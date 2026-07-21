import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "harshitbhatia.in",
          },
        ],
        destination: "https://www.harshitbhatia.in/:path*",
        permanent: true,
      },
      {
        source: "/articles",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
