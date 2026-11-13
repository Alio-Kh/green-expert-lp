export type ServiceDetail = {
  scope: string;
  quoteFactors: string;
  preparation: string;
  questions: { question: string; answer: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "design-paysager": {
    scope: "La conception organise les usages du jardin : circulations, zones de repos, plantations et accès pour l’entretien. Le sol, l’exposition et l’eau disponible orientent les choix. Le devis précise les plans attendus, les éventuelles vues 3D et les étapes de validation avant les travaux.",
    quoteFactors: "La surface ne suffit pas à définir le coût d’une étude. La pente, les ouvrages existants, le niveau de détail des plans et les échanges nécessaires pour arrêter le projet comptent aussi. Les travaux de réalisation sont à distinguer de la mission de conception dans votre demande.",
    preparation: "Prévoyez des photos, les dimensions ou un plan du terrain, vos usages prioritaires et une enveloppe budgétaire. Signalez les arbres à conserver, les accès et les problèmes d’eau ou de drainage déjà observés.",
    questions: [
      { question: "Peut-on réaménager un jardin existant ?", answer: "Oui. L’étude peut partir des végétaux et ouvrages déjà présents. Indiquez ce que vous souhaitez conserver, déplacer ou remplacer pour définir le périmètre de la rénovation." },
      { question: "Les rendus 3D sont-ils inclus ?", answer: "Les livrables sont définis au devis. Précisez si vous souhaitez des plans techniques, des vues d’ambiance ou une visualisation 3D afin d’adapter la mission." },
    ],
  },
  "systemes-irrigation": {
    scope: "Un réseau d’arrosage se dimensionne par zone. Une pelouse, une haie et un massif n’ont pas les mêmes besoins. L’étude examine la pression, le débit, la source d’eau et le sol pour choisir les goutteurs, les arroseurs et les commandes adaptés.",
    quoteFactors: "Le nombre de zones, les longueurs de canalisation, l’accès au réseau d’eau et la remise en état du terrain influencent le devis. Le pilotage connecté, les capteurs et les visites de maintenance doivent être précisés séparément selon la configuration retenue.",
    preparation: "Indiquez votre source d’eau, la surface à arroser et les équipements existants. Des photos du compteur, du programmateur et des plantations permettent de préparer l’étude. Les vérifications sur place déterminent ensuite la solution réalisable.",
    questions: [
      { question: "Combien d’eau peut-on économiser ?", answer: "Le résultat dépend du système précédent, du sol, de la météo et des réglages. Un arrosage ciblé peut éviter les apports inutiles ; un pourcentage d’économie ne peut être annoncé sans référence de consommation et suivi comparables." },
      { question: "Faut-il entretenir un arrosage automatique ?", answer: "Oui. Les filtres, goutteurs et réglages doivent être contrôlés. La programmation évolue avec les saisons et les végétaux. Le contenu et la fréquence du suivi sont définis dans votre prestation." },
    ],
  },
  "eclairage-exterieur": {
    scope: "L’éclairage du jardin sert à rendre les cheminements lisibles et à mettre en valeur certains végétaux ou volumes. L’étude répartit les points lumineux et prévoit les commandes en tenant compte des usages, du voisinage et des zones exposées à l’eau.",
    quoteFactors: "Le nombre de luminaires, leur implantation, les longueurs de câblage et l’alimentation existante déterminent une grande partie du coût. Les scénarios programmés, les commandes et les reprises de surface sont à préciser dans le devis.",
    preparation: "Repérez les chemins, les entrées et les espaces utilisés le soir. Ajoutez des photos du jardin et des informations sur l’alimentation disponible. Signalez les points d’eau et les équipements déjà installés.",
    questions: [
      { question: "Peut-on éclairer un jardin déjà aménagé ?", answer: "Oui, sous réserve de vérifier les accès et l’installation existante. Le passage des câbles et la pose des luminaires se préparent pour limiter les interventions sur les plantations et les revêtements." },
      { question: "Comment choisir les luminaires ?", answer: "Le choix dépend de l’effet recherché, de l’emplacement et de l’exposition. La puissance, la température de couleur et la protection du matériel sont définies pour chaque usage, puis précisées dans la proposition." },
    ],
  },
  plantation: {
    scope: "La plantation commence par le choix d’espèces compatibles avec l’exposition, le sol, l’espace disponible à maturité et l’eau accessible. La préparation du sol, les distances de plantation et les premiers soins sont aussi importants que le choix des végétaux.",
    quoteFactors: "Les quantités, les espèces, la taille des sujets et les accès de livraison influencent le budget. L’amendement du sol, le tuteurage, l’arrosage et le suivi après plantation doivent être précisés pour comparer des devis de même périmètre.",
    preparation: "Communiquez la localisation, des photos, les dimensions des zones à planter et l’effet souhaité : ombre, haie, massif ou arbre isolé. Précisez qui assurera l’arrosage après l’intervention et les végétaux déjà présents.",
    questions: [
      { question: "À quelle période faut-il planter ?", answer: "Le calendrier dépend des espèces, des conditions locales et des possibilités d’arrosage. Il faut notamment anticiper les périodes de forte chaleur. La date d’intervention se décide après examen de votre terrain et des végétaux retenus." },
      { question: "Quelles sont les conditions de reprise ?", answer: "La reprise dépend notamment du sol, de l’arrosage et des soins après plantation. Les modalités de suivi et toute garantie éventuelle doivent figurer dans le devis ou le contrat, avec leur durée et leurs conditions." },
    ],
  },
  terrassement: {
    scope: "Le terrassement prépare le support du futur jardin. Il peut comprendre le nivellement, le modelage des pentes, la gestion des eaux et l’apport de terre végétale. Le projet doit tenir compte des ouvrages voisins et des réseaux présents avant toute intervention.",
    quoteFactors: "Le volume de terre à déplacer, la nature du sol, les accès des engins et la destination des déblais comptent davantage que la seule surface. Le drainage, l’apport de matériaux et les finitions doivent être détaillés dans la proposition.",
    preparation: "Préparez des photos, les dimensions du terrain et la largeur des accès. Signalez les réseaux connus, les zones où l’eau stagne et les éléments à protéger. Une visite permet de préciser les contraintes et l’organisation des travaux.",
    questions: [
      { question: "L’évacuation des déblais est-elle comprise ?", answer: "Elle doit être précisée au devis avec les volumes estimés et les conditions d’accès. Certains matériaux peuvent être réutilisés sur place si le projet et leur nature le permettent." },
      { question: "Le terrassement règle-t-il un problème de drainage ?", answer: "Il peut contribuer à corriger les pentes et les écoulements. La solution dépend toutefois du sol et de l’exutoire disponible. Un diagnostic est nécessaire avant de choisir les ouvrages à réaliser." },
    ],
  },
  maintenance: {
    scope: "L’entretien se définit selon les végétaux, les surfaces et les usages du lieu. Le programme peut réunir tonte, taille, désherbage, soins du sol et contrôle de l’arrosage. Les tâches et leur fréquence sont précisées pour chaque espace, puis adaptées au fil des saisons.",
    quoteFactors: "Le devis tient compte de la surface, de l’état initial, du nombre de passages, des accès et des moyens nécessaires. La remise en état, l’évacuation des déchets verts et les interventions exceptionnelles doivent être distinguées de l’entretien courant.",
    preparation: "Indiquez la surface, les types de végétaux et les difficultés rencontrées. Ajoutez des photos récentes et vos contraintes d’accès ou d’horaires. Précisez si vous recherchez une intervention ponctuelle ou un suivi régulier.",
    questions: [
      { question: "Quelle fréquence d’entretien choisir ?", answer: "Elle dépend de la saison, de la croissance et du résultat attendu. Une pelouse fréquentée et un jardin peu arrosé ne demandent pas le même rythme. Le diagnostic sert à proposer un calendrier adapté." },
      { question: "Que doit préciser un contrat d’entretien ?", answer: "Les espaces concernés, les tâches, la fréquence, les fournitures et la gestion des déchets doivent être clairement définis. Précisez aussi les modalités d’accès et de signalement des travaux hors contrat." },
    ],
  },
};
