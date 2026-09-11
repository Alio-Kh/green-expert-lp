import { EditorialPage } from "@/components/editorial-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Aménager un espace vert : étapes et budget",
  "Comment préparer l’aménagement d’un espace vert ? Usages, sol, végétaux, arrosage, budget et entretien : les questions à poser avant de commencer.",
  "/conseils/amenagement-espaces-verts",
);

export default function LandscapingGuide() {
  return <EditorialPage title="Comment préparer l’aménagement d’un espace vert ?" eyebrow="Les conseils Green Expert" path="/conseils/amenagement-espaces-verts"
    intro="L’aménagement d’un espace vert réunit la conception du lieu, la préparation du terrain, les plantations et les équipements nécessaires à son usage. Avant de choisir des plantes ou de commencer les travaux, clarifiez vos besoins et les contraintes de votre terrain."
    image="/images/services/design-paysager.jpg" imageAlt="Illustration d’un jardin organisé autour d’une maison"
    sections={[
      { id: "usages", title: "Commencer par les usages du lieu", paragraphs: [
        "Listez ce que vous attendez de l’espace : un coin de repos, une zone de passage, de l’ombre, davantage d’intimité ou un cadre pour accueillir des visiteurs. Classez ces attentes par priorité. Un jardin agréable doit rester pratique au quotidien, y compris pour le rangement du matériel et l’accès aux équipements.",
        "Précisez aussi le temps et le budget que vous pourrez consacrer à l’entretien. Une grande pelouse, une haie taillée ou des massifs fleuris n’entraînent pas les mêmes besoins. Cette réflexion aide à choisir un aménagement que vous pourrez accompagner dans la durée.",
      ] },
      { id: "observer", title: "Observer le terrain avant de dessiner", paragraphs: [
        "Repérez les zones ensoleillées, l’ombre des bâtiments, les passages du vent et les endroits où l’eau stagne. Notez les pentes, les arbres à conserver et les réseaux connus. Les photos prises à différents moments de la journée sont utiles pour préparer l’échange avec un paysagiste.",
        "Vérifiez les dimensions et les accès : entrée du terrain, largeur des passages et espace disponible pour les livraisons. Une étude sur place permet ensuite de préciser les caractéristiques du sol et les contraintes techniques. Les travaux de drainage ou de nivellement répondent à ce diagnostic.",
      ], link: { href: "/services/terrassement", label: "Comprendre la préparation du terrain" } },
      { id: "plan", title: "Organiser un plan d’ensemble", paragraphs: [
        "Placez d’abord les accès et les zones d’usage, puis les surfaces plantées et les équipements. Anticipez les passages des réseaux d’eau et d’électricité avant les revêtements et les plantations. Cette coordination limite les reprises de travaux sur un jardin déjà installé.",
        "Pensez au jardin à maturité : l’arbre qui semble petit aujourd’hui occupera davantage d’espace. Les distances entre végétaux, leur développement et l’accès pour la taille sont à examiner avec le professionnel. Un plan permet de discuter ces choix avant de commander les fournitures.",
      ], link: { href: "/services/design-paysager", label: "Découvrir l’étude paysagère" } },
      { id: "eau", title: "Choisir les végétaux avec leurs besoins en eau", paragraphs: [
        "Le choix dépend du sol, de l’exposition et des conditions locales. Une plante appréciée sur une photographie ne convient pas nécessairement à votre terrain. Rassemblez les végétaux selon leurs besoins et demandez conseil sur leur développement et leur entretien.",
        "L’arrosage se raisonne par zone. Le goutte-à-goutte, les arroseurs et les commandes répondent à des usages différents. La pression et le débit disponibles doivent être vérifiés. Une économie d’eau se mesure par rapport à une consommation de référence ; aucun pourcentage unique ne décrit tous les jardins.",
      ], link: { href: "/services/systemes-irrigation", label: "Préparer le système d’arrosage" } },
      { id: "budget", title: "Comparer les devis sur le même périmètre", paragraphs: [
        "Demandez à distinguer l’étude, les travaux préparatoires, les fournitures, la pose et le suivi. Pour les végétaux, les espèces, les quantités et les dimensions comptent. Pour les travaux, vérifiez les accès, les volumes estimés et la gestion des déblais. L’offre la plus facile à comparer est celle dont le contenu est explicite.",
        "Le calendrier doit tenir compte des approvisionnements et des contraintes du chantier. Faites préciser les conditions de paiement, les étapes de validation et les éventuelles garanties. Si vous réalisez le projet en plusieurs phases, organisez-les autour d’un plan d’ensemble pour préserver la cohérence du jardin.",
      ] },
      { id: "entretien", title: "Prévoir l’après-chantier", paragraphs: [
        "Déterminez qui assurera les premiers arrosages, la surveillance des plantations et les réglages saisonniers. Conservez les consignes d’utilisation des équipements. Les végétaux évoluent : un suivi permet de repérer les besoins et d’adapter les interventions.",
        "Pour un contrat d’entretien, précisez les surfaces, les tâches et la fréquence des passages. Vérifiez la gestion des déchets et les travaux hors contrat. Pour commencer votre projet avec Green Expert, préparez simplement la localisation, quelques photos, la surface et vos priorités.",
      ], link: { href: "/#contact", label: "Échanger sur mon projet" } },
    ]}
    related={[
      { href: "/amenagement-espaces-verts", label: "Faire aménager votre espace vert", description: "Découvrez les prestations pour concevoir et réaliser votre extérieur." },
      { href: "/paysagiste-rabat", label: "Un projet à Rabat ou Salé", description: "Préparez votre demande auprès de notre équipe basée à Salé." },
      { href: "/services/maintenance", label: "Organiser l’entretien", description: "Le périmètre et la fréquence d’un suivi adapté à votre jardin." },
    ]}
  />;
}
