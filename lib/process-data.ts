import {
  ClipboardList,
  PenTool,
  CheckCircle2,
  Hammer,
  Sprout,
  Droplets,
  CalendarCheck,
  HeartHandshake,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export type ProcessPhase = {
  slug: string;
  step: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  image: string;
  phases: { icon: LucideIcon; title: string; description: string }[];
  deliverables: string[];
};

export const processPhases: ProcessPhase[] = [
  {
    slug: "conception",
    step: 1,
    title: "Nous Concevons",
    shortDescription: "Création de plans personnalisés pour votre espace",
    longDescription:
      "Tout grand jardin commence par une écoute attentive et une analyse rigoureuse. Avant le moindre coup de pioche, nos paysagistes prennent le temps de comprendre votre terrain, vos envies et votre mode de vie pour concevoir un projet qui vous ressemble.",
    duration: "2 à 4 semaines",
    image:
      "https://fal.media/files/elephant/n01RzRRMoP4XMul-Z2F45_dfadc490f38e4afc805c05e7b4c31722.jpg",
    phases: [
      {
        icon: ClipboardList,
        title: "Visite et diagnostic",
        description:
          "Nous visitons votre terrain pour analyser l'exposition, la nature du sol, le drainage et les contraintes techniques.",
      },
      {
        icon: PenTool,
        title: "Plans et rendus 3D",
        description:
          "Nos paysagistes élaborent plusieurs propositions avec plans détaillés, palette végétale et visualisations 3D.",
      },
      {
        icon: CheckCircle2,
        title: "Validation du projet",
        description:
          "Nous ajustons le design avec vous jusqu'à ce que chaque détail corresponde à vos attentes.",
      },
    ],
    deliverables: [
      "Plan masse coté au 1/100",
      "Rendus 3D photoréalistes",
      "Palette végétale détaillée",
      "Devis ferme et définitif",
      "Planning prévisionnel des travaux",
    ],
  },
  {
    slug: "realisation",
    step: 2,
    title: "Nous Réalisons",
    shortDescription: "Exécution experte avec des artisans qualifiés",
    longDescription:
      "Nos équipes prennent le relais sur le terrain pour donner vie au projet validé. Terrassement, maçonnerie, plantations, irrigation, éclairage : chaque étape est menée avec rigueur, dans le respect des délais et de votre propriété.",
    duration: "4 à 12 semaines selon l'ampleur",
    image:
      "https://fal.media/files/monkey/FOqVfEbr1qRTNDx9riBoZ_144ade400e9345fba693354af8d34da9.jpg",
    phases: [
      {
        icon: Hammer,
        title: "Préparation du terrain",
        description:
          "Terrassement, nivellement, drainage et installation des réseaux (eau, électricité, irrigation).",
      },
      {
        icon: Sprout,
        title: "Plantation et aménagements",
        description:
          "Mise en place des arbres, arbustes, pelouse, dallages et tous les éléments décoratifs prévus.",
      },
      {
        icon: Droplets,
        title: "Finitions et mise en eau",
        description:
          "Réglages de l'irrigation, installation de l'éclairage, nettoyage complet du chantier.",
      },
    ],
    deliverables: [
      "Chef de chantier dédié à votre projet",
      "Points d'avancement hebdomadaires",
      "Matériaux et végétaux de qualité professionnelle",
      "Chantier propre et sécurisé",
      "Réception détaillée avec procès-verbal",
    ],
  },
  {
    slug: "entretien",
    step: 3,
    title: "Nous Entretenons",
    shortDescription: "Suivi régulier pour préserver et faire évoluer votre jardin",
    longDescription:
      "Un jardin est un être vivant qui évolue au fil des saisons. Nos contrats d'entretien sur-mesure garantissent sa beauté et sa santé tout au long de l'année, avec des équipes formées et du matériel professionnel.",
    duration: "Contrat annuel renouvelable",
    image:
      "https://fal.media/files/monkey/kihJVAdwxDsrh5Lb0d8GY_a0a835e0cb9f44688e4ed005201fdc63.jpg",
    phases: [
      {
        icon: CalendarCheck,
        title: "Plan d'entretien annuel",
        description:
          "Calendrier personnalisé des passages selon les besoins saisonniers de vos végétaux.",
      },
      {
        icon: Leaf,
        title: "Interventions régulières",
        description:
          "Taille, tonte, fertilisation, traitements phytosanitaires et réglages d'irrigation.",
      },
      {
        icon: HeartHandshake,
        title: "Suivi et conseils",
        description:
          "Comptes rendus après chaque passage et recommandations pour faire évoluer votre jardin.",
      },
    ],
    deliverables: [
      "Contrat sur-mesure mensuel ou saisonnier",
      "Équipe référente pour votre jardin",
      "Matériel professionnel et respectueux",
      "Rapport détaillé après chaque visite",
      "Intervention d'urgence possible",
    ],
  },
];

export const processGuarantees = [
  {
    title: "Interlocuteur unique",
    description:
      "Un chef de projet dédié vous accompagne de la première visite jusqu'à l'entretien.",
  },
  {
    title: "Devis transparent",
    description:
      "Détail ligne par ligne, sans surprise. Vous savez exactement ce que vous payez.",
  },
  {
    title: "Délais respectés",
    description:
      "Planning ferme avec points d'étape. Si un imprévu survient, nous vous prévenons immédiatement.",
  },
  {
    title: "Garantie de reprise",
    description:
      "Les végétaux plantés sont garantis un an. Nous remplaçons gratuitement tout sujet qui ne reprendrait pas.",
  },
];
