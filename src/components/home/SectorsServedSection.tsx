import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import { sectors } from "@/data/sectors";
import { sectorIcons } from "@/lib/sector-icons";

export function SectorsServedSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Secteurs servis"
        title="Une expertise adaptée à chaque environnement professionnel"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => {
          const Icon = sectorIcons[sector.icon];
          return (
            <Link
              key={sector.slug}
              href={`/professionnels/produits?secteur=${sector.slug}`}
              className="group rounded-2xl border border-mist-200 p-6 transition-colors hover:border-forest-300 hover:bg-forest-50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-50 text-forest-600 group-hover:bg-forest-100">
                {Icon ? <Icon className="h-5 w-5" /> : null}
              </span>
              <p className="mt-4 text-base font-semibold text-ink">{sector.name}</p>
              <p className="mt-2 text-sm text-ink/70">{sector.description}</p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
