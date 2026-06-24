import { Leaf, Droplets, Recycle, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  {
    icon: Leaf,
    title: "Ingrédients d'origine végétale",
    description: "Des formules conçues à partir de matières premières biosourcées, sélectionnées pour leur efficacité et leur faible impact.",
  },
  {
    icon: Droplets,
    title: "Biodégradabilité",
    description: "Nos formulations sont étudiées pour se dégrader rapidement dans l'environnement après usage.",
  },
  {
    icon: Recycle,
    title: "Emballages responsables",
    description: "Conditionnements recyclables et formats concentrés pour réduire les volumes transportés et les déchets.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité des utilisateurs",
    description: "Des produits testés pour limiter les risques pour la santé des opérateurs comme des particuliers.",
  },
];

export function EcoCommitmentSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Engagement écologique"
        title="Une démarche environnementale au cœur de chaque formule"
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((item) => (
          <div key={item.title} className="rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-mist-200">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-50 text-forest-600">
              <item.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-base font-semibold text-ink">{item.title}</p>
            <p className="mt-2 text-sm text-ink/70">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
