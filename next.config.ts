import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.harshitbhatia.in",
          },
        ],
        destination: "https://harshitbhatia.in/:path*",
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
