import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectorsServedSection } from "@/components/home/SectorsServedSection";
import { getAllProducts } from "@/lib/getProduct";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(
    "Professionnels",
    "Solutions de nettoyage écologiques pour l'industrie, l'hôtellerie, la restauration, les établissements publics et les sociétés de nettoyage."
  );
}

export default async function ProfessionnelsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const productsPro = await getAllProducts("professionnel");

  return (
    <>
      <section className="bg-ink text-paper">
        <Container className="py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-300">
            {dict.nav.professionnels}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Des solutions de nettoyage écologiques, calibrées pour vos exigences professionnelles
          </h1>
          <p className="mt-6 max-w-xl text-base text-mist-200">
            Industrie, hôtellerie, restauration, établissements publics, sociétés de
            nettoyage : CIEL VERT accompagne chaque secteur avec des gammes
            concentrées, performantes et conformes aux exigences d&apos;hygiène
            professionnelle.
          </p>
          <Button href="/professionnels/produits" size="lg" className="mt-8">
            {dict.nav.catalogue}
          </Button>
        </Container>
      </section>

      <SectorsServedSection />

      <Section tone="muted">
        <SectionHeading eyebrow="Catalogue" title="Notre gamme professionnelle" />
        <div className="mt-10">
          <ProductGrid products={productsPro} dict={dict} />
        </div>
      </Section>
    </>
  );
}
