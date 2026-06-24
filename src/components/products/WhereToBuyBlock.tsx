import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

const retailers = [
  { name: "Supermarchés partenaires", area: "Alger, Oran, Constantine" },
  { name: "Drogueries et quincailleries agréées", area: "Réseau national" },
  { name: "Boutique en ligne CIEL VERT", area: "Livraison à l'échelle nationale" },
];

export function WhereToBuyBlock({ dict }: { dict: Dictionary }) {
  return (
    <div>
      <SectionHeading title={dict.common.whereToBuy} />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {retailers.map((retailer) => (
          <div key={retailer.name} className="rounded-xl border border-mist-200 p-5">
            <MapPin className="h-5 w-5 text-forest-500" />
            <p className="mt-3 text-sm font-semibold text-ink">{retailer.name}</p>
            <p className="mt-1 text-sm text-ink/60">{retailer.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
