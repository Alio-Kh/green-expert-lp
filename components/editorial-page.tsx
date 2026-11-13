import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { jsonLd, siteUrl } from "@/lib/site";

export type EditorialSection = { id: string; title: string; paragraphs: string[]; link?: { href: string; label: string } };

type EditorialPageProps = {
  title: string;
  eyebrow: string;
  intro: string;
  path: string;
  sections: EditorialSection[];
  image: string;
  imageAlt: string;
  related: { href: string; label: string; description: string }[];
};

export function EditorialPage({ title, eyebrow, intro, path, sections, image, imageAlt, related }: EditorialPageProps) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl() },
      { "@type": "ListItem", position: 2, name: title, item: siteUrl(path) },
    ],
  };
  return (
    <div className="min-h-screen bg-[#17251e] text-white">
      <NavigationMenu />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }} />
      <main id="main-content">
        <header className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-28 sm:px-6 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <nav aria-label="Fil d’Ariane" className="mb-8 text-sm text-white/75">
              <Link href="/" className="underline underline-offset-4">Accueil</Link>
              <span aria-hidden="true" className="mx-3">/</span>
              <span aria-current="page">{eyebrow}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c6df6b]">{eyebrow}</p>
            <h1 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{intro}</p>
            <Link href="/#contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#a8c83f] px-7 py-4 font-semibold text-[#17251e] transition hover:bg-[#c6df6b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Parlons de votre projet <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </div>
        </header>
        <div className="bg-[#fafaf5] text-[#17251e]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <nav aria-label="Sur cette page" className="self-start rounded-2xl border border-[#17251e]/15 p-6 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4f6413]">Sur cette page</p>
              <ul className="mt-5 space-y-4">
                {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-sm leading-6 underline decoration-[#17251e]/25 underline-offset-4 hover:text-[#4f6413]">{section.title}</a></li>)}
              </ul>
            </nav>
            <div className="min-w-0">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28 border-b border-[#17251e]/15 pb-10 pt-3 first:pt-0 [&+section]:mt-10">
                  <p className="font-serif text-lg italic text-[#4f6413]">0{index + 1}</p>
                  <h2 id={`${section.id}-heading`} className="mt-3 font-serif text-3xl md:text-4xl">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 max-w-3xl leading-8 text-[#17251e]/80">{paragraph}</p>)}
                  {section.link && <Link href={section.link.href} className="mt-5 inline-block font-semibold text-[#4f6413] underline underline-offset-4">{section.link.label}</Link>}
                </section>
              ))}
            </div>
          </div>
        </div>
        <section aria-labelledby="related-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 id="related-heading" className="font-serif text-3xl">Pour avancer dans votre projet</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl border border-white/20 p-6 transition hover:border-[#c6df6b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6df6b]"><h3 className="text-lg font-semibold text-[#c6df6b]">{item.label}</h3><p className="mt-3 text-sm leading-7 text-white/80">{item.description}</p></Link>)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
