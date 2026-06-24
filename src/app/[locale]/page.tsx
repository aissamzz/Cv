import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { MissionSection } from "@/components/home/MissionSection";
import { EcoCommitmentSection } from "@/components/home/EcoCommitmentSection";
import { SectorsServedSection } from "@/components/home/SectorsServedSection";
import { DivisionsHighlight } from "@/components/home/DivisionsHighlight";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { NewsSection } from "@/components/home/NewsSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <MissionSection />
      <EcoCommitmentSection />
      <SectorsServedSection />
      <DivisionsHighlight dict={dict} />
      <TestimonialsSection />
      <NewsSection />
    </>
  );
}
