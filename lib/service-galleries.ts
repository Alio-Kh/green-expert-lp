export type ServiceGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  projectSlug?: string;
  imageNote: string;
  objectPosition?: string;
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
    introduction: "Quatre études pour explorer les volumes, les circulations et les associations végétales. Ces plans et visualisations présentent des intentions de conception.",
    images: [
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
    ],
  },
  "systemes-irrigation": {
    heading: "L’arrosage au plus près des plantations.",
    introduction: "Pelouses, abords d’allées et zones arborées : ces photographies illustrent différents usages de l’arrosage par aspersion. Elles sont présentées à titre illustratif, sans attribution à un chantier Greenexpert.",
    images: [
      {
        src: "/images/services/irrigation/arroseurs-pelouse.webp",
        alt: "Arroseurs escamotables en fonctionnement le long d’une pelouse",
        caption: "L’aspersion sur une bande de pelouse",
        sourceLabel: "Photographie fournie",
        imageNote: "Illustration d’arrosage par aspersion",
      },
      {
        src: "/images/services/irrigation/arrosage-pas-japonais.webp",
        alt: "Jets d’arrosage de part et d’autre d’un chemin de pas japonais",
        caption: "Arroser les espaces autour des cheminements",
        sourceLabel: "Photographie fournie",
        imageNote: "Illustration d’arrosage par aspersion",
      },
      {
        src: "/images/services/irrigation/arrosage-sous-arbres.webp",
        alt: "Arroseurs en fonctionnement dans une pelouse plantée d’arbres",
        caption: "Adapter l’implantation aux zones arborées",
        sourceLabel: "Photographie fournie",
        imageNote: "Illustration d’arrosage par aspersion",
        objectPosition: "center 75%",
      },
      {
        src: "/images/services/irrigation/arrosage-bordure.webp",
        alt: "Arroseur placé au bord d’une pelouse courbe entourée de galets",
        caption: "Accompagner les contours du jardin",
        sourceLabel: "Photographie fournie",
        imageNote: "Illustration d’arrosage par aspersion",
        objectPosition: "center 70%",
      },
    ],
  },
  "eclairage-exterieur": {
    heading: "Révéler le jardin à la nuit tombée.",
    introduction: "Deux études d’ambiance nocturne et un détail de luminaire dans un patio illustrent la mise en lumière des végétaux et des cheminements.",
    images: [
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
      {
        src: "/images/projects/patio-des-galets/massif-angle.webp",
        alt: "Petit projecteur au pied d’un mur, à côté d’un massif de feuillages",
        caption: "Intégrer un point lumineux dans un massif",
        sourceLabel: "Le Patio des Galets",
        projectSlug: "patio-des-galets",
        imageNote: "Photographie retouchée par IA · vue de jour",
        objectPosition: "right center",
      },
    ],
  },
  plantation: {
    heading: "Des végétaux choisis, des gestes précis.",
    introduction: "De la mise en terre aux associations de feuillages, découvrez des scènes de plantation et des compositions issues de plusieurs projets.",
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
        alt: "Deux jardiniers en uniforme bleu Greenexpert travaillent dans un massif de fleurs",
        caption: "Planter les bordures fleuries",
        sourceLabel: "Espaces verts d’un équipement collectif",
        imageNote: "Photographie et tenues retouchées par IA",
        objectPosition: "center 70%",
      },
      {
        src: "/images/projects/patio-des-galets/bordure-vegetale.webp",
        alt: "Feuillages de différentes hauteurs dans une bordure en bois au pied d’une façade",
        caption: "Associer les feuillages dans un espace intime",
        sourceLabel: "Le Patio des Galets",
        projectSlug: "patio-des-galets",
        imageNote: "Photographie retouchée par IA",
      },
      {
        src: "/images/projects/jardin-des-feuillages/palette-vegetale.webp",
        alt: "Étude de massifs associant palmiers, feuillages larges et graminées",
        caption: "Composer plusieurs hauteurs de végétation",
        sourceLabel: "Le Jardin des Feuillages",
        projectSlug: "jardin-des-feuillages",
        imageNote: "Visualisation de projet améliorée par IA",
      },
    ],
  },
  terrassement: {
    heading: "Préparer la terre avant de planter.",
    introduction: "Ces deux vues montrent la préparation de massifs et le travail manuel de la terre avant plantation. Elles illustrent cette étape du jardin, sans documenter des travaux d’excavation ou de drainage.",
    images: [
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
        alt: "Jardinier en tenue bleue Greenexpert poussant une tondeuse sur une pelouse",
        caption: "La tonte des pelouses",
        sourceLabel: "Espaces verts d’un équipement collectif",
        imageNote: "Photographie et tenue retouchées par IA",
        objectPosition: "center 50%",
      },
      {
        src: "/images/field-work/palm-pruning-greenexpert-v2.webp",
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
