import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { getAllSectors } from "@/lib/getSector";
import type { Dictionary } from "@/i18n/dictionaries";

export async function ProductFilterBar({
  basePath,
  activeSector,
  dict,
}: {
  basePath: string;
  activeSector?: string;
  dict: Dictionary;
}) {
  const sectors = await getAllSectors();
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={basePath}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          !activeSector ? "bg-forest-500 text-paper" : "bg-mist-100 text-ink/70 hover:bg-mist-200"
        )}
      >
        {dict.common.allSectors}
      </Link>
      {sectors.map((sector) => (
        <Link
          key={sector.slug}
          href={`${basePath}?secteur=${sector.slug}`}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeSector === sector.slug
              ? "bg-forest-500 text-paper"
              : "bg-mist-100 text-ink/70 hover:bg-mist-200"
          )}
        >
          {sector.name}
        </Link>
      ))}
    </div>
  );
}
