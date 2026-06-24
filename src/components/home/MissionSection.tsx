import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MissionSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Notre mission"
        title="Réinventer le nettoyage, sans compromis sur l'efficacité"
        subtitle="Depuis sa création, CIEL VERT développe des formules de nettoyage performantes qui réduisent l'impact environnemental sans renoncer à l'efficacité attendue par les professionnels et les familles algériennes."
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-3xl font-bold text-forest-600">+10</p>
          <p className="mt-1 text-sm text-ink/70">références produits professionnelles et grand public</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-forest-600">90%</p>
          <p className="mt-1 text-sm text-ink/70">de biodégradabilité moyenne sur nos formules phares</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-forest-600">5</p>
          <p className="mt-1 text-sm text-ink/70">secteurs professionnels accompagnés au quotidien</p>
        </div>
      </div>
    </Section>
  );
}
