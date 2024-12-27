import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenexpert.ma"),
  title: {
    default:
      "Expert Paysagiste Maroc | Création & Entretien Jardins - Green Expert",
    template: "%s | Green Expert Maroc",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  description:
    "Expert paysagiste au Maroc spécialisé en création et aménagement de jardins. Design paysager, système d'irrigation et entretien d'espaces verts par des professionnels.",
  keywords: [
    "paysagiste Maroc",
    "paysagiste Casablanca",
    "paysagiste Rabat",
    "paysagiste Marrakech",
    "paysagiste Tanger",
    "paysagiste Agadir",
    "paysagiste Fès",
    "paysagiste Meknès",
    "paysagiste Oujda",
    "paysagiste Salé",
    "paysagiste Tétouan",
    "aménagement paysager Maroc",
    "entretien jardin Maroc",
    "création jardin Maroc",
    "conception jardins Maroc",
    "entretien espaces verts",
    "installation système irrigation",
    "éclairage jardin Maroc",
    "jardinier professionnel",
    "entretien palmier Maroc",
    "gazon naturel Maroc",
    "plantation arbres Maroc",
    "terrasse jardin Maroc",
    "jardin moderne Maroc",
    "aménagement espaces verts entreprise",
    "paysagiste professionnel",
    "entretien jardins entreprise",
    "aménagement extérieur villa",
    "Green Expert",
    "Green Expert Maroc",
    "paysagiste Green Expert",
  ],
  authors: [{ name: "Green Expert" }],
  creator: "Green Expert",
  publisher: "Green Expert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Expert Paysagiste Maroc | Création & Entretien Jardins - Green Expert",
    description:
      "Votre expert en aménagement paysager au Maroc. Création, réalisation et entretien de jardins et d'espaces verts professionnels.",
    url: "https://greenexpert.ma",
    siteName: "Green Expert",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://greenexpert.ma/cover.png",
        width: 1200,
        height: 630,
        alt: "Green Expert - Paysagiste au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Expert Paysagiste Maroc | Création & Entretien Jardins - Green Expert",
    description:
      "Green Expert : Premier paysagiste au Maroc spécialisé en création, aménagement et entretien de jardins. Solutions professionnelles d'espaces verts.",
    images: ["https://greenexpert.ma/cover.png"],
  },
  alternates: {
    canonical: "https://greenexpert.ma",
    languages: {
      "fr-MA": "https://greenexpert.ma/fr",
      "ar-MA": "https://greenexpert.ma/ar",
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
  category: "Paysagisme",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Green Expert",
  image: "https://greenexpert.ma/cover.png",
  "@id": "https://greenexpert.ma",
  url: "https://greenexpert.ma",
  telephone: "06 61 96 79 03",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Résidence Assafae 05 Imm 41 Appt 12, Al Quods, Laayayda",
    addressLocality: "Salé",
    addressRegion: "Rabat-Salé-Kénitra",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0479,
    longitude: -6.7937,
  },
  sameAs: [
    "https://www.facebook.com/greenexpertmaroc",
    "https://www.instagram.com/greenexpertmaroc",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Paysagisme",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Design Paysager",
          description:
            "Création de plans personnalisés qui allient esthétique et fonctionnalité",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Systèmes d'Irrigation",
          description: "Solutions d'arrosage intelligentes et économes en eau",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entretien d'Espaces Verts",
          description:
            "Maintenance régulière pour maintenir la beauté et la santé des espaces verts",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Installation de Systèmes d'Irrigation",
          description:
            "Installation de systèmes d'irrigation intelligents pour optimiser l'utilisation de l'eau",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conseils en Paysagisme",
          description:
            "Aide à la création de jardins et à l'aménagement paysager",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
