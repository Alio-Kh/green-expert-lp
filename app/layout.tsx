import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenexpert.ma"),
  title: {
    default:
      "Green Expert — Paysagiste au Maroc | Création, Aménagement & Entretien de Jardins",
    template: "%s | Green Expert — Paysagiste au Maroc",
  },
  applicationName: "Green Expert",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  description:
    "Paysagiste professionnel au Maroc (Casablanca, Rabat, Marrakech) : conception de jardins sur-mesure, irrigation intelligente, plantation et entretien d'espaces verts. Devis gratuit sous 24h.",
  keywords: [
    // Brand
    "Green Expert",
    "Green Expert Maroc",
    "greenexpert.ma",
    "paysagiste Green Expert",
    // Core service × country
    "paysagiste Maroc",
    "paysagiste professionnel Maroc",
    "entreprise paysagiste Maroc",
    "société de paysagisme Maroc",
    "architecte paysagiste Maroc",
    "jardinier professionnel Maroc",
    // Geo — primary metros
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
    "paysagiste Bouskoura",
    "paysagiste Souissi",
    // Intent — buy / hire
    "devis paysagiste Maroc",
    "prix aménagement jardin Maroc",
    "tarif création jardin Maroc",
    "meilleur paysagiste Maroc",
    // Design & creation
    "création jardin Maroc",
    "conception de jardin Maroc",
    "design paysager Maroc",
    "aménagement paysager Maroc",
    "aménagement extérieur villa",
    "aménagement jardin villa Maroc",
    "plan 3D jardin",
    "jardin sur mesure Maroc",
    "jardin moderne Maroc",
    "jardin méditerranéen Maroc",
    "jardin zen Maroc",
    "jardin contemporain",
    // Irrigation
    "système d'irrigation Maroc",
    "installation irrigation automatique",
    "arrosage automatique jardin Maroc",
    "goutte à goutte Maroc",
    "irrigation connectée",
    // Lighting
    "éclairage jardin Maroc",
    "éclairage paysager LED",
    "éclairage extérieur villa",
    // Plantation & végétaux
    "plantation arbres Maroc",
    "plantation palmier Maroc",
    "entretien palmier Maroc",
    "gazon naturel Maroc",
    "pelouse Maroc",
    "pose gazon Maroc",
    "plantes méditerranéennes Maroc",
    // Terrassement
    "terrassement jardin Maroc",
    "nivellement terrain",
    "drainage jardin",
    // Maintenance / upkeep
    "entretien jardin Maroc",
    "entretien espaces verts Maroc",
    "contrat entretien jardin",
    "maintenance espaces verts",
    "taille arbres et arbustes",
    "élagage Maroc",
    // B2B
    "aménagement espaces verts entreprise",
    "entretien jardins entreprise",
    "paysagiste hôtel Maroc",
    "paysagiste résidence Maroc",
    "paysagiste copropriété Maroc",
    // Outdoor features
    "terrasse jardin Maroc",
    "toit terrasse végétalisé",
    "pergola végétalisée",
    "aménagement piscine jardin",
  ],
  authors: [{ name: "Green Expert", url: "https://greenexpert.ma" }],
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Green Expert — Paysagiste au Maroc | Création, Aménagement & Entretien de Jardins",
    description:
      "Conception, réalisation et entretien de jardins et espaces verts au Maroc. Plus de 20 ans d'expertise à Casablanca, Rabat et Marrakech. Devis gratuit sous 24h.",
    url: "https://greenexpert.ma",
    siteName: "Green Expert",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://greenexpert.ma/cover.png",
        width: 1200,
        height: 630,
        alt: "Green Expert — Paysagiste professionnel au Maroc",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Expert — Paysagiste au Maroc",
    description:
      "Création, aménagement et entretien de jardins au Maroc. Design paysager sur-mesure, irrigation intelligente et maintenance durable. Devis gratuit sous 24h.",
    images: ["https://greenexpert.ma/cover.png"],
  },
  alternates: {
    canonical: "https://greenexpert.ma",
  },
  category: "Paysagisme",
  classification: "Paysagisme, Aménagement paysager, Entretien d'espaces verts",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Green Expert",
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "MA",
    "geo.placename": "Salé, Maroc",
    "geo.position": "34.0479;-6.7937",
    ICBM: "34.0479, -6.7937",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a2821" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1713" },
  ],
};

const jsonLd = {
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
