import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  verification:
    googleSiteVerification || bingSiteVerification
      ? {
          google: googleSiteVerification,
          other: bingSiteVerification
            ? { "msvalidate.01": bingSiteVerification }
            : undefined,
        }
      : undefined,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Harshit Bhatia - CTO at Assert AI specializing in Enterprise Agentic AI Systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about#harshit-bhatia`,
    name: siteConfig.name,
    alternateName: [
      "Harshit Bhatia CTO",
      "Harshit Bhatia Delhi",
      "Harshit Bhatia Assert AI",
      "bhatiaharshit07",
      "harshitbhatiacto",
    ],
    description:
      "Harshit Bhatia is the Chief Technology Officer at Assert AI, based in Delhi, India, focused on Enterprise Agentic AI Systems, AI Platform Engineering, Computer Vision, Edge AI, and AI Security.",
    image: `${siteConfig.url}/harshit-bhatia-avatar.jpeg`,
    jobTitle: siteConfig.role,
    worksFor: {
      "@id": `${siteConfig.companyUrl}/#organization`,
    },
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    alumniOf: siteConfig.education.map((education) => ({
      "@type": "CollegeOrUniversity",
      name: education.school,
    })),
    url: `${siteConfig.url}/about`,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.companyTeamUrl,
    ],
    knowsAbout: [
      "Enterprise Agentic AI Systems",
      "AI Platform Engineering",
      "Computer Vision",
      "Edge AI",
      "AI Security",
      "Multi-Agent Systems",
      "LLM Applications",
      "Product Leadership",
      "CTO Leadership",
      "Organizational Leadership",
      "Digital Economy",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.companyUrl}/#organization`,
    name: siteConfig.company,
    url: siteConfig.companyUrl,
    sameAs: [siteConfig.companyLinkedIn],
    employee: {
      "@id": `${siteConfig.url}/about#harshit-bhatia`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: [
      "Harshit Bhatia - Enterprise Agentic AI Systems",
      "Harshit Bhatia CTO",
      "Harshit Bhatia Delhi",
    ],
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5MPYTLCK21"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5MPYTLCK21');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
