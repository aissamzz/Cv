import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function ProductCard({ product, dict }: { product: Product; dict: Dictionary }) {
  const base = product.division === "professionnel" ? "/professionnels" : "/grand-public";

  return (
    <Link
      href={`${base}/produits/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-mist-200 bg-paper transition-shadow hover:shadow-lg"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-mist-100">
        <span className="text-sm text-ink/40">{product.name}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-base font-semibold text-ink">{product.name}</p>
        <p className="mt-2 flex-1 text-sm text-ink/70">{product.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-600 group-hover:text-forest-700">
          {dict.common.seeProduct}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
