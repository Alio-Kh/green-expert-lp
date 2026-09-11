import type { Metadata } from "next";

export const SITE_URL = "https://www.greenexpert.ma";
export const SITE_NAME = "Green Expert";
export const BUSINESS_ID = `${SITE_URL}/#business`;

export function siteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).href;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | ${SITE_NAME}` },
    description,
    alternates: { canonical: siteUrl(path) },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: siteUrl(path),
      siteName: SITE_NAME,
      locale: "fr_MA",
      type: "website",
      images: [{ url: siteUrl("/cover.png"), width: 1200, height: 630, alt: "Green Expert — jardins et espaces verts au Maroc" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [siteUrl("/cover.png")],
    },
  };
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const business = {
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  url: siteUrl(),
  logo: siteUrl("/logo-wide.png"),
  image: siteUrl("/cover.png"),
  description: "Conception, réalisation et entretien de jardins et d’espaces verts au Maroc, depuis Salé.",
  telephone: "+212661967903",
  email: "contact@greenexpert.ma",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Résidence Assafae 05, Imm 41, Appt 12, Al Quods, Laayayda",
    addressLocality: "Salé",
    addressRegion: "Rabat-Salé-Kénitra",
    addressCountry: "MA",
  },
  areaServed: { "@type": "Country", name: "Maroc" },
  sameAs: ["https://www.instagram.com/greenexpertmaroc", "https://www.linkedin.com/company/greenexpert"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212661967903",
    contactType: "customer service",
    areaServed: "MA",
    availableLanguage: ["French", "Arabic"],
  },
};
