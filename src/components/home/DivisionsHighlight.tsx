import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { productsPro } from "@/data/products-pro";
import { productsGrandPublic } from "@/data/products-grand-public";
import type { Dictionary } from "@/i18n/dictionaries";

export function DivisionsHighlight({ dict }: { dict: Dictionary }) {
  const featuredPro = productsPro.filter((product) => product.featured).slice(0, 3);
  const featuredGrandPublic = productsGrandPublic.slice(0, 3);

  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Nos gammes" title="Deux divisions, une même exigence écologique" />

      <div className="mt-12">
        <p className="text-lg font-semibold text-ink">{dict.nav.professionnels}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPro.map((product) => (
            <ProductCard key={product.slug} product={product} dict={dict} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="text-lg font-semibold text-ink">{dict.nav.grandPublic}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGrandPublic.map((product) => (
            <ProductCard key={product.slug} product={product} dict={dict} />
          ))}
        </div>
      </div>
    </Section>
  );
}
