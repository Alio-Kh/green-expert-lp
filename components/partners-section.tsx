import Image from "next/image";

const partners = [
  {
    name: "INPT",
    logo: "/partners/transparent/inpt.webp",
    alt: "Logo de l'Institut National des Postes et Télécommunications",
  },
  {
    name: "Morocco Foodex",
    logo: "/partners/transparent/morocco-foodex.webp",
    alt: "Logo de Morocco Foodex",
  },
  {
    name: "MedOMed",
    logo: "/partners/transparent/medomed.webp",
    alt: "Logo de MedOMed",
  },
  {
    name: "MENPS",
    logo: "/partners/transparent/menps.webp",
    alt: "Logo du Ministère de l'Éducation Nationale, du Préscolaire et des Sports",
  },
  {
    name: "CCM",
    logo: "/partners/transparent/ccm.webp",
    alt: "Logo du Centre Cinématographique Marocain",
  },
  {
    name: "FM6 Education",
    logo: "/partners/transparent/fm6-education.webp",
    alt: "Logo de la Fondation Mohammed VI de promotion des œuvres sociales de l'education-formation",
  },
  {
    name: "Al Masaood",
    logo: "/partners/transparent/al-masaood.webp",
    alt: "Logo de Al Masaood",
  },
  {
    name: "Fondation Mohammed V",
    logo: "/partners/transparent/fondation-mohammed-v.webp",
    alt: "Logo de la Fondation Mohammed V pour la solidarité",
  },
  {
    name: "Arrondissement Bettana",
    logo: "/partners/transparent/bettana.webp",
    alt: "Logo de l'Arrondissement Bettana",
  },
  {
    name: "Protection Civile",
    logo: "/partners/transparent/protection-civile.webp",
    alt: "Logo de la Protection Civile Marocaine",
  },
  {
    name: "ENS Martil",
    logo: "/partners/transparent/ens-martil.webp",
    alt: "Logo de l'École Normale Supérieure Martil",
  },
  {
    name: "Ville d'Agadir",
    logo: "/partners/transparent/agadir.webp",
    alt: "Logo de la Ville d'Agadir",
  },
  {
    name: "ONDA",
    logo: "/partners/transparent/onda.webp",
    alt: "Logo de l'Office National des Aéroports",
  },
  {
    name: "SABIC",
    logo: "/partners/transparent/sabic.webp",
    alt: "Logo de Saudi Basic Industries (SABIC)",
  },
  {
    name: "HCP",
    logo: "/partners/transparent/hcp.webp",
    alt: "Logo du Haut Commissariat au Plan",
  },
  {
    name: "Ministère de l'Education",
    logo: "/partners/transparent/ministere-education.webp",
    alt: "Logo du Ministère de l'Education Nationale du Préscolaire et du Sport",
  },
  {
    name: "Chef du Gouvernement",
    logo: "/partners/transparent/chef-gouvernement.webp",
    alt: "Logo du Chef du Gouvernement du Royaume du Maroc",
  },
  {
    name: "ANEP",
    logo: "/partners/transparent/anep.webp",
    alt: "Logo de l'Agence Nationale des Equipements Publics",
  },
  {
    name: "GIZ",
    logo: "/partners/transparent/giz.webp",
    alt: "Logo de la Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
  },
  {
    name: "FNM",
    logo: "/partners/transparent/fnm.webp",
    alt: "Logo de La Fondation Nationale des Musées",
  },
];

const row1 = partners.slice(0, 10);
const row2 = partners.slice(10);

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof partners;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="hover-pause flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            aria-hidden={i >= items.length ? "true" : undefined}
            className="flex h-28 w-40 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 md:w-[180px]"
          >
            <Image
              src={partner.logo}
              alt={i >= items.length ? "" : partner.alt}
              width={720}
              height={448}
              quality={90}
              sizes="(min-width: 768px) 180px, 160px"
              className="h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="bg-[#fafaf5] py-16 md:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#62791b]">
            Références
          </p>
          <h2
            id="partners-heading"
            className="mt-5 font-serif text-4xl font-light text-[#17251e] md:text-5xl"
          >
            Des organisations qui nous font confiance.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#17251e]/65">
            Entreprises, établissements publics et institutions nous confient
            la création et l’entretien de leurs espaces extérieurs.
          </p>
        </div>

        <div className="mt-12 space-y-8 overflow-hidden">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
