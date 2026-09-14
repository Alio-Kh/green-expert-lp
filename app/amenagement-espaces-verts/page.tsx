import { EditorialPage } from "@/components/editorial-page";
import { pageMetadata, BUSINESS_ID, jsonLd, siteUrl } from "@/lib/site";

const title = "Aménagement des espaces verts au Maroc";
const description = "Conception, terrassement, plantation, irrigation et entretien : Green Expert coordonne l’aménagement de vos jardins et espaces verts au Maroc.";
export const metadata = pageMetadata(title, description, "/amenagement-espaces-verts");

export default function LandscapingPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "Service", name: title, description, url: siteUrl("/amenagement-espaces-verts"), provider: { "@id": BUSINESS_ID }, areaServed: { "@type": "Country", name: "Maroc" } }) }} />
    <EditorialPage title={title} eyebrow="Un projet d’ensemble" path="/amenagement-espaces-verts"
      intro="Aménager un espace vert, c’est organiser un lieu pour ses usages, préparer son sol et choisir les végétaux et équipements qui pourront y durer. Green Expert réunit les prestations nécessaires à la création ou à la rénovation de votre extérieur."
      image="/images/services/design-paysager.jpg" imageAlt="Jardin aménagé avec palmiers, plantes méditerranéennes et allée en pas japonais"
      sections={[
        { id: "besoins", title: "Définir les usages et le périmètre", paragraphs: [
          "Jardin résidentiel, espaces communs, abords de bureaux ou d’un établissement : le point de départ est l’usage du lieu. Les circulations, les zones à préserver, les besoins d’ombre et le temps consacré à l’entretien orientent le projet. Nous identifions avec vous ce qui doit être créé, conservé ou rénové.",
          "La conception traduit ces choix en une organisation du terrain. Les plans et visualisations sont définis selon la mission retenue. Cette étape permet de préciser les surfaces plantées, les cheminements et les équipements avant de lancer la réalisation.",
        ], link: { href: "/services/design-paysager", label: "Étudier la conception de votre jardin" } },
        { id: "terrain", title: "Préparer le sol et les réseaux", paragraphs: [
          "Les travaux commencent par les interventions qui structurent le terrain : nivellement, gestion des pentes et préparation des zones de plantation. Les accès des engins, les réseaux existants et les possibilités d’évacuation des déblais doivent être vérifiés avant le chantier.",
          "L’irrigation et l’éclairage se coordonnent avec cette préparation pour anticiper les passages de réseaux. Le besoin en drainage dépend du sol et des écoulements observés. Chaque ouvrage doit répondre à une contrainte identifiée, avec un périmètre précisé dans le devis.",
        ], link: { href: "/services/terrassement", label: "Comprendre les travaux de terrassement" } },
        { id: "plantations", title: "Installer les végétaux et les équipements", paragraphs: [
          "Les plantations se choisissent selon l’exposition, le sol, les dimensions à maturité et les ressources en eau. Arbres, haies, massifs ou pelouses sont implantés pour composer le jardin tout en permettant son entretien. La préparation du sol et les soins après plantation font partie des points à organiser.",
          "Le système d’arrosage est adapté aux différentes zones. L’éclairage accompagne les usages du soir et les cheminements. Les quantités, les références retenues et les réglages sont à préciser dans la proposition afin de comprendre exactement les prestations prévues.",
        ], link: { href: "/services/plantation", label: "Prévoir les plantations et leur suivi" } },
        { id: "suivi", title: "Organiser la réception et l’entretien", paragraphs: [
          "À la fin des travaux, un échange permet de vérifier les interventions réalisées et d’expliquer l’usage des équipements. Les consignes d’arrosage et de suivi des plantations sont essentielles pour accompagner l’évolution du jardin. Toute garantie éventuelle doit être définie par écrit, avec ses conditions.",
          "Un suivi régulier peut ensuite réunir tonte, taille, désherbage et contrôle de l’arrosage. Le programme dépend de la saison et des végétaux. Le contrat précise les interventions incluses, leur fréquence et les travaux qui nécessitent une proposition complémentaire.",
        ], link: { href: "/services/maintenance", label: "Découvrir l’entretien paysager" } },
        { id: "budget", title: "Construire un devis comparable et utile", paragraphs: [
          "Le budget dépend de la surface, mais aussi de l’état du terrain, des volumes de terre, des espèces et tailles de végétaux, des équipements et des accès. Pour comparer plusieurs offres, vérifiez que chacune comprend les mêmes études, fournitures, travaux et modalités de suivi.",
          "Pour préparer notre échange, indiquez la localisation, la surface approximative, vos priorités et la période souhaitée. Des photos et un plan existant aident à préciser les besoins de visite. Basés à Salé, nous étudions les modalités d’intervention à Rabat et dans les autres villes du Maroc selon votre projet.",
        ], link: { href: "/#contact", label: "Préparer mon devis d’aménagement" } },
      ]}
      related={[
        { href: "/paysagiste-rabat", label: "Votre paysagiste à Rabat et Salé", description: "Notre base, nos prestations et les informations utiles avant une visite." },
        { href: "/services/eclairage-exterieur", label: "Éclairage extérieur", description: "Préparer l’implantation et l’usage des points lumineux de votre jardin." },
        { href: "/conseils/amenagement-espaces-verts", label: "Le guide de préparation", description: "Les étapes à connaître et les questions à poser avant les travaux." },
      ]}
    />
  </>;
}
