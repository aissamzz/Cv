import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { getAllProducts, getFeaturedProducts } from "@/lib/getProduct";
import type { Dictionary } from "@/i18n/dictionaries";

export async function DivisionsHighlight({ dict }: { dict: Dictionary }) {
  const [featuredProducts, productsGrandPublic] = await Promise.all([
    getFeaturedProducts(),
    getAllProducts("grand-public"),
  ]);
  const featuredPro = featuredProducts.filter((product) => product.division === "professionnel").slice(0, 3);
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
