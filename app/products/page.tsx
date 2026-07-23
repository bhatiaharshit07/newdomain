import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { products } from "@/content/site";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = getPageMetadata({
  title: "Enterprise AI & Computer Vision Products",
  description:
    "Enterprise AI products and platforms for analytics, no-code AI workflows, warehouse intelligence, computer vision, and operations.",
  path: "/products",
});

export default function ProductsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: "BusinessApplication",
        description: product.description,
        url: `${siteConfig.url}/products`,
      },
    })),
  };

  return (
    <main>
      <Navbar />
      <JsonLd data={[breadcrumbSchema, productSchema]} />
      <Section
        breadcrumbs={
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Products" }]}
          />
        }
        className="pt-32"
        eyebrow="Products"
        headingLevel={1}
        title="Enterprise AI platforms built for operational reality."
      >
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
