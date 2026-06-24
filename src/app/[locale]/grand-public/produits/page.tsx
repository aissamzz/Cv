import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getAllProducts } from "@/lib/getProduct";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(
    "Catalogue grand public",
    "Catalogue des produits de nettoyage écologiques CIEL VERT pour la maison."
  );
}

export default async function GrandPublicCataloguePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const products = getAllProducts("grand-public");

  return (
    <Section>
      <SectionHeading eyebrow={dict.nav.grandPublic} title={dict.nav.catalogue} />
      <div className="mt-10">
        <ProductGrid products={products} dict={dict} />
      </div>
    </Section>
  );
}
