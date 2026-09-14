import { EditorialPage } from "@/components/editorial-page";
import { pageMetadata, BUSINESS_ID, jsonLd, siteUrl } from "@/lib/site";

const title = "Paysagiste à Rabat et Salé";
const description = "Depuis Salé, Green Expert accompagne vos projets de jardins à Rabat : conception, aménagement, irrigation et entretien. Préparez votre demande de devis.";
export const metadata = pageMetadata(title, description, "/paysagiste-rabat");

export default function RabatPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "Service", name: title, description, url: siteUrl("/paysagiste-rabat"), provider: { "@id": BUSINESS_ID }, areaServed: [{ "@type": "City", name: "Rabat" }, { "@type": "City", name: "Salé" }] }) }} />
    <EditorialPage title={title} eyebrow="Rabat · Salé" path="/paysagiste-rabat"
      intro="Vous souhaitez créer un jardin, réaménager un extérieur ou organiser son entretien ? Basée à Salé, Green Expert vous accompagne à Rabat et Salé, de l’étude du terrain au suivi des plantations."
      image="/images/field-work/planting-team-enhanced.webp" imageAlt="Travaux de plantation d’un massif fleuri"
      sections={[
        { id: "votre-jardin", title: "Un aménagement adapté à votre lieu de vie", paragraphs: [
          "Un jardin de villa, une cour de résidence et les abords d’un établissement ne répondent pas aux mêmes besoins. Nous partons des usages du lieu : circuler, se reposer, préserver l’intimité, accueillir des visiteurs ou faciliter l’entretien. Les végétaux et les équipements sont choisis en fonction du terrain et de ces priorités.",
          "À Rabat comme à Salé, chaque parcelle mérite une étude de son exposition, de son sol et de l’eau disponible. La proximité du littoral, les zones ombragées ou l’exposition au vent sont des éléments à signaler. L’objectif est de définir un aménagement cohérent avec les contraintes observées sur place.",
        ], link: { href: "/services/design-paysager", label: "Découvrir notre service de conception paysagère" } },
        { id: "prestations", title: "De la préparation du terrain à l’entretien", paragraphs: [
          "Le projet peut réunir conception, terrassement, plantation, arrosage automatique et éclairage extérieur. Nous définissons avec vous les interventions nécessaires et leur ordre. Pour un jardin existant, la mission peut aussi se concentrer sur une zone à reprendre ou un équipement à améliorer.",
          "L’entretien se prévoit dès la conception : accès pour les équipes, taille des végétaux à maturité et rythme d’arrosage. Pour une prestation régulière, le contrat précise les tâches, les passages et la gestion des déchets. La remise en état initiale et les travaux exceptionnels sont à distinguer de l’entretien courant.",
        ], link: { href: "/services/maintenance", label: "Préparer un contrat d’entretien de jardin" } },
        { id: "intervention", title: "Notre base à Salé, votre projet à Rabat", paragraphs: [
          "Notre adresse est Résidence Assafae 05, Imm 41, Appt 12, Al Quods, Laayayda, Salé. Indiquez l’adresse de votre terrain lors du premier échange pour préciser les conditions de visite et d’intervention. Cette page présente notre accompagnement dans la région ; notre base reste à Salé.",
          "Pour un jardin privé, une copropriété ou un site professionnel, les accès et les horaires autorisés peuvent influencer l’organisation. Précisez notamment la largeur du passage, les possibilités de livraison et les contraintes d’occupation du lieu. Pour un projet ailleurs au Maroc, contactez-nous afin d’en étudier les modalités.",
        ] },
        { id: "devis", title: "Les informations utiles pour votre devis", paragraphs: [
          "Envoyez des photos récentes, une surface approximative, la localisation et les travaux souhaités. Un plan, même simple, aide à situer les accès, les plantations conservées et les arrivées d’eau. Précisez vos priorités, votre budget indicatif et la période envisagée.",
          "Le montant dépend du périmètre : étude, préparation du terrain, végétaux, équipements, accès et suivi. Une première prise de contact permet de préparer la visite nécessaire et de définir ce qui doit figurer dans la proposition. Les délais et les éventuelles garanties sont précisés pour votre projet, sans engagement chiffré avant étude.",
          "Vous pouvez nous joindre au +212 661 967 903 ou à contact@greenexpert.ma. Le formulaire du site permet également de décrire votre besoin avant notre échange.",
        ], link: { href: "/#contact", label: "Décrire mon projet à Rabat ou Salé" } },
      ]}
      related={[
        { href: "/amenagement-espaces-verts", label: "Aménager un espace vert", description: "Les prestations à coordonner pour passer de l’idée au jardin." },
        { href: "/services/systemes-irrigation", label: "Prévoir l’arrosage", description: "Définir les besoins en eau et les équipements adaptés à votre terrain." },
        { href: "/conseils/amenagement-espaces-verts", label: "Préparer son projet", description: "Un guide pratique pour organiser vos priorités avant les travaux." },
      ]}
    />
  </>;
}
