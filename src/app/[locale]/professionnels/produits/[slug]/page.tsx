import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { ProductDetailHero } from "@/components/products/ProductDetailHero";
import { ProductSpecsTable } from "@/components/products/ProductSpecsTable";
import { QuoteRequestForm } from "@/components/products/QuoteRequestForm";
import { productsPro } from "@/data/products-pro";
import { getProductBySlug } from "@/lib/getProduct";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    productsPro.map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug("professionnel", slug);
  if (!product) return {};
  return pageMetadata(product.name, product.shortDescription);
}

export default async function ProfessionnelProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const product = getProductBySlug("professionnel", slug);
  if (!product) notFound();

  return (
    <>
      <Section>
        <ProductDetailHero product={product} />
      </Section>
      <Section tone="muted">
        <ProductSpecsTable product={product} dict={dict} />
      </Section>
      <Section>
        <div className="mx-auto max-w-xl">
          <QuoteRequestForm productName={product.name} dict={dict} />
        </div>
      </Section>
    </>
  );
}
