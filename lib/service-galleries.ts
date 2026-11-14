export type ServiceGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  projectSlug?: string;
  imageNote: string;
  objectPosition?: string;
  /** Portrait source image. */
  shape?: "tall";
};

export type ServiceGalleryData = {
  heading: string;
  introduction: string;
  images: ServiceGalleryImage[];
};

// Sources, selection gaps and edit history: docs/service-gallery-image-audit.md.
// These captions distinguish design studies from photographs and supplied illustrations.
export const serviceGalleries: Record<string, ServiceGalleryData> = {
  "design-paysager": {
    heading: "Du plan à la composition du jardin.",
    introduction: "Des études pour explorer les volumes, les circulations et les associations végétales, de jour comme de nuit. Ces plans et visualisations présentent des intentions de conception.",
    images: [
      {
        src: "/images/services/patio-vue-ensemble-uniformes-v2.webp",
        alt: "Vue d’ensemble d’un jardin de résidence avec piscine, terrasse et massifs fleuris entre les bâtiments",
        caption: "Aménager un cœur de résidence paysager",
        sourceLabel: "Les Jardins du Patio",
        projectSlug: "jardins-du-patio",
        imageNote: "Visualisation de projet et tenues retouchées par IA",
      },
      {
        src: "/images/projects/quatre-palmiers/vue-ensemble.webp",
        alt: "Composition circulaire autour d’une fontaine et de quatre palmiers",
        caption: "Organiser le jardin autour d’un point central",
        sourceLabel: "Le Jardin des Quatre Palmiers",
        projectSlug: "jardin-quatre-palmiers",
        imageNote: "Visualisation générée par IA à partir du dessin",
      },
      {
        src: "/images/projects/jardins-du-patio/plan-original.png",
        alt: "Plan d’aménagement d’une résidence avec piscine, cheminements et plantations",
        caption: "Dessiner les usages et les circulations",
        sourceLabel: "Les Jardins du Patio",
        projectSlug: "jardins-du-patio",
        imageNote: "Plan d’aménagement fourni",
      },
      {
        src: "/images/projects/villa-jardins-fleuris/vue-entree.webp",
        alt: "Vue d’ensemble du jardin d’entrée d’une villa, avec allée centrale et massifs",
        caption: "Relier l’architecture aux espaces plantés",
        sourceLabel: "Villa aux Jardins Fleuris",
        projectSlug: "villa-jardins-fleuris",
        imageNote: "Visualisation de projet améliorée par IA",
      },
      {
        src: "/images/projects/jardin-des-floraisons/vue-ensemble.webp",
        alt: "Vue aérienne d’un jardin de villa avec arbres fleuris, pelouse et piscine",
        caption: "Composer le jardin à l’échelle de la parcelle",
        sourceLabel: "Le Jardin des Floraisons",
        projectSlug: "jardin-des-floraisons",
        imageNote: "Visualisation de projet améliorée par IA",
      },
      {
        src: "/images/services/promenade-nocturne-uniformes-v2.webp",
        alt: "Vue aérienne nocturne d’une promenade avec palmiers, massifs fleuris et allées éclairées",
        caption: "Penser les parcours et les ambiances nocturnes",
        sourceLabel: "La Promenade Fleurie",
        projectSlug: "promenade-fleurie",
        imageNote: "Visualisation de projet et tenues retouchées par IA",
      },
    ],
  },
  "systemes-irrigation": {
    heading: "À chaque zone, un arrosage adapté.",
    introduction: "Pelouses, massifs et arbres : ces illustrations présentent l’aspersion, le goutte-à-goutte et les équipements qui distribuent et programment l’arrosage.",
    images: [
      {
        src: "/images/services/irrigation/aspersion-jardin-documentaire-v1.webp",
        alt: "Illustration de deux arroseurs escamotables le long d’une pelouse bordée de pierre et de galets",
        caption: "Arroser les pelouses par secteurs",
        sourceLabel: "Illustration du service",
        imageNote: "Image régénérée par IA à partir d’une photo fournie",
      },
      {
        src: "/images/services/irrigation/goutte-a-goutte-massif-documentaire-v2.webp",
        alt: "Illustration en gros plan d’un goutteur relié à un petit tuyau au pied de plantes aromatiques",
        caption: "Apporter l’eau au pied des massifs",
        sourceLabel: "Illustration du service",
        imageNote: "Image générée par IA · installation fictive",
      },
      {
        src: "/images/services/irrigation/irrigation-olivier-documentaire-v1.webp",
        alt: "Illustration d’une boucle de goutte-à-goutte dans la cuvette de terre autour d’un jeune olivier",
        caption: "Accompagner l’arrosage des jeunes arbres",
        sourceLabel: "Illustration du service",
        imageNote: "Image générée par IA · installation fictive",
      },
      {
        src: "/images/services/irrigation/regard-electrovannes-documentaire-v1.webp",
        alt: "Illustration d’un regard ouvert contenant trois électrovannes reliées aux canalisations d’arrosage",
        caption: "Répartir l’eau entre les zones du jardin",
        sourceLabel: "Illustration du service",
        imageNote: "Image générée par IA · installation fictive",
      },
      {
        src: "/images/services/irrigation/programmateur-arrosage-documentaire-v2.webp",
        alt: "Illustration d’un programmateur d’arrosage fixé au mur, capot ouvert et écran affichant 07:00, à côté d’un jardin",
        caption: "Programmer les cycles d’arrosage",
        sourceLabel: "Illustration du service",
        imageNote: "Image générée par IA · installation fictive",
        objectPosition: "right center",
      },
    ],
  },
  "eclairage-exterieur": {
    heading: "Révéler le jardin à la nuit tombée.",
    introduction: "Façade et allée : deux simulations nocturnes issues de photographies de projets différents explorent la lumière au jardin, complétées par deux études d’ambiance.",
    images: [
      {
        src: "/images/services/eclairage/jardins-ocre-facade-nocturne-v1.webp",
        alt: "Simulation nocturne de la façade des Jardins d’Ocre, avec un éclairage chaud des massifs et des arbres",
        caption: "Révéler la façade et les plantations",
        sourceLabel: "Les Jardins d’Ocre",
        projectSlug: "jardins-ocre",
        imageNote: "Simulation nocturne par IA · éclairage proposé",
      },
      {
        src: "/images/services/eclairage/ministere-allee-yuccas-nocturne-v1.webp",
        alt: "Simulation nocturne d’une allée des Jardins du Ministère, balisée entre les yuccas et les palmiers",
        caption: "Baliser une allée entre les plantations",
        sourceLabel: "Les Jardins du Ministère",
        imageNote: "Simulation nocturne par IA · éclairage proposé",
      },
      {
        src: "/images/services/allees-nocturne-uniformes-v2.webp",
        alt: "Visualisation nocturne de palmiers éclairés au pied d’une façade",
        caption: "Souligner les palmiers et les façades",
        sourceLabel: "Les Allées de Palmiers",
        projectSlug: "allees-de-palmiers",
        imageNote: "Visualisation de projet et tenue retouchées par IA",
      },
      {
        src: "/images/services/promenade-nocturne-uniformes-v2.webp",
        alt: "Visualisation aérienne nocturne d’une promenade avec éclairage des allées",
        caption: "Rendre les parcours lisibles le soir",
        sourceLabel: "La Promenade Fleurie",
        projectSlug: "promenade-fleurie",
        imageNote: "Visualisation de projet et tenues retouchées par IA",
      },
    ],
  },
  plantation: {
    heading: "Des végétaux choisis, des gestes précis.",
    introduction: "De la préparation des végétaux à leur mise en terre, découvrez des gestes de plantation et des compositions issues de plusieurs projets.",
    images: [
      {
        src: "/images/projects/jardins-ocre/gestes-de-plantation-uniformes-v2.webp",
        alt: "Quatre jardiniers en tenue bleue Greenexpert plantent un massif devant une façade ocre",
        caption: "La mise en terre des jeunes plants",
        sourceLabel: "Les Jardins d’Ocre",
        projectSlug: "jardins-ocre",
        imageNote: "Photographie, tenues et espace de travail retouchés par IA",
      },
      {
        src: "/images/field-work/planting-team-greenexpert-v2.webp",
        shape: "tall",
        alt: "Deux jardiniers en uniforme bleu Greenexpert travaillent dans un massif de fleurs",
        caption: "Planter les bordures fleuries",
        sourceLabel: "Espaces verts d’un équipement collectif",
        imageNote: "Photographie et tenues retouchées par IA",
        objectPosition: "center 70%",
      },
      {
        src: "/images/projects/jardins-ocre/preparation-plantations.webp",
        alt: "Végétaux en pots disposés dans un massif de terre préparée devant la façade des Jardins d’Ocre",
        caption: "Préparer les végétaux avant leur mise en terre",
        sourceLabel: "Les Jardins d’Ocre",
        projectSlug: "jardins-ocre",
        imageNote: "Photographie retouchée par IA",
      },
      {
        src: "/images/services/plantation/ministere-massif-et-poteries.webp",
        alt: "Massif de grands feuillages et poteries en terre cuite sur des socles de zellige dans les Jardins du Ministère",
        caption: "Associer les plantations en massif et en pot",
        sourceLabel: "Les Jardins du Ministère",
        imageNote: "Photographie retouchée par IA",
      },
      {
        src: "/images/projects/jardins-ocre/massif-rose.webp",
        alt: "Massif associant fleurs roses et blanches, arbustes et feuillages au pied d’une façade ocre",
        caption: "Composer des massifs fleuris",
        sourceLabel: "Les Jardins d’Ocre",
        projectSlug: "jardins-ocre",
        imageNote: "Photographie retouchée par IA",
      },
    ],
  },
  terrassement: {
    heading: "Préparer le terrain pour le futur jardin.",
    introduction: "Excavation, nivellement et drainage : trois illustrations générées présentent ces étapes, complétées par deux photographies retouchées de préparation des plantations.",
    images: [
      {
        src: "/images/services/terrassement/excavation-jardin-documentaire-v3.webp",
        alt: "Illustration d’une mini-pelle sur un terrain décaissé, avec la terre excavée au premier plan",
        caption: "Décaisser et modeler le terrain",
        sourceLabel: "Illustration du service",
        imageNote: "Image générée par IA · chantier fictif",
        objectPosition: "right center",
      },
      {
        src: "/images/services/terrassement/nivellement-terre-documentaire-v3.webp",
        alt: "Illustration d’un sol nivelé avec un râteau au premier plan et un niveau laser sur trépied",
        caption: "Régler les niveaux et préparer le sol",
        sourceLabel: "Illustration du service",
        imageNote: "Image générée par IA · chantier fictif",
      },
      {
        src: "/images/services/terrassement/drainage-jardin-documentaire-v3.webp",
        alt: "Illustration d’une tranchée de drainage avec un tuyau annelé, du gravier et un géotextile",
        caption: "Prévoir l’écoulement des eaux",
        sourceLabel: "Illustration du service",
        imageNote: "Image générée par IA · chantier fictif",
      },
      {
        src: "/images/projects/jardins-ocre/preparation-plantations.webp",
        alt: "Massif de terre préparée avec des végétaux en pots disposés avant plantation",
        caption: "Préparer l’emplacement des futurs végétaux",
        sourceLabel: "Les Jardins d’Ocre",
        projectSlug: "jardins-ocre",
        imageNote: "Photographie retouchée par IA",
      },
      {
        src: "/images/field-work/planting-team-greenexpert-v2.webp",
        shape: "tall",
        alt: "Jardiniers en tenue bleue Greenexpert travaillant la terre en bordure de pelouse",
        caption: "Travailler la terre à la main en bordure de massif",
        sourceLabel: "Espaces verts d’un équipement collectif",
        imageNote: "Photographie et tenues retouchées par IA",
        objectPosition: "center 75%",
      },
    ],
  },
  maintenance: {
    heading: "Le soin du jardin, au fil des gestes.",
    introduction: "Tonte, soin des palmiers et entretien des massifs : des interventions complémentaires pour préserver les lignes et la vitalité des espaces verts.",
    images: [
      {
        src: "/images/projects/jardins-ocre/entretien-jardin-uniforme-v2.webp",
        alt: "Jardinier de dos en uniforme bleu avec le logo Greenexpert devant un massif",
        caption: "L’entretien au plus près des plantations",
        sourceLabel: "Les Jardins d’Ocre",
        projectSlug: "jardins-ocre",
        imageNote: "Photographie et tenue retouchées par IA",
      },
      {
        src: "/images/field-work/lawn-care-greenexpert-v2.webp",
        shape: "tall",
        alt: "Jardinier en tenue bleue Greenexpert poussant une tondeuse sur une pelouse",
        caption: "La tonte des pelouses",
        sourceLabel: "Espaces verts d’un équipement collectif",
        imageNote: "Photographie et tenue retouchées par IA",
        objectPosition: "center 50%",
      },
      {
        src: "/images/field-work/palm-pruning-greenexpert-v2.webp",
        shape: "tall",
        alt: "Jardinier en uniforme bleu Greenexpert sur une échelle au pied d’un palmier",
        caption: "Le soin des palmiers",
        sourceLabel: "Espaces verts d’un équipement collectif",
        imageNote: "Photographie et tenue retouchées par IA",
        objectPosition: "center 35%",
      },
      {
        src: "/images/projects/jardins-ocre/perspective-topiaires.webp",
        alt: "Perspective sur une pelouse et des arbres taillés en formes arrondies",
        caption: "Préserver les formes et les perspectives",
        sourceLabel: "Les Jardins d’Ocre",
        projectSlug: "jardins-ocre",
        imageNote: "Photographie retouchée par IA",
      },
    ],
  },
};
