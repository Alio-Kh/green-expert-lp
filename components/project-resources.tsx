import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectResources() {
  const resources = [
    { href: "/paysagiste-rabat", title: "Paysagiste à Rabat et Salé", description: "Notre équipe est basée à Salé. Découvrez notre accompagnement pour votre jardin à Rabat et dans la région." },
    { href: "/amenagement-espaces-verts", title: "Aménagement des espaces verts", description: "Conception, terrain, plantations et équipements : les étapes à coordonner pour un projet d’ensemble." },
    { href: "/conseils/amenagement-espaces-verts", title: "Préparer votre projet de jardin", description: "Les questions utiles sur le sol, l’eau, le budget et l’entretien avant de commencer les travaux." },
  ];
  return <section aria-labelledby="resources-heading" className="bg-[#f6f5ec] py-20 text-[#17251e]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f6413]">Votre projet, étape par étape</p>
      <h2 id="resources-heading" className="mt-5 max-w-3xl font-serif text-4xl font-light md:text-5xl">Des repères pour aménager votre jardin.</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {resources.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-[#17251e]/15 bg-white p-7 transition hover:border-[#4f6413] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f6413]">
          <ArrowUpRight className="mb-6 h-5 w-5 text-[#4f6413]" aria-hidden="true" />
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="mt-4 leading-7 text-[#17251e]/80">{item.description}</p>
        </Link>)}
      </div>
    </div>
  </section>;
}
