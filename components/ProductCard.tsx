import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductVisual } from "@/components/ProductVisual";
import { MotionReveal } from "@/components/Motion";
import type { Product } from "@/types/site";

type ProductCardProps = {
  product: Product;
  reverse?: boolean;
};

export function ProductCard({ product, reverse }: ProductCardProps) {
  return (
    <MotionReveal
      as="article"
      className="grid overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] lg:grid-cols-2"
    >
      <div className={`min-h-[320px] ${reverse ? "lg:order-2" : ""}`}>
        <ProductVisual variant={product.visual} />
      </div>
      <div className="flex flex-col justify-between gap-12 p-8 sm:p-10 lg:p-12">
        <div>
          <Badge>{product.name}</Badge>
          <h3 className="mt-6 text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
            {product.title}
          </h3>
          <p className="mt-5 max-w-[62ch] text-lg leading-8 text-[color:var(--muted)]">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                className="rounded-full bg-[color:var(--soft)] px-3 py-1 text-sm text-[color:var(--muted)]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Button href={product.href} icon={ArrowUpRight} variant="secondary">
            Discuss this product
          </Button>
        </div>
      </div>
    </MotionReveal>
  );
}
