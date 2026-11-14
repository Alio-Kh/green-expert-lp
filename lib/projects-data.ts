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
  published: boolean;
  provisional?: boolean;
  title: string;
  category: string;
  location: string;
  year: string;
  layout: ProjectLayout;
  shortDescription: string;
  heroImage: string;
  thumbnail: string;
  intro: string;
  studyHeading?: string;
  presentationLabel?: string;
  imageNote?: string;
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
    slug: "jardin-quatre-palmiers",
    published: true,
    provisional: true,
    title: "Le Jardin des Quatre Palmiers",
    category: "Composition paysagère",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    shortDescription: "Une fontaine au centre, quatre palmiers en équilibre. Une parenthèse de fraîcheur dessinée en cercle.",
    heroImage: "/images/projects/quatre-palmiers/vue-ensemble.webp",
    thumbnail: "/images/projects/quatre-palmiers/vue-ensemble.webp",
    intro: "Autour d’une fontaine aux lignes festonnées, quatre palmiers structurent une composition circulaire. Les massifs fleuris soulignent les courbes du jardin, tandis qu’une allée intérieure relie les différentes parties de l’aménagement.",
    highlights: ["Fontaine centrale", "Quatre palmiers", "Massifs fleuris en courbe"],
    specs: [
      { label: "Composition", value: "Circulaire" },
      { label: "Palette végétale", value: "Palmiers & fleurs" },
      { label: "Point central", value: "Fontaine" },
    ],
    gallery: [
      { src: "/images/projects/quatre-palmiers/vue-ensemble.webp", alt: "Vue d’ensemble — visualisation générée à partir du dessin", shape: "wide" },
      { src: "/images/projects/quatre-palmiers/facade-v2.webp", alt: "Vue de face — visualisation générée à partir du dessin", shape: "wide" },
      { src: "/images/projects/quatre-palmiers/perspective-v2.webp", alt: "Perspective du jardin — visualisation générée à partir du dessin", shape: "wide" },
      { src: "/images/projects/quatre-palmiers/vue-laterale-v2.webp", alt: "Vue latérale — visualisation générée", shape: "wide" },
      { src: "/images/projects/quatre-palmiers/vue-haute-v2.webp", alt: "Vue aérienne — visualisation générée", shape: "wide" },
      { src: "/images/projects/quatre-palmiers/plan-original.jpg", alt: "Dessin original — vue d’ensemble", shape: "wide" },
      { src: "/images/projects/quatre-palmiers/perspective-originale.jpg", alt: "Dessin original — perspective au niveau du jardin", shape: "wide" },
      { src: "/images/projects/quatre-palmiers/vue-originale.png", alt: "Dessin original — perspective latérale", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Le Jardin des Quatre Palmiers — étude paysagère",
    metaDescription: "Une composition circulaire autour d’une fontaine, de quatre palmiers et de massifs fleuris. Découvrez les intentions paysagères et les vues du projet.",
  },
  {
    slug: "jardins-du-patio",
    published: true,
    provisional: true,
    title: "Les Jardins du Patio",
    category: "Jardin de résidence",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    shortDescription: "Une piscine, des îlots de palmiers et une terrasse ouverte sur le jardin. Un cœur végétal au pied des résidences.",
    heroImage: "/images/projects/jardins-du-patio/vue-ensemble.webp",
    thumbnail: "/images/projects/jardins-du-patio/vue-ensemble.webp",
    studyHeading: "Un jardin à partager, au cœur de la résidence.",
    intro: "Cette étude organise un espace commun autour d’une piscine rectangulaire et d’une large terrasse en bois. Des îlots plantés de palmiers ponctuent le bassin, tandis que des massifs fleuris, des arbres d’ornement et des bandes de pelouse accompagnent les cheminements. Les bordures blanches dessinent une transition nette entre le jardin et les espaces pavés de la résidence.",
    highlights: ["Terrasse en bois", "Îlots de palmiers", "Massifs fleuris"],
    specs: [
      { label: "Cadre", value: "Cœur de résidence" },
      { label: "Espace central", value: "Piscine & terrasse" },
      { label: "Plantations", value: "Palmiers & massifs" },
    ],
    gallery: [
      { src: "/images/projects/jardins-du-patio/vue-ensemble.webp", alt: "Vue d’ensemble de la résidence — visualisation améliorée à partir du rendu fourni", shape: "wide" },
      { src: "/images/projects/jardins-du-patio/piscine-jardin.webp", alt: "Piscine et jardin — visualisation améliorée à partir du rendu fourni", shape: "wide" },
      { src: "/images/projects/jardins-du-patio/ilots-palmiers.webp", alt: "Îlots de palmiers — visualisation améliorée à partir du rendu fourni", shape: "wide" },
      { src: "/images/projects/jardins-du-patio/terrasse-piscine.webp", alt: "Au bord de la piscine — visualisation améliorée à partir du rendu fourni", shape: "wide" },
      { src: "/images/projects/jardins-du-patio/vue-aerienne.webp", alt: "Composition vue du ciel — visualisation améliorée à partir du rendu fourni", shape: "wide" },
      { src: "/images/projects/jardins-du-patio/terrasse-fleurie.webp", alt: "La terrasse et ses bordures fleuries — visualisation améliorée à partir du rendu fourni", shape: "wide" },
      { src: "/images/projects/jardins-du-patio/plan-original.png", alt: "Plan d’aménagement original fourni — piscine, plantations et espace commun", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Les Jardins du Patio — étude paysagère résidentielle",
    metaDescription: "Une étude de jardin résidentiel autour d’une piscine, d’une terrasse en bois et d’îlots de palmiers. Découvrez les vues et le plan d’aménagement.",
  },
  {
    slug: "allees-de-palmiers",
    published: true,
    provisional: true,
    title: "Les Allées de Palmiers",
    category: "Abords paysagers",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    shortDescription: "Un alignement de palmiers accompagne la façade, rythme les accès et dessine une lisière végétale le long de la rue.",
    heroImage: "/images/projects/allees-de-palmiers/vue-angle.webp",
    thumbnail: "/images/projects/allees-de-palmiers/vue-angle.webp",
    studyHeading: "Une façade accompagnée par le végétal.",
    intro: "Cette étude compose les abords d’un bâtiment contemporain autour d’un alignement de palmiers. À leur pied, des massifs de feuillages larges alternent avec la pelouse et les accès piétons. La clôture sur muret structure la limite avec la rue, tandis que l’éclairage souligne les plantations à la tombée du jour.",
    highlights: ["Alignement de palmiers", "Massifs de feuillages", "Éclairage paysager"],
    specs: [
      { label: "Périmètre", value: "Abords du bâtiment" },
      { label: "Plantations", value: "Palmiers & feuillages" },
      { label: "Ambiance", value: "Jour & nuit" },
    ],
    gallery: [
      { src: "/images/projects/allees-de-palmiers/vue-angle.webp", alt: "Vue d’angle du bâtiment et des plantations — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/allees-de-palmiers/allee-plantee.webp", alt: "L’alignement de palmiers le long de la rue — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/allees-de-palmiers/entree-paysagere.webp", alt: "Les plantations au niveau de l’accès — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/allees-de-palmiers/ambiance-nocturne.webp", alt: "Les abords éclairés à la nuit tombée — visualisation améliorée", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Les Allées de Palmiers — étude des abords paysagers",
    metaDescription: "Une étude paysagère des abords d’un bâtiment : alignements de palmiers, massifs de feuillages et éclairage. Découvrez les perspectives de jour et de nuit.",
  },
  {
    slug: "villa-jardins-fleuris",
    published: true,
    provisional: true,
    title: "Villa aux Jardins Fleuris",
    category: "Jardin résidentiel",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    shortDescription: "Une entrée plantée de palmiers, de longues bordures fleuries et un jardin ouvert sur la piscine. Des espaces pour accueillir et se détendre.",
    heroImage: "/images/projects/villa-jardins-fleuris/jardin-piscine.webp",
    thumbnail: "/images/projects/villa-jardins-fleuris/jardin-piscine.webp",
    studyHeading: "Du jardin d’accueil à l’espace de détente.",
    intro: "À l’avant de la villa, une allée droite traverse la pelouse entre les arbustes taillés et les palmiers. À l’arrière, le jardin s’organise autour d’une piscine et d’une pergola, face à une terrasse surélevée. Des bordures fleuries aux lignes courbes accompagnent les murs et apportent de la couleur à l’ensemble.",
    highlights: ["Entrée plantée", "Bordures fleuries", "Piscine et pergola"],
    specs: [
      { label: "Cadre", value: "Jardin de villa" },
      { label: "Composition", value: "Pelouse & massifs" },
      { label: "Espace de détente", value: "Piscine & pergola" },
    ],
    gallery: [
      { src: "/images/projects/villa-jardins-fleuris/jardin-piscine.webp", alt: "Jardin arrière, piscine et pergola — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/villa-jardins-fleuris/vue-entree.webp", alt: "Vue d’ensemble du jardin d’entrée — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/villa-jardins-fleuris/jardin-accueil.webp", alt: "Palmiers et arbustes taillés à l’entrée — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/villa-jardins-fleuris/facade-jardin.webp", alt: "Façade et plantations depuis la rue — visualisation améliorée", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Villa aux Jardins Fleuris — étude paysagère",
    metaDescription: "Une étude de jardin de villa : entrée plantée, bordures fleuries, piscine et pergola. Découvrez les quatre perspectives du projet.",
  },
  {
    slug: "jardin-des-feuillages",
    published: true,
    provisional: true,
    title: "Le Jardin des Feuillages",
    category: "Jardin de cour",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    shortDescription: "Une piscine bordée de feuillages, un chemin de pas japonais et une terrasse ombragée. Un jardin intime aux accents tropicaux.",
    heroImage: "/images/projects/jardin-des-feuillages/maison-piscine.webp",
    thumbnail: "/images/projects/jardin-des-feuillages/maison-piscine.webp",
    studyHeading: "Des feuillages pour habiller chaque perspective.",
    intro: "Dans cette cour close, la piscine relie la terrasse de la maison au fond du jardin. Les pas japonais traversent la pelouse le long de massifs aux bordures en bois. Palmiers, feuillages larges et graminées composent différents niveaux de végétation, prolongés par des jardinières murales et une petite cascade à l’extrémité du bassin.",
    highlights: ["Massifs de feuillages", "Pas japonais", "Jardinières murales"],
    specs: [
      { label: "Cadre", value: "Cour de maison" },
      { label: "Palette", value: "Feuillages & palmiers" },
      { label: "Point d’eau", value: "Piscine & cascade" },
    ],
    gallery: [
      { src: "/images/projects/jardin-des-feuillages/maison-piscine.webp", alt: "La piscine et la terrasse de la maison — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/jardin-des-feuillages/palette-vegetale.webp", alt: "Palmiers, feuillages et graminées dans les massifs — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/jardin-des-feuillages/piscine-cascade.webp", alt: "Perspective vers la piscine et sa cascade — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/jardin-des-feuillages/jardin-mural.webp", alt: "Les jardinières murales et le coin planté — visualisation améliorée", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Le Jardin des Feuillages — étude paysagère",
    metaDescription: "Une étude de jardin de cour avec piscine, pas japonais, massifs de feuillages et jardinières murales. Découvrez les perspectives du projet.",
  },
  {
    slug: "promenade-fleurie",
    published: true,
    provisional: true,
    title: "La Promenade Fleurie",
    category: "Promenade paysagère",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    shortDescription: "Une promenade bordée de palmiers, où les massifs fleuris et les bancs invitent à faire une pause.",
    heroImage: "/images/projects/promenade-fleurie/promenade-palmiers.webp",
    thumbnail: "/images/projects/promenade-fleurie/promenade-palmiers.webp",
    intro: "Cette étude organise une promenade autour d’allées pavées et de massifs aux lignes courbes. Les palmiers accompagnent le parcours, tandis que les fleurs bleues et rouges composent plusieurs points d’intérêt. Des bancs ponctuent les cheminements et un éclairage régulier souligne les espaces de circulation à la nuit tombée.",
    studyHeading: "Une promenade au rythme des plantations.",
    highlights: ["Alignements de palmiers", "Massifs fleuris en courbe", "Bancs & éclairage"],
    specs: [
      { label: "Composition", value: "Allées & massifs" },
      { label: "Plantations", value: "Palmiers & fleurs" },
      { label: "Équipements", value: "Bancs & éclairage" },
    ],
    gallery: [
      { src: "/images/projects/promenade-fleurie/promenade-palmiers.webp", alt: "La promenade entre les palmiers — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/promenade-fleurie/massifs-et-bancs.webp", alt: "Massifs fleuris et espaces de repos — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/promenade-fleurie/panorama-stationnement.webp", alt: "Vue d’ensemble de la promenade depuis le stationnement — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/promenade-fleurie/perspective-diagonale.webp", alt: "Perspective diagonale sur les palmiers et les massifs — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/promenade-fleurie/vue-aerienne.webp", alt: "Vue aérienne de la composition paysagère — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/promenade-fleurie/ambiance-nocturne.webp", alt: "La promenade et son éclairage nocturne — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/promenade-fleurie/vue-ensemble-nocturne.webp", alt: "Vue aérienne nocturne et éclairage des cheminements — visualisation améliorée", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "La Promenade Fleurie — étude paysagère",
    metaDescription: "Une promenade paysagère entre palmiers, massifs fleuris et espaces de repos. Découvrez les vues de jour, la composition et l’ambiance nocturne.",
  },
  {
    slug: "jardin-des-floraisons",
    published: true,
    provisional: true,
    title: "Le Jardin des Floraisons",
    category: "Jardin de villa",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    shortDescription: "Des arbres fleuris, une pelouse ouverte et un chemin de pas japonais composent un jardin autour de la maison.",
    heroImage: "/images/projects/jardin-des-floraisons/jardin-fleuri.webp",
    thumbnail: "/images/projects/jardin-des-floraisons/jardin-fleuri.webp",
    intro: "Cette étude paysagère associe des arbres à floraison rose, des bordures rouges et plusieurs palmiers autour d’une maison. Un chemin de pas japonais traverse la pelouse jusqu’à la terrasse, tandis qu’une piscine occupe un côté du jardin. Une ceinture de plantations accompagne les limites de la parcelle et donne une continuité à l’ensemble.",
    studyHeading: "Les floraisons dessinent le parcours.",
    highlights: ["Arbres fleuris", "Chemin de pas japonais", "Piscine & jardin"],
    specs: [
      { label: "Composition", value: "Jardin autour de la maison" },
      { label: "Plantations", value: "Arbres fleuris & palmiers" },
      { label: "Cheminement", value: "Pas japonais" },
    ],
    gallery: [
      { src: "/images/projects/jardin-des-floraisons/jardin-fleuri.webp", alt: "Pas japonais et arbres fleuris — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/jardin-des-floraisons/vue-ensemble.webp", alt: "Vue d’ensemble de la parcelle paysagée — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/jardin-des-floraisons/piscine-et-plantations.webp", alt: "Piscine et plantations autour de la maison — visualisation améliorée", shape: "wide" },
      { src: "/images/projects/jardin-des-floraisons/jardin-accueil.webp", alt: "Vue du jardin d’accueil et de l’allée d’entrée — visualisation améliorée", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Le Jardin des Floraisons — étude paysagère",
    metaDescription: "Un jardin de villa composé d’arbres fleuris, de palmiers et d’un chemin de pas japonais. Découvrez les vues de cette étude paysagère.",
  },
  {
    slug: "patio-des-galets",
    published: true,
    provisional: true,
    title: "Le Patio des Galets",
    category: "Jardin de patio",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    presentationLabel: "Jardin de patio",
    imageNote: "Photographies fournies, retouchées par IA : qualité, cadrage et perspectives ajustés ; personne remplacée dans une vue. Nom proposé et informations à confirmer.",
    shortDescription: "Un patio où les galets clairs, les pas japonais et les feuillages composent un parcours entre les façades blanches.",
    heroImage: "/images/projects/patio-des-galets/allee-minerale.webp",
    thumbnail: "/images/projects/patio-des-galets/allee-minerale.webp",
    intro: "Des pas japonais circulaires dessinent un chemin dans le gravier et les galets. Palmiers, feuillages panachés et petites touffes végétales accompagnent le parcours, ponctué de pots bleus. Dans la cour, des bordures de bois délimitent les massifs au pied des murs blancs et prolongent cette association de matières minérales et végétales.",
    studyHeading: "La douceur du minéral, la présence du végétal.",
    highlights: ["Pas japonais circulaires", "Galets & gravier clair", "Massifs bordés de bois"],
    specs: [
      { label: "Espace", value: "Patio & cour intérieure" },
      { label: "Matières", value: "Galets, gravier & bois" },
      { label: "Plantations", value: "Palmiers & feuillages" },
    ],
    gallery: [
      { src: "/images/projects/patio-des-galets/allee-minerale.webp", alt: "Allée minérale et pas japonais entre les plantations — photographie retouchée", shape: "wide" },
      { src: "/images/projects/patio-des-galets/cour-interieure.webp", alt: "Cour intérieure et massifs au pied des façades — photographie retouchée", shape: "wide" },
      { src: "/images/projects/patio-des-galets/promenade-patio.webp", alt: "Parcours sur les galets — photographie retouchée, personne remplacée", shape: "tall" },
      { src: "/images/projects/patio-des-galets/massif-angle.webp", alt: "Massif d’angle et bordure en bois — photographie retouchée", shape: "wide" },
      { src: "/images/projects/patio-des-galets/bordure-vegetale.webp", alt: "Détail des feuillages et de la bordure courbe — photographie retouchée", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Le Patio des Galets — jardin de patio",
    metaDescription: "Un patio associant pas japonais, galets clairs, palmiers et massifs bordés de bois. Découvrez les vues de ce jardin intérieur.",
  },
  {
    slug: "terrasses-du-jeu",
    published: true,
    provisional: true,
    title: "Les Terrasses du Jeu",
    category: "Aire de jeux paysagée",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    presentationLabel: "Aire de jeux paysagée",
    imageNote: "Images régénérées par IA à partir des photographies du site, avec cadrages ajustés, murs rafraîchis et abords embellis. Ces vues de présentation ne documentent pas l’état réel du site. Nom proposé et informations à confirmer.",
    shortDescription: "Des espaces de jeu en terrasses, entre relief côtier et horizon marin, reliés par des allées aux lignes courbes.",
    heroImage: "/images/projects/terrasses-du-jeu/jeux-face-mer-photo-v3.webp",
    thumbnail: "/images/projects/terrasses-du-jeu/jeux-face-mer-photo-v3.webp",
    intro: "L’aménagement répartit les jeux sur plusieurs terrasses. Une structure bleue évoquant un bateau occupe l’espace central, tandis que des modules rouges et des balançoires ponctuent les espaces voisins. Les allées minérales relient les différentes zones, accompagnées de murets aux tons rosés, de palmiers et de plantations en périphérie. Le relief et les vues vers la mer donnent au lieu son caractère.",
    studyHeading: "Jouer avec le relief et l’horizon.",
    highlights: ["Espaces de jeu en terrasses", "Toboggans & parcours", "Ouvertures vers la mer"],
    specs: [
      { label: "Composition", value: "Terrasses reliées" },
      { label: "Équipements", value: "Jeux & toboggans" },
      { label: "Cadre", value: "Relief côtier" },
    ],
    gallery: [
      { src: "/images/projects/terrasses-du-jeu/jeux-face-mer-photo-v3.webp", alt: "La structure de jeu face à la mer", shape: "wide" },
      { src: "/images/projects/terrasses-du-jeu/vue-ensemble-photo-v3.webp", alt: "Vue d’ensemble des terrasses et des cheminements", shape: "wide" },
      { src: "/images/projects/terrasses-du-jeu/bateau-et-toboggans-photo-v3.webp", alt: "Le bateau de jeu, ses toboggans et son filet", shape: "wide" },
      { src: "/images/projects/terrasses-du-jeu/detail-bateau-photo-v3.webp", alt: "Détail de la structure en bois et des panneaux bleus", shape: "wide" },
      { src: "/images/projects/terrasses-du-jeu/parcours-rouge-photo-v3.webp", alt: "Les modules rouges face à la mer", shape: "wide" },
      { src: "/images/projects/terrasses-du-jeu/terrasses-et-balancoires-photo-v3.webp", alt: "Les terrasses, les balançoires et les jeux vus en hauteur", shape: "wide" },
      { src: "/images/projects/terrasses-du-jeu/installation-toboggan-photo-v3.webp", alt: "L’équipe pendant l’installation d’un toboggan", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Les Terrasses du Jeu — aire de jeux paysagée",
    metaDescription: "Une aire de jeux organisée en terrasses dans un cadre côtier. Découvrez les vues de présentation des jeux, des terrasses et de l’installation des équipements.",
  },
  {
    slug: "jardins-ocre",
    published: true,
    provisional: true,
    title: "Les Jardins d’Ocre",
    category: "Jardin paysager",
    location: "Localisation à confirmer",
    year: "",
    layout: "gallery-first",
    presentationLabel: "Jardin paysager",
    imageNote: "Photographies fournies, retouchées par IA pour améliorer la netteté, la lumière, le cadrage et les perspectives. Certains détails sont reconstruits. Les vues incluent des scènes de plantation et d’entretien. Nom proposé et informations à confirmer.",
    shortDescription: "Autour des façades ocre, des pelouses ouvertes et des massifs fleuris mettent en valeur les arbres taillés et les feuillages argentés.",
    heroImage: "/images/projects/jardins-ocre/facade-jardin.webp",
    thumbnail: "/images/projects/jardins-ocre/facade-jardin.webp",
    intro: "Le jardin accompagne une architecture aux façades ocre et aux baies ornées d’arches. Les massifs suivent les courbes de la pelouse et associent feuillages argentés, floraisons légères et arbustes taillés. Les arbres aux formes arrondies rythment les perspectives, tandis que les plantations basses laissent les vues ouvertes. Les photographies montrent aussi la préparation des végétaux, leur mise en terre et le travail d’entretien.",
    studyHeading: "Des matières, des couleurs et des gestes.",
    highlights: ["Massifs fleuris en courbe", "Arbres et arbustes taillés", "Plantation & entretien"],
    specs: [
      { label: "Composition", value: "Pelouses & massifs" },
      { label: "Palette", value: "Fleurs & feuillages argentés" },
      { label: "Au jardin", value: "Plantation & entretien" },
    ],
    gallery: [
      { src: "/images/projects/jardins-ocre/facade-jardin.webp", alt: "Façade ocre et pelouse — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/cour-fleurie.webp", alt: "La cour et ses massifs fleuris — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/perspective-topiaires.webp", alt: "Perspective sur les arbres taillés — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/ouverture-jardin.webp", alt: "L’ouverture du jardin — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/bordure-facade.webp", alt: "La bordure au pied des baies — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/jardin-lateral.webp", alt: "Le jardin le long des murs — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/palette-vegetale.webp", alt: "La palette végétale — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/massif-rose.webp", alt: "Floraisons roses et feuillages — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/massif-argente-uniformes-v2.webp", alt: "Massif aux feuillages argentés — photographie et tenues retouchées", shape: "wide" },
      { src: "/images/projects/jardins-ocre/bordure-en-perspective-uniforme-v2.webp", alt: "La bordure en perspective — photographie et tenue retouchées", shape: "wide" },
      { src: "/images/projects/jardins-ocre/preparation-plantations.webp", alt: "Préparation des plantations — photographie retouchée", shape: "wide" },
      { src: "/images/projects/jardins-ocre/equipe-au-jardin-uniformes-v2.webp", alt: "L’équipe au jardin — tenues et espace de travail retouchés", shape: "wide" },
      { src: "/images/projects/jardins-ocre/gestes-de-plantation-uniformes-v2.webp", alt: "Les gestes de plantation — tenues et espace de travail retouchés", shape: "wide" },
      { src: "/images/projects/jardins-ocre/entretien-jardin-uniforme-v2.webp", alt: "Le travail d’entretien — photographie et tenue retouchées", shape: "wide" },
    ],
    featuredServices: [],
    metaTitle: "Les Jardins d’Ocre — jardin paysager",
    metaDescription: "Un jardin de pelouses, de massifs fleuris et d’arbres taillés autour de façades ocre. Découvrez les vues du jardin et les gestes de plantation et d’entretien.",
  },
  {
    slug: "villa-mediterraneenne",
    published: false,
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
    metaTitle: "Villa Méditerranéenne à Bouskoura",
    metaDescription:
      "Découvrez ce jardin méditerranéen de 500 m² réalisé à Bouskoura : oliviers centenaires, terrasses en pierre, irrigation économe.",
  },
  {
    slug: "oasis-urbaine",
    published: false,
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
    metaTitle: "Toit-terrasse végétalisé à Casablanca",
    metaDescription:
      "Aménagement d'un toit-terrasse de 300 m² à Casablanca : jardinières surélevées, irrigation connectée, pergola végétalisée.",
  },
  {
    slug: "jardin-zen",
    published: false,
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
    metaTitle: "Jardin Zen à Souissi, Rabat",
    metaDescription:
      "Création d'un jardin zen japonais de 200 m² à Souissi, Rabat : pierres, bambous noirs, éclairage LED tamisé.",
  },
];

// Alt text that names the project, for images shown outside their own caption.
export function galleryAlt(project: Project, image: GalleryImage) {
  return `${project.title} : ${image.alt.charAt(0).toLowerCase()}${image.alt.slice(1)}`;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
