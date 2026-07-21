import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Enterprise AI products and platforms for analytics, no-code AI workflows, warehouse intelligence, computer vision, and operations.",
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <Section
        className="pt-32"
        eyebrow="Products"
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
