import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "hotel-es-saada",
    clientName: "Hôtel Es Saada",
    sector: "hotellerie",
    title: "Transition complète vers une gamme d'entretien écologique",
    challenge:
      "L'hôtel souhaitait réduire l'usage de produits chimiques agressifs sans compromettre la qualité perçue par sa clientèle internationale.",
    solution:
      "Déploiement de la gamme professionnelle CIEL VERT sur l'ensemble des chambres, espaces communs et sanitaires, avec formation du personnel d'entretien.",
    results: [
      "Réduction de 30% des achats de produits chimiques",
      "Aucune réclamation client liée à l'hygiène depuis la transition",
      "Amélioration des conditions de travail du personnel d'entretien",
    ],
    beforeImage: "/images/realisations/hotel-es-saada-before.svg",
    afterImage: "/images/realisations/hotel-es-saada-after.svg",
    testimonialId: "t1",
    images: ["/images/realisations/hotel-es-saada-1.svg"],
  },
  {
    slug: "restaurant-el-bahdja",
    clientName: "Restaurant El Bahdja",
    sector: "restauration",
    title: "Dégraissage cuisine et conformité hygiène alimentaire",
    challenge:
      "Les plaques de cuisson et hottes accumulaient des graisses difficiles à éliminer, ralentissant les opérations de nettoyage quotidien.",
    solution:
      "Mise en place du CV 300B sur l'ensemble des postes de cuisson, avec un protocole de nettoyage quotidien optimisé.",
    results: [
      "Temps de nettoyage réduit de 40%",
      "Conformité renforcée aux contrôles d'hygiène",
      "Disparition des odeurs chimiques en cuisine",
    ],
    testimonialId: "t2",
    images: ["/images/realisations/restaurant-el-bahdja-1.svg"],
  },
  {
    slug: "net-service-algerie",
    clientName: "Net Service Algérie",
    sector: "societes-de-nettoyage",
    title: "Standardisation des produits sur plusieurs sites industriels",
    challenge:
      "Le prestataire de nettoyage devait harmoniser ses produits sur plusieurs sites clients industriels tout en maîtrisant les coûts.",
    solution:
      "Déploiement du CV 840 et du CV 3000 sur l'ensemble des sites, avec un accompagnement technique pour le dosage et la formation des équipes.",
    results: [
      "Réduction des coûts produits de 20% grâce aux formats concentrés",
      "Standardisation des protocoles sur tous les sites",
      "Satisfaction client industriel maintenue",
    ],
    testimonialId: "t3",
    images: ["/images/realisations/net-service-1.svg"],
  },
  {
    slug: "lycee-ibn-khaldoun",
    clientName: "Lycée Ibn Khaldoun",
    sector: "etablissements-publics",
    title: "Entretien quotidien d'un établissement scolaire à faible impact",
    challenge:
      "L'établissement souhaitait limiter l'exposition des élèves et du personnel aux produits chimiques tout en respectant un budget contraint.",
    solution:
      "Mise en place du CV 3000 pour l'entretien quotidien des salles de classe, couloirs et sanitaires.",
    results: [
      "Aucune plainte liée aux odeurs ou irritations depuis la mise en place",
      "Budget produits d'entretien maîtrisé",
    ],
    images: ["/images/realisations/lycee-ibn-khaldoun-1.svg"],
  },
  {
    slug: "unite-agroalimentaire-bejaia",
    clientName: "Unité agroalimentaire de Béjaïa",
    sector: "industrie",
    title: "Dégraissage industriel et hygiène des lignes de production",
    challenge:
      "Les lignes de production accumulaient des résidus gras nécessitant un dégraissant industriel performant et compatible avec les normes agroalimentaires.",
    solution:
      "Déploiement du CV 840 sur les zones de production et stockage, avec procédure de nettoyage adaptée aux exigences agroalimentaires.",
    results: [
      "Amélioration de la propreté des lignes de production",
      "Réduction des arrêts machine liés à l'encrassement",
    ],
    images: ["/images/realisations/agroalimentaire-bejaia-1.svg"],
  },
];
