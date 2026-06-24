import { ProductCard } from "./ProductCard";
import type { Product } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function ProductGrid({ products, dict }: { products: Product[]; dict: Dictionary }) {
  if (products.length === 0) {
    return <p className="text-sm text-ink/60">Aucun produit ne correspond à ce filtre pour le moment.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} dict={dict} />
      ))}
    </div>
  );
}
