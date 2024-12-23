import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://green-expert.vercel.app/"),
  title: {
    default: "Expert Paysagiste au Maroc - Green Expert",
    template: "%s | Green Expert Maroc",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  description:
    "Green Expert : Votre paysagiste au Maroc, spécialisé dans la création, la réalisation et l'entretien de jardins et d'espaces verts. Offrez-vous un coin de paradis en toute sérénité.",
  keywords: [
    "paysagiste Maroc",
    "entretien jardin Maroc",
    "aménagement paysager Maroc",
    "Green Expert",
    "conception jardins Maroc",
    "espaces verts Maroc",
    "jardinier professionnel",
    "création jardin Maroc",
    "paysagiste Casablanca",
    "paysagiste Rabat",
    "entretien espaces verts",
    "aménagement extérieur",
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
    title: "Expert Paysagiste au Maroc - Green Expert",
    description:
      "Votre expert en aménagement paysager au Maroc. Création, réalisation et entretien de jardins et d'espaces verts professionnels.",
    url: "https://green-expert.vercel.app",
    siteName: "Green Expert",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Green Expert - Paysagiste au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Paysagiste au Maroc - Green Expert",
    description:
      "Votre expert en aménagement paysager au Maroc. Services professionnels de création et entretien de jardins.",
    images: ["https://green-expert.vercel.app/cover.png"],
  },
  alternates: {
    canonical: "https://green-expert.vercel.app/",
    languages: {
      "fr-MA": "https://green-expert.vercel.app//fr",
      "ar-MA": "https://green-expert.vercel.app//ar",
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
  category: "Paysagisme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
