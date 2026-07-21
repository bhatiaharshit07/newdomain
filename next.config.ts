import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        has: [
          {
            type: "host",
            value: "www.harshitbhatia.in",
          },
        ],
        destination: "https://harshitbhatia.in/",
        permanent: true,
      },
      {
        source: "/index.php",
        has: [
          {
            type: "host",
            value: "www.harshitbhatia.in",
          },
        ],
        destination: "https://harshitbhatia.in/",
        permanent: true,
      },
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
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
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
