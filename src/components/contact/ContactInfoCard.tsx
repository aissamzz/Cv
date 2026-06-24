import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfoCard() {
  return (
    <div className="rounded-2xl border border-mist-200 p-6">
      <p className="text-lg font-semibold text-ink">Nos coordonnées</p>
      <ul className="mt-4 space-y-3 text-sm text-ink/70">
        <li className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-forest-500" />
          +213 (0)23 00 00 00
        </li>
        <li className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-forest-500" />
          contact@cielvert.dz
        </li>
        <li className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-forest-500" />
          Zone Industrielle, Alger, Algérie
        </li>
      </ul>
    </div>
  );
}
