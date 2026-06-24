import { Link } from "@/i18n/navigation";
import type { NavItem } from "@/lib/navigation";
import type { Dictionary } from "@/i18n/dictionaries";
import { sectors } from "@/data/sectors";

export function MegaMenu({ item, dict }: { item: NavItem; dict: Dictionary }) {
  if (!item.megaMenu) return null;

  return (
    <div className="absolute start-0 top-full w-screen max-w-md rounded-2xl border border-mist-200 bg-paper p-6 shadow-xl">
      <ul className="space-y-1">
        {item.megaMenu.links.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-mist-100"
            >
              {dict.nav[link.key as keyof Dictionary["nav"]]}
            </Link>
          </li>
        ))}
      </ul>

      {item.megaMenu.showSectors ? (
        <div className="mt-4 border-t border-mist-200 pt-4">
          <p className="px-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
            Secteurs
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-1">
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <Link
                  href={`/professionnels/produits?secteur=${sector.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-mist-100"
                >
                  {sector.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
