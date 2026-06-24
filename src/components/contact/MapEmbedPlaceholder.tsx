import { MapPin } from "lucide-react";

export function MapEmbedPlaceholder() {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-mist-100">
      <div className="flex flex-col items-center gap-2 text-ink/50">
        <MapPin className="h-8 w-8" />
        <p className="text-sm">Carte — Zone Industrielle, Alger, Algérie</p>
      </div>
    </div>
  );
}
