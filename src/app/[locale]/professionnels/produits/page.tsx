import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFilterBar } from "@/components/products/ProductFilterBar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getAllProducts } from "@/lib/getProduct";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(
    "Catalogue professionnel",
    "Catalogue des produits de nettoyage professionnels CIEL VERT, filtrables par secteur d'activité."
  );
}

export default async function ProfessionnelsCataloguePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ secteur?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { secteur } = await searchParams;

  const allProducts = await getAllProducts("professionnel");
  const products = allProducts.filter((product) =>
    secteur ? product.sectors?.includes(secteur) : true
  );

  return (
    <Section>
      <SectionHeading eyebrow={dict.nav.professionnels} title={dict.nav.catalogue} />
      <div className="mt-8">
        <ProductFilterBar basePath="/professionnels/produits" activeSector={secteur} dict={dict} />
      </div>
      <div className="mt-10">
        <ProductGrid products={products} dict={dict} />
      </div>
    </Section>
  );
}
