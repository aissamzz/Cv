import { Badge } from "@/components/ui/Badge";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import type { Product } from "@/data/types";

export function ProductDetailHero({ product }: { product: Product }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <div>
        {product.videoPlaceholder ? (
          <VideoPlaceholder label={`Présentation — ${product.name}`} />
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-mist-100">
            <span className="text-sm text-ink/40">{product.name}</span>
          </div>
        )}
      </div>
      <div>
        {product.featured ? <Badge className="mb-3">Produit phare</Badge> : null}
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">{product.name}</h1>
        <p className="mt-4 text-base text-ink/70">{product.shortDescription}</p>
        <div className="mt-6 space-y-3">
          {product.description.map((paragraph, index) => (
            <p key={index} className="text-sm text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
