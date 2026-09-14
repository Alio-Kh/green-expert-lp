import {
  Leaf,
  Droplets,
  Sun,
  TreePine,
  Shovel,
  Shield,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  heading: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  heroImagePosition?: string;
  benefits: string[];
  approach: { title: string; description: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "design-paysager",
    icon: Leaf,
    title: "Design paysager",
    heading: "Conception de jardins sur mesure",
    shortDescription:
      "Création de plans personnalisés qui allient esthétique et fonctionnalité",
    longDescription:
      "Chaque jardin est unique. Nos paysagistes conçoivent des plans sur-mesure qui reflètent votre style de vie, s'adaptent à votre terrain et subliment votre architecture. De l'esquisse initiale au rendu 3D, nous donnons vie à votre vision.",
    heroImage: "/images/services/design-paysager.jpg",
    benefits: [
      "Étude approfondie du terrain et de l'exposition",
      "Plans 2D et rendus 3D photoréalistes",
      "Sélection de végétaux adaptés au climat marocain",
      "Intégration harmonieuse avec votre architecture",
      "Respect de votre budget et de vos contraintes",
    ],
    approach: [
      {
        title: "Consultation & Analyse",
        description:
          "Nous visitons votre terrain, écoutons vos besoins et analysons les contraintes techniques (exposition, sol, drainage).",
      },
      {
        title: "Conception & Plans",
        description:
          "Nos paysagistes élaborent plusieurs propositions avec plans détaillés, palette végétale et rendus 3D.",
      },
      {
        title: "Validation & Ajustements",
        description:
          "Nous affinons le design avec vous jusqu'à obtenir un projet qui vous ressemble parfaitement.",
      },
    ],
    metaTitle: "Conception de jardins au Maroc",
    metaDescription:
      "Paysagistes experts au Maroc : conception de jardins personnalisés, plans 2D/3D, sélection végétale adaptée au climat local. Devis personnalisé.",
  },
  {
    slug: "systemes-irrigation",
    icon: Droplets,
    title: "Systèmes d'irrigation",
    heading: "Installation d’arrosage automatique",
    shortDescription:
      "Solutions d'arrosage intelligentes et économes en eau",
    longDescription:
      "L'eau est précieuse, surtout au Maroc. Nos systèmes d'irrigation automatisés et pilotés par capteurs garantissent un arrosage précis, adaptent l’apport d’eau aux besoins de chaque zone et préservent la santé de votre jardin, même en votre absence.",
    heroImage: "/images/services/irrigation.jpg",
    benefits: [
      "Arrosage ciblé grâce à la micro-irrigation",
      "Programmation intelligente selon la météo",
      "Pilotage à distance via smartphone",
      "Capteurs d'humidité du sol en option",
      "Installation discrète et durable",
    ],
    approach: [
      {
        title: "Étude hydraulique",
        description:
          "Analyse de la pression disponible, des besoins en eau de chaque zone et du type de sol.",
      },
      {
        title: "Installation professionnelle",
        description:
          "Pose soignée des canalisations, programmateurs et goutteurs pour une performance optimale.",
      },
      {
        title: "Mise en service & Formation",
        description:
          "Nous vous formons à l'utilisation du système et assurons le suivi saisonnier.",
      },
    ],
    metaTitle: "Arrosage automatique au Maroc",
    metaDescription:
      "Installation de systèmes d'irrigation automatiques et connectés au Maroc. Économies d'eau, pilotage smartphone, suivi selon votre contrat.",
  },
  {
    slug: "eclairage-exterieur",
    icon: Sun,
    title: "Éclairage extérieur",
    heading: "Éclairage de jardins et d’extérieurs",
    shortDescription: "Mise en valeur nocturne de votre espace vert",
    longDescription:
      "Prolongez la vie de votre jardin après le coucher du soleil. Notre éclairage paysager met en scène vos végétaux, sécurise les circulations et crée des ambiances intimes, tout en respectant l'environnement grâce à la technologie LED basse consommation.",
    heroImage: "/images/services/eclairage-exterieur.jpg",
    benefits: [
      "Technologie LED basse consommation",
      "Mise en valeur des arbres, massifs et façades",
      "Sécurisation des allées et escaliers",
      "Scénarios d'éclairage programmables",
      "Matériel étanche et résistant (IP67)",
    ],
    approach: [
      {
        title: "Conception lumière",
        description:
          "Nous identifions les points forts à éclairer et imaginons les ambiances adaptées à chaque zone.",
      },
      {
        title: "Installation électrique",
        description:
          "Câblage enterré conforme aux normes, avec transformateurs basse tension pour plus de sécurité.",
      },
      {
        title: "Réglages fins",
        description:
          "Ajustement des intensités, angles et scénarios pour une mise en scène parfaite.",
      },
    ],
    metaTitle: "Éclairage de jardin au Maroc",
    metaDescription:
      "Installation d'éclairage extérieur paysager au Maroc : LED basse consommation, mise en valeur de vos végétaux, ambiances nocturnes sur-mesure.",
  },
  {
    slug: "plantation",
    icon: TreePine,
    title: "Plantation",
    heading: "Plantation d’arbres et de végétaux",
    shortDescription:
      "Sélection et installation d'espèces adaptées à votre environnement",
    longDescription:
      "De l'arbre centenaire aux massifs fleuris, la réussite d'un jardin dépend du bon végétal à la bonne place. Nous sélectionnons avec soin des espèces résistantes au climat marocain et préparons leur installation ainsi que les soins nécessaires à leur reprise.",
    heroImage: "/images/field-work/planting-team-enhanced.webp",
    heroImagePosition: "center 52%",
    benefits: [
      "Palette végétale adaptée au climat local",
      "Plantes méditerranéennes et endémiques privilégiées",
      "Conditions de suivi précisées au devis",
      "Plantation d'arbres de grande taille",
      "Conseils d'entretien personnalisés",
    ],
    approach: [
      {
        title: "Préparation du sol",
        description:
          "Amendement, drainage et enrichissement pour offrir aux végétaux les meilleures conditions.",
      },
      {
        title: "Plantation soignée",
        description:
          "Respect des profondeurs, arrosage de reprise et tuteurage selon les espèces.",
      },
      {
        title: "Suivi de reprise",
        description:
          "Visites de contrôle dans les premières semaines pour suivre l’évolution des plantations.",
      },
    ],
    metaTitle: "Plantation d’arbres et végétaux au Maroc",
    metaDescription:
      "Plantation professionnelle au Maroc : arbres, arbustes, massifs. Suivi de plantation, espèces adaptées au climat, savoir-faire horticole.",
  },
  {
    slug: "terrassement",
    icon: Shovel,
    title: "Terrassement",
    heading: "Terrassement et préparation de jardins",
    shortDescription:
      "Préparation et modelage du terrain pour vos aménagements",
    longDescription:
      "Avant tout jardin, il y a un terrain à préparer. Nos équipes maîtrisent le nivellement, le drainage, la création de talus et de terrasses pour transformer un sol ingrat en support idéal pour votre futur espace vert.",
    heroImage: "/images/services/terrassement-real.jpg",
    heroImagePosition: "center 62%",
    benefits: [
      "Nivellement et modelage précis",
      "Création de talus et restanques",
      "Systèmes de drainage performants",
      "Évacuation des déblais",
      "Préparation avant plantation ou dallage",
    ],
    approach: [
      {
        title: "Étude topographique",
        description:
          "Relevé précis du terrain pour anticiper pentes, écoulements et volumes de terre à déplacer.",
      },
      {
        title: "Travaux de terrassement",
        description:
          "Intervention avec engins adaptés, dans le respect des accès et de l'environnement existant.",
      },
      {
        title: "Finitions",
        description:
          "Régalage de la terre végétale pour accueillir plantations, gazon ou aménagements durs.",
      },
    ],
    metaTitle: "Terrassement de jardins au Maroc",
    metaDescription:
      "Terrassement professionnel pour jardins et espaces verts au Maroc : nivellement, drainage, talus, restanques. Devis personnalisé.",
  },
  {
    slug: "maintenance",
    icon: Shield,
    title: "Entretien paysager",
    heading: "Entretien de jardins et d’espaces verts",
    shortDescription:
      "Entretien régulier pour préserver la beauté de votre jardin",
    longDescription:
      "Un beau jardin se mérite tout au long de l'année. Nos contrats d'entretien s'adaptent à la taille et aux besoins de votre espace vert. Taille, fertilisation, traitements, arrosage : nous prenons soin de votre jardin pour qu'il reste impeccable en toute saison.",
    heroImage: "/images/field-work/palm-pruning-enhanced.webp",
    heroImagePosition: "center 42%",
    benefits: [
      "Contrats sur-mesure mensuels ou saisonniers",
      "Taille raisonnée des arbres et arbustes",
      "Fertilisation et traitements phytosanitaires",
      "Tonte, scarification et aération des pelouses",
      "Diagnostic santé des végétaux",
    ],
    approach: [
      {
        title: "Visite de diagnostic",
        description:
          "Évaluation de votre jardin et identification des interventions prioritaires.",
      },
      {
        title: "Plan d'entretien annuel",
        description:
          "Calendrier personnalisé des passages selon les besoins saisonniers de vos végétaux.",
      },
      {
        title: "Interventions régulières",
        description:
          "Équipes formées, matériel professionnel et comptes rendus après chaque passage.",
      },
    ],
    metaTitle: "Entretien de jardins au Maroc",
    metaDescription:
      "Contrats d'entretien de jardins au Maroc : taille, fertilisation, tonte, traitements. Équipes professionnelles, devis personnalisé.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
