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
  category: "Paysagisme",
  manifest: "/site.webmanifest",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://greenexpert.ma",
              "name": "Green Expert",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://greenexpert.ma/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
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
