import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { MapEmbedPlaceholder } from "@/components/contact/MapEmbedPlaceholder";
import { pageMetadata } from "@/lib/seo";

const validTypes = ["info", "devis", "partenariat"] as const;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(
    "Contact",
    "Contactez CIEL VERT pour une demande d'information, un devis professionnel ou une demande de partenariat."
  );
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { type } = await searchParams;
  const defaultType = validTypes.find((value) => value === type) ?? "info";

  return (
    <Section>
      <SectionHeading eyebrow={dict.nav.contact} title="Parlons de votre projet" />
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm dict={dict} defaultType={defaultType} />
        </div>
        <div className="space-y-6">
          <ContactInfoCard />
          <MapEmbedPlaceholder />
        </div>
      </div>
    </Section>
  );
}
