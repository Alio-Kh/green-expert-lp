import { Plus } from "lucide-react";

export const FAQ_ITEMS = [
  {
    question: "Quels types de projets prenez-vous en charge ?",
    answer:
      "Nous accompagnons les jardins privés, résidences, entreprises et institutions, de la conception initiale jusqu’à l’entretien régulier.",
  },
  {
    question: "Comment débute un projet avec Green Expert ?",
    answer:
      "Tout commence par un échange sur vos usages, votre terrain, vos délais et votre budget. Une visite technique permet ensuite de construire une proposition adaptée.",
  },
  {
    question: "Intervenez-vous en dehors de Rabat et Casablanca ?",
    answer:
      "Oui. Nous étudions des projets dans plusieurs villes du Maroc. Indiquez-nous la localisation de votre terrain pour confirmer les modalités d’intervention.",
  },
  {
    question: "Pouvez-vous réduire la consommation d’eau du jardin ?",
    answer:
      "Oui. Nous combinons des végétaux adaptés, un zonage précis et des systèmes d’irrigation économes pour apporter la juste quantité d’eau à chaque espace.",
  },
  {
    question: "Proposez-vous un contrat d’entretien ?",
    answer:
      "Oui. Nos contrats sont ajustés à la surface, aux végétaux et au rythme d’intervention nécessaire pour préserver votre aménagement toute l’année.",
  },
] as const;

export function FAQSection() {
  return (
    <section
      id="questions"
      aria-labelledby="faq-heading"
      className="bg-[#f6f5ec] py-20 text-[#17251e] md:py-28"
    >
      <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#62791b]">
            Questions fréquentes
          </p>
          <h2
            id="faq-heading"
            className="mt-5 max-w-lg font-serif text-4xl font-light leading-tight md:text-5xl"
          >
            Les réponses utiles avant de vous lancer.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-[#17251e]/65">
            Vous avez une contrainte particulière ? Notre équipe vous répond
            directement et étudie votre terrain avec vous.
          </p>
          <a
            href="mailto:contact@greenexpert.ma"
            className="mt-7 inline-flex rounded-sm border-b border-[#62791b] pb-1 text-sm font-semibold text-[#4f6413] transition hover:text-[#17251e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62791b]/50"
          >
            Poser une autre question
          </a>
        </div>

        <div className="border-t border-[#17251e]/15">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[#17251e]/15"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-medium marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#62791b]/50 sm:text-lg">
                {item.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#17251e]/15 text-[#4f6413] transition group-open:rotate-45 group-open:bg-[#17251e] group-open:text-white">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 leading-7 text-[#17251e]/65">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
