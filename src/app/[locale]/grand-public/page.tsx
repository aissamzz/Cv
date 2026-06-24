import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getAllProducts } from "@/lib/getProduct";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(
    "Grand Public",
    "Découvrez la gamme grand public CIEL VERT : des produits de nettoyage écologiques pour toute la maison."
  );
}

export default async function GrandPublicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const productsGrandPublic = await getAllProducts("grand-public");

  return (
    <>
      <section className="bg-forest-50">
        <Container className="py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
            {dict.nav.grandPublic}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Le nettoyage écologique au quotidien, pour toute la famille
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink/70">
            Une gamme grand public conçue avec la même exigence d&apos;efficacité que
            nos formules professionnelles, pour un entretien de la maison plus
            respectueux de votre santé et de l&apos;environnement.
          </p>
          <Button href="/grand-public/produits" size="lg" className="mt-8">
            {dict.nav.catalogue}
          </Button>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow="Catalogue" title="Notre gamme grand public" />
        <div className="mt-10">
          <ProductGrid products={productsGrandPublic} dict={dict} />
        </div>
      </Section>
    </>
  );
}
