import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { ProductDetailHero } from "@/components/products/ProductDetailHero";
import { ProductSpecsTable } from "@/components/products/ProductSpecsTable";
import { ProductFAQ } from "@/components/products/ProductFAQ";
import { QuickContactForm } from "@/components/products/QuickContactForm";
import { WhereToBuyBlock } from "@/components/products/WhereToBuyBlock";
import { getAllProducts, getProductBySlug } from "@/lib/getProduct";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const products = await getAllProducts("grand-public");
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug("grand-public", slug);
  if (!product) return {};
  return pageMetadata(product.name, product.shortDescription);
}

export default async function GrandPublicProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const product = await getProductBySlug("grand-public", slug);
  if (!product) notFound();

  return (
    <>
      <Section>
        <ProductDetailHero product={product} />
      </Section>
      <Section tone="muted">
        <ProductSpecsTable product={product} dict={dict} />
      </Section>
      {product.faq ? (
        <Section>
          <ProductFAQ faq={product.faq} dict={dict} />
        </Section>
      ) : null}
      <Section tone="muted">
        <WhereToBuyBlock dict={dict} />
      </Section>
      <Section>
        <div className="mx-auto max-w-xl">
          <QuickContactForm productName={product.name} dict={dict} />
        </div>
      </Section>
    </>
  );
}
