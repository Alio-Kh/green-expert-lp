export type ProjectLayout = "magazine" | "feature" | "gallery-first";

export type GalleryImage = {
  src: string;
  alt: string;
  // Optional aspect override for asymmetric layouts: "tall" | "wide" | "square"
  shape?: "tall" | "wide" | "square";
};

export type ProjectSpec = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  layout: ProjectLayout;
  shortDescription: string;
  heroImage: string;
  thumbnail: string;
  intro: string;
  challenge?: string;
  solution?: string;
  story?: string;
  highlights: string[];
  specs: ProjectSpec[];
  gallery: GalleryImage[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featuredServices: string[]; // service slugs
  metaTitle: string;
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "villa-mediterraneenne",
    title: "Villa Méditerranéenne",
    category: "Jardin résidentiel",
    location: "Bouskoura, Casablanca",
    year: "2024",
    layout: "magazine",
    shortDescription:
      "Un jardin luxuriant inspiré des côtes méditerranéennes",
    heroImage:
      "https://fal.media/files/rabbit/VV2ti7c12ADTfKn8zs7p2_68e66fa918864a4facb8510cfc401fa9.jpg",
    thumbnail:
      "https://fal.media/files/rabbit/VV2ti7c12ADTfKn8zs7p2_68e66fa918864a4facb8510cfc401fa9.jpg",
    intro:
      "Sur les hauteurs de Bouskoura, cette villa contemporaine méritait un écrin végétal à la hauteur de son architecture. Les propriétaires souhaitaient retrouver l'atmosphère de leurs étés passés en Méditerranée : oliviers centenaires, cyprès élancés et massifs aromatiques.",
    challenge:
      "Le terrain en restanques, exposé plein sud et soumis à un vent fort, exigeait une sélection végétale particulièrement résistante. Il fallait également intégrer une piscine existante sans dénaturer l'esprit du lieu.",
    solution:
      "Nous avons dessiné un jardin en terrasses successives reliées par des escaliers en pierre, planté plus de 80 espèces méditerranéennes et installé un système d'irrigation goutte-à-goutte zoné pour optimiser la consommation d'eau.",
    highlights: [
      "Oliviers centenaires transplantés",
      "Bassin réfléchissant intégré aux terrasses",
      "Système d'irrigation économe en eau (-40%)",
      "Éclairage paysager LED basse consommation",
    ],
    specs: [
      { label: "Surface aménagée", value: "500 m²" },
      { label: "Durée du chantier", value: "3 mois" },
      { label: "Espèces plantées", value: "80+" },
      { label: "Économie d'eau", value: "-40%" },
    ],
    gallery: [
      {
        src: "https://fal.media/files/rabbit/VV2ti7c12ADTfKn8zs7p2_68e66fa918864a4facb8510cfc401fa9.jpg",
        alt: "Vue d'ensemble du jardin méditerranéen",
        shape: "wide",
      },
      {
        src: "https://fal.media/files/elephant/n01RzRRMoP4XMul-Z2F45_dfadc490f38e4afc805c05e7b4c31722.jpg",
        alt: "Détail des plans paysagers",
        shape: "tall",
      },
      {
        src: "https://fal.media/files/monkey/FOqVfEbr1qRTNDx9riBoZ_144ade400e9345fba693354af8d34da9.jpg",
        alt: "Plantation des oliviers",
        shape: "square",
      },
      {
        src: "https://fal.media/files/penguin/oDferWZMirf76z6a_EYZG_a75d40eee1c84a488813cba28fbe1b77.jpg",
        alt: "Vue panoramique des terrasses",
        shape: "wide",
      },
    ],
    testimonial: {
      quote:
        "Green Expert a transformé notre terrain difficile en un jardin où nous nous sentons en vacances chaque jour. Leur écoute et leur expertise ont fait toute la différence.",
      author: "Famille B.",
      role: "Propriétaires, Bouskoura",
    },
    featuredServices: ["design-paysager", "plantation", "systemes-irrigation"],
    metaTitle: "Villa Méditerranéenne à Bouskoura | Projet Green Expert",
    metaDescription:
      "Découvrez ce jardin méditerranéen de 500 m² réalisé à Bouskoura : oliviers centenaires, terrasses en pierre, irrigation économe.",
  },
  {
    slug: "oasis-urbaine",
    title: "Oasis Urbaine",
    category: "Toit-terrasse",
    location: "Maârif, Casablanca",
    year: "2024",
    layout: "feature",
    shortDescription: "Un havre de paix au cœur de la ville",
    heroImage:
      "https://fal.media/files/penguin/oDferWZMirf76z6a_EYZG_a75d40eee1c84a488813cba28fbe1b77.jpg",
    thumbnail:
      "https://fal.media/files/penguin/oDferWZMirf76z6a_EYZG_a75d40eee1c84a488813cba28fbe1b77.jpg",
    intro:
      "Au sommet d'un immeuble du quartier Maârif, ce toit-terrasse de 300 m² est devenu une véritable parenthèse végétale au-dessus du tumulte urbain. Le propriétaire rêvait d'un espace fonctionnel pour recevoir et se ressourcer.",
    challenge:
      "Les contraintes étaient nombreuses : portance limitée du dallage, exposition extrême au vent et au soleil, absence de point d'eau dédié et impossibilité d'enterrer des canalisations.",
    solution:
      "Nous avons opté pour une trame de jardinières surélevées en bois, des végétaux légers en pleine terre allégée et un système d'irrigation intelligent piloté par smartphone. Une pergola végétalisée ombrage l'espace de réception.",
    highlights: [
      "Substrat allégé pour respecter la portance",
      "Pergola végétalisée avec rosiers grimpants",
      "Irrigation connectée pilotée par smartphone",
      "Brise-vent végétal en bambou",
    ],
    specs: [
      { label: "Surface", value: "300 m²" },
      { label: "Durée", value: "2 mois" },
      { label: "Hauteur", value: "8e étage" },
      { label: "Pilotage", value: "100% smart" },
    ],
    gallery: [
      {
        src: "https://fal.media/files/penguin/oDferWZMirf76z6a_EYZG_a75d40eee1c84a488813cba28fbe1b77.jpg",
        alt: "Vue d'ensemble du toit-terrasse",
        shape: "wide",
      },
      {
        src: "https://fal.media/files/monkey/kihJVAdwxDsrh5Lb0d8GY_a0a835e0cb9f44688e4ed005201fdc63.jpg",
        alt: "Détail des massifs",
        shape: "square",
      },
      {
        src: "https://fal.media/files/kangaroo/ENyEfffIBlh4aZ1RB7w8G_b9a74c7115594336a6d403e5ef9827ce.jpg",
        alt: "Espace de réception sous la pergola",
        shape: "square",
      },
    ],
    featuredServices: ["design-paysager", "systemes-irrigation", "eclairage-exterieur"],
    metaTitle: "Toit-terrasse végétalisé à Casablanca | Oasis Urbaine",
    metaDescription:
      "Aménagement d'un toit-terrasse de 300 m² à Casablanca : jardinières surélevées, irrigation connectée, pergola végétalisée.",
  },
  {
    slug: "jardin-zen",
    title: "Jardin Zen",
    category: "Espace de méditation",
    location: "Souissi, Rabat",
    year: "2023",
    layout: "gallery-first",
    shortDescription: "Un espace de tranquillité et de méditation",
    heroImage:
      "https://fal.media/files/kangaroo/ENyEfffIBlh4aZ1RB7w8G_b9a74c7115594336a6d403e5ef9827ce.jpg",
    thumbnail:
      "https://fal.media/files/kangaroo/ENyEfffIBlh4aZ1RB7w8G_b9a74c7115594336a6d403e5ef9827ce.jpg",
    intro:
      "Inspiré des jardins secs japonais, ce projet à Souissi invite au lâcher-prise. Pierres choisies une à une, raked sand, érables japonais et bambous noirs composent un tableau vivant qui change avec la lumière.",
    story:
      "Le projet est né d'un voyage des propriétaires au Japon. À leur retour, ils nous ont confié leur souhait de retrouver, dans leur patio intérieur, l'atmosphère méditative qui les avait tant marqués à Kyoto. Pendant six semaines, nous avons sourcé chaque élément avec précision : pierres volcaniques de l'Atlas, bambous noirs adaptés au climat, gravier blanc calibré. Chaque détail compte dans l'art du jardin japonais.",
    highlights: [
      "Composition de pierres selon les principes Zen",
      "Bambous noirs adaptés au climat marocain",
      "Éclairage LED tamisé pour les soirées",
      "Bassin d'eau circulaire en cuivre",
    ],
    specs: [
      { label: "Surface", value: "200 m²" },
      { label: "Durée", value: "6 semaines" },
      { label: "Pierres posées", value: "47" },
      { label: "Éclairage", value: "LED dimmable" },
    ],
    gallery: [
      {
        src: "https://fal.media/files/kangaroo/ENyEfffIBlh4aZ1RB7w8G_b9a74c7115594336a6d403e5ef9827ce.jpg",
        alt: "Vue principale du jardin zen",
        shape: "wide",
      },
      {
        src: "https://fal.media/files/elephant/n01RzRRMoP4XMul-Z2F45_dfadc490f38e4afc805c05e7b4c31722.jpg",
        alt: "Détail des pierres",
        shape: "square",
      },
      {
        src: "https://fal.media/files/monkey/kihJVAdwxDsrh5Lb0d8GY_a0a835e0cb9f44688e4ed005201fdc63.jpg",
        alt: "Bambous noirs en bordure",
        shape: "square",
      },
      {
        src: "https://fal.media/files/rabbit/VV2ti7c12ADTfKn8zs7p2_68e66fa918864a4facb8510cfc401fa9.jpg",
        alt: "Vue nocturne avec éclairage LED",
        shape: "wide",
      },
    ],
    testimonial: {
      quote:
        "Chaque matin, prendre mon café dans ce jardin est devenu un rituel précieux. Green Expert a su capter l'essence de ce que nous voulions.",
      author: "Mme L.",
      role: "Propriétaire, Souissi",
    },
    featuredServices: ["design-paysager", "plantation", "eclairage-exterieur"],
    metaTitle: "Jardin Zen à Souissi, Rabat | Projet Green Expert",
    metaDescription:
      "Création d'un jardin zen japonais de 200 m² à Souissi, Rabat : pierres, bambous noirs, éclairage LED tamisé.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
