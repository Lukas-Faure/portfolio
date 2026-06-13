export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
  logo?: string;
}

export enum TimelineItemType {
  HEADER = 'header',
  EXPERIENCE = 'experience',
  EDUCATION = 'education'
}

export enum TimelineItemSide {
  LEFT = 'left',
  RIGHT = 'right'
}

export type TimelineItem =
  | { type: TimelineItemType.HEADER; label: string }
  | (Experience & { type: TimelineItemType.EXPERIENCE })
  | (Education & { type: TimelineItemType.EDUCATION });


export const personalInfo = {
  nom: "Lukas Faure",
  age: 22,
  ville: "France mobile entre (Montpellier, Nîmes, Valence)",
  experience: "1 an",
  specialisation: "Développement Web, Logiciel et Mobile",
  passions: [
    "Développement",
    "Gaming",
    "Automobile",
    "Vélo",
  ],
  recherche: "Poste en développement (CDI/CDD)"
};

export const bio = "Actuellement en alternance au laboratoire G-SCOP à Grenoble et en dernière année de BUT Informatique, je terminerai mon cursus en juillet. Pour moi, le développement est un outil qui laisse libre cours à la créativité pour répondre à des besoins concrets. J’aime me lancer des projets pour me challenger et surtout aider les gens. Je considère un projet accompli quand les utilisateurs sont satisfaits et que tout correspond à leurs attentes."
export const experiences: Experience[] = [
  {
    title: "Alternance Développeur C++",
    company: "Laboratoire G-SCOP - Grenoble INP",
    period: "Sept 2025 - Aujourd'hui",
    description: "Au sein de l'équipe CIPP, je conçois en binôme des solutions numériques sur mesure pour les chercheurs. Mon projet majeur est le développement d'un logiciel 'Hub' en C++/Qt centralisant des modèles de recherche. Cette application communique en temps réel avec Rhino8 pour permettre la visualisation et l'analyse de données scientifiques directement dans un flux de travail 3D.",
    tags: ["C++", "Qt", "Rhino8", "Grasshopper", "Architecture Logicielle", "GitLab"],
    logo: "/images/logos/gscop.png"
  },
  {
    title: "Stage Développeur Web FullStack",
    company: "Pytho Partners",
    period: "Avril 2025 - Juillet 2025",
    description: "Intégré à une équipe de 3 développeurs, j'ai participé au développement d'un ERP intelligent (Svelte / SvelteKit) conçu pour automatiser la gestion administrative. J'ai participé au développement de l'agent IA et j'ai pris en charge le module d'analyse des emails, capable de détecter les factures et les pièces jointes. Le système propose des actions automatiques comme la création de notes de frais ou de projets, pour soulager l'utilisateur des tâches répétitives. J'ai également été en charge de la mise en place de la suite de tests (unitaires, E2E, intégration) afin d'assurer la fiabilité du système.",
    tags: ["Svelte", "SvelteKit", "IA", "TypeScript"],
    logo: "/images/logos/pytho.png"
  },
  {
    title: "Projet ProxiFarm",
    company: "Projet Personnel",
    period: "Avril 2024 - Août 2024",
    description: "Conception et déploiement d'une plateforme complète (App Mobile & site Web) dédié à favoriser le circuit court. Développement d'un backend Firebase, intégration des paiements Stripe et publication sur l'App Store et le Google Play Store.",
    tags: ["Flutter", "Firebase", "Stripe API", "App Store / Play Store"],
    logo: "/images/logos/proxifarm.png"
  }
];

export const education: Education[] = [
  {
    degree: "BUT Informatique",
    institution: "IUT2, Grenoble",
    period: "2023 - Présent",
    description: "Spécialisation en développement d'applications.",
    tags: ["Web & Mobile", "Algo", "BDD"],
    logo: "/images/logos/iut2.png"
  },
  {
    degree: "Prépa Ingénieur",
    institution: "INSA Lyon",
    period: "2022 - 2023",
    description: "Cycle préparatoire ingénieur.",
    tags: ["Maths", "Physique", "Informatique"],
    logo: "/images/logos/insa.png"
  },
];

export const contacts = {
  email: "lukas.faure38@gmail.com",
  linkedin: "https://linkedin.com/in/lukas-faure",
  github: "https://github.com/Lukas-Faure",
};
