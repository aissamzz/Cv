import type { Division, Product } from "@/data/types";
import { productsPro } from "@/data/products-pro";
import { productsGrandPublic } from "@/data/products-grand-public";

const byDivision: Record<Division, Product[]> = {
  professionnel: productsPro,
  "grand-public": productsGrandPublic,
};

// Seam for a future CMS: keep this signature, swap the in-memory lookup for an API call.
export function getAllProducts(division: Division): Product[] {
  return byDivision[division];
}

export function getProductBySlug(
  division: Division,
  slug: string
): Product | undefined {
  return byDivision[division].find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return [...productsPro, ...productsGrandPublic].filter(
    (product) => product.featured
  );
}
