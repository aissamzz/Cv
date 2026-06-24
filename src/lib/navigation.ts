export interface NavLink {
  key: string;
  href: string;
}

export interface NavItem extends NavLink {
  megaMenu?: {
    links: NavLink[];
    showSectors?: boolean;
  };
}

export const mainNav: NavItem[] = [
  { key: "home", href: "/" },
  {
    key: "professionnels",
    href: "/professionnels",
    megaMenu: {
      links: [
        { key: "presentation", href: "/professionnels" },
        { key: "catalogue", href: "/professionnels/produits" },
      ],
      showSectors: true,
    },
  },
  {
    key: "grandPublic",
    href: "/grand-public",
    megaMenu: {
      links: [
        { key: "presentation", href: "/grand-public" },
        { key: "catalogue", href: "/grand-public/produits" },
      ],
    },
  },
  { key: "bibliotheque", href: "/bibliotheque-scientifique" },
  { key: "realisations", href: "/realisations" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { key: "legal", href: "#" },
  { key: "privacy", href: "#" },
  { key: "terms", href: "#" },
];
