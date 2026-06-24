import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/realisations/CaseStudyCard";
import { ClientLogoStrip } from "@/components/realisations/ClientLogoStrip";
import { caseStudies } from "@/data/case-studies";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(
    "Réalisations",
    "Études de cas et témoignages clients de CIEL VERT dans l'hôtellerie, la restauration, l'industrie et les établissements publics."
  );
}

export default async function RealisationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-ink text-paper">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-300">
            {dict.nav.realisations}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Des résultats concrets pour nos clients professionnels
          </h1>
          <p className="mt-6 max-w-xl text-base text-mist-200">
            Découvrez comment des hôtels, restaurants, sociétés de nettoyage,
            établissements publics et sites industriels ont transformé leur
            entretien grâce aux solutions CIEL VERT.
          </p>
        </Container>
      </section>

      <Section tone="muted">
        <ClientLogoStrip />
      </Section>

      <Section>
        <SectionHeading eyebrow="Études de cas" title="Réalisations & références" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>
    </>
  );
}
