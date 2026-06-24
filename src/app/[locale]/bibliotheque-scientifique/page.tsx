import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { LibraryExplorer } from "@/components/library/LibraryExplorer";
import { getAllLibraryEntries } from "@/lib/getLibraryEntry";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(
    "Bibliothèque scientifique",
    "Études, rapports, normes et innovations sur le nettoyage écologique publiés par CIEL VERT."
  );
}

export default async function BibliothequeScientifiquePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const entries = getAllLibraryEntries();

  return (
    <>
      <section className="bg-ink text-paper">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-300">
            {dict.nav.bibliotheque}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Études, rapports et innovations au service du nettoyage écologique
          </h1>
          <p className="mt-6 max-w-xl text-base text-mist-200">
            Retrouvez les publications scientifiques et techniques de CIEL VERT :
            études de biodégradabilité, rapports environnementaux, normes du
            secteur et innovations de formulation.
          </p>
        </Container>
      </section>

      <Section>
        <LibraryExplorer entries={entries} dict={dict} />
      </Section>
    </>
  );
}
