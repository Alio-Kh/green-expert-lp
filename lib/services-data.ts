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
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  benefits: string[];
  approach: { title: string; description: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "design-paysager",
    icon: Leaf,
    title: "Design Paysager",
    shortDescription:
      "Création de plans personnalisés qui allient esthétique et fonctionnalité",
    longDescription:
      "Chaque jardin est unique. Nos paysagistes conçoivent des plans sur-mesure qui reflètent votre style de vie, s'adaptent à votre terrain et subliment votre architecture. De l'esquisse initiale au rendu 3D, nous donnons vie à votre vision.",
    heroImage:
      "https://fal.media/files/elephant/n01RzRRMoP4XMul-Z2F45_dfadc490f38e4afc805c05e7b4c31722.jpg",
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
    metaTitle: "Design Paysager au Maroc | Conception de Jardins Sur-Mesure",
    metaDescription:
      "Paysagistes experts au Maroc : conception de jardins personnalisés, plans 2D/3D, sélection végétale adaptée au climat local. Devis gratuit.",
  },
  {
    slug: "systemes-irrigation",
    icon: Droplets,
    title: "Systèmes d'Irrigation",
    shortDescription:
      "Solutions d'arrosage intelligentes et économes en eau",
    longDescription:
      "L'eau est précieuse, surtout au Maroc. Nos systèmes d'irrigation automatisés et pilotés par capteurs garantissent un arrosage précis, réduisent votre consommation jusqu'à 50% et préservent la santé de votre jardin, même en votre absence.",
    heroImage:
      "https://fal.media/files/monkey/FOqVfEbr1qRTNDx9riBoZ_144ade400e9345fba693354af8d34da9.jpg",
    benefits: [
      "Économie d'eau jusqu'à 50% avec la micro-irrigation",
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
    metaTitle: "Installation Système d'Irrigation au Maroc | Arrosage Automatique",
    metaDescription:
      "Installation de systèmes d'irrigation automatiques et connectés au Maroc. Économies d'eau, pilotage smartphone, maintenance incluse.",
  },
  {
    slug: "eclairage-exterieur",
    icon: Sun,
    title: "Éclairage Extérieur",
    shortDescription: "Mise en valeur nocturne de votre espace vert",
    longDescription:
      "Prolongez la vie de votre jardin après le coucher du soleil. Notre éclairage paysager met en scène vos végétaux, sécurise les circulations et crée des ambiances intimes, tout en respectant l'environnement grâce à la technologie LED basse consommation.",
    heroImage:
      "https://fal.media/files/penguin/oDferWZMirf76z6a_EYZG_a75d40eee1c84a488813cba28fbe1b77.jpg",
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
    metaTitle: "Éclairage Jardin & Extérieur au Maroc | LED Paysager",
    metaDescription:
      "Installation d'éclairage extérieur paysager au Maroc : LED basse consommation, mise en valeur de vos végétaux, ambiances nocturnes sur-mesure.",
  },
  {
    slug: "plantation",
    icon: TreePine,
    title: "Plantation",
    shortDescription:
      "Sélection et installation d'espèces adaptées à votre environnement",
    longDescription:
      "De l'arbre centenaire aux massifs fleuris, la réussite d'un jardin dépend du bon végétal à la bonne place. Nous sélectionnons avec soin des espèces résistantes au climat marocain et garantissons leur reprise grâce à un savoir-faire horticole éprouvé.",
    heroImage:
      "https://fal.media/files/kangaroo/ENyEfffIBlh4aZ1RB7w8G_b9a74c7115594336a6d403e5ef9827ce.jpg",
    benefits: [
      "Palette végétale adaptée au climat local",
      "Plantes méditerranéennes et endémiques privilégiées",
      "Garantie de reprise sur les sujets installés",
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
          "Visites de contrôle dans les premières semaines pour garantir le succès de la plantation.",
      },
    ],
    metaTitle: "Plantation d'Arbres & Végétaux au Maroc | Paysagiste Green Expert",
    metaDescription:
      "Plantation professionnelle au Maroc : arbres, arbustes, massifs. Garantie de reprise, espèces adaptées au climat, savoir-faire horticole.",
  },
  {
    slug: "terrassement",
    icon: Shovel,
    title: "Terrassement",
    shortDescription:
      "Préparation et modelage du terrain pour vos aménagements",
    longDescription:
      "Avant tout jardin, il y a un terrain à préparer. Nos équipes maîtrisent le nivellement, le drainage, la création de talus et de terrasses pour transformer un sol ingrat en support idéal pour votre futur espace vert.",
    heroImage:
      "https://fal.media/files/rabbit/VV2ti7c12ADTfKn8zs7p2_68e66fa918864a4facb8510cfc401fa9.jpg",
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
    metaTitle: "Terrassement Jardin au Maroc | Préparation Terrain Paysager",
    metaDescription:
      "Terrassement professionnel pour jardins et espaces verts au Maroc : nivellement, drainage, talus, restanques. Devis gratuit.",
  },
  {
    slug: "maintenance",
    icon: Shield,
    title: "Maintenance",
    shortDescription:
      "Entretien régulier pour préserver la beauté de votre jardin",
    longDescription:
      "Un beau jardin se mérite tout au long de l'année. Nos contrats d'entretien s'adaptent à la taille et aux besoins de votre espace vert. Taille, fertilisation, traitements, arrosage : nous prenons soin de votre jardin pour qu'il reste impeccable en toute saison.",
    heroImage:
      "https://fal.media/files/monkey/kihJVAdwxDsrh5Lb0d8GY_a0a835e0cb9f44688e4ed005201fdc63.jpg",
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
    metaTitle: "Entretien Jardin au Maroc | Contrats Maintenance Paysagère",
    metaDescription:
      "Contrats d'entretien de jardins au Maroc : taille, fertilisation, tonte, traitements. Équipes professionnelles, devis personnalisé.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
