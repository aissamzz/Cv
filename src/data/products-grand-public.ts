import type { Product } from "./types";

export const productsGrandPublic: Product[] = [
  {
    slug: "eco",
    division: "grand-public",
    name: "ECO",
    shortDescription: "Nettoyant multi-surfaces écologique pour toute la maison.",
    description: [
      "ECO est le nettoyant multi-surfaces de la gamme grand public CIEL VERT, formulé à partir d'ingrédients d'origine végétale biodégradables.",
      "Sans danger pour les enfants et les animaux une fois la surface sèche, il convient à un usage quotidien sur l'ensemble des surfaces lavables de la maison.",
    ],
    applications: [
      "Plans de travail et cuisine",
      "Surfaces vitrées et miroirs",
      "Mobilier et surfaces plastiques",
      "Sols durs",
    ],
    usageInstructions: [
      "Vaporiser directement sur la surface à nettoyer.",
      "Essuyer avec un chiffon propre ou un essuie-tout.",
      "Aucun rinçage nécessaire pour un usage courant.",
    ],
    advantages: [
      "Formule biodégradable d'origine végétale",
      "Parfum doux et naturel",
      "Sans javel ni ammoniaque",
      "Flacon recyclable",
    ],
    specs: [
      { label: "pH", value: "7,0 ± 0,5" },
      { label: "Contenance", value: "750 ml" },
      { label: "Parfum", value: "Fleur d'oranger" },
    ],
    images: ["/images/products/grand-public/eco-1.svg"],
    faq: [
      {
        question: "Ce produit est-il sûr en présence d'enfants ?",
        answer:
          "Oui, une fois la surface sèche. Comme pour tout produit d'entretien, gardez-le hors de portée des jeunes enfants.",
      },
      {
        question: "Peut-on l'utiliser sur le bois verni ?",
        answer:
          "Oui, ECO convient aux surfaces vernies. Évitez le bois brut non traité.",
      },
    ],
  },
  {
    slug: "degraissant-professionnel",
    division: "grand-public",
    name: "Dégraissant Professionnel",
    shortDescription: "Dégraissant puissant grand format, qualité pro à la maison.",
    description: [
      "Issu du savoir-faire professionnel de CIEL VERT, ce dégraissant grand format apporte une efficacité de niveau professionnel pour les graisses tenaces du quotidien.",
      "Idéal pour les plaques de cuisson, les hottes et les ustensiles fortement encrassés.",
    ],
    applications: [
      "Plaques de cuisson et fours",
      "Hottes aspirantes",
      "Ustensiles de cuisine",
      "Grilles de barbecue",
    ],
    usageInstructions: [
      "Vaporiser sur la surface froide.",
      "Laisser agir 2 à 3 minutes sur les graisses tenaces.",
      "Essuyer ou rincer selon la surface.",
    ],
    advantages: [
      "Efficacité testée en conditions professionnelles",
      "Action rapide sur les graisses cuites",
      "Format économique",
      "Biodégradable",
    ],
    specs: [
      { label: "pH", value: "11,5 ± 0,5" },
      { label: "Contenance", value: "1 L" },
    ],
    images: ["/images/products/grand-public/degraissant-pro-1.svg"],
    faq: [
      {
        question: "Convient-il aux surfaces en aluminium ?",
        answer:
          "Nous recommandons un test préalable sur une petite zone et de rincer rapidement après application.",
      },
    ],
  },
  {
    slug: "salle-de-bain",
    division: "grand-public",
    name: "Salle de Bain",
    shortDescription: "Nettoyant anticalcaire écologique pour la salle de bain.",
    description: [
      "Spécialement conçu pour la salle de bain, ce nettoyant élimine le calcaire, les traces de savon et les dépôts d'eau dure sans agresser les surfaces ni les voies respiratoires.",
    ],
    applications: [
      "Robinetterie et pommeaux de douche",
      "Carrelage et joints",
      "Parois de douche",
      "Lavabos et baignoires",
    ],
    usageInstructions: [
      "Vaporiser sur la surface humide.",
      "Laisser agir quelques minutes sur le calcaire.",
      "Rincer à l'eau claire et essuyer.",
    ],
    advantages: [
      "Anticalcaire efficace sans acide fort",
      "Sans parfum allergisant",
      "Respecte les joints en silicone",
    ],
    specs: [
      { label: "pH", value: "3,0 ± 0,5" },
      { label: "Contenance", value: "750 ml" },
    ],
    images: ["/images/products/grand-public/salle-de-bain-1.svg"],
    faq: [
      {
        question: "Peut-il être utilisé sur la robinetterie chromée ?",
        answer: "Oui, sa formule respecte les finitions chromées et inox.",
      },
    ],
  },
  {
    slug: "sol-et-plus",
    division: "grand-public",
    name: "Sol et Plus",
    shortDescription: "Nettoyant sols concentré, efficace sur tous types de revêtements.",
    description: [
      "Sol et Plus est un nettoyant concentré pour l'entretien régulier de tous types de sols durs : carrelage, parquet vitrifié, lino et pierre naturelle.",
    ],
    applications: [
      "Carrelage et grès",
      "Parquet vitrifié",
      "Lino et PVC",
      "Pierre naturelle traitée",
    ],
    usageInstructions: [
      "Diluer un bouchon dans un seau d'eau tiède.",
      "Laver au balai lavant ou à la mono-brosse.",
      "Laisser sécher à l'air, aucun rinçage nécessaire.",
    ],
    advantages: [
      "Format concentré, économique à l'usage",
      "Brillance naturelle sans film gras",
      "Parfum frais longue durée",
    ],
    specs: [
      { label: "pH", value: "7,5 ± 0,5" },
      { label: "Contenance", value: "1 L" },
    ],
    images: ["/images/products/grand-public/sol-et-plus-1.svg"],
    faq: [
      {
        question: "Convient-il au parquet brut ?",
        answer:
          "Non, réservez ce produit aux parquets vitrifiés ou traités. Pour le bois brut, demandez conseil via notre formulaire de contact.",
      },
    ],
  },
];
