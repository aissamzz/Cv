import type { Sector } from "./types";

export const sectors: Sector[] = [
  {
    slug: "industrie",
    name: "Industrie",
    description:
      "Solutions de nettoyage et de dégraissage haute performance pour les lignes de production, ateliers et sites industriels.",
    icon: "Factory",
  },
  {
    slug: "hotellerie",
    name: "Hôtellerie",
    description:
      "Produits respectueux des surfaces et du personnel pour un entretien irréprochable des espaces d'accueil et des chambres.",
    icon: "BedDouble",
  },
  {
    slug: "restauration",
    name: "Restauration",
    description:
      "Hygiène alimentaire renforcée et dégraissage efficace pour cuisines professionnelles, conformes aux exigences HACCP.",
    icon: "UtensilsCrossed",
  },
  {
    slug: "etablissements-publics",
    name: "Établissements publics",
    description:
      "Entretien quotidien des écoles, hôpitaux et administrations avec des formulations à moindre impact environnemental.",
    icon: "Landmark",
  },
  {
    slug: "societes-de-nettoyage",
    name: "Sociétés de nettoyage",
    description:
      "Gammes professionnelles concentrées, économiques à l'usage, pensées pour les prestataires de nettoyage multi-sites.",
    icon: "SprayCan",
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}
